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

  // Memperbaiki Error "Calling setState synchronously within an effect" (Screenshot Ln 16)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  /**
   * 1. POSISI X (HORIZONTAL)
   */
  const xPos = useTransform(
    scrollYProgress,
    [0, 0.12, 1],
    ["75vw", "25vw", "25vw"] 
  );

  /**
   * 2. POSISI Y (VERTICAL)
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

  // Menggunakan konfigurasi spring yang lebih stabil untuk Framer Motion 11
  const smoothX = useSpring(xPos, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const smoothY = useSpring(yPos, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Mencegah Hydration Error
  if (!isMounted) {
    return <div className="bg-[#050505] min-h-screen" />;
  }

  return (
    <main className="relative bg-[#050505] min-h-screen">
      <Navbar />
      <Scene />
      
      {/* FOTO PROFIL LAYER - FIXED FOR DEPLOYMENT */}
      <motion.div
        style={{ 
          left: smoothX, 
          top: smoothY, 
          opacity,
          x: "-50%", 
          y: "-50%",
          position: "fixed",
          pointerEvents: "none" 
        }}
        className="z-[40] hidden md:block"
      >
        <div className="relative flex items-center justify-center">
          
          {/* GLOW BACKGROUND */}
          <div className="absolute w-[280px] h-[280px] bg-[#bcff00] rounded-full blur-[70px] opacity-20" />
          
          {/* FRAME FOTO PROFIL */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-[#bcff00] p-2 bg-[#050505] overflow-hidden shadow-[0_0_50px_rgba(188,255,0,0.3)] z-20">
            <img 
              src={fotoProfile}
              alt="Avatar Profile"
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