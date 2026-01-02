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

    // Fix untuk memaksa browser refresh kalkulasi scroll
    window.scrollTo(window.scrollX, window.scrollY + 1);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // --- LOGIKA POSISI ---

  // Horizontal Position (X)
  // DISESUAIKAN: 72vw agar lebih pas di kanan teks "New Tech Solution" pada mode desktop mobile
  const xRaw = useTransform(
    scrollYProgress,
    [0, 0.15, 1],
    isMobile ? [50, 50, 50] : [72, 25, 25]
  );

  // Vertical Position (Y)
  // DISESUAIKAN: Start di 45vh (sebelumnya 50) agar profil naik ke area Hero dan tidak menabrak About
  const yRaw = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.2, 0.35] : [0, 0.25, 0.4],
    isMobile ? [340, 340, -100] : [45, 45, -80]
  );

  // Opacity: PERBAIKAN UTAMA agar menghilang total sebelum masuk section About
  const opacity = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.15, 0.22] : [0, 0.12, 0.2],
    [1, 1, 0]
  );

  // Scale: Mengecil halus saat menghilang
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2],
    isMobile ? [0.6, 0.4] : [1, 0.7]
  );

  // Spring untuk kelembutan gerakan
  const smoothXRaw = useSpring(xRaw, { stiffness: 100, damping: 30 });
  const smoothYRaw = useSpring(yRaw, { stiffness: 100, damping: 30 });

  // Konversi ke unit CSS
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
      <Scene />

      {/* FOTO PROFIL LAYER - Tetap Fixed dengan Z-Index yang dikontrol */}
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
          zIndex: 40, // Diturunkan agar tertutup oleh wrapper section About (z-50)
          willChange: "transform, opacity"
        }}
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute w-[180px] h-[180px] md:w-[300px] md:h-[300px] bg-[#bcff00] rounded-full blur-[50px] md:blur-[80px] opacity-20" />
          <div className="relative w-40 h-40 md:w-72 md:h-72 rounded-full border-4 border-[#bcff00] p-1.5 md:p-2 bg-[#050505] overflow-hidden shadow-[0_0_40px_rgba(188,255,0,0.2)]">
            <img
              src="/foto-profil.jpg"
              alt="Avatar"
              className="w-full h-full object-cover rounded-full shadow-inner"
            />
          </div>
        </div>
      </motion.div>

      {/* Konten Utama */}
      <div className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* Wrapper Section Lainnya - Z-Index 50 untuk menutupi profil saat scroll */}
        <div className="relative z-50 bg-[#050505]">
          <About />
          <Projects />
          <Pricing />
          <Contact />
        </div>
      </div>

      <footer className="relative z-50 bg-[#050505] py-10 border-t border-white/5 text-center">
        <p className="text-white/20 text-[10px] uppercase tracking-[0.5em]">
          &copy; 2026 Muhammad Fajar Sidik. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}