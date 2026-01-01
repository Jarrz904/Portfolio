"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Project", href: "#work" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  // Menutup menu saat link diklik (untuk mobile)
  const toggleMenu = () => setIsOpen(!isOpen);

  // Mencegah scroll saat menu mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <nav className="fixed top-0 w-full z-[100] p-6 md:p-10 flex justify-between items-center mix-blend-difference">
        {/* LOGO SECTION */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-black text-xl md:text-2xl tracking-tighter text-white uppercase group cursor-default shrink-0"
        >
          welcome to <span className="text-white group-hover:text-[#bcff00] transition-colors duration-500">portfolio</span>
        </motion.div>
        
        {/* DESKTOP MENU (Hidden on Mobile) */}
        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-bold">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative text-white group overflow-hidden py-1"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#bcff00] translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="absolute top-0 left-0 w-full h-full text-[#bcff00] opacity-0 group-hover:opacity-50 group-hover:animate-pulse -z-10 blur-[2px]">
                {link.name}
              </span>
            </motion.a>
          ))}
        </div>

        {/* MOBILE HAMBURGER BUTTON (Hidden on Desktop) */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="text-white focus:outline-none p-2 relative z-[110]"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* DEKORATIF SUDUT */}
        <div className="absolute top-0 right-0 p-2 opacity-20 pointer-events-none">
          <div className="w-10 h-[1px] bg-white mb-1" />
          <div className="w-[1px] h-10 bg-white ml-auto" />
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-[90] flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={toggleMenu}
                  className="text-4xl font-black text-white uppercase tracking-tighter hover:text-[#bcff00] italic transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            {/* Background Text Decoration for Mobile */}
            <div className="absolute bottom-10 left-0 w-full text-center opacity-10 pointer-events-none">
              <span className="text-8xl font-black uppercase text-white tracking-tighter">MENU</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}