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
  { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
  { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1588805177/repositories/vercel/logo.png" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="home" className="relative min-h-[100svh] w-full bg-[#050505] overflow-hidden flex flex-col md:flex-row md:items-center">

      {/* --- LAYER 1: GRID BACKGROUND --- */}
      <div className="absolute inset-0 z-0 [perspective:1000px] pointer-events-none">
        <div
          className="absolute bottom-[-10%] left-[-50%] w-[200%] h-[100%] origin-bottom rotate-x-[60deg] opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #bcff00 1px, transparent 1px), linear-gradient(to bottom, #bcff00 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)'
          }}
        />
      </div>

      {/* --- LAYER 2: DEKORASI NEON (PROFIL) --- */}
      <div className="absolute left-[50vw] md:left-[75vw] top-[420px] md:top-[50vh] -translate-x-1/2 -translate-y-1/2 z-[5] pointer-events-none">
        {mounted && (
          <div className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] flex items-center justify-center">
            {/* Nama Berputar */}
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full z-10 opacity-60"
              viewBox="0 0 100 100"
            >
              <defs>
                <path id="circlePath" d="M 50, 50 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" />
              </defs>
              <text fill="#bcff00" fontWeight="bold" letterSpacing="3" style={{ fontSize: '3.8px' }}>
                <textPath xlinkHref="#circlePath">
                  • MUHAMMAD FAJAR SIDIK • MUHAMMAD FAJAR SIDIK
                </textPath>
              </text>
            </motion.svg>
            
            {/* Ring & Glow */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[80%] h-[80%] border border-dashed border-[#bcff00]/30 rounded-full"
            />
            <div className="absolute w-[70%] h-[70%] bg-[#bcff00]/10 rounded-full blur-[50px] md:blur-[80px]" />
          </div>
        )}
      </div>

      {/* --- LAYER 3: KONTEN TEKS --- */}
      <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          className="max-w-4xl text-left pt-28 md:pt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Status Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#bcff00]/20 rounded-full mb-6 bg-[#bcff00]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#bcff00] animate-pulse" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#bcff00] font-bold">System Online</span>
          </div>

          {/* Headline */}
          <div className="space-y-0 mb-8">
            <h1 className="text-[14vw] md:text-[8vw] font-black uppercase leading-[0.8] tracking-tighter text-white">
              New Tech
            </h1>
            <h1 className="text-[14vw] md:text-[8vw] font-black uppercase leading-[0.8] tracking-tighter text-transparent [-webkit-text-stroke:1px_#bcff00] drop-shadow-[0_0_15px_rgba(188,255,0,0.2)]">
              Solution
            </h1>
          </div>

          {/* Sub-headline */}
          <div className="max-w-[300px] md:max-w-md border-l-2 border-[#bcff00] pl-5 mb-10">
            <p className="text-white/50 text-sm md:text-lg leading-relaxed italic">
              "Mentransformasi visi bisnis <span className="text-white font-bold uppercase">UMKM</span> menjadi ekosistem digital bertenaga."
            </p>
          </div>

          {/* CTA Button */}
          <a href="#work" className="inline-block group">
            <div className="relative">
              <div className="absolute -inset-1 bg-[#bcff00] rounded blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <button className="relative px-8 py-4 bg-[#bcff00] text-black font-black uppercase text-[11px] tracking-[0.2em] transition-transform active:scale-95">
                Hasil Project
              </button>
            </div>
          </a>
        </motion.div>
      </div>

      {/* --- LAYER 4: MARQUEE TECH STACK --- */}
      <div className="absolute bottom-0 w-full py-5 bg-black/60 border-t border-white/5 backdrop-blur-xl overflow-hidden z-[20]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 md:gap-24 items-center"
        >
          {[...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity duration-300">
              <img src={tech.logo} alt={tech.name} className="w-5 h-5 grayscale invert object-contain" />
              <span className="text-white text-[10px] uppercase tracking-[0.4em] font-bold">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}