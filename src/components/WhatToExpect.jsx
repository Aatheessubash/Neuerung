import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, ShieldCheck, Zap } from 'lucide-react';

export default function WhatToExpect({ openModal }) {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <motion.div 
          className="text-left max-w-3xl space-y-3 mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-['Plus_Jakarta_Sans']">
            Core Capabilities
          </h2>
          <p className="text-base text-slate-600 font-['Inter'] leading-relaxed">
            Our algorithms operate continuously in the background, surfacing critical insights directly into your clinical line of sight.
          </p>
        </motion.div>

        {/* Bento Grid Layout matching screen.png */}
        <div className="space-y-6">
          
          {/* Top Row: 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Card 1: Automated Guidelines (5 cols) */}
            <motion.div
              className="md:col-span-5 bg-[#f8fafc] rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
              whileHover={{ y: -4 }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-blue-100/70 text-[#003772] flex items-center justify-center transition-transform group-hover:scale-110">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                  Automated Guidelines
                </h3>
                <p className="text-sm text-slate-600 font-['Inter'] leading-relaxed">
                  Real-time cross-referencing of patient vitals and history against the latest global clinical protocols, reducing diagnostic variance.
                </p>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => openModal('clinical-ai')}
                  className="inline-flex items-center text-xs font-bold text-[#003772] hover:text-[#004e9c] font-['Inter'] group/btn"
                >
                  <span>View Protocol Library</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Card 2: Sub-clinical Anomaly Detection (7 cols with Telemetry Graph) */}
            <motion.div
              className="md:col-span-7 bg-[#f8fafc] rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.8, 0.25, 1] }}
              whileHover={{ y: -4 }}
            >
              <div className="space-y-4 max-w-md">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100/70 text-[#003772] flex items-center justify-center transition-transform group-hover:scale-110">
                    <Activity className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 text-[11px] font-semibold uppercase tracking-wider font-['Inter']">
                    Continuous Monitoring
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                  Sub-clinical Anomaly Detection
                </h3>
                
                <p className="text-sm text-slate-600 font-['Inter'] leading-relaxed">
                  Identifying minute physiological deviations before they cascade into critical events. Our early warning system analyzes multi-modal data streams for ICU risk scoring.
                </p>
              </div>

              {/* Graphic Waveform Stream Mockup */}
              <div className="w-full md:w-64 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2 flex-shrink-0">
                <div className="text-[10px] font-mono text-slate-400 uppercase flex justify-between">
                  <span>Real-Time Sensor Stream</span>
                  <span className="text-blue-600 font-bold animate-pulse">Sync</span>
                </div>
                <div className="h-20 bg-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <svg className="w-full h-full opacity-85" viewBox="0 0 200 80">
                    <motion.path 
                      d="M0 40 Q 25 10, 50 40 T 100 40 T 150 10 T 200 40" 
                      fill="none" 
                      stroke="#38BDF8" 
                      strokeWidth="2"
                      animate={{ strokeDashoffset: [0, -40] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                      strokeDasharray="8 4"
                    />
                    <path d="M0 40 Q 30 70, 60 40 T 120 40 T 180 20 T 200 40" fill="none" stroke="#2563EB" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Card: Predictive Triage Engine (Full Width with 75% Risk Score Radial Chart) */}
          <motion.div
            className="bg-[#f8fafc] rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center gap-8 hover:shadow-lg transition-all duration-300 group"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.8, 0.25, 1] }}
            whileHover={{ y: -4 }}
          >
            {/* Radial 75% Risk Chart */}
            <div className="w-36 h-36 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0 relative group-hover:scale-105 transition-transform">
              <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#E2E8F0" strokeWidth="10" />
                <motion.circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  fill="none" 
                  stroke="#003772" 
                  strokeWidth="10" 
                  strokeDasharray="251.2" 
                  initial={{ strokeDashoffset: 251.2 }}
                  whileInView={{ strokeDashoffset: 62.8 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                  strokeLinecap="round" 
                />
              </svg>
              <div className="absolute text-center">
                <div className="text-2xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">75%</div>
                <div className="text-[10px] font-semibold text-slate-500 uppercase">Risk Score</div>
              </div>
            </div>

            {/* Text & Action */}
            <div className="space-y-4 max-w-2xl">
              <h3 className="text-2xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                Predictive Triage Engine
              </h3>
              <p className="text-sm text-slate-600 font-['Inter'] leading-relaxed">
                Optimize emergency department flow by forecasting patient deterioration trajectories. The AI assesses incoming vital signs and historical context to prioritize intervention automatically.
              </p>
              <div>
                <button
                  onClick={() => openModal('clinical-ai')}
                  className="inline-flex items-center text-xs font-bold text-[#003772] hover:text-[#004e9c] font-['Inter'] group/btn"
                >
                  <span>See ED Workflow Integration</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

