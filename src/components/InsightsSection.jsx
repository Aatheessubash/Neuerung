import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Cpu, Scan, LayoutGrid, Radio, Zap } from 'lucide-react';
import './InsightsSection.css';

export default function InsightsSection({ openModal }) {
  const cards = [
    { title: 'Healthcare Technology', icon: BookOpen, tag: 'PERSPECTIVES', desc: 'Understanding technical trends shaping modern digital care delivery.', cta: 'Read Tech Overview' },
    { title: 'AI in Healthcare', icon: Cpu, tag: 'CLINICAL AI', desc: 'Assisted decision support workflows and responsible clinical AI.', cta: 'Explore Clinical AI' },
    { title: 'Medical Imaging', icon: Scan, tag: 'IMAGING', desc: 'Advancements in DICOM visualization, CloudPACS, and image data analysis.', cta: 'Read Imaging Insights' },
    { title: 'Digital Health', icon: LayoutGrid, tag: 'PLATFORMS', desc: 'Connecting patient records, telehealth portals, and provider suites.', cta: 'Explore Platform Trends' },
    { title: 'Connected Healthcare', icon: Radio, tag: 'IOT & SENSORS', desc: 'Integrating bedside telemetry, vital sensors, and continuous monitoring.', cta: 'Read Telemetry Insights' },
    { title: 'Healthcare Innovation', icon: Zap, tag: 'INNOVATION', desc: 'Pioneering patient-centric architectures for future healthcare environments.', cta: 'Explore Innovations' },
  ];

  return (
    <section id="insights" className="insights-section">
      <div className="insights-container">
        
        {/* Header */}
        <motion.div 
          className="insights-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="insights-badge">KNOWLEDGE & PERSPECTIVES</div>
          <h2 className="insights-title">
            Healthcare <span className="gradient-text">Insights.</span>
          </h2>
          <p className="insights-intro">
            Exploring the technology, standards, and clinical innovations redefining modern healthcare.
          </p>
        </motion.div>

        {/* 6 Cards Grid */}
        <div className="insights-grid">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="insight-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                whileHover={{ y: -4 }}
              >
                <div className="insight-card-top">
                  <div className="insight-icon-box">
                    <Icon style={{ width: '1.25rem', height: '1.25rem' }} />
                  </div>
                  <span className="insight-tag">{item.tag}</span>
                </div>

                <h3 className="insight-card-title">{item.title}</h3>
                <p className="insight-card-desc">{item.desc}</p>
                
                <div className="insight-footer">
                  <button 
                    onClick={() => openModal && openModal('insights-modal', item)} 
                    className="insight-btn"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight style={{ width: '0.875rem', height: '0.875rem' }} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
