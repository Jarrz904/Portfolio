"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const techStack = [
  { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
  { name: "Laravel", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
  { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Tailwind", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
  { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="home" className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex items-center">
      
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 z-0 [perspective:1000px] pointer-events-none">
        <div className="absolute bottom-[-10%] left-[-50%] w-[200%] h-[100%] origin-bottom rotate-x-[60deg] opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #bcff00 1px, transparent 1px), linear-gradient(to bottom, #bcff00 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)'
          }}
        />
      </div>

      {/* BORDER NEON: Harus left-[75%] dan top-[50%] */}
      <div className="absolute left-[75%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-[5] pointer-events-none hidden md:block">
        {mounted && (
          <div className="relative w-[380px] h-[380px] flex items-center justify-center">

            {/* NAMA BERPUTAR: Radius diturunkan ke 40 agar pas dengan foto w-72 */}
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[360px] h-[360px] z-10 opacity-70"
              viewBox="0 0 100 100"
            >
              <defs>
                <path id="circlePathHero" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
              </defs>
              <text fill="#bcff00" fontSize="4.5" fontWeight="bold" letterSpacing="2.5">
                <textPath xlinkHref="#circlePathHero"> • MUHAMMAD FAJAR SIDIK • MUHAMMAD FAJAR SIDIK</textPath>
              </text>
            </motion.svg>

            {/* Ring Dash Border: Ukuran diperkecil ke 310px */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[310px] h-[310px] border-[1px] border-dashed border-[#bcff00]/30 rounded-full"
            />
          </div>
        )}
      </div>

      {/* KONTEN TEKS */}
      <div className="w-full px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-1 md:grid-cols-12 items-center">
        <div className="md:col-span-8 lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#bcff00]/20 rounded-full mb-8 bg-[#bcff00]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#bcff00] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#bcff00] font-bold">System Online</span>
          </div>
          <h1 className="text-[10vw] md:text-[8.5vw] font-black uppercase leading-[0.75] tracking-tighter text-white">Fullstack</h1>
          <h1 className="text-[10vw] md:text-[8.5vw] font-black uppercase leading-[0.75] tracking-tighter text-transparent [-webkit-text-stroke:1px_#bcff00] mb-10">Developer</h1>
          
          <div className="max-w-md border-l-2 border-[#bcff00] pl-6 mb-12">
            <p className="text-white/40 text-lg md:text-xl italic">
              &quot;Mentransformasi visi bisnis <span className="text-white font-bold uppercase">UMKM</span> menjadi ekosistem digital bertenaga.&quot;
            </p>
          </div>
          <button className="px-10 py-4 bg-[#bcff00] text-black font-black uppercase text-[11px] tracking-[0.3em] hover:shadow-[0_0_30px_#bcff00] transition-all">
            Hasil Project
          </button>
        </div>
      </div>
    </section>
  );
}