import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Mail, Phone, Building, User, Calendar, MessageSquare, Send, Play } from 'lucide-react';
import Logo from './Logo';

export default function Modals({ activeModal, closeModal, modalData }) {
  const [demoForm, setDemoForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    businessType: 'Hospital Network',
    date: '',
    notes: ''
  });

  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setDemoSubmitted(true);
    }, 800);
  };

  if (!activeModal) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-md overflow-y-auto">
        <motion.div
          className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8 overflow-hidden"
          initial={{ opacity: 0, scale: 0.93, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 15 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* 1. WE ARE MODAL */}
          {activeModal === 'we-are' && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Logo showText={false} size="small" />
                <div>
                  <span className="text-xs font-bold text-[#004E9C] uppercase tracking-wider">Company Profile</span>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-['Poppins']">
                    Neuerung HealthTech Private Limited
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-sm leading-relaxed border-t border-slate-100 pt-4">
                <p className="text-base font-medium text-slate-800">
                  Neuerung HealthTech Private Limited is a healthcare technology company focused on developing intelligent, connected, and clinically relevant solutions for modern healthcare.
                </p>
                <p>
                  We combine artificial intelligence, medical imaging, IoT, and digital health platforms to support healthcare professionals, improve operational efficiency, enhance clinical decision-making, and contribute to better patient care.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#004E9C] mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">Headquarters</h4>
                    <p className="text-xs text-slate-600">Madurai, Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#004E9C] mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">Official Domain</h4>
                    <p className="text-xs font-semibold text-[#004E9C]">neuerung.in</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={closeModal}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#004E9C] text-white hover:bg-blue-800 transition-colors shadow-md"
                >
                  Close Overview
                </button>
              </div>
            </div>
          )}

          {/* 2. CLINICAL AI MODAL */}
          {activeModal === 'clinical-ai' && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-[#004E9C] uppercase tracking-wider">Clinical AI Suite</span>
                <h3 className="text-2xl font-extrabold text-slate-900 font-['Poppins']">
                  AI-Powered Clinical Decision Support
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Our proprietary AI algorithms evaluate multi-parameter patient data streams in real time, delivering proactive diagnostic assistance and automated risk triage directly into clinician workflows.
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Core Functional Modules</h4>
                {[
                  "Real-time ICU & ward patient risk scoring algorithms",
                  "Automated clinical guideline compliance triggers",
                  "Early warning anomaly flags for cardiac & vital instability",
                  "EHR-interoperable decision recommendation engine"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={closeModal}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#004E9C] text-white hover:bg-blue-800 transition-colors shadow-md"
                >
                  Close Details
                </button>
              </div>
            </div>
          )}

          {/* 3. MEDICAL IMAGING & IOT MODAL */}
          {activeModal === 'medical-imaging' && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-[#004E9C] uppercase tracking-wider">Connected Infrastructure</span>
                <h3 className="text-2xl font-extrabold text-slate-900 font-['Poppins']">
                  Medical Imaging & IoT Device Ecosystem
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Seamlessly connects high-speed DICOM processing pipelines with continuous wireless telemetry hardware to deliver instant diagnostic clarity and bedside monitoring.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-2">
                  <h4 className="text-xs font-bold text-[#004E9C] uppercase">Medical Imaging PACS</h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li>• DICOM Web Viewer with AI scan overlay</li>
                    <li>• Lesion & nodule computer vision highlighting</li>
                    <li>• Rapid multi-modal image rendering</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-2">
                  <h4 className="text-xs font-bold text-sky-800 uppercase">IoT Hardware Telemetry</h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li>• Continuous vital sign streaming (&lt; 15ms)</li>
                    <li>• Wireless bedside sensor hubs</li>
                    <li>• Centralized nurse station monitor sync</li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={closeModal}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#004E9C] text-white hover:bg-blue-800 transition-colors shadow-md"
                >
                  Close Details
                </button>
              </div>
            </div>
          )}

          {/* 4. WHY US MODAL */}
          {activeModal === 'why-us' && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-[#004E9C] uppercase tracking-wider">Value Proposition</span>
                <h3 className="text-2xl font-extrabold text-slate-900 font-['Poppins']">
                  Why Partner with Neuerung HealthTech
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Clinical Relevance", desc: "Co-designed with practicing clinicians for seamless hospital workflow fit." },
                  { title: "Operational Efficiency", desc: "Dramatically reduces turnaround time and eliminates manual data entry." },
                  { title: "Scalable AI/IoT", desc: "Modular architecture ready to scale from clinics to multi-specialty hospital chains." },
                  { title: "India-Based Support", desc: "Dedicated engineering and technical team operating directly from Madurai, India." },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <h4 className="text-sm font-bold text-slate-900 mb-1 font-['Poppins']">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={closeModal}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#004E9C] text-white hover:bg-blue-800 transition-colors shadow-md"
                >
                  Close Overview
                </button>
              </div>
            </div>
          )}

          {/* 5. BOOK A DEMO FORM MODAL */}
          {activeModal === 'book-demo' && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#004E9C] uppercase tracking-wider">Schedule Demonstration</span>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-['Poppins']">
                    Book a Live Demo
                  </h3>
                </div>
                <Logo showText={false} size="small" />
              </div>

              {demoSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Demo Scheduled!</h4>
                  <p className="text-sm text-slate-600">
                    Thank you, <span className="font-semibold text-slate-900">{demoForm.name}</span>. Our clinical technology team will reach out to <span className="font-semibold text-slate-900">{demoForm.email}</span> to confirm your session.
                  </p>
                  <button
                    onClick={closeModal}
                    className="px-6 py-2.5 rounded-full text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Rajesh Kumar"
                        value={demoForm.name}
                        onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#004E9C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Organization Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Apollo / City Hospital"
                        value={demoForm.company}
                        onChange={(e) => setDemoForm({ ...demoForm, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#004E9C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@hospital.com"
                        value={demoForm.email}
                        onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#004E9C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={demoForm.phone}
                        onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#004E9C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nature of Business</label>
                      <select
                        value={demoForm.businessType}
                        onChange={(e) => setDemoForm({ ...demoForm, businessType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#004E9C]"
                      >
                        <option>Hospital Network</option>
                        <option>Diagnostic Imaging Lab</option>
                        <option>Clinic / Healthcare Provider</option>
                        <option>Medical Device OEM</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Preferred Demo Date</label>
                      <input
                        type="date"
                        value={demoForm.date}
                        onChange={(e) => setDemoForm({ ...demoForm, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#004E9C]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#004E9C] hover:bg-blue-800 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-colors mt-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Submit Demo Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          )}

          {/* 8. TECHNICAL SPECS MODAL */}
          {activeModal === 'tech-specs' && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <Logo showText={false} size="small" />
                <div>
                  <span className="text-xs font-bold text-[#004E9C] uppercase tracking-wider">Engine Specifications</span>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans']">
                    Clinical AI & Telemetry Specs
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 font-['Inter'] leading-relaxed">
                Hardware, protocol, and algorithmic benchmarks powering Neuerung's real-time clinical diagnostic engine.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Model Accuracy</span>
                  <div className="text-xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans']">99.2% ICU Triage</div>
                  <p className="text-xs text-slate-500">Cross-validated against 100K+ DICOM scans</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Inference Latency</span>
                  <div className="text-xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans']">&lt; 15ms Bedside</div>
                  <p className="text-xs text-slate-500">GPU-accelerated edge & cloud compute</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Protocols & Standards</span>
                  <div className="text-sm font-bold text-slate-900 font-['Plus_Jakarta_Sans']">DICOM 3.0 • HL7 FHIR v4</div>
                  <p className="text-xs text-slate-500">Native EHR bi-directional synchronization</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Compliance & Security</span>
                  <div className="text-sm font-bold text-slate-900 font-['Plus_Jakarta_Sans']">HIPAA • ISO 27001 • ABHA</div>
                  <p className="text-xs text-slate-500">AES-256 encrypted end-to-end telemetry</p>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={closeModal}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#004E9C] text-white hover:bg-blue-800 transition-colors shadow-md"
                >
                  Close Specs
                </button>
              </div>
            </div>
          )}

          {/* 6. TEAM BIO MODAL */}
          {activeModal === 'team-bio' && modalData && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <div className="w-16 h-16 rounded-full bg-[#004E9C] text-white font-bold text-xl flex items-center justify-center flex-shrink-0 font-['Plus_Jakarta_Sans']">
                  {modalData.initials || modalData.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans']">{modalData.name}</h3>
                  <span className="text-sm font-semibold text-[#004E9C]">{modalData.role}</span>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-['Inter']">{modalData.bio}</p>

              <div className="flex justify-end pt-2">
                <button
                  onClick={closeModal}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#004E9C] text-white hover:bg-blue-800 transition-colors shadow-md"
                >
                  Close Bio
                </button>
              </div>
            </div>
          )}

          {/* 7. VIDEO DEMO PLAYER MODAL */}
          {activeModal === 'video-demo' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                Clinical Workflow Interactive Showcase
              </h3>
              <div className="relative aspect-video bg-slate-950 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-800 shadow-inner">
                <div className="text-center space-y-3 p-6">
                  <div className="w-16 h-16 rounded-full bg-blue-600/90 text-white flex items-center justify-center mx-auto shadow-lg shadow-blue-500/50 animate-pulse">
                    <Play className="w-8 h-8 ml-1" />
                  </div>
                  <div className="text-slate-200 font-semibold text-sm font-['Plus_Jakarta_Sans']">
                    Neuerung AI & Connected Telemetry Platform Pipeline Demo
                  </div>
                  <div className="text-xs text-slate-400 font-['Inter']">
                    Real-Time DICOM Ingestion → Edge AI Risk Triage → Bedside Monitor Sync
                  </div>
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <button
                  onClick={closeModal}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#004E9C] text-white hover:bg-blue-800 transition-colors"
                >
                  Close Video
                </button>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

