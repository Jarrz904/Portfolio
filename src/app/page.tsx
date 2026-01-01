"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// IMPORT KOMPONEN
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Scene from "@/components/canvas/Scene";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Ambil progress scroll global
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setIsMounted(true);
    
    // Deteksi apakah user menggunakan Mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Force scroll reset untuk sinkronisasi awal
    window.scrollTo(0, 0);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // --- LOGIKA POSISI (DIPERKUAT) ---
  
  // Horizontal Position (X): Tetap di posisi target (75% desktop, 50% mobile)
  const xRaw = useTransform(
    scrollYProgress, 
    [0, 0.2], 
    isMobile ? [50, 50] : [75, 75] 
  );
  
  // Vertical Position (Y): Menahan profil di tengah Hero lebih lama sebelum naik
  const yRaw = useTransform(
    scrollYProgress, 
    isMobile ? [0, 0.4, 0.6] : [0, 0.25, 0.45], 
    isMobile ? [40, 40, -100] : [50, 50, -60]
  );
  
  // Opacity: Menghilang halus saat masuk ke section About
  const opacity = useTransform(
    scrollYProgress, 
    isMobile ? [0, 0.5, 0.6] : [0, 0.2, 0.3], 
    [1, 1, 0]
  );
  
  // Scale: Sedikit mengecil saat scroll
  const scale = useTransform(
    scrollYProgress, 
    [0, 0.3], 
    isMobile ? [0.65, 0.5] : [1, 0.8]
  );

  // Spring untuk kelembutan gerakan - Stiffness & Damping dioptimalkan
  const smoothX = useSpring(xRaw, { stiffness: 80, damping: 25 });
  const smoothY = useSpring(yRaw, { stiffness: 80, damping: 25 });

  // Konversi ke unit CSS
  const finalX = useTransform(smoothX, (val) => `${val}vw`);
  const finalY = useTransform(smoothY, (val) => `${val}vh`);

  if (!isMounted) {
    return <div className="bg-[#050505] min-h-screen" />;
  }

  return (
    <main ref={containerRef} className="relative bg-[#050505] min-h-screen w-full overflow-x-hidden">
      {/* 1. Navigasi tetap di paling atas */}
      <Navbar />
      
      {/* 2. Background Scene (Fixed agar tidak bergeser) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene />
      </div>
      
      {/* 3. FOTO PROFIL LAYER (FIXED) */}
      <motion.div
        style={{ 
          position: "fixed",
          left: finalX, 
          top: finalY, 
          opacity,
          scale,
          x: "-50%", 
          y: "-50%",
          pointerEvents: "none", // SANGAT PENTING: Agar tombol di bawahnya bisa diklik
          zIndex: 40, // Berada di atas Hero, tapi di bawah elemen interaktif tertentu jika perlu
          willChange: "transform, opacity" 
        }}
      >
        <div className="relative flex items-center justify-center">
          {/* Glow Background */}
          <div className="absolute w-[180px] h-[180px] md:w-[300px] md:h-[300px] bg-[#bcff00] rounded-full blur-[60px] opacity-20" />
          
          {/* Frame Foto Profil */}
          <div className="relative w-40 h-40 md:w-72 md:h-72 rounded-full border-4 border-[#bcff00] p-1.5 md:p-2 bg-[#050505] overflow-hidden shadow-[0_0_50px_rgba(188,255,0,0.15)]">
            <img 
              src="/foto-profil.jpg" 
              alt="Avatar" 
              className="w-full h-full object-cover rounded-full" 
            />
          </div>
        </div>
      </motion.div>

      {/* 4. KONTEN UTAMA (DIWRAP AGAR RAPI) */}
      <div className="relative z-10 flex flex-col w-full">
        <Hero />
        <About />
        <Projects />
        <Pricing />
        <Contact />
      </div>
    </main>
  );
}