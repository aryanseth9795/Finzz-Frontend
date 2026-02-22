"use client";

import { motion } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section id="download" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-400/20 to-indigo-500/20 blur-[100px] rounded-full point-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-outfit font-bold text-slate-900 tracking-tight mb-8"
        >
          Ready to take control?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto"
        >
          Join thousands of users who are already making their financial lives
          easier. Download Finzz today and settle up without the stress.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.a
            href="https://github.com/aryanseth9795/Finzz-Frontend/releases/download/App/finzz_v1.0.0.apk"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex flex-col items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-3xl font-medium transition-colors shadow-2xl shadow-slate-900/20"
          >
            <div className="flex items-center gap-3">
              <Download
                size={24}
                className="group-hover:-translate-y-1 transition-transform"
              />
              <div className="text-left">
                <div className="text-xs text-slate-300 font-normal">
                  Download directly
                </div>
                <div className="text-lg font-bold">Get Android APK</div>
              </div>
            </div>
          </motion.a>

          {/* Optional App Store / Play Store button placeholders */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-3xl font-medium transition-colors shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                📱
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-500 font-normal">
                  Coming soon to
                </div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
