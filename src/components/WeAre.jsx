import React from 'react';
import { motion } from 'framer-motion';

export default function WeAre({ openModal }) {
  return (
    <section id="we-are" className="bg-[#004e9c] text-white py-24 relative overflow-hidden">
      {/* Subtle radial background glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.2)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl font-bold tracking-tight">
              We Are
            </h2>

            <p className="font-['Inter'] text-lg text-white/90 max-w-lg leading-relaxed font-normal">
              Neuerung HealthTech... the platform for innovative clinical solutions. Connects Hospitals, Diagnostic Centers, and Healthcare Providers to transact with much greater real-time precision, convenience, and a care advantage.
            </p>

            <button
              onClick={() => openModal('we-are')}
              className="bg-white text-[#004e9c] px-8 py-3 rounded-full font-['Inter'] text-xs font-semibold uppercase tracking-wider hover:bg-slate-100 transition-all duration-300 shadow-lg hover:scale-[1.02]"
            >
              Explore
            </button>
          </motion.div>

          {/* Right Live Telemetry Glass Panel Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl relative z-10 hover-lift">
              <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-inner h-64 relative border border-slate-800 flex items-center justify-center">
                
                {/* Simulated Telemetry Visualizer */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs text-sky-400 font-mono">
                    <span className="font-bold uppercase tracking-wider">LIVE TELEMETRY STREAM</span>
                    <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">NODE #01 ACTIVE</span>
                  </div>

                  <svg className="w-full h-24 opacity-80" viewBox="0 0 300 80">
                    <path d="M0 40 Q 30 10, 60 40 T 120 40 T 180 10 T 240 60 T 300 40" fill="none" stroke="#38BDF8" strokeWidth="2.5" />
                    <path d="M0 40 Q 40 70, 80 40 T 160 40 T 220 20 T 300 40" fill="none" stroke="#aac7ff" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>

                  <div className="text-white">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                      INTEGRATED CLINICAL DASHBOARD
                    </div>
                    <div className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white">
                      Neuerung HealthTech OS
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
