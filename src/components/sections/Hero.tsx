"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const techStack = [
  // --- NEXT.JS & REACT ECOSYSTEM ---
  { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
  { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
  { name: "Tailwind", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "Framer Motion", logo: "https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png" },
  { name: "Prisma", logo: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg" },

  // --- PHP & LARAVEL ECOSYSTEM ---
  { name: "PHP", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
  { name: "Laravel", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
  { name: "Inertia.js", logo: "https://avatars.githubusercontent.com/u/47703742?s=200&v=4" },
  { name: "Livewire", logo: "https://laravel-livewire.com/img/twitter.png" },
  { name: "Alpine.js", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Alpinejs.svg" },
  { name: "MySQL", logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
  { name: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/PostgreSQL_logo.300x300.png" },
  { name: "Filament PHP", logo: "https://avatars.githubusercontent.com/u/74240979?s=200&v=4" },
  { name: "Composer", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Composer-logo.svg" },

  // --- TOOLS & OTHERS ---
  { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "Git", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
  { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
  { name: "Vite", logo: "https://vitejs.dev/logo-with-shadow.png" },
  { name: "VS Code", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
  { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1588805177/repositories/vercel/logo.png" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="home" className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex items-center pt-20 md:pt-0">

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

      {/* --- LAYER 2: DEKORASI NEON TERKUNCI --- */}
      {/* Penyesuaian Mobile: Posisi diturunkan sedikit (40vh) agar pas dengan area foto di mobile */}
      <div className="absolute left-[50vw] md:left-[75vw] top-[40vh] md:top-[50vh] -translate-x-1/2 -translate-y-1/2 z-[5] pointer-events-none">
        {mounted && (
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] flex items-center justify-center">

            {/* --- NAMA BERPUTAR (SVG CIRCLE TEXT) --- */}
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[260px] h-[260px] md:w-[385px] md:h-[385px] z-10 opacity-70"
              viewBox="0 0 100 100"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -41, 0 a 41,41 0 1,1 82,0 a 41,41 0 1,1 -82,0"
                />
              </defs>
              {/* font-size dikecilkan di mobile via CSS atau tetap proporsional karena viewBox 100 100 */}
              <text fill="#bcff00" fontSize="4.2" fontWeight="bold" letterSpacing="2.5">
                <textPath xlinkHref="#circlePath">
                  • MUHAMMAD FAJAR SIDIK • MUHAMMAD FAJAR SIDIK
                </textPath>
              </text>
            </motion.svg>

            {/* Ring Putar Putus-putus */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[220px] h-[220px] md:w-[325px] md:h-[325px] border-[1px] border-dashed border-[#bcff00]/30 rounded-full"
            />

            {/* Cahaya Pendar (Glow) */}
            <div className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] bg-[#bcff00]/10 rounded-full blur-[40px] md:blur-[70px]" />

            {/* Label PHP & JS EXPERT */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] md:top-[10%] -right-2 md:-right-8 px-3 py-1 bg-black border border-[#bcff00] text-[#bcff00] text-[7px] md:text-[8px] font-black uppercase tracking-[0.1em] rounded-full z-20 shadow-[0_0_15px_rgba(188,255,0,0.5)]"
            >
              PHP & JS EXPERT
            </motion.div>
          </div>
        )}
      </div>

      {/* --- LAYER 3: KONTEN TEKS --- */}
      <div className="w-full px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-1 md:grid-cols-12 items-center">
        <motion.div
          className="md:col-span-8 lg:col-span-7 text-center md:text-left mt-40 md:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#bcff00]/20 rounded-full mb-6 md:mb-8 bg-[#bcff00]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#bcff00] animate-pulse" />
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-[#bcff00] font-bold">System Online</span>
          </div>

          <h1 className="text-[16vw] md:text-[8.5vw] font-black uppercase leading-[0.8] tracking-tighter text-white">
            New Tech
          </h1>
          <h1 className="text-[16vw] md:text-[8.5vw] font-black uppercase leading-[0.8] tracking-tighter text-transparent [-webkit-text-stroke:1px_#bcff00] drop-shadow-[0_0_20px_rgba(188,255,0,0.3)] mb-8 md:mb-10">
            Solution
          </h1>

          <div className="max-w-md border-l-2 border-[#bcff00] pl-4 md:pl-6 mb-8 md:mb-12 mx-auto md:ml-1 text-left">
            <p className="text-white/40 text-sm md:text-xl leading-relaxed italic">
              "Mentransformasi visi bisnis <span className="text-white font-bold uppercase tracking-widest">UMKM</span> menjadi ekosistem digital bertenaga."
            </p>
          </div>

          <a href="#work" className="inline-block">
            <button className="group relative px-8 md:px-10 py-3 md:py-4 bg-[#bcff00] text-black font-black uppercase text-[10px] md:text-[11px] tracking-[0.3em] transition-all hover:shadow-[0_0_30px_#bcff00] active:scale-95">
              <span className="relative z-10">Hasil Project</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0" />
            </button>
          </a>
        </motion.div>
      </div>

      {/* --- LAYER 4: MARQUEE TECH STACK --- */}
      <div className="absolute bottom-0 w-full py-4 md:py-6 bg-black/40 border-t border-white/5 backdrop-blur-md overflow-hidden z-[20]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-10 md:gap-20 items-center"
        >
          {[...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="group flex items-center gap-3 md:gap-4 opacity-30 hover:opacity-100 transition-all duration-500 cursor-default">
              <img 
                src={tech.logo} 
                alt={tech.name} 
                className="w-4 h-4 md:w-5 md:h-5 object-contain grayscale invert group-hover:grayscale-0 group-hover:invert-0 transition-all duration-500 scale-100 group-hover:scale-110" 
              />
              <span className="text-white text-[8px] md:text-[10px] uppercase tracking-[0.5em] font-bold group-hover:text-[#bcff00] transition-colors duration-500">
                {tech.name}
              </span>
              <div className="w-1 h-1 bg-[#bcff00] rounded-full group-hover:shadow-[0_0_8px_#bcff00] transition-all" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}