import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, FileCode, Server, Award } from 'lucide-react';
import './TrustCompliance.css';

export default function TrustCompliance() {
  const trustTopics = [
    {
      icon: Lock,
      title: 'Data Security & Privacy',
      desc: 'Robust data encryption in transit (TLS 1.3) and at rest (AES-256) with strict role-based access control and privacy safeguards.',
      badge: 'AES-256 / TLS 1.3'
    },
    {
      icon: FileCode,
      title: 'EHR & Standards Interoperability',
      desc: 'Engineered to interface directly with international clinical imaging and medical data exchange protocols.',
      badge: 'DICOM 3.0 / HL7 FHIR v4'
    },
    {
      icon: Server,
      title: 'ABHA & Digital Health Alignment',
      desc: 'Designed for native compatibility with national digital health ecosystem frameworks and universal health ID registries.',
      badge: 'ABHA Ready'
    },
    {
      icon: ShieldCheck,
      title: 'Clinical Validation & Safety',
      desc: 'Software architectures built with practicing clinician inputs for reliable hospital and outpatient integration.',
      badge: 'Clinical Validation'
    }
  ];

  const standardsBadges = [
    'HIPAA Security Safeguards',
    'ISO 27001 Certified Infrastructure',
    'DICOM 3.0 Imaging Standard',
    'HL7 FHIR v4 Compliant Data Flow',
    'ABHA National Health ID Compatible'
  ];

  return (
    <section id="trust" className="trust-section">
      <div className="trust-container">
        
        {/* Header */}
        <motion.div 
          className="trust-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="trust-badge">
            <ShieldCheck style={{ width: '0.875rem', height: '0.875rem' }} />
            <span>TRUST & COMPLIANCE</span>
          </div>

          <h2 className="trust-title">
            Built on trust & <span className="gradient-text">clinical responsibility.</span>
          </h2>
          
          <p className="trust-intro">
            We prioritize secure information handling, regulatory awareness, and responsible technology design across all connected health solutions.
          </p>
        </motion.div>

        {/* 4 Trust Cards */}
        <div className="trust-grid">
          {trustTopics.map((topic, idx) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={topic.title}
                className="trust-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <div className="trust-icon-box">
                  <Icon style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
                <div style={{ flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.375rem' }}>
                    <h3 className="trust-card-title">{topic.title}</h3>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#059669', backgroundColor: '#d1fae5', padding: '0.125rem 0.5rem', borderRadius: '0.25rem', fontFamily: 'monospace' }}>
                      {topic.badge}
                    </span>
                  </div>
                  <p className="trust-card-desc">{topic.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Standards Verification Bar */}
        <motion.div 
          className="standards-bar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="standards-title">
            <Award style={{ width: '1rem', height: '1rem', color: '#059669' }} />
            <span>Compliance Standards & Frameworks:</span>
          </div>
          <div className="standards-badges-grid">
            {standardsBadges.map((badge, idx) => (
              <span key={idx} className="standards-pill">
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
