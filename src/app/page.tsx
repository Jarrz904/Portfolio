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

  // Horizontal Position (X)
  const xRaw = useTransform(
    scrollYProgress,
    [0, 0.15, 1],
    isMobile ? [50, 50, 50] : [75, 25, 25]
  );

  // Vertical Position (Y)
  const yRaw = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.2, 0.35] : [0, 0.3, 0.45],
    isMobile ? [340, 340, -100] : [50, 50, -60]
  );

  // Opacity: Menghilang saat transisi
  const opacity = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.25, 0.35] : [0, 0.18, 0.25],
    [1, 1, 0]
  );

  // Scale: Mengecil agar proporsional
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

      {/* --- FOTO PROFIL LAYER --- */}
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
          zIndex: 100, // PERBAIKAN: Dinaikkan ke 100 agar di atas wrapper z-20
          willChange: "transform"
        }}
      >
        <div className="relative flex items-center justify-center">
          {/* Glow Background */}
          <div className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-[#bcff00] rounded-full blur-[60px] md:blur-[90px] opacity-20" />
          
          {/* Frame Foto Profil */}
          {/* PERBAIKAN: Menambahkan isolate dan border lebih tebal di desktop agar tetap tajam */}
          <div className="relative w-44 h-44 md:w-80 md:h-80 rounded-full border-[4px] md:border-[6px] border-[#bcff00] p-1.5 md:p-2 bg-[#050505] overflow-hidden shadow-[0_0_50px_rgba(188,255,0,0.3)] isolate">
            <img
              src="/foto-profil.jpg"
              alt="Avatar"
              className="w-full h-full object-cover rounded-full shadow-inner"
            />
          </div>
        </div>
      </motion.div>

      {/* --- KONTEN UTAMA --- */}
      <div className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* Wrapper Section Lainnya */}
        {/* PERBAIKAN: z-20 di sini akan berada di bawah profil z-100 */}
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