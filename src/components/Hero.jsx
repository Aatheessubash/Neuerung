import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play, TrendingUp, Monitor } from 'lucide-react';

export default function Hero({ openModal }) {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28 bg-[#f8fafc] relative overflow-hidden">
      
      {/* Background Subtle Gradient & Mesh */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />
      <div className="glow-dot top-0 right-0 transform translate-x-1/3 -translate-y-1/4 opacity-25" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & CTAs */}
          <motion.div
            className="lg:col-span-6 space-y-6 text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
          >
            {/* Tagline Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#004e9c] text-xs font-semibold tracking-wide"
              whileHover={{ scale: 1.03 }}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#004e9c] animate-spin-slow" />
              <span>Healthcare, Reimagined</span>
            </motion.div>

            {/* Headline matching screen.png */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] leading-[1.15] font-bold text-slate-900 tracking-tight font-['Plus_Jakarta_Sans']">
              Clinical AI Engine:{' '}
              <span className="bg-gradient-to-r from-[#003772] via-[#004e9c] to-[#005574] bg-clip-text text-transparent">
                Precision Diagnostics
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal font-['Inter'] max-w-xl">
              Empowering critical care with real-time risk scoring, predictive triage, and anomaly detection. Seamlessly integrated into your existing EHR and DICOM workflows for immediate clinical impact.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <motion.button
                onClick={() => openModal('tech-specs')}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#003772] hover:bg-[#004e9c] shadow-lg shadow-[#003772]/20 transition-colors group font-['Inter']"
              >
                <span>Explore Technical Specs</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => openModal('video-demo')}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold text-[#004e9c] bg-blue-50/80 hover:bg-blue-100 border border-blue-200/80 transition-colors font-['Inter']"
              >
                <Play className="w-4 h-4 mr-2 fill-current" />
                <span>Watch System Demo</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Visual Monitor Showcase Card */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <motion.div 
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xl shadow-blue-900/10 relative"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              
              {/* Header Tag */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest font-['Inter']">
                    LIVE INFERENCE
                  </span>
                </div>
              </div>

              {/* Monitor Graphic Frame matching screen.png */}
              <div className="relative rounded-2xl bg-slate-900 p-4 border border-slate-800 shadow-xl overflow-hidden text-white">
                
                {/* Desktop Monitor Screen Mockup */}
                <div className="aspect-[16/10] bg-slate-950 rounded-xl overflow-hidden border border-slate-800 relative flex flex-col justify-between p-4">
                  
                  {/* Top Bar of DICOM Viewer */}
                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                    <div className="flex items-center gap-2 font-mono">
                      <Monitor className="w-4 h-4 text-sky-400" />
                      <span>Neuerung HealthTech — Clinical AI Engine</span>
                    </div>
                    <span className="text-emerald-400 font-mono text-[10px] bg-emerald-950 px-2 py-0.5 rounded">
                      SYNCHRONIZED
                    </span>
                  </div>

                  {/* DICOM Chest Scan Visual Simulation */}
                  <div className="my-3 grid grid-cols-12 gap-3 items-center">
                    <div className="col-span-7 bg-slate-900 rounded-lg p-1 border border-slate-800 relative overflow-hidden flex items-center justify-center h-28 group">
                      
                      {/* Active DICOM Medical Laser Beam Scanner Line */}
                      <div className="animate-laser-scan" />

                      <img 
                        src="/images/dicom_chest_scan.png" 
                        alt="DICOM Clinical AI Scan" 
                        className="w-full h-full object-cover rounded-md opacity-85 group-hover:scale-105 transition-transform duration-500"
                      />

                      <div className="absolute top-2 left-2 text-[9px] font-mono text-sky-300 bg-sky-950/90 backdrop-blur-sm px-1.5 py-0.5 rounded border border-sky-800/80 flex items-center gap-1 z-30">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                        <span>Targeting Anomaly #01</span>
                      </div>
                    </div>

                    <div className="col-span-5 space-y-2 text-[10px] font-mono">
                      <div className="bg-slate-900 p-2 rounded border border-slate-800">
                        <div className="text-slate-400">Risk Assessment</div>
                        <div className="text-sky-400 font-bold text-xs mt-0.5">High Sensitivity</div>
                      </div>
                      <div className="bg-slate-900 p-2 rounded border border-slate-800">
                        <div className="text-slate-400">Model Confidence</div>
                        <div className="text-emerald-400 font-bold text-xs mt-0.5">99.2%</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-slate-500 flex justify-between pt-1 border-t border-slate-800">
                    <span>EHR Sync: PT-88492-X</span>
                    <span>Modality: DICOM 3.0</span>
                  </div>

                </div>
              </div>

              {/* Floating Accuracy Badge matching screen.png (Bottom Right) */}
              <motion.div 
                className="absolute -bottom-4 -right-2 sm:-right-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-200 flex items-center gap-3"
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.8 }}
              >
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    ICU Alert Accuracy
                  </div>
                  <div className="text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                    99.2%
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

