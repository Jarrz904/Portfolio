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

    // Refresh scroll position
    window.scrollTo(0, 0);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // --- LOGIKA POSISI SINKRON DENGAN FLEXBOX HERO ---

  // Horizontal Position (X)
  // Mobile: 50vw (Tengah layar karena flex-col)
  // Desktop: 75vw (Area kolom kanan Hero)
  const xRaw = useTransform(
    scrollYProgress,
    [0, 0.2],
    isMobile ? [50, 50] : [75, 25]
  );

  // Vertical Position (Y)
  // KUNCI: Karena Hero sekarang menggunakan flex-grow/min-h-screen, 
  // posisi profil secara visual di desktop maupun mobile adalah di TENGAH area Hero.
  // Maka kita gunakan unit % atau VH agar dinamis mengikuti tinggi layar.
  const yRaw = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.25, 0.45] : [0, 0.3, 0.5],
    isMobile ? [55, 55, -20] : [50, 50, -10] // Start di 55% height untuk mobile agar pas di bawah teks
  );

  // Opacity: Menghilang halus saat masuk About
  const opacity = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.2, 0.3] : [0, 0.25, 0.4],
    [1, 1, 0]
  );

  // Scale: Menyesuaikan ring dekorasi (220px mobile / 450px desktop)
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2],
    isMobile ? [0.65, 0.4] : [1, 0.8]
  );

  // Spring yang lebih responsif
  const smoothXRaw = useSpring(xRaw, { stiffness: 100, damping: 30 });
  const smoothYRaw = useSpring(yRaw, { stiffness: 100, damping: 30 });

  // Konversi ke unit CSS menggunakan % atau VH untuk fleksibilitas layar
  const finalX = useTransform(smoothXRaw, (val) => `${val}vw`);
  const finalY = useTransform(smoothYRaw, (val) => {
    // Menggunakan % untuk vertical agar selalu presisi di tengah container flex Hero
    return `${val}vh`; 
  });

  if (!isMounted) {
    return <div className="bg-[#050505] min-h-screen" />;
  }

  return (
    <main ref={containerRef} className="relative bg-[#050505] min-h-screen overflow-x-hidden">
      <Navbar />
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
          {/* Glow Effect */}
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
        <Hero />

        {/* Wrapper Section Lainnya */}
        <div className="relative z-20 bg-[#050505] -mt-1">
          <About />
          <Projects />
          <Pricing />
          <Contact />
        </div>
      </div>

      <footer className="relative z-30 bg-[#050505] py-10 border-t border-white/5 text-center">
        <p className="text-white/20 text-[10px] uppercase tracking-[0.5em]">
          &copy; 2026 Muhammad Fajar Sidik. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}