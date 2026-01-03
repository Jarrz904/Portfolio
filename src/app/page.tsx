"use client";
import { useState, useEffect, useRef } from "react";

// IMPORT KOMPONEN
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

  useEffect(() => {
    setIsMounted(true);

    // Fix untuk memaksa browser refresh kalkulasi scroll saat pertama kali load
    window.scrollTo(window.scrollX, window.scrollY + 1);
  }, []);

  if (!isMounted) {
    return <div className="bg-[#050505] min-h-screen" />;
  }

  return (
    <main 
      ref={containerRef} 
      className="relative bg-[#050505] min-h-screen overflow-x-hidden"
    >
      <Navbar />
      
      {/* Background Canvas/3D Scene tetap di belakang */}
      <Scene />

      {/* CATATAN PERBAIKAN:
          Layer Profil melayang (motion.div fixed) telah dihapus dari sini.
          Sekarang profil menggunakan "Profile Card" yang sudah Anda pasang 
          langsung di dalam komponen <Hero /> agar posisi pas di sebelah kanan 
          teks "New Tech Solution" dan tidak menabrak section About saat di-scroll.
      */}

      {/* Konten Utama */}
      <div className="relative z-10 flex flex-col">
        {/* Hero Section: Sekarang berisi Profile Card yang sinkron dengan teks */}
        <Hero />

        {/* Wrapper Section Lainnya */}
        <div className="relative z-20 bg-[#050505]">
          <About />
          <Projects />
          <Pricing />
          <Contact />
        </div>
      </div>

      {/* Footer Sederhana */}
      <footer className="relative z-30 bg-[#050505] py-10 border-t border-white/5 text-center">
        <p className="text-white/20 text-[10px] uppercase tracking-[0.5em]">
          &copy; 2026 Muhammad Fajar Sidik. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}