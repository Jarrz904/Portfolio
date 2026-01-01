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

  // POSISI X: Menggunakan nilai mentah string untuk mencegah glitch Vercel
  const xPos = useTransform(
    scrollYProgress,
    [0, 0.12, 1],
    ["75%", "25%", "25%"] 
  );

  // POSISI Y
  const yPos = useTransform(
    scrollYProgress,
    [0, 0.18, 0.23], 
    ["50%", "50%", "-60%"]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.21], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.12], [1, 0.85]);

  // Spring untuk menghaluskan gerakan
  const smoothX = useSpring(xPos, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(yPos, { stiffness: 100, damping: 30 });

  // Jika belum mounted (SSR Vercel), tampilkan div kosong dengan warna background agar tidak flicker
  if (!isMounted) return <div className="bg-[#050505] min-h-screen" />;

  return (
    <main className="relative bg-[#050505] min-h-screen overflow-x-hidden">
      <Navbar />
      <Scene />
      
      {/* FOTO PROFIL LAYER - FIX PRODUCTION POSITION */}
      <motion.div
        initial={false}
        style={{ 
          position: "fixed",
          // Jika Vercel mencoba menaruh di 0, kita paksa ke 75% via state
          left: isMounted ? smoothX : "75%", 
          top: isMounted ? smoothY : "50%", 
          opacity,
          scale,
          x: "-50%", 
          y: "-50%",
          pointerEvents: "none" 
        }}
        className="z-[50] hidden md:block"
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute w-[300px] h-[300px] bg-[#bcff00] rounded-full blur-[80px] opacity-20" />
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-[#bcff00] p-2 bg-[#050505] overflow-hidden shadow-[0_0_50px_rgba(188,255,0,0.3)] z-20">
            <img 
              src={fotoProfile} 
              alt="Avatar" 
              className="w-full h-full object-cover rounded-full" 
            />
          </div>
        </div>
      </motion.div>

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