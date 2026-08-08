import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Scan, Cpu, LayoutGrid, ArrowRight, CheckCircle2, X, Sparkles, Activity, Layers } from 'lucide-react';

export default function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const solutions = [
    {
      id: "ai-decision-support",
      icon: Brain,
      title: "AI-Powered Clinical Decision Support",
      shortDesc: "Intelligent diagnostic models and risk evaluation algorithms for early intervention and precision care.",
      badge: "Healthcare AI",
      gradient: "from-blue-600 to-indigo-600",
      features: [
        "Real-time risk scoring for patient triage",
        "Clinical guideline compliance & automated alerts",
        "Predictive outcome modeling for ICU & wards",
        "EHR-integrated decision recommendations"
      ],
      clinicalImpact: "Reduces diagnostic turnaround time by up to 40% while improving early warning detection rates."
    },
    {
      id: "medical-imaging",
      icon: Scan,
      title: "Medical Imaging Solutions",
      shortDesc: "Advanced computer vision tools and DICOM processing to assist radiologists with fast, high-accuracy analysis.",
      badge: "Imaging Tech",
      gradient: "from-sky-500 to-blue-600",
      features: [
        "AI-assisted lesion, nodule & anomaly detection",
        "Ultra-fast cloudPACS & DICOM web viewer",
        "Multi-modal scan support (X-ray, CT, MRI)",
        "Automated structured reporting templates"
      ],
      clinicalImpact: "Accelerates radiological throughput and highlights critical urgent scans for immediate physician review."
    },
    {
      id: "iot-healthcare",
      icon: Cpu,
      title: "IoT Healthcare Devices",
      shortDesc: "Connected vital monitors and bedside sensors capturing continuous telemetry for proactive patient care.",
      badge: "Connected IoT",
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Continuous vital sign streaming (ECG, SpO2, Temp, BP)",
        "Wireless bedside telemetry hubs",
        "Edge AI anomaly processing on hardware",
        "Centralized nurse station dashboard integration"
      ],
      clinicalImpact: "Enables continuous 24/7 patient monitoring with zero delay in vital sign alert dispatches."
    },
    {
      id: "digital-health-platforms",
      icon: LayoutGrid,
      title: "Digital Health Platforms",
      shortDesc: "Integrated clinical workflow suites, tele-health portals, and interoperable data management infrastructure.",
      badge: "Digital Platform",
      gradient: "from-indigo-600 to-sky-500",
      features: [
        "Unified clinical data exchange & FHIR compliance",
        "Tele-consultation & remote patient monitoring",
        "Intelligent hospital workflow automation",
        "Patient engagement portals & mobile apps"
      ],
      clinicalImpact: "Eliminates data silos across hospital departments, providing unified patient histories across touchpoints."
    }
  ];

  return (
    <section id="solutions" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background Molecular Grid */}
      <div className="absolute inset-0 bg-hex-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold">
            <Layers className="w-4 h-4 text-blue-600" />
            <span>Our Core Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Poppins']">
            Intelligent, Connected{' '}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Clinical Solutions
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Tailored technology architectures designed to elevate patient outcomes, empower clinicians, and streamline hospital operations.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Subtle Card Background Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-5 rounded-bl-full pointer-events-none group-hover:opacity-10 transition-opacity`} />

                <div>
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">0{index + 1}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.gradient} text-white flex items-center justify-center mb-6 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Poppins'] leading-snug group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.shortDesc}
                  </p>
                </div>

                {/* Learn More Action Button */}
                <button
                  onClick={() => setSelectedSolution(item)}
                  className="w-full mt-2 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Detail Modal / Drawer */}
      <AnimatePresence>
        {selectedSolution && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSolution(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-5">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${selectedSolution.gradient} text-white flex items-center justify-center shadow-md`}>
                  <selectedSolution.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {selectedSolution.badge}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 font-['Poppins']">
                    {selectedSolution.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {selectedSolution.shortDesc}
              </p>

              {/* Feature List */}
              <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                  Key Technical Features
                </h4>
                {selectedSolution.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Clinical Impact Box */}
              <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80 mb-6 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-blue-900">Clinical Impact</div>
                  <div className="text-xs text-blue-800 leading-relaxed mt-0.5">
                    {selectedSolution.clinicalImpact}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSelectedSolution(null)}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedSolution(null)}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 shadow-md"
                >
                  Request Consultation
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
