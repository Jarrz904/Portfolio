"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";

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
  const xRaw = useTransform(scrollYProgress, [0, 0.15], isMobile ? [50, 50] : [75, 25]);
  
  // Posisi Y: Disesuaikan agar sejajar dengan teks di Hero (50vh = Tengah)
  const yRaw = useTransform(
    scrollYProgress, 
    isMobile ? [0, 0.2, 0.35] : [0, 0.3, 0.45], 
    isMobile ? [300, 300, -100] : [50, 50, -60] 
  );

  const opacity = useTransform(scrollYProgress, isMobile ? [0, 0.25, 0.35] : [0, 0.2, 0.3], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], isMobile ? [0.7, 0.5] : [1, 0.8]);

  const smoothX = useSpring(xRaw, { stiffness: 80, damping: 25 });
  const smoothY = useSpring(yRaw, { stiffness: 80, damping: 25 });

  if (!isMounted) return <div className="bg-[#050505] min-h-screen" />;

  return (
    <main ref={containerRef} className="relative bg-[#050505] min-h-screen overflow-x-hidden">
      <Navbar />
      <Scene />

      {/* --- SATU-SATUNYA LAYER PROFIL (Fixed) --- */}
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
          zIndex: 100,
        }}
      >
        <div className="relative flex items-center justify-center">
          {/* Teks Berputar Nama Anda */}
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] md:w-[480px] md:h-[480px] z-10 opacity-60"
            viewBox="0 0 100 100"
          >
            <defs>
              <path id="circlePath" d="M 50, 50 m -41, 0 a 41,41 0 1,1 82,0 a 41,41 0 1,1 -82,0" />
            </defs>
            <text fill="#bcff00" fontSize="4" fontWeight="bold">
              <textPath xlinkHref="#circlePath" letterSpacing="2.5"> MUHAMMAD FAJAR SIDIK • MUHAMMAD FAJAR SIDIK • </textPath>
            </text>
          </motion.svg>

          {/* Frame Foto */}
          <div className="relative w-40 h-40 md:w-72 md:h-72 rounded-full border-[4px] md:border-[6px] border-[#bcff00] p-1.5 md:p-2 bg-[#050505] overflow-hidden shadow-[0_0_50px_rgba(188,255,0,0.4)]">
            <img src="/foto-profil.jpg" alt="Avatar" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 flex flex-col">
        <Hero />
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