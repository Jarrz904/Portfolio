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

  // --- LOGIKA POSISI ---

  // Horizontal Position (X): Tetap di tengah (50) untuk mobile, kanan ke kiri untuk desktop
  const xRaw = useTransform(
    scrollYProgress,
    [0, 0.15],
    isMobile ? [50, 50] : [75, 25]
  );

  // Vertical Position (Y)
  // DISESUAIKAN: Start di 340px (Mobile) agar sinkron dengan dekorasi Hero
  const yRaw = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.2, 0.35] : [0, 0.3, 0.45],
    isMobile ? [340, 340, -100] : [50, 50, -60]
  );

  // Opacity: Menghilang total sebelum masuk ke section About
  const opacity = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.15, 0.22] : [0, 0.18, 0.25],
    [1, 1, 0]
  );

  // Scale: Mengecil halus agar transisi elegan
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2],
    isMobile ? [0.6, 0.4] : [1, 0.8]
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

      {/* --- SATU-SATUNYA LAYER PROFIL (Fixed) --- */}
      {/* Komponen ini akan terlihat seolah berada di dalam Hero karena posisinya kita samakan */}
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
          <div className="absolute w-[180px] h-[180px] md:w-[300px] md:h-[300px] bg-[#bcff00] rounded-full blur-[50px] md:blur-[80px] opacity-20" />
          
          {/* Foto Profil Frame */}
          <div className="relative w-40 h-40 md:w-72 md:h-72 rounded-full border-4 border-[#bcff00] p-1.5 md:p-2 bg-[#050505] overflow-hidden shadow-[0_0_40px_rgba(188,255,0,0.3)]">
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
        {/* Pastikan di dalam komponen Hero, tag <img> profil SUDAH DIHAPUS */}
        <Hero />

        {/* Wrapper Section Lainnya */}
        <div className="relative z-20 bg-[#050505]">
          <About />
          <Projects />
          <Pricing />
          <Contact />
        </div>
      </div>
    </main>
  );
}