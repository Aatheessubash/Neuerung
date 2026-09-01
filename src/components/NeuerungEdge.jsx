import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, LayoutGrid, ShieldCheck, SlidersHorizontal, RefreshCw } from 'lucide-react';

export default function NeuerungEdge() {
  const edgeCards = [
    {
      icon: Cpu,
      title: "AI Diagnostics",
      desc: "Digital predictive equivalent enabling interoperability among patient modalities, that is Clinic, Geography agnostic powered by Web and Mobile App."
    },
    {
      icon: LayoutGrid,
      title: "Unified Interface",
      desc: "All in one platform for insights and telemetry - Click to collect from your devices and scanners. Get all diagnostic methods interoperable in a single interface."
    },
    {
      icon: ShieldCheck,
      title: "Clinical Advantage",
      desc: "Usage of sponsored medical resources through platform. Upto 45 days interest-free credit period and multiple Lab limits."
    },
    {
      icon: SlidersHorizontal,
      title: "Controls",
      desc: "Customise clinical approvals with Maker Checker levels and allocation of sub limits at department levels. Set daily and monthly insight limits."
    },
    {
      icon: RefreshCw,
      title: "Reconciliation",
      desc: "Reconcile records seamlessly across vendors. Auto-reconciliation with your EHR/accounting systems. Dashboards and Reports download for easy reconciliation."
    }
  ];

  return (
    <section id="neuerung-edge" className="bg-[#f2f4f6] py-24">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 mb-16">
        <motion.h2
          className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl font-bold gradient-text tracking-tight"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
        >
          Neuerung Edge
        </motion.h2>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {edgeCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                className="bg-brand-gradient text-white p-6 rounded-3xl ambient-shadow hover-lift flex flex-col h-full shadow-lg shadow-[#5E81FF]/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <div className="w-12 h-12 mb-6 text-white/90">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold mb-4">
                  {card.title}
                </h3>
                <p className="font-['Inter'] text-sm text-white/80 flex-grow leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
