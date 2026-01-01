"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Project", href: "#work" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <nav className="fixed top-0 w-full z-50 p-6 md:p-10 flex justify-between items-center mix-blend-difference">
        {/* LOGO SECTION */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-black text-2xl tracking-tighter text-white uppercase group cursor-default"
        >
          welcome to <span className="text-white group-hover:text-[#bcff00] transition-colors duration-500">portfolio</span>
        </motion.div>
        
        {/* MENU SECTION */}
        <div className="flex gap-6 md:gap-10 text-[10px] uppercase tracking-[0.2em] font-bold">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative text-white group overflow-hidden py-1"
            >
              <span className="relative z-10 group-hover:opacity-100 transition-opacity">
                {link.name}
              </span>
              
              {/* EFEK GARIS BAWAH (UNDERLINE ANIMATION) */}
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#bcff00] translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              
              {/* EFEK TEXT GLITCH TIPIS SAAT HOVER */}
              <span className="absolute top-0 left-0 w-full h-full text-[#bcff00] opacity-0 group-hover:opacity-50 group-hover:animate-pulse -z-10 blur-[2px]">
                {link.name}
              </span>
            </motion.a>
          ))}
        </div>

        {/* EFEK DEKORATIF SUDUT (OPTIONAL) */}
        <div className="absolute top-0 right-0 p-2 opacity-20">
          <div className="w-10 h-[1px] bg-white mb-1" />
          <div className="w-[1px] h-10 bg-white ml-auto" />
        </div>
      </nav>
    </>
  );
}