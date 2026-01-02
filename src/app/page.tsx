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
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // --- LOGIKA POSISI ---
  
  // Horizontal (X): Tetap di tengah (50) untuk mobile
  const xRaw = useTransform(scrollYProgress, [0, 0.2], isMobile ? [50, 50] : [75, 25]);

  // Vertical (Y): Mobile mulai dari 340px sesuai desain Hero
  const yRaw = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.2, 0.3] : [0, 0.3, 0.4],
    isMobile ? [340, 300, 100] : [50, 50, 20]
  );

  // Opacity: Menghilang total saat masuk section About (0.2 scroll progress)
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);

  // Scale: Mengecil halus agar transisi tidak kasar
  const scale = useTransform(scrollYProgress, [0, 0.2], isMobile ? [0.65, 0.4] : [1, 0.7]);

  const smoothX = useSpring(xRaw, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(yRaw, { stiffness: 100, damping: 30 });

  if (!isMounted) return <div className="bg-[#050505] min-h-screen" />;

  return (
    <main ref={containerRef} className="relative bg-[#050505] min-h-screen overflow-x-hidden">
      <Navbar />
      <Scene />

      {/* SATU-SATUNYA LAYER PROFIL (FIXED) */}
      <motion.div
        style={{
          position: "fixed",
          left: useTransform(smoothX, (v) => `${v}vw`),
          top: useTransform(smoothY, (v) => isMobile ? `${v}px` : `${v}vh`),
          opacity,
          scale,
          x: "-50%",
          y: "-50%",
          pointerEvents: "none",
          zIndex: 40, 
          willChange: "transform, opacity"
        }}
      >
        <div className="relative flex items-center justify-center">
          {/* Efek Cahaya Belakang */}
          <div className="absolute w-[180px] h-[180px] md:w-[300px] md:h-[300px] bg-[#bcff00] rounded-full blur-[50px] md:blur-[80px] opacity-20" />
          
          <div className="relative w-40 h-40 md:w-72 md:h-72 rounded-full border-4 border-[#bcff00] p-1.5 md:p-2 bg-[#050505] overflow-hidden shadow-[0_0_40px_rgba(188,255,0,0.3)]">
            <img
              src="/foto-profil.jpg"
              alt="Avatar"
              className="w-full h-full object-cover rounded-full shadow-inner"
            />
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 flex flex-col">
        <Hero />
        <div className="relative z-50 bg-[#050505]">
          <About />
          <Projects />
          <Pricing />
          <Contact />
        </div>
      </div>
    </main>
  );
}