"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Scene from "@/components/canvas/Scene";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [isMounted, setIsMounted] = useState(false);
  const fotoProfile = "/foto-profil.jpg";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  /**
   * 1. POSISI X (HORIZONTAL)
   * Awal di 75% (Area kanan Hero), pindah ke 25% (Area kiri About)
   * Menggunakan % agar sinkron dengan dekorasi di Hero.tsx
   */
  const xPos = useTransform(
    scrollYProgress,
    [0, 0.12, 1],
    ["75%", "25%", "25%"] 
  );

  /**
   * 2. POSISI Y (VERTICAL)
   * Tetap di tengah layar (50%) lalu terbang ke atas saat scroll jauh.
   */
  const yPos = useTransform(
    scrollYProgress,
    [0, 0.18, 0.23], 
    ["50%", "50%", "-60%"]
  );

  /**
   * 3. OPACITY & SCALE
   */
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.21], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.12], [1, 0.85]);

  const smoothX = useSpring(xPos, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(yPos, { stiffness: 100, damping: 30 });

  if (!isMounted) return <div className="bg-[#050505] min-h-screen" />;

  return (
    <main className="relative bg-[#050505] min-h-screen overflow-x-hidden">
      <Navbar />
      <Scene />
      
      {/* FOTO PROFIL LAYER - FIXED POSITION
          Properti x: "-50%" dan y: "-50%" adalah kunci agar titik pusat foto 
          berada tepat di koordinat 75% (kanan) dan 50% (tengah).
      */}
      <motion.div
        style={{ 
          position: "fixed",
          left: smoothX, 
          top: smoothY, 
          opacity,
          scale,
          x: "-50%", 
          y: "-50%",
          pointerEvents: "none" 
        }}
        className="z-[40] hidden md:block"
      >
        <div className="relative flex items-center justify-center">
          
          {/* Glow Neon Background */}
          <div className="absolute w-[300px] h-[300px] bg-[#bcff00] rounded-full blur-[80px] opacity-20" />
          
          {/* Frame Foto Profile - Ukuran w-72 (288px) */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-[#bcff00] p-2 bg-[#050505] overflow-hidden shadow-[0_0_50px_rgba(188,255,0,0.3)]">
            <img 
              src={fotoProfile}
              alt="Profile Avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

        </div>
      </motion.div>

      {/* RENDER SEMUA SECTIONS */}
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