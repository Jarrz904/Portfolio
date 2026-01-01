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
   * Menggunakan % agar sinkron dengan koordinat absolut di Hero.tsx
   * 75% berarti di sisi kanan (area kosong Hero)
   */
  const xPos = useTransform(
    scrollYProgress, 
    [0, 0.12, 1], 
    ["75%", "25%", "25%"]
  );

  /**
   * 2. POSISI Y (VERTICAL)
   * 50% berarti tepat di tengah layar secara vertikal
   */
  const yPos = useTransform(
    scrollYProgress, 
    [0, 0.18, 0.23], 
    ["50%", "50%", "-60%"]
  );

  /**
   * 3. OPACITY (TRANSPARANSI)
   */
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.21], [1, 1, 0]);

  /**
   * 4. SMOOTHING
   * Menggunakan stiffness & damping yang pas agar gerakan tidak kaku
   */
  const smoothX = useSpring(xPos, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const smoothY = useSpring(yPos, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Cegah blank/hydration error
  if (!isMounted) return <div className="bg-[#050505] min-h-screen" />;

  return (
    <main className="relative bg-[#050505] min-h-screen overflow-x-hidden">
      <Navbar />
      <Scene />
      
      {/* FOTO PROFIL LAYER 
          Properti 'position: fixed' diletakkan di dalam style agar 
          Framer Motion bisa menghitung koordinat 'left' dan 'top' dengan benar.
      */}
      <motion.div
        style={{ 
          position: "fixed",
          left: smoothX, 
          top: smoothY, 
          opacity,
          x: "-50%", 
          y: "-50%",
          pointerEvents: "none",
          willChange: "transform" 
        }}
        className="z-[40] hidden md:block"
      >
        <div className="relative flex items-center justify-center">
          
          {/* Efek Pendar Neon di belakang foto */}
          <div className="absolute w-[300px] h-[300px] bg-[#bcff00] rounded-full blur-[80px] opacity-20" />
          
          {/* Frame Lingkaran Foto */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-[#bcff00] p-2 bg-[#050505] overflow-hidden shadow-[0_0_50px_rgba(188,255,0,0.4)]">
            <img 
              src={fotoProfile} 
              alt="Profile Avatar" 
              className="w-full h-full object-cover rounded-full" 
            />
          </div>
          
        </div>
      </motion.div>

      {/* Kontainer Section agar tetap berada di atas Background */}
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