"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section 
      id="about" 
      /* PERBAIKAN: Gunakan min-h-fit di mobile agar section hanya setinggi kontennya */
      className="relative min-h-fit md:min-h-screen flex items-center px-6 md:px-20 border-t border-white/5 bg-[#050505] overflow-hidden py-16 md:py-0"
    >
      
      {/* --- LAYER 1: BACKGROUND GRID & AMBIENCE --- */}
      <div className="absolute inset-0 z-0 [perspective:1000px] pointer-events-none">
        <div 
          className="absolute top-[-10%] left-[-50%] w-[200%] h-[100%] origin-top rotate-x-[60deg] opacity-[0.07]"
          style={{ 
            backgroundImage: `linear-gradient(to right, #bcff00 1px, transparent 1px), linear-gradient(to bottom, #bcff00 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)'
          }}
        />

        {/* Glow Utama */}
        <div className="absolute left-[10vw] md:left-[20vw] top-1/2 -translate-y-1/2 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-[#bcff00]/10 rounded-full blur-[60px] md:blur-[140px] animate-pulse" />
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center relative z-10">
        
        {/* --- LAYER 2: RUANG UNTUK FOTO --- */}
        {/* PERBAIKAN: Tinggi h-[250px] agar foto profil tidak menggantung terlalu jauh dari teks About */}
        <div className="h-[250px] md:h-[450px] w-full relative">
            <div className="absolute inset-4 md:inset-10 border border-white/5 rounded-3xl" />
            <div className="absolute top-0 left-0 w-12 md:w-20 h-12 md:h-20 border-t-2 border-l-2 border-[#bcff00]/30 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-12 md:w-20 h-12 md:h-20 border-b-2 border-r-2 border-[#bcff00]/30 rounded-br-3xl" />
        </div>

        {/* --- LAYER 3: TEKS --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="z-10 text-center md:text-left"
        >
          {/* Badge Section */}
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#bcff00]/20 rounded-full mb-4 md:mb-8 bg-[#bcff00]/5 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-[#bcff00] shadow-[0_0_8px_#bcff00]" />
            <h2 className="text-[#bcff00] text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em]">
              / Personal Journey
            </h2>
          </div>
          
          <h3 className="text-white text-3xl md:text-7xl font-black uppercase tracking-tighter italic leading-[1.1] md:leading-[0.9] mb-4 md:mb-8">
            Membangun Jembatan <br className="hidden md:block" /> 
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(188,255,0,0.4)] text-2xl md:text-6xl not-italic block mt-2">
               Antara Ide & Kode.
            </span>
          </h3>

          <div className="relative group mb-8 md:mb-12">
            <p className="text-white/50 text-sm md:text-xl leading-relaxed max-w-xl md:border-l-2 border-white/10 md:pl-8 group-hover:border-[#bcff00]/50 transition-colors duration-500">
              Saya menciptakan website yang tidak hanya berfungsi baik, tapi juga memiliki <span className="text-white italic">jiwa dan estetika</span> kuat untuk bisnis Anda.
            </p>
          </div>

          {/* Stat/Info Cards */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 pt-6 md:pt-8 border-t border-white/5">
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#bcff00]/20 transition-all"
            >
              <p className="text-[7px] md:text-[10px] text-[#bcff00] font-bold uppercase mb-1 tracking-[0.2em]">Visi</p>
              <p className="font-bold text-[10px] md:text-base uppercase text-white leading-tight">
                Digitalisasi <br/> Total UMKM
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="relative p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#bcff00]/20 transition-all shadow-inner"
            >
              <p className="text-[7px] md:text-[10px] text-[#bcff00] font-bold uppercase mb-1 tracking-[0.2em]">Misi</p>
              <p className="font-bold text-[10px] md:text-base uppercase text-white leading-tight">
                Kualitas <br/> <span className="text-[#bcff00]">Premium</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}