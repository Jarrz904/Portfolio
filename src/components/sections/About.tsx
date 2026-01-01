"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="about" className="relative min-h-screen flex items-center px-6 md:px-20 border-t border-white/5 bg-[#050505] overflow-hidden py-20 md:py-0">
      
      {/* --- LAYER 1: BACKGROUND GRID & AMBIENCE --- */}
      <div className="absolute inset-0 z-0 [perspective:1000px] pointer-events-none">
        {/* Grid Background - Arah ke Atas */}
        <div 
          className="absolute top-[-10%] left-[-50%] w-[200%] h-[100%] origin-top rotate-x-[60deg] opacity-[0.07]"
          style={{ 
            backgroundImage: `linear-gradient(to right, #bcff00 1px, transparent 1px), linear-gradient(to bottom, #bcff00 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)'
          }}
        />

        {/* Aksentuasi Glow Utama (Area transisi profil) */}
        <div className="absolute left-[10vw] md:left-[20vw] top-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#bcff00]/10 rounded-full blur-[80px] md:blur-[140px] animate-pulse" />
        
        {/* Secondary Glow untuk balance di kanan */}
        <div className="absolute right-[-10%] bottom-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
        
        {/* --- LAYER 2: RUANG UNTUK FOTO DI SEBELAH KIRI --- */}
        {/* Di Mobile, div ini memberikan jarak agar foto profil (dari page.tsx) punya ruang */}
        <div className="h-[300px] md:h-[450px] w-full relative">
            {/* Dekorasi Bingkai Transparan di sekitar area foto */}
            <div className="absolute inset-4 md:inset-10 border border-white/5 rounded-3xl" />
            <div className="absolute top-0 left-0 w-12 md:w-20 h-12 md:h-20 border-t-2 border-l-2 border-[#bcff00]/30 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-12 md:w-20 h-12 md:h-20 border-b-2 border-r-2 border-[#bcff00]/30 rounded-br-3xl" />
        </div>

        {/* --- LAYER 3: TEKS DI SEBELAH KANAN --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="z-10 text-center md:text-left"
        >
          {/* Badge Section */}
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#bcff00]/20 rounded-full mb-6 md:mb-8 bg-[#bcff00]/5 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-[#bcff00] shadow-[0_0_8px_#bcff00]" />
            <h2 className="text-[#bcff00] text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em]">
              / Personal Journey
            </h2>
          </div>
          
          <h3 className="text-white text-3xl md:text-7xl font-black uppercase tracking-tighter italic leading-[0.9] mb-6 md:mb-8">
            Membangun Jembatan <br className="hidden md:block" /> 
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(188,255,0,0.4)] drop-shadow-[0_0_15px_rgba(188,255,0,0.1)] text-2xl md:text-6xl not-italic">
               Antara Ide & Kode.
            </span>
          </h3>

          <div className="relative group mb-10 md:mb-12">
            <p className="text-white/50 text-base md:text-xl leading-relaxed max-w-xl md:border-l-2 border-white/10 md:pl-8 group-hover:border-[#bcff00]/50 transition-colors duration-500">
              Saya percaya bahwa teknologi harusnya memudahkan, bukan mempersulit. Fokus saya adalah menciptakan website yang tidak hanya berfungsi baik, tapi juga memiliki <span className="text-white italic">jiwa dan estetika</span> yang kuat untuk bisnis Anda.
            </p>
          </div>

          {/* Stat/Info Cards */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 pt-8 border-t border-white/5">
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#bcff00]/20 transition-all"
            >
              <p className="text-[8px] md:text-[10px] text-[#bcff00] font-bold uppercase mb-2 md:mb-3 tracking-[0.2em]">Visi</p>
              <p className="font-bold text-xs md:text-base uppercase tracking-tight text-white leading-tight">
                Digitalisasi <br/> Total UMKM
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="relative p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#bcff00]/20 transition-all shadow-inner"
            >
              <p className="text-[8px] md:text-[10px] text-[#bcff00] font-bold uppercase mb-2 md:mb-3 tracking-[0.2em]">Misi</p>
              <p className="font-bold text-xs md:text-base uppercase tracking-tight text-white leading-tight">
                Kualitas <br/> <span className="text-[#bcff00]">Premium</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Layer Akhir: Grain & Scanlines Halus */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#bcff00]/[0.02] to-transparent" />
    </section>
  );
}