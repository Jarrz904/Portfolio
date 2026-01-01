"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [mounted, setMounted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hello@geministudio.com?subject=Pertanyaan Proyek dari ${formData.name}&body=Nama: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APesan: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  const currentYear = mounted ? new Date().getFullYear() : "2026";

  return (
    <footer id="contact" className="relative py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Sisi Kiri: Informasi & Judul */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#bcff00] font-bold mb-4 md:mb-6 italic">
                / Hubungi Saya
              </h2>
              <div className="mb-6">
                <h3 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-[0.95] md:leading-[0.9] tracking-tighter text-white">
                  Mari Bangun <br />
                  <span className="text-outline-custom italic">Karya</span> <br />
                  Hebat.
                </h3>
              </div>
              <p className="text-white/40 text-sm md:text-base max-w-sm leading-relaxed">
                Punya ide menarik atau proyek yang ingin diwujudkan? Saya siap membantu Anda membangun solusi digital yang berdampak.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex flex-col space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-white/20">Media Sosial</span>
                <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-white/80">
                  <a href="#" className="hover:text-[#bcff00] transition-colors border-b border-transparent hover:border-[#bcff00]">Instagram</a>
                  <a href="#" className="hover:text-[#bcff00] transition-colors border-b border-transparent hover:border-[#bcff00]">Facebook</a>
                </div>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Formulir Kontak */}
          <div className="bg-white/[0.02] p-6 sm:p-8 md:p-10 rounded-2xl border border-white/5 relative">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="group relative">
                <label className="text-[10px] uppercase tracking-widest text-white/30 group-focus-within:text-[#bcff00] transition-colors">Nama Lengkap</label>
                <input
                  required
                  type="text"
                  value={formData.name || ""}
                  className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#bcff00] transition-colors font-medium text-base md:text-lg placeholder:text-white/5"
                  placeholder="Siapa nama Anda?"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="group relative">
                <label className="text-[10px] uppercase tracking-widest text-white/30 group-focus-within:text-[#bcff00] transition-colors">Alamat Email</label>
                <input
                  required
                  type="email"
                  value={formData.email || ""}
                  className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#bcff00] transition-colors font-medium text-base md:text-lg placeholder:text-white/5"
                  placeholder="email@anda.com"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="group relative">
                <label className="text-[10px] uppercase tracking-widest text-white/30 group-focus-within:text-[#bcff00] transition-colors">Detail Proyek</label>
                <textarea
                  required
                  rows={3}
                  value={formData.message || ""}
                  className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#bcff00] transition-colors font-medium text-base md:text-lg resize-none placeholder:text-white/5"
                  placeholder="Ceritakan sedikit kebutuhan Anda..."
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group w-full flex items-center justify-between bg-[#bcff00] text-black px-6 md:px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-[0.2em] transition-all hover:shadow-[0_0_30px_rgba(188,255,0,0.2)]"
              >
                Kirim Pesan Sekarang
                <div className="bg-black/10 p-2 rounded-full group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={18} />
                </div>
              </motion.button>
            </form>
          </div>
        </div>

        {/* Baris Bawah Footer */}
        <div className="mt-16 md:mt-24 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-10 text-center md:text-left">
          <p className="text-[9px] opacity-30 uppercase tracking-[0.4em] font-medium">
            © {currentYear} Jarrs — All Rights Reserved
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#bcff00] rounded-full animate-pulse" />
            <span className="text-[9px] uppercase tracking-widest text-white/40">Tersedia untuk proyek baru</span>
          </div>
        </div>
      </div>
    </footer>
  );
}