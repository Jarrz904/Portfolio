"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const techStack = [
  { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
  { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
  { name: "Tailwind", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "Laravel", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
  { name: "PHP", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
  { name: "MySQL", logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
  { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1588805177/repositories/vercel/logo.png" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="home" className="relative w-full bg-[#050505] overflow-hidden flex flex-col justify-start pt-24 md:pt-0 md:justify-center md:min-h-screen">
      
      {/* LAYER 1: GRID BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #bcff00 1px, transparent 1px), linear-gradient(to bottom, #bcff00 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }} />
      </div>

      {/* LAYER 2: DEKORASI LINGKARAN (DI MOBILE NAIK KE ATAS) */}
      <div className="absolute left-1/2 md:left-[75%] top-[340px] md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-5 pointer-events-none">
        {mounted && (
          <div className="relative w-[260px] h-[260px] md:w-[420px] md:h-[420px] flex items-center justify-center">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full opacity-60"
              viewBox="0 0 100 100"
            >
              <defs><path id="circlePath" d="M 50, 50 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" /></defs>
              <text fill="#bcff00" fontWeight="bold" style={{ fontSize: '3.8px', letterSpacing: '3px' }}>
                <textPath xlinkHref="#circlePath">• MUHAMMAD FAJAR SIDIK • MUHAMMAD FAJAR SIDIK</textPath>
              </text>
            </motion.svg>
            <div className="absolute w-[80%] h-[80%] border border-dashed border-[#bcff00]/20 rounded-full" />
            <div className="absolute w-[70%] h-[70%] bg-[#bcff00]/5 rounded-full blur-[60px]" />
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 right-0 px-3 py-1 bg-black border border-[#bcff00] text-[#bcff00] text-[8px] font-bold rounded-full shadow-[0_0_15px_rgba(188,255,0,0.4)]"
            >
              PHP & JS EXPERT
            </motion.div>
          </div>
        )}
      </div>

      {/* LAYER 3: KONTEN TEKS */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="max-w-4xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#bcff00]/30 rounded-full mb-6 bg-[#bcff00]/5">
            <span className="w-2 h-2 rounded-full bg-[#bcff00] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-[#bcff00] font-bold">System Online</span>
          </div>

          <h1 className="text-[15vw] md:text-[9vw] font-black uppercase leading-[0.8] tracking-tighter text-white">
            New Tech
          </h1>
          <h1 className="text-[15vw] md:text-[9vw] font-black uppercase leading-[0.8] tracking-tighter text-transparent [-webkit-text-stroke:1px_#bcff00] mb-6">
            Solution
          </h1>

          <div className="max-w-[280px] md:max-w-md border-l-2 border-[#bcff00] pl-4 mb-10">
            <p className="text-white/50 text-sm md:text-lg leading-relaxed italic">
              "Mentransformasi visi bisnis <span className="text-white font-bold">UMKM</span> menjadi ekosistem digital bertenaga."
            </p>
          </div>

          <a href="#work" className="inline-block group">
            <button className="px-8 py-4 bg-[#bcff00] text-black font-black uppercase text-[11px] tracking-widest transition-transform group-hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(188,255,0,0.3)]">
              Hasil Project
            </button>
          </a>
        </motion.div>
      </div>

      {/* LAYER 4: MARQUEE */}
      <div className="absolute bottom-0 w-full py-5 bg-black/80 border-t border-white/5 backdrop-blur-md z-20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12"
        >
          {[...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity">
              <img src={tech.logo} alt={tech.name} className="w-5 h-5 grayscale invert" />
              <span className="text-white text-[10px] font-bold tracking-widest uppercase">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}