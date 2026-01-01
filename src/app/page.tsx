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
   * Awalnya 75% ke kanan (untuk masuk ke dalam area grid Hero kanan)
   * Berubah ke 25% saat scroll ke About
   */
  const xPos = useTransform(
    scrollYProgress,
    [0, 0.12, 1],
    ["75%", "25%", "25%"] 
  );

  /**
   * 2. POSISI Y (VERTICAL)
   * Tetap di tengah (50%) saat di Hero
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
  const scale = useTransform(scrollYProgress, [0, 0.12], [1, 0.8]);

  const smoothX = useSpring(xPos, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(yPos, { stiffness: 100, damping: 30 });

  if (!isMounted) return null;

  return (
    <main className="relative bg-[#050505] min-h-screen">
      <Navbar />
      <Scene />
      
      {/* FOTO PROFIL LAYER 
          Menggunakan position fixed dengan koordinat yang disinkronkan ke Hero 
      */}
      <motion.div
        style={{ 
          left: smoothX, 
          top: smoothY, 
          opacity,
          scale,
          x: "-50%", 
          y: "-50%",
          pointerEvents: "none" 
        }}
        className="fixed z-[40] hidden md:block"
      >
        <div className="relative flex items-center justify-center">
          
          {/* Efek Cahaya di belakang foto */}
          <div className="absolute w-[300px] h-[300px] bg-[#bcff00] rounded-full blur-[80px] opacity-10" />
          
          {/* Kontainer Foto Utama - Ukuran disesuaikan agar pas di tengah lingkaran Hero */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-[#bcff00]/50 p-2 bg-[#050505] overflow-hidden shadow-[0_0_40px_rgba(188,255,0,0.2)] z-20">
            <img 
              src={fotoProfile}
              alt="Muhammad Fajar Sidik"
              className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
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