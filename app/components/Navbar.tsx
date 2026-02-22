"use client";

import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll to section
  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/finzz-logo-transparent.png"
            alt="Finzz Logo"
            className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_4px_12px_rgba(59,130,246,0.15)] transition-transform hover:scale-105"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo("features")}
            className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollTo("how-it-works")}
            className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
          >
            How it Works
          </button>
          <button
            onClick={() => scrollTo("testimonials")}
            className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
          >
            Reviews
          </button>

          <motion.a
            href="/downloads/finzz-app.apk"
            download="finzz-app.apk"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-slate-900/20"
          >
            <Download size={18} />
            App Download
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-900 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-black/5 shadow-xl shadow-black/5 p-6 flex flex-col gap-4"
        >
          <button
            onClick={() => scrollTo("features")}
            className="text-left text-slate-700 font-medium text-lg py-2"
          >
            Features
          </button>
          <button
            onClick={() => scrollTo("how-it-works")}
            className="text-left text-slate-700 font-medium text-lg py-2"
          >
            How it Works
          </button>
          <button
            onClick={() => scrollTo("testimonials")}
            className="text-left text-slate-700 font-medium text-lg py-2"
          >
            Reviews
          </button>

          <a
            href="/downloads/finzz-app.apk"
            download="finzz-app.apk"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium mt-4"
          >
            <Download size={20} />
            App Download
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
