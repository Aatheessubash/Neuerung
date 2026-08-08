import React from 'react';
import { motion } from 'framer-motion';
import { Layers, RefreshCw } from 'lucide-react';

export default function HowIsItDone() {
  return (
    <section id="how-is-it-done" className="py-20 md:py-28 bg-[#f8fafc] border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Specs & Features */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#003772] font-['Inter']">
              SYSTEM ARCHITECTURE
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] tracking-tight">
              Zero-Friction Integration
            </h2>

            <p className="text-base text-slate-600 font-['Inter'] leading-relaxed">
              Deploy securely within your existing infrastructure. Our clinical engine interfaces directly with standard protocols, requiring no specialized hardware or disruption to clinical routines.
            </p>

            <div className="space-y-6 pt-4">
              {/* Feature 1 */}
              <motion.div 
                className="flex items-start gap-4 p-3 rounded-2xl transition-colors hover:bg-white/80"
                whileHover={{ x: 4 }}
              >
                <div className="p-3 rounded-2xl bg-blue-100/70 text-[#003772] flex-shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                    Native DICOM Processing
                  </h4>
                  <p className="text-xs text-slate-600 font-['Inter'] mt-1 leading-relaxed">
                    Direct ingestion of imaging modalities for structural anomaly correlation.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                className="flex items-start gap-4 p-3 rounded-2xl transition-colors hover:bg-white/80"
                whileHover={{ x: 4 }}
              >
                <div className="p-3 rounded-2xl bg-blue-100/70 text-[#003772] flex-shrink-0">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                    HL7 & FHIR Compliant EHR Sync
                  </h4>
                  <p className="text-xs text-slate-600 font-['Inter'] mt-1 leading-relaxed">
                    Bi-directional data flow ensuring risk scores are written back directly to the patient chart.
                  </p>
                </div>
              </motion.div>
            </div>

          </motion.div>

          {/* Right Column: Dark Slate JSON Terminal Code Editor Card matching screen.png */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <motion.div 
              className="bg-slate-900 text-slate-100 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl font-mono text-xs sm:text-sm space-y-4 relative group"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-slate-400">
                  api_payload.json
                </span>
              </div>

              <pre className="text-sky-300 leading-relaxed overflow-x-auto">
{`{
  "patient_id": "PT-88492-X",
  "engine_status": "active",
  "streams": ["HL7_v2", "DICOM_WADO"],
  "inference": {
    "model": "ICU_Early_Warning_V4",
    "risk_score": 0.82,
    "confidence": 0.94,
    "flags": ["respiratory_distress", "sepsis_risk_elevated"]
  },
  "action": "trigger_rapid_response"
}`}
              </pre>

              <div className="pt-2 text-[10px] text-slate-500 border-t border-slate-800 flex justify-between">
                <span>Latency: 12ms</span>
                <span className="text-emerald-400 font-semibold animate-pulse">Status 200 OK</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

