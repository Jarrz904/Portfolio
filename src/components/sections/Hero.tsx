"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const techStack = [
  { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
  { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
  { name: "Tailwind", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "Framer Motion", logo: "https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png" },
  { name: "Prisma", logo: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg" },
  { name: "PHP", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
  { name: "Laravel", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
  { name: "Inertia.js", logo: "https://avatars.githubusercontent.com/u/47703742?s=200&v=4" },
  { name: "Livewire", logo: "https://laravel-livewire.com/img/twitter.png" },
  { name: "Alpine.js", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Alpinejs.svg" },
  { name: "MySQL", logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
  { name: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/PostgreSQL_logo.300x300.png" },
  { name: "Filament PHP", logo: "https://avatars.githubusercontent.com/u/74240979?s=200&v=4" },
  { name: "Composer", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Composer-logo.svg" },
  { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "Git", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
  { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
  { name: "Vite", logo: "https://vitejs.dev/logo-with-shadow.png" },
  { name: "VS Code", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
  { name: "Vercel", logo: "https://assets.vercel.app/image/upload/v1588805177/repositories/vercel/logo.png" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="home" className="relative w-full bg-[#050505] overflow-hidden flex flex-col pt-10 md:pt-0 min-h-screen justify-center">
      
      {/* --- LAYER 1: GRID BACKGROUND --- */}
      <div className="absolute inset-0 z-0 [perspective:1000px] pointer-events-none">
        <div
          className="absolute bottom-[-5%] left-[-50%] w-[200%] h-[100%] origin-bottom rotate-x-[60deg] opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #bcff00 1px, transparent 1px), linear-gradient(to bottom, #bcff00 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)'
          }}
        />
      </div>

      {/* --- LAYER 2: KONTEN TEKS (Fokus pada Kiri) --- */}
      <div className="container mx-auto px-4 md:px-12 relative z-10 flex flex-col justify-center">
        <motion.div
          className="max-w-4xl text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#bcff00]/20 rounded-full mb-6 bg-[#bcff00]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#bcff00] animate-pulse" />
            <span className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] text-[#bcff00] font-bold">System Online</span>
          </div>

          {/* Judul Utama */}
          <div className="space-y-0">
            <h1 className="text-[15vw] md:text-[9vw] font-black uppercase leading-[0.75] tracking-tighter text-white">
              New Tech
            </h1>
            <h1 className="text-[15vw] md:text-[9vw] font-black uppercase leading-[0.75] tracking-tighter text-transparent [-webkit-text-stroke:1px_#bcff00] drop-shadow-[0_0_20px_rgba(188,255,0,0.3)] mb-8 md:mb-12">
              Solution
            </h1>
          </div>

          {/* Slogan */}
          <div className="max-w-[280px] md:max-w-lg border-l-2 border-[#bcff00] pl-5 md:pl-8 mt-6 mb-10 text-left">
            <p className="text-white/40 text-xs md:text-xl leading-relaxed italic">
              "Mentransformasi visi bisnis <span className="text-white font-bold uppercase">UMKM</span> menjadi ekosistem digital bertenaga."
            </p>
          </div>

          {/* Tombol Aksi */}
          <a href="#work" className="inline-block">
            <button className="group relative px-8 md:px-12 py-3 md:py-5 bg-[#bcff00] text-black font-black uppercase text-[10px] md:text-xs tracking-[0.3em] transition-all hover:shadow-[0_0_40px_rgba(188,255,0,0.6)] overflow-hidden">
              <span className="relative z-10">Hasil Project</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            </button>
          </a>
        </motion.div>
      </div>

      {/* --- LAYER 3: MARQUEE (Paling Bawah) --- */}
      <div className="absolute bottom-0 w-full py-5 md:py-10 bg-black/60 border-t border-white/5 backdrop-blur-md overflow-hidden z-[20]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-10 md:gap-24 items-center"
        >
          {[...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="group flex items-center gap-4 opacity-40 hover:opacity-100 transition-all duration-500">
              <img src={tech.logo} alt={tech.name} className="w-5 h-5 md:w-6 md:h-6 object-contain grayscale invert brightness-200 group-hover:grayscale-0 group-hover:invert-0 group-hover:brightness-100" />
              <span className="text-white text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold group-hover:text-[#bcff00] transition-colors">{tech.name}</span>
              <div className="w-1 h-1 bg-[#bcff00] rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}