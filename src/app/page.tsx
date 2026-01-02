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

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Memastikan posisi scroll kembali ke atas saat refresh untuk akurasi kalkulasi
    window.scrollTo(0, 0);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // --- LOGIKA POSISI (SINKRONISASI HERO & ABOUT) ---

  // Horizontal Position (X): 
  // Mobile: Tetap di tengah (50vw)
  // Desktop: Start di kanan (75vw), bergerak ke kiri (25vw) untuk section About
  const xRaw = useTransform(
    scrollYProgress,
    [0, 0.2],
    isMobile ? [50, 50] : [75, 25]
  );

  // Vertical Position (Y):
  // Mobile: Tetap di 340px (Hero) lalu naik ke atas saat scroll
  // Desktop: Start di 45vh (Hero) lalu bergerak naik
  const yRaw = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.2, 0.4] : [0, 0.25, 0.45],
    isMobile ? [340, 340, -150] : [45, 45, -20]
  );

  // Opacity: Profil menghilang perlahan saat masuk ke konten dalam About
  const opacity = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.25, 0.35] : [0, 0.3, 0.45],
    [1, 1, 0]
  );

  // Scale: Mengecil halus agar transisi elegan
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2],
    isMobile ? [0.65, 0.45] : [1, 0.8]
  );

  // Spring untuk gerakan yang organic dan tidak kaku
  const smoothXRaw = useSpring(xRaw, { stiffness: 80, damping: 25 });
  const smoothYRaw = useSpring(yRaw, { stiffness: 80, damping: 25 });

  // Konversi nilai ke unit CSS yang sesuai
  const finalX = useTransform(smoothXRaw, (val) => `${val}vw`);
  const finalY = useTransform(smoothYRaw, (val) => {
    if (isMobile) return `${val}px`;
    return `${val}vh`;
  });

  if (!isMounted) {
    return <div className="bg-[#050505] min-h-screen" />;
  }

  return (
    <main ref={containerRef} className="relative bg-[#050505] min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Background 3D Scene */}
      <Scene />

      {/* --- LAYER PROFIL FIXED --- */}
      <motion.div
        style={{
          position: "fixed",
          left: finalX,
          top: finalY,
          opacity,
          scale,
          x: "-50%",
          y: "-50%",
          pointerEvents: "none",
          zIndex: 99,
          willChange: "transform, opacity"
        }}
      >
        <div className="relative flex items-center justify-center">
          {/* Efek Cahaya di belakang foto */}
          <div className="absolute w-[180px] h-[180px] md:w-[320px] md:h-[320px] bg-[#bcff00] rounded-full blur-[40px] md:blur-[80px] opacity-20" />
          
          {/* Frame Foto Profil */}
          <div className="relative w-44 h-44 md:w-72 md:h-72 rounded-full border-[3px] md:border-4 border-[#bcff00] p-1.5 md:p-2 bg-[#050505] overflow-hidden shadow-[0_0_50px_rgba(188,255,0,0.25)]">
            <img
              src="/foto-profil.jpg" // Pastikan file ini ada di folder public
              alt="Muhammad Fajar Sidik"
              className="w-full h-full object-cover rounded-full transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>
      </motion.div>

      {/* --- KONTEN HALAMAN --- */}
      <div className="relative z-10 flex flex-col">
        {/* Section Hero - Tempat awal profil berada */}
        <Hero />

        {/* Wrapper Section Lainnya: 
          -mt-10 (Mobile) dan -mt-24 (Desktop) untuk merapatkan gap antar section 
          agar tidak terlihat renggang hitam kosong.
        */}
        <div className="relative z-20 bg-[#050505] -mt-10 md:-mt-24">
          <About />
          <Projects />
          <Pricing />
          <Contact />
        </div>
      </div>

      {/* Footer / Copyright Sederhana (Opsional) */}
      <footer className="relative z-30 bg-[#050505] py-10 border-t border-white/5 text-center">
        <p className="text-white/20 text-[10px] uppercase tracking-[0.5em]">
          &copy; 2024 Muhammad Fajar Sidik. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}