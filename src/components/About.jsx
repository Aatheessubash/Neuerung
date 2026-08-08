import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Scan, Radio, Network, CheckCircle, TrendingUp, Users, Building2 } from 'lucide-react';

export default function About() {
  const stats = [
    { label: "Core Domains", value: "4 Pillars", subtext: "AI, Imaging, IoT, Platforms" },
    { label: "Technology Stack", value: "Clinical AI", subtext: "Intelligent Connected Suite" },
    { label: "Location Hub", value: "Madurai", subtext: "Tamil Nadu, India" },
    { label: "Target Audience", value: "Providers", subtext: "Hospitals & Diagnostics" },
  ];

  const pillars = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Custom diagnostic models and clinical risk evaluation algorithms for early intervention.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Scan,
      title: "Medical Imaging",
      description: "High-precision computer vision tools designed to analyze DICOM radiological scans efficiently.",
      color: "from-sky-400 to-blue-500"
    },
    {
      icon: Radio,
      title: "IoT Healthcare",
      description: "Smart connected hardware devices capturing real-time physiological metrics at bedside.",
      color: "from-blue-600 to-cyan-500"
    },
    {
      icon: Network,
      title: "Digital Health Platforms",
      description: "Interoperable software suites enabling seamless data exchange across clinical systems.",
      color: "from-sky-500 to-indigo-500"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative SVG Orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs sm:text-sm font-semibold">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span>About Neuerung HealthTech</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Poppins']">
            Empowering Modern Healthcare Through{' '}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Connected Intelligence
            </span>
          </h2>
        </div>

        {/* Core Company Description Container */}
        <motion.div
          className="mt-12 bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-200/80 shadow-xl shadow-blue-900/5 relative overflow-hidden"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle background glow accent */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-sky-200/30 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
                <span className="font-bold text-slate-900">Neuerung HealthTech Private Limited</span> is a healthcare technology company focused on developing intelligent, connected, and clinically relevant solutions for modern healthcare. We combine artificial intelligence, medical imaging, IoT and digital platforms to support healthcare professionals, improve operational efficiency, enhance clinical decision-making, and contribute to better patient care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-100 text-emerald-600 mt-1">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Clinically Relevant Design</h4>
                    <p className="text-xs text-slate-500">Engineered with direct clinician workflow integration.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-100 text-emerald-600 mt-1">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Operational Excellence</h4>
                    <p className="text-xs text-slate-500">Optimizing diagnostic turnarounds and hospital throughput.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Info Box */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="p-3 rounded-xl bg-blue-600 text-white">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-semibold">Registered Entity</div>
                  <div className="text-sm font-bold text-slate-900">Neuerung HealthTech Pvt. Ltd.</div>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Headquarters</span>
                  <span className="font-semibold text-slate-800">Madurai, TN, India</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Official Domain</span>
                  <span className="font-semibold text-blue-600">neuerung.in</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Primary Contact</span>
                  <span className="font-semibold text-slate-800">healthtech@neuerung.in</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 4 Pillar Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${pillar.color} text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-['Poppins'] group-hover:text-blue-600 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-200/60 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-['Poppins']">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-800 mt-1">{stat.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{stat.subtext}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
