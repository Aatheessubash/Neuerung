import React from 'react';
import { motion } from 'framer-motion';

export default function BookDemoBanner({ openModal }) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
          className="bg-brand-gradient text-white rounded-3xl p-10 sm:p-16 text-center space-y-4 shadow-2xl shadow-[#5E81FF]/30 relative overflow-hidden"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.8, 0.25, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans']"
          >
            Experience the Neuerung Advantage.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.8, 0.25, 1] }}
            className="text-sm sm:text-base text-blue-50 max-w-2xl mx-auto font-['Inter'] leading-relaxed"
          >
            Schedule a personalized demonstration of our clinical precision tools. See firsthand how our intuitive interfaces and robust analytics can elevate your medical practice.
          </motion.p>

          <div className="pt-4">
            <motion.button
              onClick={() => openModal('book-demo')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-[#5E81FF] px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all shadow-lg font-['Inter']"
            >
              Request Demonstration
            </motion.button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
