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
    <section id="home" className="relative w-full bg-[#050505] overflow-hidden flex flex-col pt-32 md:pt-48 pb-0">
      
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

      {/* --- LAYER 2: DEKORASI NEON & PROFIL (HANYA SATU) --- */}
      <div className="absolute left-[50vw] md:left-[75vw] top-[280px] md:top-[50vh] -translate-x-1/2 -translate-y-1/2 z-[5] pointer-events-none">
        {mounted && (
          <div className="relative w-[180px] h-[180px] md:w-[450px] md:h-[450px] flex items-center justify-center scale-90 md:scale-100">
            {/* Nama Berputar */}
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[170px] h-[170px] md:w-[420px] md:h-[420px] z-10 opacity-60 md:opacity-80"
              viewBox="0 0 100 100"
            >
              <defs>
                <path id="circlePath" d="M 50, 50 m -41, 0 a 41,41 0 1,1 82,0 a 41,41 0 1,1 -82,0" />
              </defs>
              <text fill="#bcff00" fontSize="4.1" fontWeight="bold" letterSpacing="2.8">
                <textPath xlinkHref="#circlePath"> MUHAMMAD FAJAR SIDIK • MUHAMMAD FAJAR SIDIK • </textPath>
              </text>
            </motion.svg>

            {/* Ring Putus-putus */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[140px] h-[140px] md:w-[360px] md:h-[360px] border-[1px] md:border-[1.5px] border-dashed border-[#bcff00]/30 rounded-full"
            />

            {/* Cahaya Glow */}
            <div className="absolute w-[100px] h-[100px] md:w-[320px] md:h-[320px] bg-[#bcff00]/10 rounded-full blur-[30px] md:blur-[100px]" />

            {/* Frame Foto Utama */}
            <div className="relative w-24 h-24 md:w-72 md:h-72 rounded-full border-[2px] md:border-[6px] border-[#bcff00] p-1 md:p-2 bg-[#050505] overflow-hidden shadow-[0_0_20px_rgba(188,255,0,0.3)] z-0">
               <img src="/foto-profil.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
            </div>

            {/* Label Expert */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] md:top-[15%] -right-2 md:-right-10 px-2 py-0.5 bg-black border border-[#bcff00] text-[#bcff00] text-[5px] md:text-[9px] font-black uppercase rounded-full z-20 shadow-[0_0_10px_rgba(188,255,0,0.5)]"
            >
              PHP & JS EXPERT
            </motion.div>
          </div>
        )}
      </div>

      {/* --- LAYER 3: KONTEN TEKS (GESER KIRI MAKSIMAL) --- */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex-grow pb-20 md:pb-32">
        <motion.div
          className="max-w-4xl text-left ml-0 md:-ml-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#bcff00]/20 rounded-full mb-6 md:mb-10 bg-[#bcff00]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#bcff00] animate-pulse" />
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-[#bcff00] font-bold">System Online</span>
          </div>

          {/* Judul */}
          <h1 className="text-[14vw] md:text-[8.5vw] font-black uppercase leading-[0.8] tracking-tighter text-white">
            New Tech
          </h1>
          <h1 className="text-[14vw] md:text-[8.5vw] font-black uppercase leading-[0.8] tracking-tighter text-transparent [-webkit-text-stroke:1px_#bcff00] drop-shadow-[0_0_20px_rgba(188,255,0,0.3)] mb-8 md:mb-12">
            Solution
          </h1>

          {/* Slogan */}
          <div className="max-w-[280px] md:max-w-md border-l-2 border-[#bcff00] pl-4 md:pl-6 mt-4 mb-10 text-left">
            <p className="text-white/40 text-[10px] md:text-xl leading-relaxed italic">
              "Mentransformasi visi bisnis <span className="text-white font-bold uppercase">UMKM</span> menjadi ekosistem digital bertenaga."
            </p>
          </div>

          {/* Tombol */}
          <a href="#work" className="inline-block">
            <button className="group relative px-6 md:px-10 py-3 md:py-4 bg-[#bcff00] text-black font-black uppercase text-[9px] md:text-[11px] tracking-[0.3em] transition-all hover:shadow-[0_0_30px_#bcff00] overflow-hidden">
              <span className="relative z-10">Hasil Project</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            </button>
          </a>
        </motion.div>
      </div>

      {/* --- LAYER 4: MARQUEE --- */}
      <div className="relative w-full py-4 md:py-8 bg-black/60 border-t border-white/5 backdrop-blur-md overflow-hidden z-[20] mt-auto">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-8 md:gap-20 items-center"
        >
          {[...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="group flex items-center gap-3 md:gap-4 opacity-40 hover:opacity-100 transition-all duration-500">
              <img src={tech.logo} alt={tech.name} className="w-4 h-4 md:w-5 md:h-5 object-contain grayscale invert brightness-200 group-hover:grayscale-0 group-hover:invert-0 group-hover:brightness-100" />
              <span className="text-white text-[8px] md:text-[10px] uppercase tracking-[0.5em] font-bold group-hover:text-[#bcff00] transition-colors">{tech.name}</span>
              <div className="w-1 h-1 bg-[#bcff00] rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}