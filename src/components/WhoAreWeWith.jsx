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
      id: 'providers',
      icon: Building2,
      title: 'Healthcare Providers',
      desc: 'Collaborating with hospitals, clinics, and healthcare organizations to understand real-world clinical needs and develop solutions that fit existing workflows.',
      tags: ['Hospitals', 'Clinics', 'Diagnostic Centers']
    },
    {
      id: 'clinical',
      icon: Stethoscope,
      title: 'Clinical & Research Partners',
      desc: 'Working with clinical and research communities to support validation, continuous improvement, and evidence-based development of healthcare technologies.',
      tags: ['Clinicians', 'Researchers', 'Medical Institutions']
    },
    {
      id: 'standards',
      icon: ShieldCheck,
      title: 'Healthcare Standards',
      desc: 'Designed with established healthcare interoperability standards to support secure and consistent exchange of medical and clinical data across systems.',
      subItems: [
        { name: 'DICOM', detail: 'Medical imaging and diagnostic data interoperability.' },
        { name: 'HL7 / FHIR', detail: 'Structured exchange of healthcare and patient information.' }
      ]
    },
    {
      id: 'infrastructure',
      icon: Cpu,
      title: 'AI & Cloud Infrastructure',
      desc: 'Leveraging modern AI, cloud, and data technologies to build scalable healthcare applications capable of supporting complex clinical and operational workloads.',
      subItems: [
        { name: 'AI & Machine Learning', detail: 'Intelligent analysis, prediction, and decision-support capabilities.' },
        { name: 'Cloud Infrastructure', detail: 'Scalable infrastructure for secure data processing, storage, and application delivery.' }
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
            Connected Healthcare.{' '}
            <span className="gradient-text">Built for Better Outcomes.</span>
          </h2>

          <p className="ecosystem-intro-text">
            We bring together healthcare providers, technology partners, clinical experts, and industry standards to create secure, interoperable, and scalable healthcare solutions.
          </p>
          <p className="ecosystem-intro-text" style={{ marginTop: '-0.5rem' }}>
            Our ecosystem enables seamless data exchange, intelligent clinical workflows, and reliable integration across modern healthcare environments.
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
            Built to Connect. <span className="gradient-text">Designed to Scale.</span>
          </h3>
          <p className="callout-text">
            Our ecosystem approach helps healthcare organizations adopt innovative technology while maintaining interoperability, scalability, and a strong focus on clinical needs.
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
