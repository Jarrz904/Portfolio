"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Plus, Rocket, ShieldCheck, Zap, MessageSquare, Code2, Layout, Search } from "lucide-react";

const PRICING_DATA = [
  // WEB STATIS
  {
    name: "Landing Page",
    category: "Statis",
    price: "300.000",
    features: ["Satu Halaman Fokus", "Integrasi Pesan WhatsApp", "Tampilan Responsif HP", "Gratis Hosting 1 Tahun"],
    highlight: false,
  },
  {
    name: "Company Profile",
    category: "Statis",
    price: "400.000",
    features: ["Hingga 5 Halaman Utama", "Optimasi SEO Dasar", "Integrasi Lokasi Google Maps", "Desain Antarmuka Elegan"],
    highlight: false, 
  },
  {
    name: "Katalog Produk",
    category: "Statis",
    price: "400.000",
    features: ["Galeri Foto Produk", "Detail Spesifikasi Produk", "Pemesanan Langsung Ke WA", "Kecepatan Akses Tinggi"],
    highlight: false,
  },
  // WEB DINAMIS
  {
    name: "Sistem Booking",
    category: "Dinamis",
    price: "600.000",
    features: ["Sistem Reservasi Online", "Sinkronisasi Kalender", "Panel Admin Kelola Data", "Notifikasi Otomatis Email"],
    highlight: false,
  },
  {
    name: "Toko Online",
    category: "Dinamis",
    price: "700.000",
    features: ["Kelola Produk & Stok", "Sistem Keranjang Belanja", "Hitung Ongkos Kirim Otomatis", "Laporan Riwayat Penjualan"],
    highlight: false,
  },
  {
    name: "Custom Web",
    category: "Dinamis",
    price: "Request",
    features: ["Sesuai Kebutuhan Khusus", "Sistem Kompleks & Rumit", "Dukungan Teknis Prioritas", "Arsitektur Skala Besar"],
    highlight: false,
  },
];

const OPTIONAL_ADDONS = [
  { name: "Domain .com (1 Tahun)", price: "175rb" },
  { name: "Desain Logo Bisnis", price: "100rb" },
  { name: "Setup Email Profesional", price: "50rb" },
  { name: "Penambahan 1 Halaman", price: "50rb" },
  { name: "Fitur Tambahan Standar", price: "100rb" },
];

const ADVANTAGES = [
  { icon: <Zap size={18} />, title: "Pengiriman Cepat", desc: "Proses pengerjaan kilat & selesai tepat waktu." },
  { icon: <ShieldCheck size={18} />, title: "Kode Aman", desc: "Keamanan data & sistem menjadi prioritas utama." },
  { icon: <Rocket size={18} />, title: "Siap SEO", desc: "Struktur website dirancang agar mudah ditemukan Google." },
];

const WORKFLOW = [
  { step: "01", title: "Diskusi & Konsultasi", icon: <MessageSquare size={16} /> },
  { step: "02", title: "Perancangan Desain", icon: <Layout size={16} /> },
  { step: "03", title: "Proses Development", icon: <Code2 size={16} /> },
  { step: "04", title: "Uji Coba & Rilis", icon: <Rocket size={16} /> },
];

export default function Pricing() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fungsi untuk mengarahkan ke WhatsApp dengan pesan otomatis
  const handleWhatsApp = (packageName: string) => {
    const phoneNumber = "6285741129749";
    const message = `Halo, saya ingin memesan paket *${packageName}*. Bisa bantu proses selanjutnya?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  if (!isMounted) return null;

  return (
    <section id="pricing" className="py-20 px-6 md:px-12 lg:px-20 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-xs uppercase tracking-[0.5em] text-white/40 font-bold mb-3">/ Rencana Harga</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic text-white leading-none">
            Pilih Paket <br /> <span className="opacity-50 text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">Digital Anda</span>
          </h3>
        </div>

        {/* --- GRID SYSTEM --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12">
          {PRICING_DATA.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative p-8 border border-white/10 bg-[#0a0a0a]/50 rounded-2xl flex flex-col transition-all duration-500 hover:border-[#bcff00] hover:bg-[#bcff00]/5 hover:shadow-[0_0_40px_rgba(188,255,0,0.1)] hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-widest opacity-50 block mb-1 group-hover:text-[#bcff00] transition-colors">
                    Web {tier.category}
                  </span>
                  <h4 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-[#bcff00] transition-colors">
                    {tier.name}
                  </h4>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="bg-[#bcff00] text-black text-[7px] font-black px-2 py-0.5 rounded uppercase">
                    Terpilih
                  </span>
                </div>
              </div>

              <div className="flex items-baseline gap-1 mb-6 text-white group-hover:text-[#bcff00] transition-colors">
                <span className="text-xs opacity-50 font-bold">Rp</span>
                <span className="text-4xl font-black italic">{tier.price}</span>
                {tier.price !== "Request" && <span className="text-xs opacity-50 font-bold">,-</span>}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-[11px] text-white/50 group-hover:text-white/80 transition-colors">
                    <Check size={12} className="text-white/20 group-hover:text-[#bcff00] transition-colors flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleWhatsApp(tier.name)}
                className="w-full py-3.5 rounded-lg font-black text-[9px] uppercase tracking-[0.2em] transition-all bg-white/10 text-white group-hover:bg-[#bcff00] group-hover:text-black group-hover:shadow-[0_10px_20px_rgba(188,255,0,0.2)] active:scale-95 border border-white/10 group-hover:border-transparent"
              >
                Pesan Sekarang
              </button>
            </motion.div>
          ))}
        </div>

        {/* --- FITUR OPSIONAL (ADD-ONS) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10 border-t border-white/5">
          <div>
            <div className="flex items-center gap-3 mb-6">
               <Plus size={16} className="text-[#bcff00]" />
               <h5 className="text-sm font-black uppercase tracking-widest text-white">Layanan Tambahan Opsional</h5>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {OPTIONAL_ADDONS.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[#bcff00]/30 transition-all">
                  <span className="text-[10px] font-bold text-white/70 uppercase tracking-tight">{item.name}</span>
                  <span className="text-[10px] font-black text-[#bcff00]">+ {item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* --- ALUR PEMBUATAN --- */}
          <div>
            <div className="flex items-center gap-3 mb-6">
               <Search size={16} className="text-[#bcff00]" />
               <h5 className="text-sm font-black uppercase tracking-widest text-white">Alur Pengerjaan Website</h5>
            </div>
            <div className="relative flex flex-col gap-4">
              {WORKFLOW.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black text-[#bcff00] group-hover:bg-[#bcff00] group-hover:text-black transition-all">
                    {item.step}
                  </div>
                  <div className="flex items-center gap-3 flex-grow p-3 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-white/30">{item.icon}</span>
                    <span className="text-[10px] font-bold text-white uppercase tracking-[0.1em]">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- KEUNGGULAN (BENEFITS) --- */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ADVANTAGES.map((adv, idx) => (
            <div key={idx} className="p-6 bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/5 flex flex-col items-center text-center group hover:border-[#bcff00]/20 transition-all">
              <div className="mb-4 text-[#bcff00] bg-[#bcff00]/10 p-3 rounded-full group-hover:scale-110 transition-transform">
                {adv.icon}
              </div>
              <h6 className="text-xs font-black uppercase text-white mb-2 tracking-widest">{adv.title}</h6>
              <p className="text-[10px] text-white/40 leading-relaxed uppercase font-medium">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}