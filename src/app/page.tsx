"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
// ... (import lainnya)

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Memastikan Hydration selesai di React 19
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Transformasi dengan Fallback String
  const xPos = useTransform(scrollYProgress, [0, 0.12, 1], ["75%", "25%", "25%"]);
  const yPos = useTransform(scrollYProgress, [0, 0.18, 0.23], ["50%", "50%", "-60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.21], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.12], [1, 0.85]);

  // Gunakan Spring hanya jika sudah Mounted
  const smoothX = useSpring(xPos, { stiffness: 80, damping: 25 });
  const smoothY = useSpring(yPos, { stiffness: 80, damping: 25 });

  // SHIELD: Jangan render apapun ke DOM sebelum client-side siap
  if (!isMounted) return null;

  return (
    <main ref={containerRef} className="relative bg-[#050505] min-h-screen">
      <Navbar />
      
      {/* FOTO PROFIL - FIX FOR REACT 19 & MOTION 11 */}
      <motion.div
        style={{ 
          position: "fixed",
          // Paksa posisi awal menggunakan Inline Style agar tidak bergantung CSS Class
          left: smoothX, 
          top: smoothY, 
          opacity,
          scale,
          x: "-50%", 
          y: "-50%",
          pointerEvents: "none",
          zIndex: 999 // Naikkan z-index maksimal
        }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            {/* Glow */}
            <div className="absolute inset-0 bg-[#bcff00] rounded-full blur-[100px] opacity-20" />
            
            {/* Lingkaran Foto */}
            <div className="relative w-full h-full rounded-full border-[6px] border-[#bcff00] p-2 bg-[#050505] overflow-hidden shadow-[0_0_60px_rgba(188,255,0,0.4)]">
               <img 
                 src="/foto-profil.jpg" 
                 className="w-full h-full object-cover rounded-full" 
                 alt="Profile"
               />
            </div>
        </div>
      </motion.div>

      <div className="relative z-10">
        <Hero />
        {/* Section lainnya */}
      </div>
    </main>
  );
}