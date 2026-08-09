import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Mail, Phone, Building, User, Calendar, MessageSquare, Send, Play } from 'lucide-react';
import Logo from './Logo';
import './Modals.css';

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
      <div className="modal-overlay">
        <motion.div
          className="modal-dialog"
          initial={{ opacity: 0, scale: 0.93, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 15 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="modal-close-btn"
            aria-label="Close modal"
          >
            <X style={{ width: '1.25rem', height: '1.25rem' }} />
          </button>

          {/* 1. WE ARE MODAL */}
          {activeModal === 'we-are' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Logo showText={false} size="small" />
                <div>
                  <span className="modal-category-badge">Company Profile</span>
                  <h3 className="modal-title">
                    Neuerung HealthTech Private Limited
                  </h3>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#334155', fontSize: '0.875rem', lineHeight: 1.625, borderTop: '1px solid var(--color-slate-100)', paddingTop: '1rem' }}>
                <p style={{ fontSize: '1rem', fontWeight: 500, color: '#1e293b' }}>
                  Neuerung HealthTech Private Limited is a healthcare technology company focused on developing intelligent, connected, and clinically relevant solutions for modern healthcare.
                </p>
                <p>
                  We combine artificial intelligence, medical imaging, IoT, and digital health platforms to support healthcare professionals, improve operational efficiency, enhance clinical decision-making, and contribute to better patient care.
                </p>
              </div>

              <div className="modal-grid-2" style={{ backgroundColor: '#f8fafc', padding: '1.25rem', borderRadius: '1rem', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <ShieldCheck style={{ width: '1.25rem', height: '1.25rem', color: 'var(--color-primary)', marginTop: '0.125rem' }} />
                  <div>
                    <h4 style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#0f172a', textTransform: 'uppercase' }}>Headquarters</h4>
                    <p style={{ fontSize: '0.75rem', color: '#475569' }}>Madurai, Tamil Nadu, India</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <ShieldCheck style={{ width: '1.25rem', height: '1.25rem', color: 'var(--color-primary)', marginTop: '0.125rem' }} />
                  <div>
                    <h4 style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#0f172a', textTransform: 'uppercase' }}>Official Domain</h4>
                    <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-accent)' }}>neuerung.in</p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '0.5rem' }}>
                <button
                  onClick={closeModal}
                  className="modal-primary-btn"
                >
                  Close Overview
                </button>
              </div>
            </div>
          )}

          {/* 2. CLINICAL AI MODAL */}
          {activeModal === 'clinical-ai' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="modal-header">
                <span className="modal-category-badge">Clinical AI Suite</span>
                <h3 className="modal-title">
                  AI-Powered Clinical Decision Support
                </h3>
              </div>

              <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.625 }}>
                Our proprietary AI algorithms evaluate multi-parameter patient data streams in real time, delivering proactive diagnostic assistance and automated risk triage directly into clinician workflows.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <h4 style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Core Functional Modules</h4>
                {[
                  "Real-time ICU & ward patient risk scoring algorithms",
                  "Automated clinical guideline compliance triggers",
                  "Early warning anomaly flags for cardiac & vital instability",
                  "EHR-interoperable decision recommendation engine"
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: '#f8fafc', border: '1px solid #f1f5f9', fontSize: '0.875rem', color: '#1e293b' }}>
                    <CheckCircle2 style={{ width: '1rem', height: '1rem', color: '#10b981', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '0.5rem' }}>
                <button
                  onClick={closeModal}
                  className="modal-primary-btn"
                >
                  Close Details
                </button>
              </div>
            </div>
          )}

          {/* 3. MEDICAL IMAGING & IOT MODAL */}
          {activeModal === 'medical-imaging' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="modal-header">
                <span className="modal-category-badge">Connected Infrastructure</span>
                <h3 className="modal-title">
                  Medical Imaging & IoT Device Ecosystem
                </h3>
              </div>

              <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.625 }}>
                Seamlessly connects high-speed DICOM processing pipelines with continuous wireless telemetry hardware to deliver instant diagnostic clarity and bedside monitoring.
              </p>

              <div className="modal-grid-2">
                <div style={{ padding: '1rem', borderRadius: '1rem', backgroundColor: '#eff6ff', border: '1px solid #dbeafe', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <h4 style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--color-primary)', textTransform: 'uppercase' }}>Medical Imaging PACS</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.375rem', fontSize: '0.75rem', color: '#334155' }}>
                    <li>• DICOM Web Viewer with AI scan overlay</li>
                    <li>• Lesion & nodule computer vision highlighting</li>
                    <li>• Rapid multi-modal image rendering</li>
                  </ul>
                </div>

                <div style={{ padding: '1rem', borderRadius: '1rem', backgroundColor: '#f0f9ff', border: '1px solid #e0f2fe', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <h4 style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#075985', textTransform: 'uppercase' }}>IoT Hardware Telemetry</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.375rem', fontSize: '0.75rem', color: '#334155' }}>
                    <li>• Continuous vital sign streaming (&lt; 15ms)</li>
                    <li>• Wireless bedside sensor hubs</li>
                    <li>• Centralized nurse station monitor sync</li>
                  </ul>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '0.5rem' }}>
                <button
                  onClick={closeModal}
                  className="modal-primary-btn"
                >
                  Close Details
                </button>
              </div>
            </div>
          )}

          {/* 4. WHY US MODAL */}
          {activeModal === 'why-us' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="modal-header">
                <span className="modal-category-badge">Value Proposition</span>
                <h3 className="modal-title">
                  Why Partner with Neuerung HealthTech
                </h3>
              </div>

              <div className="modal-grid-2">
                {[
                  { title: "Clinical Relevance", desc: "Co-designed with practicing clinicians for seamless hospital workflow fit." },
                  { title: "Operational Efficiency", desc: "Dramatically reduces turnaround time and eliminates manual data entry." },
                  { title: "Scalable AI/IoT", desc: "Modular architecture ready to scale from clinics to multi-specialty hospital chains." },
                  { title: "India-Based Support", desc: "Dedicated engineering and technical team operating directly from Madurai, India." },
                ].map((item, idx) => (
                  <div key={idx} style={{ padding: '1rem', borderRadius: '1rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.25rem', fontFamily: 'var(--font-heading)' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.75rem', color: '#475569', lineHeight: 1.625 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '0.5rem' }}>
                <button
                  onClick={closeModal}
                  className="modal-primary-btn"
                >
                  Close Overview
                </button>
              </div>
            </div>
          )}

          {/* 5. BOOK A DEMO FORM MODAL */}
          {activeModal === 'book-demo' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="modal-header" style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between' }}>
                <div>
                  <span className="modal-category-badge">Schedule Demonstration</span>
                  <h3 className="modal-title">
                    Book a Live Demo
                  </h3>
                </div>
                <Logo showText={false} size="small" />
              </div>

              {demoSubmitted ? (
                <div style={{ padding: '2rem', borderRadius: '1rem', backgroundColor: '#ecfdf5', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '9999px', backgroundColor: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                    <CheckCircle2 style={{ width: '2rem', height: '2rem' }} />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a' }}>Demo Scheduled!</h4>
                  <p style={{ fontSize: '0.875rem', color: '#475569' }}>
                    Thank you, <span style={{ fontWeight: 600, color: '#0f172a' }}>{demoForm.name}</span>. Our clinical technology team will reach out to <span style={{ fontWeight: 600, color: '#0f172a' }}>{demoForm.email}</span> to confirm your session.
                  </p>
                  <button
                    onClick={closeModal}
                    className="modal-primary-btn"
                    style={{ background: '#059669', width: 'fit-content', margin: '0 auto' }}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDemoSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div className="modal-grid-2">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', color: '#334155', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Rajesh Kumar"
                        value={demoForm.name}
                        onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                        style={{ width: '100%', padding: '0.625rem 0.875rem', borderRadius: '0.75rem', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', color: '#334155', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Organization Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Apollo / City Hospital"
                        value={demoForm.company}
                        onChange={(e) => setDemoForm({ ...demoForm, company: e.target.value })}
                        style={{ width: '100%', padding: '0.625rem 0.875rem', borderRadius: '0.75rem', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
                      />
                    </div>
                  </div>

                  <div className="modal-grid-2">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', color: '#334155', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@hospital.com"
                        value={demoForm.email}
                        onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                        style={{ width: '100%', padding: '0.625rem 0.875rem', borderRadius: '0.75rem', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', color: '#334155', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={demoForm.phone}
                        onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                        style={{ width: '100%', padding: '0.625rem 0.875rem', borderRadius: '0.75rem', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
                      />
                    </div>
                  </div>

                  <div className="modal-grid-2">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', color: '#334155', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Nature of Business</label>
                      <select
                        value={demoForm.businessType}
                        onChange={(e) => setDemoForm({ ...demoForm, businessType: e.target.value })}
                        style={{ width: '100%', padding: '0.625rem 0.875rem', borderRadius: '0.75rem', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
                      >
                        <option>Hospital Network</option>
                        <option>Diagnostic Imaging Lab</option>
                        <option>Clinic / Healthcare Provider</option>
                        <option>Medical Device OEM</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', color: '#334155', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Preferred Demo Date</label>
                      <input
                        type="date"
                        value={demoForm.date}
                        onChange={(e) => setDemoForm({ ...demoForm, date: e.target.value })}
                        style={{ width: '100%', padding: '0.625rem 0.875rem', borderRadius: '0.75rem', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="modal-primary-btn"
                    style={{ width: '100%', borderRadius: '0.75rem', padding: '0.875rem', display: 'flex', alignItems: 'center', justifyCenter: 'center', gap: '0.5rem', marginTop: '0.5rem' }}
                  >
                    {isSubmitting ? (
                      <div style={{ width: '1.25rem', height: '1.25rem', border: '2px solid #ffffff', borderTopColor: 'transparent', borderRadius: '9999px', animation: 'spin 1s linear infinite' }} />
                    ) : (
                      <>
                        <span>Submit Demo Request</span>
                        <Send style={{ width: '1rem', height: '1rem' }} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          )}

          {/* 8. TECHNICAL SPECS MODAL */}
          {activeModal === 'tech-specs' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="modal-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Logo showText={false} size="small" />
                <div>
                  <span className="modal-category-badge">Engine Specifications</span>
                  <h3 className="modal-title">
                    Clinical AI & Telemetry Specs
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.625 }}>
                Hardware, protocol, and algorithmic benchmarks powering Neuerung's real-time clinical diagnostic engine.
              </p>

              <div className="modal-grid-2">
                <div style={{ padding: '1rem', borderRadius: '1rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '0.625rem', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Model Accuracy</span>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', fontFamily: 'var(--font-heading)' }}>99.2% ICU Triage</div>
                  <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Cross-validated against 100K+ DICOM scans</p>
                </div>

                <div style={{ padding: '1rem', borderRadius: '1rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '0.625rem', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Inference Latency</span>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', fontFamily: 'var(--font-heading)' }}>&lt; 15ms Bedside</div>
                  <p style={{ fontSize: '0.75rem', color: '#64748b' }}>GPU-accelerated edge & cloud compute</p>
                </div>

                <div style={{ padding: '1rem', borderRadius: '1rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '0.625rem', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Protocols & Standards</span>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#0f172a', fontFamily: 'var(--font-heading)' }}>DICOM 3.0 • HL7 FHIR v4</div>
                  <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Native EHR bi-directional synchronization</p>
                </div>

                <div style={{ padding: '1rem', borderRadius: '1rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '0.625rem', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Compliance & Security</span>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#0f172a', fontFamily: 'var(--font-heading)' }}>HIPAA • ISO 27001 • ABHA</div>
                  <p style={{ fontSize: '0.75rem', color: '#64748b' }}>AES-256 encrypted end-to-end telemetry</p>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '0.5rem' }}>
                <button
                  onClick={closeModal}
                  className="modal-primary-btn"
                >
                  Close Specs
                </button>
              </div>
            </div>
          )}

          {/* 6. TEAM BIO MODAL */}
          {activeModal === 'team-bio' && modalData && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="modal-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '4rem', height: '4rem', borderRadius: '9999px', backgroundColor: 'var(--color-primary)', color: '#ffffff', fontWeight: 'bold', fontSize: '1.25rem', display: 'flex', alignItems: 'center', justifyCenter: 'center', flexShrink: 0, fontFamily: 'var(--font-heading)' }}>
                  {modalData.initials || modalData.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="modal-title">{modalData.name}</h3>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-accent)' }}>{modalData.role}</span>
                </div>
              </div>

              <p style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.625, fontFamily: 'var(--font-body)' }}>{modalData.bio}</p>

              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '0.5rem' }}>
                <button
                  onClick={closeModal}
                  className="modal-primary-btn"
                >
                  Close Bio
                </button>
              </div>
            </div>
          )}

          {/* 7. VIDEO DEMO PLAYER MODAL */}
          {activeModal === 'video-demo' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 className="modal-title">
                Clinical Workflow Interactive Showcase
              </h3>
              <div style={{ position: 'relative', aspectRatio: '16 / 9', backgroundColor: '#020617', borderRadius: '1rem', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid #1e293b' }}>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '1.5rem' }}>
                  <div style={{ width: '4rem', height: '4rem', borderRadius: '9999px', backgroundColor: 'rgba(37, 99, 235, 0.9)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyCenter: 'center', margin: '0 auto', boxShadow: '0 10px 25px rgba(37, 99, 235, 0.5)' }}>
                    <Play style={{ width: '2rem', height: '2rem', marginLeft: '0.25rem' }} />
                  </div>
                  <div style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.875rem', fontFamily: 'var(--font-heading)' }}>
                    Neuerung AI & Connected Telemetry Platform Pipeline Demo
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'var(--font-body)' }}>
                    Real-Time DICOM Ingestion → Edge AI Risk Triage → Bedside Monitor Sync
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '0.5rem' }}>
                <button
                  onClick={closeModal}
                  className="modal-primary-btn"
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
