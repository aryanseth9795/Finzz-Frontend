"use client";

import { motion } from "framer-motion";
import { PieChart, Users, MessageSquareText, ShieldCheck } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Users size={28} className="text-blue-600" />,
      title: "1-to-1 Friend Ledger",
      description:
        "Keep track of informal credits and debits directly with individual friends. No more forgotten coffee IOUs.",
      bgColor: "bg-blue-50",
    },
    {
      icon: <MessageSquareText size={28} className="text-indigo-600" />,
      title: "Group Pools",
      description:
        "Create a pool for trips or shared living. Add members, log expenses, and let Finzz calculate the optimal way to settle balances.",
      bgColor: "bg-indigo-50",
    },
    {
      icon: <PieChart size={28} className="text-pink-600" />,
      title: "Personal Expense Ledger",
      description:
        "Log your independent daily expenses. Filter by period, search by remarks, and view insightful visual stats of your spending habits.",
      bgColor: "bg-pink-50",
    },
    {
      icon: <ShieldCheck size={28} className="text-emerald-600" />,
      title: "Dual Verification",
      description:
        "Ensure complete transparency. Transactions require verification from the receiving party before a debt is marked as officially settled.",
      bgColor: "bg-emerald-50",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            Why Choose Finzz
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-6"
          >
            Everything you need for perfect financial harmony.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-8 transition-all hover:shadow-xl hover:shadow-slate-200/50"
            >
              <div
                className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-outfit">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
