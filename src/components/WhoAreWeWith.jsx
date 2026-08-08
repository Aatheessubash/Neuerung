import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, Cloud, Building2, Stethoscope, FileCode, CheckCircle2, Zap, Radio } from 'lucide-react';

export default function WhoAreWeWith({ openModal }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Ecosystem Partners' },
    { id: 'standards', label: 'Standards & Protocols' },
    { id: 'clinical', label: 'Clinical Partners' },
    { id: 'tech', label: 'AI & Cloud Infrastructure' }
  ];

  const partners = [
    {
      id: 'dicom',
      title: "DICOM 3.0 Standard",
      category: 'standards',
      categoryLabel: "Medical Imaging Protocol",
      icon: FileCode,
      tag: "PACS Compliant",
      desc: "Native compliance with the international DICOM 3.0 standard for high-fidelity radiological data handling, structured reporting, and multi-vendor PACS communication.",
      actionText: "EXPLORE PACS PIPELINE",
      modalType: "medical-imaging",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200"
    },
    {
      id: 'hl7',
      title: "HL7 / FHIR v4 Integration",
      category: 'standards',
      categoryLabel: "EHR Interoperability",
      icon: ShieldCheck,
      tag: "FHIR R4 Native",
      desc: "Bi-directional integration with Fast Healthcare Interoperability Resources, writing diagnostic scores and triage alerts directly into patient charts.",
      actionText: "VIEW EHR INTERFACE",
      modalType: "clinical-ai",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      id: 'apollo',
      title: "Apollo Hospitals Ecosystem",
      category: 'clinical',
      categoryLabel: "Clinical Deployment Site",
      icon: Building2,
      tag: "Active Clinical Co-Op",
      desc: "Primary clinical deployment partner co-validating real-time diagnostic workflows and emergency department risk scoring across Asia's largest hospital network.",
      actionText: "VIEW CLINICAL CASE",
      modalType: "we-are",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200"
    },
    {
      id: 'meenakshi',
      title: "Meenakshi Mission Research",
      category: 'clinical',
      categoryLabel: "Clinical Research Partner",
      icon: Stethoscope,
      tag: "Diagnostic Validation",
      desc: "Collaborative research and clinical site focused on evaluating AI diagnostic accuracy, patient throughput metrics, and bedside telemetry efficiency.",
      actionText: "VIEW RESEARCH HUB",
      modalType: "we-are",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      id: 'nvidia',
      title: "NVIDIA Clara AI Platform",
      category: 'tech',
      categoryLabel: "GPU Acceleration",
      icon: Cpu,
      tag: "TensorRT Accelerated",
      desc: "Harnessing specialized NVIDIA Clara healthcare computing architecture to accelerate deep learning inference, delivering sub-15ms bedside anomaly alerts.",
      actionText: "VIEW COMPUTING STACK",
      modalType: "clinical-ai",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-300"
    },
    {
      id: 'aws',
      title: "AWS HealthOmics Cloud",
      category: 'tech',
      categoryLabel: "HIPAA Compliant Cloud",
      icon: Cloud,
      tag: "ISO 27001 Secure",
      desc: "Built on AWS HealthOmics cloud infrastructure for HIPAA-compliant, infinitely scalable multi-modal storage and zero-latency clinical telemetry.",
      actionText: "VIEW CLOUD ARCHITECTURE",
      modalType: "medical-imaging",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-300"
    }
  ];

  const filteredPartners = activeCategory === 'all' 
    ? partners 
    : partners.filter(p => p.category === activeCategory);

  return (
    <section id="who-are-we-with" className="py-20 md:py-28 bg-[#f8fafc] border-t border-slate-200/80 relative overflow-hidden">
      
      {/* Ambient Radial Background Glow */}
      <div className="glow-dot top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 opacity-20" />
      <div className="glow-dot bottom-0 right-0 transform translate-x-1/3 opacity-20" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-left max-w-3xl space-y-4 mb-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#003772] text-xs font-bold uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5 text-[#003772] animate-pulse" />
            <span>STRATEGIC ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 font-['Plus_Jakarta_Sans'] tracking-tight">
            Integrated for{' '}
            <span className="bg-gradient-to-r from-[#003772] via-[#004e9c] to-[#005574] bg-clip-text text-transparent">
              Clinical Precision
            </span>
          </h2>

          <p className="text-base text-slate-600 font-['Inter'] leading-relaxed">
            Adhering to foundational medical data standards and partnering with healthcare pioneers to deliver seamless interoperability, advanced AI diagnostics, and scalable cloud infrastructure.
          </p>
        </motion.div>

        {/* Live Interoperability Data Flow Banner */}
        <motion.div 
          className="mb-12 bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 font-['Inter']"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#003772]/10 text-[#003772] flex items-center justify-center font-bold text-sm">
              <Zap className="w-5 h-5 text-[#003772]" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                Active Interoperability Mesh
              </div>
              <div className="text-[11px] text-slate-500">
                DICOM 3.0 • HL7 FHIR v4 • NVIDIA Clara AI • AWS HealthOmics
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200 text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Telemetry Pipeline: 100% Synchronized</span>
          </div>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-slate-200/80 pb-4">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold tracking-wide font-['Inter'] transition-all duration-200 ${
                  isActive 
                    ? 'text-white bg-[#003772] shadow-md' 
                    : 'text-slate-600 bg-white hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Partner Matrix Cards */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPartners.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle Gradient Accent Overlay on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#003772] to-[#005574] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="space-y-5">
                    {/* Header Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#003772] flex items-center justify-center group-hover:bg-[#003772] group-hover:text-white transition-colors duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>

                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${p.badgeColor}`}>
                        {p.tag}
                      </span>
                    </div>

                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-['Inter'] mb-1">
                        {p.categoryLabel}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] group-hover:text-[#003772] transition-colors">
                        {p.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 font-['Inter'] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <button
                      onClick={() => openModal(p.modalType)}
                      className="w-full inline-flex items-center justify-between text-xs font-bold text-[#003772] group-hover:text-[#004e9c] font-['Inter'] tracking-wider uppercase py-1 group/btn"
                    >
                      <span>{p.actionText}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}


