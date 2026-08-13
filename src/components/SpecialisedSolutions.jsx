import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Brain, Activity, ArrowRight, Shield } from 'lucide-react';
import './SpecialisedSolutions.css';

export default function SpecialisedSolutions({ openModal }) {
  const solutions = [
    {
      id: 'geriatric-care',
      icon: HeartPulse,
      title: 'Geriatric Care',
      tagline: 'Care for older adults',
      description: 'Technology-enabled care designed around the evolving healthcare needs of older adults.',
      features: [
        'Vital monitoring & trend tracking',
        'Senior care management support',
        'Multi-condition care coordination'
      ],
      ctaText: 'Explore Geriatric Care'
    },
    {
      id: 'dementia-care',
      icon: Brain,
      title: 'Dementia Care',
      tagline: 'Support across care journeys',
      description: 'Connected care solutions supporting individuals, caregivers and healthcare professionals throughout the dementia care journey.',
      features: [
        'Cognitive health support',
        'Caregiver assistance workflows',
        'Continuous clinical tracking'
      ],
      ctaText: 'Explore Dementia Care'
    },
    {
      id: 'rehabilitation',
      icon: Activity,
      title: 'Rehabilitation',
      tagline: 'AI-integrated recovery monitoring',
      description: 'AI-integrated rehabilitation solutions designed to monitor recovery, support therapy and provide greater visibility into patient progress.',
      features: [
        'Recovery progress analytics',
        'Therapy support tools',
        'Patient progress visibility'
      ],
      ctaText: 'Explore Rehabilitation'
    }
  ];

  return (
    <section id="solutions" className="solutions-section">
      <div className="solutions-container">
        
        {/* Header */}
        <motion.div 
          className="solutions-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="solutions-category-badge">
            <Shield style={{ width: '0.875rem', height: '0.875rem' }} />
            <span>SPECIALISED HEALTHCARE SOLUTIONS</span>
          </div>

          <h2 className="solutions-title">
            Technology for <span className="gradient-text">specialised care.</span>
          </h2>
          
          <p className="solutions-intro">
            Purpose-built healthcare technologies addressing specific clinical focus areas and long-term patient care requirements.
          </p>
        </motion.div>

        {/* 3 Solution Cards */}
        <div className="solutions-grid">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                id={item.id}
                className="solution-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
              >
                <div className="solution-card-top">
                  <div className="solution-icon-box">
                    <Icon style={{ width: '1.75rem', height: '1.75rem' }} />
                  </div>
                  <span className="solution-tagline">{item.tagline}</span>
                </div>

                <h3 className="solution-card-title">{item.title}</h3>
                
                <p className="solution-card-desc">{item.description}</p>

                <div className="solution-features">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="solution-feature-item">
                      <span className="solution-dot" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                  <button
                    onClick={() => openModal && openModal('solution-details', item)}
                    className="solution-action-btn"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight style={{ width: '1rem', height: '1rem' }} />
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
