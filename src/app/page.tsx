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
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Koordinat Foto Profil disesuaikan dengan posisi lingkaran baru
  const xRaw = useTransform(scrollYProgress, [0, 0.15], isMobile ? [50, 50] : [75, 25]);
  const yRaw = useTransform(scrollYProgress, [0, 0.2, 0.5], isMobile ? [340/8, 340/8, -100] : [50, 50, -60]); // 340px dikonversi ke vh approximate
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], isMobile ? [0.65, 0.5] : [1, 0.8]);

  const smoothX = useSpring(xRaw, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(yRaw, { stiffness: 100, damping: 30 });

  if (!isMounted) return <div className="bg-[#050505] min-h-screen" />;

  return (
    <main className="relative bg-[#050505] min-h-screen">
      <Navbar />
      <Scene />
      
      {/* FOTO PROFIL LAYER */}
      <motion.div
        style={{ 
          position: "fixed", 
          left: useTransform(smoothX, v => `${v}vw`), 
          top: isMobile ? "340px" : useTransform(smoothY, v => `${v}vh`), 
          opacity, 
          scale,
          x: "-50%", y: "-50%",
          zIndex: 50, pointerEvents: "none"
        }}
      >
        <div className="relative w-40 h-40 md:w-72 md:h-72 rounded-full border-4 border-[#bcff00] p-2 bg-[#050505] shadow-[0_0_40px_rgba(188,255,0,0.2)]">
          <img src="/foto-profil.jpg" alt="Avatar" className="w-full h-full object-cover rounded-full" />
        </div>
      </motion.div>

      {/* KONTEN UTAMA: Tanpa gap agar rapat */}
      <div className="relative z-10 flex flex-col">
        <Hero />
        <div className="bg-[#050505]">
          <About />
          <Projects />
          <Pricing />
          <Contact />
        </div>
      </div>
    </main>
  );
}