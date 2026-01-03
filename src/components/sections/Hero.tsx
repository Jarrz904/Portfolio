"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";

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
    <section id="home" className="relative w-full h-auto md:min-h-screen bg-[#050505] overflow-hidden flex flex-col">

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

      {/* --- UTAMA: WRAPPER KONTEN --- */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex-grow flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 pt-28 md:pt-48 pb-12 md:pb-10">

        {/* --- LAYER KONTEN TEKS (KIRI) --- */}
        <motion.div
          className="w-full md:w-1/2 text-left order-2 md:order-1"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge System Online */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-[#bcff00]/20 rounded-full mb-4 md:mb-8 bg-[#bcff00]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#bcff00] animate-pulse" />
            <span className="text-[7px] md:text-[9px] uppercase tracking-[0.4em] text-[#bcff00] font-bold">System Online</span>
          </div>

          <h1 className="text-[13vw] md:text-[7.5vw] font-black uppercase leading-[0.8] tracking-tighter text-white">
            New Tech
          </h1>
          <h1 className="text-[13vw] md:text-[7.5vw] font-black uppercase leading-[0.8] tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(188,255,0,0.6)] md:[-webkit-text-stroke:1.5px_#bcff00] drop-shadow-[0_0_20px_rgba(188,255,0,0.3)] mb-6 md:mb-12">
            Solution 99
          </h1>

          <div className="max-w-[200px] md:max-w-sm border-l-2 border-[#bcff00] pl-4 md:pl-5 mt-4 mb-8 md:mb-12 text-left">
            <p className="text-white/40 text-[10px] md:text-lg leading-relaxed italic">
              "Mentransformasi visi bisnis <span className="text-white font-bold uppercase tracking-widest text-[8px] md:text-sm">UMKM</span> menjadi ekosistem digital bertenaga."
            </p>
          </div>

          <a href="#projects" className="inline-block">
            <button className="group relative px-6 md:px-9 py-2.5 md:py-3.5 bg-[#bcff00] text-black font-black uppercase text-[8px] md:text-[10px] tracking-[0.3em] transition-all hover:shadow-[0_0_30px_#bcff00] active:scale-95 overflow-hidden">
              <span className="relative z-10">Hasil Project</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            </button>
          </a>
        </motion.div>

        {/* --- LAYER PROFILE CARD (KANAN) --- */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end order-1 md:order-2">
          {mounted && (
            <div className="relative w-full flex items-center justify-center md:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[380px]"
              >
                <ProfileCard
                  name="Jarrz"
                  title="Software Engineer"
                  handle="jarrzcodes"
                  status="Online"
                  contactText="Contact"
                  avatarUrl="/foto-profil.jpg"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => {
                    // Ganti URL di bawah dengan link WhatsApp, Email, atau Linktree Anda
                    const contactUrl = "https://wa.me/6285741129749";
                    window.open(contactUrl, '_blank', 'noopener,noreferrer');
                  }}
                />

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-2 md:-right-6 px-2 md:px-3 py-1 bg-black border border-[#bcff00] text-[#bcff00] text-[6px] md:text-[9px] font-black uppercase tracking-[0.1em] rounded-full z-20 shadow-[0_0_15px_rgba(188,255,0,0.5)] pointer-events-none"
                >
                  PHP & JS EXPERT
                </motion.div>
              </motion.div>
            </div>
          )}
        </div>

      </div>

      {/* --- LAYER 4: MARQUEE TECH STACK --- */}
      {/* Warna logo diaktifkan dengan menghapus filter grayscale/invert */}
      <div className="relative w-full py-4 md:py-8 bg-black/60 border-t border-white/5 backdrop-blur-md overflow-hidden z-[20]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-8 md:gap-20 items-center"
        >
          {[...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="group flex items-center gap-3 md:gap-4 opacity-70 hover:opacity-100 transition-all duration-500 cursor-default">
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-4 h-4 md:w-6 md:h-6 object-contain transition-all duration-500 group-hover:scale-110"
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