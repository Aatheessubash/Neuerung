import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Stethoscope, 
  ShieldCheck, 
  Cpu, 
  Cloud, 
  FileCode, 
  Network, 
  CheckCircle2, 
  ArrowRight,
  Radio,
  Users
} from 'lucide-react';
import './WhoAreWeWith.css';

export default function WhoAreWeWith({ openModal }) {
  const pillars = [
    {
      id: 'geriatric',
      icon: Users,
      title: 'Geriatric Care',
      desc: 'Technology-enabled care designed around the evolving healthcare needs of older adults.',
      tags: ['Older Adults', 'Specialised Care', 'Monitoring']
    },
    {
      id: 'dementia',
      icon: Stethoscope,
      title: 'Dementia Care',
      desc: 'Connected care solutions supporting individuals, caregivers and healthcare professionals throughout the dementia care journey.',
      tags: ['Individuals', 'Caregivers', 'Clinical Support']
    },
    {
      id: 'rehab',
      icon: Building2,
      title: 'Rehabilitation',
      desc: 'AI-integrated rehabilitation solutions designed to monitor recovery, support therapy and provide greater visibility into patient progress.',
      tags: ['Recovery Tracking', 'Therapy Support', 'Progress Visibility']
    },
    {
      id: 'trust',
      icon: ShieldCheck,
      title: 'Trust & Responsibility',
      desc: 'Built with trust at the core — secure information handling, privacy protection, and clinically validated connected healthcare data.',
      subItems: [
        { name: 'Data Security & Privacy', detail: 'Protected health data handling and access control.' },
        { name: 'Clinical Validation', detail: 'Responsible technology designed for real healthcare environments.' }
      ]
    }
  ];

  const networkNodes = [
    {
      icon: Building2,
      title: 'Healthcare Providers',
      list: 'Hospitals • Clinics • Diagnostic Centers'
    },
    {
      icon: Users,
      title: 'Clinical & Research',
      list: 'Clinicians • Researchers • Medical Institutions'
    },
    {
      icon: Cpu,
      title: 'Technology Partners',
      list: 'AI • Cloud • IoT • Digital Health'
    },
    {
      icon: FileCode,
      title: 'Standards & Infrastructure',
      list: 'DICOM • HL7 • FHIR • Secure APIs'
    }
  ];

  return (
    <section id="who-are-we-with" className="ecosystem-section">
      <div className="ecosystem-bg-orb-1" />
      <div className="ecosystem-bg-orb-2" />

      <div className="ecosystem-container">
        
        {/* Main Header */}
        <motion.div 
          className="ecosystem-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {/* <div className="ecosystem-badge">
            <Radio style={{ width: '0.875rem', height: '0.875rem' }} />
            <span>Healthcare Ecosystem</span>
          </div> */}

          <h2 className="ecosystem-main-title">
            Built for every{' '}
            <span className="gradient-text">point of care.</span>
          </h2>

          <p className="ecosystem-intro-text">
            Healthcare is an ecosystem. Our technologies are designed to support the people, organisations and environments that contribute to the healthcare journey.
          </p>
        </motion.div>

        {/* 4 Core Ecosystem Pillars */}
        <div className="ecosystem-pillars-grid">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                className="eco-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div>
                  <div className="eco-card-top">
                    <div className="eco-icon-box">
                      <IconComp style={{ width: '1.75rem', height: '1.75rem' }} />
                    </div>
                    <h3 className="eco-card-title">{pillar.title}</h3>
                  </div>

                  <p className="eco-card-desc">{pillar.desc}</p>

                  {/* Render Tags if present */}
                  {pillar.tags && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                      {pillar.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          style={{
                            padding: '0.35rem 0.85rem',
                            borderRadius: '9999px',
                            backgroundColor: '#eff6ff',
                            border: '1px solid #bfdbfe',
                            color: '#1d4ed8',
                            fontSize: '0.8125rem',
                            fontWeight: 700,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem'
                          }}
                        >
                          <CheckCircle2 style={{ width: '0.875rem', height: '0.875rem', color: '#2563eb' }} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Render SubItems if present */}
                  {pillar.subItems && (
                    <div className="eco-items-box">
                      {pillar.subItems.map((item, iIdx) => (
                        <div key={iIdx} className="eco-item-row">
                          <div className="eco-item-name">{item.name}</div>
                          <div className="eco-item-desc">{item.detail}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* An Integrated Healthcare Network Card */}
        <motion.div 
          className="network-section-card"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="network-header">
            <div className="network-badge">
              <Network style={{ width: '0.875rem', height: '0.875rem' }} />
              <span>Network Synergy</span>
            </div>
            <h3 className="network-title">An Integrated Healthcare Network</h3>
          </div>

          <div className="network-grid">
            {networkNodes.map((node, nIdx) => {
              const NodeIcon = node.icon;
              return (
                <div key={nIdx} className="network-node-card">
                  <div className="network-node-icon">
                    <NodeIcon style={{ width: '1.25rem', height: '1.25rem' }} />
                  </div>
                  <div className="network-node-title">{node.title}</div>
                  <div className="network-node-list">{node.list}</div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Callout Summary Banner */}
        <motion.div 
          className="ecosystem-callout"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="callout-title">
            Technology with <span className="gradient-text">healthcare purpose.</span>
          </h3>
          <p className="callout-text">
            Healthcare technology should be intelligent — but it should also be relevant, connected and practical.
          </p>

          {openModal && (
            <button
              onClick={() => openModal('book-demo')}
              className="callout-action-btn"
            >
              <span>Explore Partnership & Integrations</span>
              <ArrowRight style={{ width: '1.125rem', height: '1.125rem' }} />
            </button>
          )}
        </motion.div>

      </div>
    </section>
  );
}
