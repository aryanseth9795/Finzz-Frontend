"use client";

import { motion } from "framer-motion";
import PoolAppSvg from "./mockups/PoolAppSvg";
import ChatAppSvg from "./mockups/ChatAppSvg";

export default function AppOverviewSection() {
  const steps = [
    {
      title: "1-to-1 Friend Ledger",
      desc: "Perfect for informal transactions. Keep a running tally of credits and debits between you and individual friends without any hassle.",
      color: "blue",
    },
    {
      title: "Group Pools",
      desc: "Planning a trip or sharing an apartment? Create a pool where multiple members can contribute, and Finzz will calculate the optimal way to settle up.",
      color: "indigo",
    },
    {
      title: "Personal Expense Ledger",
      desc: "Track your own independent spending. Log your daily expenses with ease, categorize them, and view insightful visual stats.",
      color: "green",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content Steps */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-6"
          >
            How Finzz works in real life.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 mb-12"
          >
            Splitting bills used to be a nightmare of spreadsheets and IOUs. Not
            anymore.
          </motion.p>

          <div className="space-y-12 relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-200" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-16"
              >
                <div
                  className={`absolute left-2.5 top-1 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-${step.color}-500 shadow-sm flex items-center justify-center`}
                />
                <h3 className="text-2xl font-bold font-outfit text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Mockups */}
        <div className="relative h-[600px] lg:h-[700px] flex items-center justify-center">
          <motion.div
            className="absolute w-[280px] h-[580px] bg-white rounded-[2.5rem] shadow-2xl shadow-indigo-500/10 border-8 border-slate-900 overflow-hidden z-10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="w-full h-full bg-slate-100 relative">
              <PoolAppSvg />
            </div>
          </motion.div>

          <motion.div
            className="absolute right-0 lg:-right-12 top-20 w-[240px] h-[500px] bg-white rounded-[2rem] shadow-2xl shadow-blue-500/10 border-[6px] border-slate-900 overflow-hidden opacity-80"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <div className="w-full h-full bg-slate-50 relative">
              <ChatAppSvg />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
