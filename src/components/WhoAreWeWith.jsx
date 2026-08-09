import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, Cloud, Building2, Stethoscope, FileCode, Zap, Radio } from 'lucide-react';
import './WhoAreWeWith.css';

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
    }
  ];

  const filteredPartners = activeCategory === 'all' 
    ? partners 
    : partners.filter(p => p.category === activeCategory);

  return (
    <section id="who-are-we-with" className="ecosystem-section">
      
      {/* Ambient Radial Background Glow */}
      <div className="glow-dot" style={{ top: '50%', left: 0, transform: 'translate(-50%, -50%)', opacity: 0.2 }} />
      <div className="glow-dot" style={{ bottom: 0, right: 0, transform: 'translateX(33%)', opacity: 0.2 }} />

      <div className="ecosystem-container">
        
        {/* Section Header */}
        <motion.div 
          className="ecosystem-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
        >
          <div className="ecosystem-badge">
            <Radio style={{ width: '0.875rem', height: '0.875rem' }} />
            <span>STRATEGIC ECOSYSTEM</span>
          </div>

          <h2 className="ecosystem-title">
            Integrated for{' '}
            <span className="gradient-text">
              Clinical Precision
            </span>
          </h2>

          <p className="ecosystem-desc">
            Adhering to foundational medical data standards and partnering with healthcare pioneers to deliver seamless interoperability, advanced AI diagnostics, and scalable cloud infrastructure.
          </p>
        </motion.div>

        {/* Live Interoperability Data Flow Banner */}
        <motion.div 
          className="data-flow-banner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '0.75rem', backgroundColor: 'rgba(0, 55, 114, 0.1)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyCenter: 'center', fontWeight: 'bold' }}>
              <Zap style={{ width: '1.25rem', height: '1.25rem', color: 'var(--color-accent)' }} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--color-slate-900)', fontFamily: 'var(--font-heading)' }}>
                Active Interoperability Mesh
              </div>
              <div style={{ fontSize: '0.6875rem', color: 'var(--color-slate-500)' }}>
                DICOM 3.0 • HL7 FHIR v4 • NVIDIA Clara AI • AWS HealthOmics
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontFamily: 'monospace', backgroundColor: '#f1f5f9', padding: '0.375rem 0.875rem', borderRadius: '9999px', border: '1px solid #e2e8f0', color: '#334155' }}>
            <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '9999px', backgroundColor: '#10b981' }} />
            <span>Telemetry Pipeline: 100% Synchronized</span>
          </div>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="category-tab-bar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`category-tab-btn ${isActive ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Partner Matrix Cards */}
        <motion.div 
          layout
          className="partner-card-grid"
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
                  className="partner-card"
                >
                  <div className="partner-card-hover-line" />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div className="partner-icon-box">
                        <IconComp style={{ width: '1.5rem', height: '1.5rem' }} />
                      </div>

                      <span style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', border: '1px solid #bfdbfe', backgroundColor: '#eff6ff', color: '#1d4ed8' }}>
                        {p.tag}
                      </span>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--color-slate-400)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                        {p.categoryLabel}
                      </div>
                      <h3 className="partner-card-title">
                        {p.title}
                      </h3>
                    </div>

                    <p style={{ fontSize: '0.875rem', color: 'var(--color-slate-600)', fontFamily: 'var(--font-body)', lineHeight: 1.625 }}>
                      {p.desc}
                    </p>
                  </div>

                  <div style={{ paddingTop: '1.5rem', marginTop: '1.5rem', borderTop: '1px solid var(--color-slate-100)' }}>
                    <button
                      onClick={() => openModal(p.modalType)}
                      className="partner-card-action"
                    >
                      <span>{p.actionText}</span>
                      <ArrowRight style={{ width: '1rem', height: '1rem' }} />
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
