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

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.scrollTo(0, 0);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // --- KALIBRASI POSISI AGAR PAS DI BORDER HERO ---

  // X Position: 
  // Mobile: Tetap 50% (Center)
  // Desktop: Start 75% (Kanan), Bergerak ke 25% (Kiri)
  const xRaw = useTransform(
    scrollYProgress,
    [0, 0.2],
    isMobile ? [50, 50] : [75, 25]
  );

  // Y Position (KUNCINYA DI SINI):
  // Mobile: Kita gunakan nilai 320px agar pas dengan 'top-[320px]' di Hero
  // Desktop: Kita gunakan 50vh agar pas di tengah section Hero Desktop
  const yRaw = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.2, 0.4] : [0, 0.25, 0.45],
    isMobile ? [320, 320, -150] : [50, 50, -50] 
  );

  // Opacity & Scale
  const opacity = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.28, 0.38] : [0, 0.3, 0.45],
    [1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2],
    isMobile ? [0.65, 0.45] : [1, 0.75]
  );

  // Gunakan Spring yang lebih ketat (stiffness tinggi) agar tidak ada delay saat scroll
  const smoothXRaw = useSpring(xRaw, { stiffness: 120, damping: 25 });
  const smoothYRaw = useSpring(yRaw, { stiffness: 120, damping: 25 });

  const finalX = useTransform(smoothXRaw, (val) => `${val}vw`);
  const finalY = useTransform(smoothYRaw, (val) => {
    if (isMobile) return `${val}px`;
    return `${val}vh`;
  });

  if (!isMounted) return <div className="bg-[#050505] min-h-screen" />;

  return (
    <main ref={containerRef} className="relative bg-[#050505] min-h-screen overflow-x-hidden">
      <Navbar />
      <Scene />

      {/* --- PROFIL LAYER (FIXED) --- */}
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
          
          {/* Avatar Container */}
          <div className="relative w-40 h-40 md:w-72 md:h-72 rounded-full border-[3px] md:border-4 border-[#bcff00] p-1.5 md:p-2 bg-[#050505] overflow-hidden shadow-[0_0_50px_rgba(188,255,0,0.3)]">
            <img
              src="/foto-profil.jpg" 
              alt="Avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </motion.div>

      {/* --- PAGE SECTIONS --- */}
      <div className="relative z-10 flex flex-col">
        <Hero />

        {/* Jarak negatif ditarik lebih kuat agar section About langsung menempel */}
        <div className="relative z-20 bg-[#050505] -mt-20 md:-mt-32">
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