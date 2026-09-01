import React from 'react';
import { Target, Award, HeartHandshake, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Mission() {
  return (
    <section id="mission" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Dark Hex Pattern */}
      <div className="absolute inset-0 dark-hex-pattern opacity-40 pointer-events-none" />

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/20 to-sky-500/20 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl shadow-blue-950/80 overflow-hidden"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle Corner Hexagon Branding */}
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none hidden sm:block">
            <svg className="w-48 h-48 text-sky-400" viewBox="0 0 100 100" fill="currentColor">
              <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" />
            </svg>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            {/* Mission Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-sky-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <Target className="w-4 h-4 text-sky-400" />
              <span>Our Purpose & Commitment</span>
            </div>

            {/* Mission Section Heading */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-300 font-['Poppins']">
              OUR MISSION
            </h2>

            {/* The Highlighted Mission Statement */}
            <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-white leading-relaxed tracking-tight font-['Poppins']">
              “To deliver reliable AI, digital, IoT, and clinical technology solutions that improve healthcare efficiency, decision-making, and patient care.”
            </blockquote>

            {/* Core Values / Commitments Grid */}
            <div className="pt-8 border-t border-slate-700/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              
              <motion.div
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="p-2 rounded-lg bg-blue-500/20 text-sky-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Reliability</div>
                  <div className="text-sm font-bold text-white">Clinical Grade</div>
                </div>
              </motion.div>

              <motion.div
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="p-2 rounded-lg bg-blue-500/20 text-sky-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Efficiency</div>
                  <div className="text-sm font-bold text-white">Faster Outcomes</div>
                </div>
              </motion.div>

              <motion.div
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="p-2 rounded-lg bg-blue-500/20 text-sky-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Decision Support</div>
                  <div className="text-sm font-bold text-white">AI Driven</div>
                </div>
              </motion.div>

              <motion.div
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="p-2 rounded-lg bg-blue-500/20 text-sky-400">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Patient Care</div>
                  <div className="text-sm font-bold text-white">Human Centric</div>
                </div>
              </motion.div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
