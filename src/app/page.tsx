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
   * Tetap di 25vw agar pas di tengah kolom kiri About.
   */
  const xPos = useTransform(
    scrollYProgress,
    [0, 0.12, 1],
    ["75vw", "25vw", "25vw"] 
  );

  /**
   * 2. POSISI Y (VERTICAL)
   * Bergerak keluar layar ke atas saat scroll masuk ke Projects.
   */
  const yPos = useTransform(
    scrollYProgress,
    [0, 0.18, 0.23], 
    ["50vh", "50vh", "-60vh"]
  );

  /**
   * 3. OPACITY (TRANSPARANSI)
   */
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.21],
    [1, 1, 0]
  );

  const smoothX = useSpring(xPos, { stiffness: 120, damping: 30 });
  const smoothY = useSpring(yPos, { stiffness: 120, damping: 30 });

  if (!isMounted) return null;

  return (
    <main className="relative bg-[#050505] min-h-screen">
      <Navbar />
      <Scene />
      
      {/* FOTO PROFIL LAYER - BIGGER VERSION */}
      <motion.div
        style={{ 
          left: smoothX, 
          top: smoothY, 
          opacity,
          x: "-50%", 
          y: "-50%",
          pointerEvents: "none" 
        }}
        className="fixed z-[40] hidden md:block"
      >
        <div className="relative flex items-center justify-center">
          
          {/* GLOW BACKGROUND - Ukuran ditambah mengikuti besarnya foto */}
          <div className="absolute w-[280px] h-[280px] bg-[#bcff00] rounded-full blur-[70px] opacity-20" />
          
          {/* FRAME FOTO PROFIL - Ukuran ditingkatkan ke w-72 (288px) */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-[#bcff00] p-2 bg-[#050505] overflow-hidden shadow-[0_0_50px_rgba(188,255,0,0.3)] z-20">
            <img 
              src={fotoProfile}
              alt="Avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

        </div>
      </motion.div>

      {/* SECTIONS CONTENT */}
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