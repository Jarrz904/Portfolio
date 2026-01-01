"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// IMPORT KOMPONEN - Pastikan file-file ini ada di folder tersebut
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Scene from "@/components/canvas/Scene";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Ambil progress scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Hydration Shield untuk React 19 & Next.js 16
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Logika Transformasi (Koordinat Center ke Kiri)
  const xPos = useTransform(scrollYProgress, [0, 0.12, 1], ["75%", "25%", "25%"]);
  const yPos = useTransform(scrollYProgress, [0, 0.18, 0.23], ["50%", "50%", "-60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.21], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.12], [1, 0.85]);

  // Spring Smoothing - Fix untuk Motion 11
  const smoothX = useSpring(xPos, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const smoothY = useSpring(yPos, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Cegah Error Build/Hydration
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
          position: "fixed",
          left: smoothX, 
          top: smoothY, 
          opacity,
          scale,
          x: "-50%", 
          y: "-50%",
          pointerEvents: "none",
          zIndex: 999 
        }}
        className="hidden md:block"
      >
        <div className="relative flex items-center justify-center">
          {/* Glow Background */}
          <div className="absolute w-[300px] h-[300px] bg-[#bcff00] rounded-full blur-[80px] opacity-20" />
          
          {/* Frame Foto Profil */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-[#bcff00] p-2 bg-[#050505] overflow-hidden shadow-[0_0_50px_rgba(188,255,0,0.3)]">
            <img 
              src="/foto-profil.jpg" 
              alt="Avatar" 
              className="w-full h-full object-cover rounded-full" 
            />
          </div>
        </div>
      </motion.div>

      {/* Konten Utama */}
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