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

    // Memastikan posisi scroll kembali ke atas saat refresh
    window.scrollTo(0, 0);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // --- LOGIKA POSISI SINKRON DENGAN HERO ---

  // Horizontal Position (X)
  const xRaw = useTransform(
    scrollYProgress,
    [0, 0.2],
    isMobile ? [50, 50] : [75, 25]
  );

  /**
   * Vertical Position (Y)
   * Menggunakan VH (Viewport Height) agar konsisten di berbagai ukuran layar.
   * Dipercepat gerakannya ke atas saat mulai scroll agar tidak menempel di section About.
   */
  const yRaw = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.2, 0.3] : [0, 0.2, 0.35],
    isMobile ? [55, 50, 20] : [50, 45, 10] 
  );

  /**
   * Opacity (KUNCI PERBAIKAN):
   * Profil dibuat menghilang total (0) pada progress 0.15 - 0.2.
   * Ini memastikan sebelum section About muncul, profil sudah tidak terlihat.
   */
  const opacity = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.12, 0.2] : [0, 0.15, 0.22],
    [1, 1, 0]
  );

  /**
   * Scale:
   * Profil mengecil saat menjauh untuk memberikan efek kedalaman (depth).
   */
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2],
    isMobile ? [0.65, 0.3] : [1, 0.5]
  );

  // Spring yang lebih kencang (stiffness tinggi) agar profil menghilang tepat waktu
  const smoothXRaw = useSpring(xRaw, { stiffness: 150, damping: 30 });
  const smoothYRaw = useSpring(yRaw, { stiffness: 150, damping: 30 });

  const finalX = useTransform(smoothXRaw, (val) => `${val}vw`);
  const finalY = useTransform(smoothYRaw, (val) => `${val}vh`);

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
          pointerEvents: "none", // Agar tidak menghalangi klik pada menu/tombol
          zIndex: 40, // Di atas Hero tapi di bawah konten section About yang z-index-nya lebih tinggi
          willChange: "transform, opacity"
        }}
      >
        <div className="relative flex items-center justify-center">
          {/* Efek Cahaya Glow */}
          <div className="absolute w-[180px] h-[180px] md:w-[320px] md:h-[320px] bg-[#bcff00] rounded-full blur-[40px] md:blur-[80px] opacity-20" />
          
          {/* Frame Foto Profil */}
          <div className="relative w-40 h-40 md:w-72 md:h-72 rounded-full border-[3px] md:border-4 border-[#bcff00] p-1.5 md:p-2 bg-[#050505] overflow-hidden shadow-[0_0_50px_rgba(188,255,0,0.25)]">
            <img
              src="/foto-profil.jpg" 
              alt="Muhammad Fajar Sidik"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </motion.div>

      {/* --- KONTEN HALAMAN --- */}
      <div className="relative z-10 flex flex-col">
        {/* Section Hero - z-index rendah agar profil terlihat di atasnya */}
        <div className="relative z-10">
          <Hero />
        </div>

        {/* Wrapper Section Lainnya - z-index lebih tinggi (z-50) agar menutupi profil saat scroll */}
        <div className="relative z-50 bg-[#050505] -mt-[1px]">
          <About />
          <Projects />
          <Pricing />
          <Contact />
        </div>
      </div>

      <footer className="relative z-[60] bg-[#050505] py-10 border-t border-white/5 text-center">
        <p className="text-white/20 text-[10px] uppercase tracking-[0.5em]">
          &copy; 2026 Muhammad Fajar Sidik. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}