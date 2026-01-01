"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Monitor, Sparkles } from "lucide-react";

// Data Proyek Tetap Sama
const projectData = [
  {
    id: 1,
    title: 'Web Sistem Antrian Real-Time',
    desc: 'Web sistem antrian real-time memungkinkan pengguna untuk mengambil nomor antrian secara online dan melihat status antrian secara real-time.',
    type: 'web',
    images: [
      { src: '/project8-1.png' }, { src: '/project8-2.png' }, { src: '/project8-3.png' },
      { src: '/project8-4.png' }, { src: '/project8-5.png' }, { src: '/project8-6.png' },
      { src: '/project8-7.png' }, { src: '/project8-8.png' }, { src: '/project8-9.png' },
      { src: '/project8-10.png' }, { src: '/project8-11.png' }, { src: '/project8-12.png' },
      { src: '/project8-13.png' }, { src: '/project8-14.png' },
    ]
  },
  {
    id: 2,
    title: 'Web Toko Sablon',
    desc: 'Web toko sablon adalah platform online yang memungkinkan pengguna untuk membeli berbagai jenis sablon dengan mudah dan praktis.',
    type: 'web',
    images: [
      { src: '/project9-1.png' }, { src: '/project9-2.png' }, { src: '/project9-3.png' },
      { src: '/project9-4.png' }, { src: '/project9-5.png' }, { src: '/project9-6.png' },
      { src: '/project9-7.png' }, { src: '/project9-8.png' }, { src: '/project9-9.png' },
      { src: '/project9-10.png' }, { src: '/project9-11.png' }, { src: '/project9-12.png' },
      { src: '/project9-13.png' }, { src: '/project9-14.png' }, { src: '/project9-15.png' },
      { src: '/project9-16.png' }, { src: '/project9-17.png' }, { src: '/project9-18.png' },
    ]
  },
  {
    id: 3,
    title: 'Web Absensi Karyawan',
    desc: 'web absensi karyawan adalah sebuah platform online yang dirancang untuk memudahkan perusahaan dalam mengelola kehadiran dan absensi karyawan mereka secara efesien dan terorganisir.',
    type: 'web',
    images: [
      { src: '/project7-1.png' }, { src: '/project7-2.png' }, { src: '/project7-3.png' },
      { src: '/project7-4.png' }, { src: '/project7-5.png' }, { src: '/project7-6.png' },
      { src: '/project7-7.png' }, { src: '/project7-8.png' }, { src: '/project7-9.png' },
    ]
  },
  {
    id: 4,
    title: 'Web Coffe Shop',
    desc: 'Web Coffe Shop memudahkan pembeli untuk memesan coffe,makanan,minuman dan berbagai snak.',
    type: 'web',
    images: [
      { src: '/project4-1.jpeg' }, { src: '/project4-2.jpeg' }, { src: '/project4-3.jpeg' },
      { src: '/project4-4.png' }, { src: '/project4-5.jpeg' }, { src: '/project4-6.jpeg' },
      { src: '/project4-7.jpeg' }
    ]
  },
  {
    id: 5,
    title: 'SIMAM',
    desc: 'Sistem Informasi Manajemen Mahasiswa berbasis web dengan login Mahasiswa & Admin.',
    type: 'web',
    images: [
      { src: '/project1-1.png' }, { src: '/project1-2.png' }, { src: '/project1-3.png' },
      { src: '/project1-4.png' }, { src: '/project1-5.png' }, { src: '/project1-6.png' },
      { src: '/project1-7.png' },
    ]
  },
  {
    id: 6,
    title: 'Pendakian Merbabu',
    desc: 'Web pendakian & peminjaman alat Gunung Merbabu dengan fitur login dan validasi.',
    type: 'web',
    images: [
      { src: '/project2-1.png' }, { src: '/project2-2.png' }, { src: '/project2-3.png' },
      { src: '/project2-4.png' }, { src: '/project2-5.png' }
    ]
  },
  {
    id: 7,
    title: 'Diagnosa Penyakit',
    desc: 'Form gejala & diagnosis berbasis checklist untuk membantu identifikasi penyakit.',
    type: 'web',
    images: [
      { src: '/project3-1.png' }, { src: '/project3-2.png' }
    ]
  },
  {
    id: 8,
    title: 'Web Booking Hotel',
    desc: 'Website pemesanan hotel memungkinkan pengguna untuk mencari dan memesan kamar hotel secara praktis. Sistem dirancang untuk kemudahan akomodasi.',
    type: 'web',
    images: [
      { src: '/project5-1.jpeg' }, { src: '/project5-2.jpeg' }, { src: '/project5-3.jpeg' },
      { src: '/project5-4.jpeg' }, { src: '/project5-5.jpeg' }, { src: '/project5-6.jpeg' },
      { src: '/project5-7.jpeg' }
    ]
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | typeof projectData[0]>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    setActiveImageIndex(0);
  }, []);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    setActiveImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    setActiveImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = 'unset';
      return;
    }
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, closeModal]);

  if (!isMounted) return null;

  return (
    <section id="work" className="py-24 bg-[#050505] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#bcff00]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="px-6 md:px-12 lg:px-20 relative z-10">
        <div className="mb-12 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 md:w-12 h-[2px] bg-[#bcff00]" />
            <p className="text-[#bcff00] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold">
              Portfolio Gallery
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter italic leading-[1.1] md:leading-[1.0]"
          >
            Hasil Karya Saya <br /> 
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">
              Project & Case Study
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projectData.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 transition-all duration-500 group-hover:border-[#bcff00]/40 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img
                  src={project.images[0].src}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-70" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-[-10px] group-hover:translate-y-0">
                    <span className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase">
                      #{project.id}
                    </span>
                    <div className="bg-[#bcff00] p-2 rounded-full text-black shadow-[0_0_15px_#bcff00]">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-[#bcff00] animate-pulse" />
                      <span className="text-[10px] uppercase font-bold text-[#bcff00] tracking-widest">{project.type}</span>
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter leading-none group-hover:text-[#bcff00] transition-colors">{project.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-10 bg-black/98 backdrop-blur-xl"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-[0_0_80px_rgba(0,0,0,1)]"
            >
              {/* Image Section */}
              <div className="w-full lg:w-[65%] bg-black relative flex items-center justify-center min-h-[350px] lg:min-h-0 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    src={selectedProject.images[activeImageIndex].src}
                    className="w-full h-full object-contain p-4 md:p-12"
                    alt="Project shot"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
                  <button onClick={prevImage} className="pointer-events-auto p-4 bg-white/5 hover:bg-[#bcff00] rounded-full text-white hover:text-black transition-all border border-white/10 backdrop-blur-md group">
                    <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
                  </button>
                  <button onClick={nextImage} className="pointer-events-auto p-4 bg-white/5 hover:bg-[#bcff00] rounded-full text-white hover:text-black transition-all border border-white/10 backdrop-blur-md group">
                    <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
                  </button>
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-black tracking-[0.3em] uppercase">
                  {activeImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              {/* Sidebar Info Section */}
              <div className="w-full lg:w-[35%] flex flex-col h-full bg-[#0a0a0a]">
                <div className="flex-grow overflow-y-auto custom-scrollbar p-8 md:p-12">
                  <div className="space-y-10">
                    <div className="flex justify-between items-start">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#bcff00]/10 border border-[#bcff00]/20 text-[#bcff00] text-[10px] font-black tracking-widest uppercase">
                        <Sparkles size={12} /> Project Detail
                      </div>
                      <button
                        onClick={closeModal}
                        className="p-3 bg-white/5 rounded-full hover:bg-red-500/20 hover:text-red-500 transition-all border border-white/10"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <div>
                      <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4">
                        {selectedProject.title}
                      </h2>
                      <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase">
                        <Monitor size={14} className="text-[#bcff00]" /> {selectedProject.type} Solution
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="w-8 h-[2px] bg-[#bcff00]" />
                      <p className="text-white/70 text-base leading-relaxed font-medium italic">
                        "{selectedProject.desc}"
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Bagian bawah modal sekarang bersih tanpa tombol, hanya memberikan padding penutup */}
                <div className="p-6 border-t border-white/5 bg-[#0a0a0a]/50 text-center">
                  <p className="text-[9px] text-white/20 uppercase tracking-[0.5em]">Scroll to read more</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(188, 255, 0, 0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #bcff00; }
      `}</style>
    </section>
  );
}