"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section 
      id="about" 
      className="relative py-20 md:py-32 px-8 md:px-20 bg-[#050505] overflow-hidden"
    >      
      {/* --- LAYER 1: BACKGROUND GRID & AMBIENCE --- */}
      <div className="absolute inset-0 z-0 [perspective:1000px] pointer-events-none">
        {/* Grid Background */}
        <div 
          className="absolute top-[-10%] left-[-50%] w-[200%] h-[100%] origin-top rotate-x-[60deg] opacity-[0.07]"
          style={{ 
            backgroundImage: `linear-gradient(to right, #bcff00 1px, transparent 1px), linear-gradient(to bottom, #bcff00 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)'
          }}
        />

        {/* Aksentuasi Glow Utama */}
        <div className="absolute left-[10vw] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#bcff00]/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center relative z-10">
        
        {/* --- LAYER 2: VISUAL 3D / LOGO DI SEBELAH KIRI --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center h-[300px] md:h-[500px]"
        >
          {/* Elemen Dekorasi Berputar (Orbit) */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-64 h-64 md:w-96 md:h-96 border border-[#bcff00]/20 rounded-full border-dashed"
          />
          
          {/* Logo 3D/Abstract Shape (Menggunakan CSS Art yang menarik) */}
          <div className="relative group">
            {/* Glow Tengah */}
            <div className="absolute inset-0 bg-[#bcff00] blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
            
            {/* Objek Utama: "The Digital Core" */}
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                rotateY: [0, 180, 360]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Box 3D Sederhana dengan CSS */}
              <div className="absolute inset-0 border-2 border-[#bcff00] rotate-45 rounded-xl shadow-[0_0_30px_#bcff00]" />
              <div className="absolute inset-4 border border-[#bcff00]/50 -rotate-12 rounded-lg" />
              
              {/* Icon Tengah (Bisa diganti logo Anda) */}
              <div className="z-10 text-[#bcff00]">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          </div>

          {/*Floating Tags di sekitar objek 3D */}
          <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 right-10 md:right-20 px-3 py-1 bg-black/50 border border-white/10 backdrop-blur-sm rounded-full text-[8px] text-[#bcff00] tracking-widest uppercase">Creative</motion.div>
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-10 left-10 md:left-20 px-3 py-1 bg-black/50 border border-white/10 backdrop-blur-sm rounded-full text-[8px] text-white/50 tracking-widest uppercase">Scalable</motion.div>
        </motion.div>

        {/* --- LAYER 3: TEKS DI SEBELAH KANAN --- */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="z-10 order-2"
        >
          {/* Badge Section */}
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#bcff00]/20 rounded-full mb-8 bg-[#bcff00]/5 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-[#bcff00] shadow-[0_0_8px_#bcff00]" />
            <h2 className="text-[#bcff00] text-[10px] font-black uppercase tracking-[0.4em]">
              / Personal Journey
            </h2>
          </div>
          
          <h3 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-[0.85] mb-8">
            Membangun Jembatan <br /> 
            <span className="text-transparent [-webkit-text-stroke:1px_#bcff00] opacity-60 drop-shadow-[0_0_15px_rgba(188,255,0,0.1)] text-4xl md:text-6xl not-italic">
                Antara Ide & Kode.
            </span>
          </h3>

          <div className="relative group mb-12">
            <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-xl border-l-2 border-[#bcff00]/20 pl-8 group-hover:border-[#bcff00]/50 transition-colors duration-500">
              Saya percaya bahwa teknologi harusnya memudahkan, bukan mempersulit. Fokus saya adalah menciptakan website yang tidak hanya berfungsi baik, tapi juga memiliki <span className="text-white italic">jiwa dan estetika</span> yang kuat untuk bisnis Anda.
            </p>
          </div>

          {/* Stat/Info Cards */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 pt-8 border-t border-white/5">
            <motion.div 
              whileHover={{ y: -5, backgroundColor: "rgba(188,255,0,0.05)" }}
              className="relative p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#bcff00]/20 transition-all"
            >
              <p className="text-[9px] text-[#bcff00] font-bold uppercase mb-3 tracking-[0.2em]">Visi</p>
              <p className="font-bold text-sm md:text-base uppercase tracking-tight text-white leading-tight">
                Digitalisasi <br/> Total UMKM
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5, backgroundColor: "rgba(188,255,0,0.05)" }}
              className="relative p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#bcff00]/20 transition-all shadow-inner"
            >
              <p className="text-[9px] text-[#bcff00] font-bold uppercase mb-3 tracking-[0.2em]">Misi</p>
              <p className="font-bold text-sm md:text-base uppercase tracking-tight text-white leading-tight">
                Kualitas <br/> <span className="text-[#bcff00]">Premium</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Layer Akhir: Grain & Scanlines Halus */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#bcff00]/[0.01] to-transparent" />
    </section>
  );
}