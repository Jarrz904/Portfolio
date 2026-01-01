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

  // Memastikan komponen sudah termuat di browser sebelum render
  useEffect(() => {
    setIsMounted(true);
  }, []);

  /**
   * 1. POSISI X (HORIZONTAL)
   * Menggunakan % agar sinkron dengan titik koordinat pusat di Hero.tsx.
   * Awalnya di 75% (kanan) untuk masuk ke dalam lingkaran neon, 
   * lalu berpindah ke 25% (kiri) saat scroll ke About.
   */
  const xPos = useTransform(
    scrollYProgress,
    [0, 0.12, 1],
    ["75%", "25%", "25%"] 
  );

  /**
   * 2. POSISI Y (VERTICAL)
   * Tetap di tengah layar (50%) selama di Hero & About,
   * lalu bergerak keluar layar ke atas saat masuk ke Projects.
   */
  const yPos = useTransform(
    scrollYProgress,
    [0, 0.18, 0.23], 
    ["50%", "50%", "-60%"]
  );

  /**
   * 3. OPACITY (TRANSPARANSI)
   */
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.21],
    [1, 1, 0]
  );

  /**
   * 4. SPRING ANIMATION (SMOOTHING)
   * Stiffness dan damping disesuaikan agar gerakan mengikuti scroll dengan halus.
   */
  const smoothX = useSpring(xPos, { stiffness: 120, damping: 30 });
  const smoothY = useSpring(yPos, { stiffness: 120, damping: 30 });

  // Cegah Hydration Error
  if (!isMounted) return <div className="bg-[#050505] min-h-screen" />;

  return (
    <main className="relative bg-[#050505] min-h-screen overflow-x-hidden">
      <Navbar />
      <Scene />
      
      {/* FOTO PROFIL LAYER - BIGGER VERSION 
          'x: -50%, y: -50%' sangat penting agar titik tumpu (pivot) 
          ada di tengah foto, bukan di pojok kiri atas foto.
      */}
      <motion.div
        style={{ 
          position: "fixed",
          left: smoothX, 
          top: smoothY, 
          opacity,
          x: "-50%", 
          y: "-50%",
          pointerEvents: "none" 
        }}
        className="z-[40] hidden md:block"
      >
        <div className="relative flex items-center justify-center">
          
          {/* GLOW BACKGROUND - Memberikan efek pendar neon di belakang foto */}
          <div className="absolute w-[300px] h-[300px] bg-[#bcff00] rounded-full blur-[80px] opacity-20" />
          
          {/* FRAME FOTO PROFIL - Ukuran w-72 (288px) agar pas dengan lingkaran nama di Hero */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-[#bcff00] p-2 bg-[#050505] overflow-hidden shadow-[0_0_50px_rgba(188,255,0,0.3)] z-20">
            <img 
              src={fotoProfile}
              alt="Avatar Muhammad Fajar Sidik"
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