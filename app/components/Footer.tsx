"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SUPPORT_EMAIL } from "../lib/site";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 text-center text-slate-500 font-medium">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center items-center mb-6">
          <img
            src="/finzz-logo-transparent.png"
            alt="Finzz Logo"
            className="h-10 w-auto object-contain drop-shadow-sm opacity-90"
          />
        </div>
        <p>© {new Date().getFullYear()} Finzz App. All rights reserved.</p>
        <div className="mt-6 flex justify-center gap-6 text-sm">
          <Link href="/privacy" className="hover:text-slate-900 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-slate-900 transition-colors">
            Terms of Service
          </Link>
          <Link href="/delete-account" className="hover:text-slate-900 transition-colors">
            Delete Account
          </Link>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-slate-900 transition-colors">
            Contact
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
