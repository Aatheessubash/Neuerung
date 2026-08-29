import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Scan, Radio, Network, ArrowRight } from 'lucide-react';
import './About.css';

export default function About() {
  const pillars = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Intelligent technologies designed to support healthcare workflows and decision-making.",
    },
    {
      icon: Scan,
      title: "Medical Imaging",
      description: "Technology supporting modern medical imaging workflows and healthcare applications.",
    },
    {
      icon: Radio,
      title: "IoT & Connected Healthcare",
      description: "Connecting devices, information and healthcare environments.",
    },
    {
      icon: Network,
      title: "Digital Health Platforms",
      description: "Digital infrastructure designed to connect people, services and healthcare information.",
    }
  ];

  const handleScrollToTech = () => {
    const el = document.getElementById('technology');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="about-section">
      {/* Decorative Orbs */}
      <div className="about-bg-orb-1" />
      <div className="about-bg-orb-2" />

      <div className="about-container">
        
        {/* Section Header */}
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="about-title">
            Technology built around{' '}
            <span className="gradient-text">better healthcare.</span>
          </h2>
        </motion.div>

        {/* Main Hero Card Container */}
        <motion.div 
          className="about-hero-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="about-hero-grid">
            
            {/* Left Content Column */}
            <div className="about-content-left" style={{ width: '100%' }}>
              <p className="about-main-text" style={{ fontSize: '1.0625rem', lineHeight: '1.75' }}>
                <span className="about-company-highlight">Neuerung HealthTech Private Limited</span> is a healthcare technology company focused on developing intelligent, connected and clinically relevant solutions for modern healthcare.
              </p>
              <p className="about-main-text" style={{ fontSize: '1.0625rem', lineHeight: '1.75', marginTop: '1rem' }}>
                We combine artificial intelligence, medical imaging, IoT and digital platforms to support healthcare professionals, improve operational efficiency, enhance clinical decision-making and contribute to better patient care.
              </p>

              <div style={{ marginTop: '2rem' }}>
                <motion.button
                  onClick={handleScrollToTech}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="hero-btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
                >
                  <span>Explore Our Technology</span>
                  <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                </motion.button>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 4 Pillars Header */}
        <div className="pillars-title-area" style={{ marginTop: '4rem' }}>
          <div className="pillars-subtitle">Core Technology Pillars</div>
          <h3 className="pillars-main-title">Built on Four Key Pillars</h3>
        </div>

        {/* 4 Pillar Cards Grid */}
        <div className="pillars-grid">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                className="pillar-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div>
                  <div className="pillar-icon-box">
                    <Icon style={{ width: '1.5rem', height: '1.5rem' }} />
                  </div>
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
