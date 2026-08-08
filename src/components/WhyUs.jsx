import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export default function WhyUs({ openModal }) {
  return (
    <section id="why-us" className="bg-[#004e9c] text-white py-24 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-['Inter'] text-sm sm:text-base text-white/80 uppercase tracking-widest font-semibold">
            Serving clients around the globe
          </p>

          <h2 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl font-bold tracking-tight">
            Why Us
          </h2>

          <p className="font-['Inter'] text-lg text-white/90 max-w-lg leading-relaxed">
            Creation of independent pipelines of large clinical datasets and insights items providing clutter-free control to maximize and better leverage healthcare flows.
          </p>

          <div className="pt-2">
            <button
              onClick={() => openModal('why-us')}
              className="bg-white text-[#004e9c] px-8 py-3 rounded-full font-['Inter'] text-xs font-semibold uppercase tracking-wider hover:bg-slate-100 transition-all shadow-lg hover:scale-[1.02]"
            >
              Explore
            </button>
          </div>
        </motion.div>

        {/* Right Column Globe Visual */}
        <motion.div
          className="relative h-64 sm:h-96 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-64 h-64 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-2xl">
            <Globe className="w-32 h-32 text-white/80 animate-[spin_20s_linear_infinite]" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
