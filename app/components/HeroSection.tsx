"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Download, ChevronRight, Star } from "lucide-react";
import { useRef } from "react";
import HomeAppSvg from "./mockups/HomeAppSvg";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50 flex items-center justify-center"
    >
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-400/20 blur-[120px] rounded-full point-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          style={{ y, opacity }}
          className="flex flex-col items-start gap-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100"
          >
            <div className="flex gap-1 text-amber-400">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
            {/* <span className="text-sm font-medium text-slate-600">
              Loved by 10k+ users
            </span> */}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl lg:text-7xl font-outfit font-bold tracking-tight text-slate-900 leading-[1.1]"
          >
            Manage Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              Finances
            </span>{" "}
            together.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-slate-600 max-w-lg leading-relaxed"
          >
            Track expenses, manage shared pools, and settle up with friends
            instantly. The most beautiful way to handle your personal and shared
            finances.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <motion.a
              href="/downloads/finzz_v1.0.0.apk"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-xl shadow-blue-600/30"
            >
              <Download
                size={22}
                className="group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300"
              />
              Download App
            </motion.a>
            <motion.a
              href="#how-it-works"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-sm"
            >
              See How It Works
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Content / App Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            delay: 0.4,
            duration: 1,
            type: "spring",
            stiffness: 100,
          }}
          className="relative lg:h-[800px] flex items-center justify-center lg:justify-end perspective-1000"
        >
          <div className="relative w-[320px] h-[650px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-900 shadow-2xl shadow-slate-900/40 overflow-hidden transform-gpu rotate-y-[-10deg] rotate-x-[5deg]">
            {/* Dynamic island notch placeholder */}
            <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-20">
              <div className="w-32 h-6 bg-black rounded-b-3xl"></div>
            </div>

            {/* Inner Content SVG */}
            <div className="w-full h-full bg-[#F8FAFC] relative">
              <HomeAppSvg />
            </div>
          </div>

          {/* Floating UI Elements */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-0 md:-left-12 bg-white p-4 rounded-2xl shadow-xl shadow-black/5 border border-slate-100 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl">
              +₹
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Rahul sent</p>
              <p className="text-lg font-bold text-slate-900">₹8,500</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
