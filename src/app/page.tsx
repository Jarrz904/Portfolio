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
    
    // Fix untuk memaksa browser refresh kalkulasi scroll
    window.scrollTo(window.scrollX, window.scrollY + 1);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // --- LOGIKA POSISI (DIPERBAIKI) ---
  
  // Horizontal Position (X)
  const xRaw = useTransform(
    scrollYProgress, 
    [0, 0.15, 1], 
    isMobile ? [50, 50, 50] : [75, 25, 25] 
  );
  
  // Vertical Position (Y)
  // Perbaikan Mobile: Profil ditahan di posisi 40vh lebih lama (0 sampai 0.3) 
  // agar tidak langsung naik saat baru scroll sedikit.
  const yRaw = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.45], 
    isMobile ? [40, 40, -60] : [50, 50, -60]
  );
  
  // Opacity
  // Disesuaikan agar menghilang setelah melewati area Hero/Awal About
  const opacity = useTransform(
    scrollYProgress, 
    isMobile ? [0, 0.35, 0.4] : [0, 0.18, 0.21], 
    [1, 1, 0]
  );
  
  // Scale
  const scale = useTransform(
    scrollYProgress, 
    [0, 0.25], 
    isMobile ? [0.65, 0.45] : [1, 0.85]
  );

  // Spring untuk kelembutan gerakan - Ditingkatkan agar lebih stabil di mobile
  const smoothXRaw = useSpring(xRaw, { stiffness: 100, damping: 30 });
  const smoothYRaw = useSpring(yRaw, { stiffness: 100, damping: 30 });

  // Konversi ke unit CSS
  const finalX = useTransform(smoothXRaw, (val) => `${val}vw`);
  const finalY = useTransform(smoothYRaw, (val) => `${val}vh`);

  if (!isMounted) {
    return <div className="bg-[#050505] min-h-screen" />;
  }

  return (
    <main ref={containerRef} className="relative bg-[#050505] min-h-screen overflow-x-hidden">
      <Navbar />
      <Scene />
      
      {/* FOTO PROFIL LAYER */}
      <motion.div
        style={{ 
          position: "fixed", // Tetap fixed agar tidak terdorong scroll
          left: finalX, 
          top: finalY, 
          opacity,
          scale,
          x: "-50%", 
          y: "-50%",
          pointerEvents: "none",
          zIndex: 999,
          willChange: "transform" // Optimasi performa mobile
        }}
      >
        <div className="relative flex items-center justify-center">
          {/* Glow Background */}
          <div className="absolute w-[180px] h-[180px] md:w-[300px] md:h-[300px] bg-[#bcff00] rounded-full blur-[50px] md:blur-[80px] opacity-20" />
          
          {/* Frame Foto Profil */}
          <div className="relative w-40 h-40 md:w-72 md:h-72 rounded-full border-4 border-[#bcff00] p-1.5 md:p-2 bg-[#050505] overflow-hidden shadow-[0_0_40px_rgba(188,255,0,0.2)]">
            <img 
              src="/foto-profil.jpg" 
              alt="Avatar" 
              className="w-full h-full object-cover rounded-full" 
            />
          </div>
        </div>
      </motion.div>

      {/* Konten ditaruh di dalam pembungkus dengan z-index lebih rendah dari profil */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Pricing />
        <Contact />
      </div>
    </main>
  );
}