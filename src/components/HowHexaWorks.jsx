import React from 'react';
import { motion } from 'framer-motion';
import { Link2, Database, Cpu, HeartPulse, ArrowRight, ChevronDown } from 'lucide-react';
import './HowHexaWorks.css';

export default function HowHexaWorks() {
  const steps = [
    {
      num: '01',
      title: 'CONNECT',
      desc: 'Patients, doctors, providers and healthcare services.',
      icon: Link2,
      color: '#2563eb'
    },
    {
      num: '02',
      title: 'CAPTURE',
      desc: 'Healthcare information, clinical data and relevant inputs.',
      icon: Database,
      color: '#0284c7'
    },
    {
      num: '03',
      title: 'INTELLIGENCE',
      desc: 'AI and digital technologies help process and contextualise information.',
      icon: Cpu,
      color: '#4f46e5'
    },
    {
      num: '04',
      title: 'CARE',
      desc: 'Connected information supports healthcare professionals and care delivery.',
      icon: HeartPulse,
      color: '#059669'
    }
  ];

  return (
    <section id="how-it-works" className="how-section">
      <div className="how-container">
        
        {/* Header */}
        <motion.div 
          className="how-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="how-badge">HOW HEXA WORKS</div>
          <h2 className="how-title">
            From data to <span className="gradient-text">connected care.</span>
          </h2>
          <p className="how-intro">
            A seamless four-step flow that transforms disjointed healthcare touchpoints into a unified care experience.
          </p>
        </motion.div>

        {/* 4 Step Process Grid with Framer Motion Animation */}
        <div className="how-flow-wrapper">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={step.num}>
                <motion.div 
                  className="how-step-card"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ type: "spring", stiffness: 220, damping: 20, delay: idx * 0.12 }}
                  whileHover={{ y: -6, scale: 1.03, boxShadow: "0 20px 40px rgba(94, 129, 255, 0.12)" }}
                >
                  <div className="step-num-badge" style={{ backgroundColor: `${step.color}15`, color: step.color }}>
                    {step.num}
                  </div>

                  <motion.div 
                    className="step-icon-box" 
                    style={{ backgroundColor: step.color }}
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Icon style={{ width: '1.5rem', height: '1.5rem' }} />
                  </motion.div>

                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </motion.div>

                {/* Arrow Connector between steps */}
                {idx < steps.length - 1 && (
                  <motion.div 
                    className="step-connector"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.12 + 0.1 }}
                  >
                    <ArrowRight className="connector-desktop-icon" />
                    <ChevronDown className="connector-mobile-icon" />
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
}
