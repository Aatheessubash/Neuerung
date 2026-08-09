import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Scan, Radio, Network, CheckCircle, TrendingUp, Building2, ArrowRight, Zap, Cpu, Activity } from 'lucide-react';
import './About.css';

export default function About({ openModal }) {
  const stats = [
    { label: "Core Pillars", value: "4 Domains", subtext: "AI, Imaging, IoT, Platforms" },
    { label: "Platform Tech", value: "Clinical AI", subtext: "Intelligent Connected Suite" },
    { label: "HQ & Tech Hub", value: "Madurai", subtext: "Tamil Nadu, India" },
    { label: "Clinical Target", value: "Providers", subtext: "Hospitals & Diagnostics" },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Clinically Relevant Design",
      desc: "Engineered for direct clinician workflow integration."
    },
    {
      icon: Zap,
      title: "Operational Excellence",
      desc: "Optimizing diagnostic turnarounds & hospital throughput."
    },
    {
      icon: Cpu,
      title: "Multi-Modal Clinical AI",
      desc: "Assisting doctors with accurate automated insights."
    },
    {
      icon: Activity,
      title: "Continuous Bedside IoT",
      desc: "Real-time vital tracking and patient risk scoring."
    }
  ];

  const pillars = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Custom diagnostic models and clinical risk evaluation algorithms for early intervention.",
    },
    {
      icon: Scan,
      title: "Medical Imaging",
      description: "High-precision computer vision tools designed to analyze DICOM radiological scans efficiently.",
    },
    {
      icon: Radio,
      title: "IoT Healthcare",
      description: "Smart connected hardware devices capturing real-time physiological metrics at bedside.",
    },
    {
      icon: Network,
      title: "Digital Health Platforms",
      description: "Interoperable software suites enabling seamless data exchange across clinical systems.",
    }
  ];

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
          {/* <div className="about-badge">
            <Building2 style={{ width: '1rem', height: '1rem' }} />
            <span>About Us</span>
          </div> */}
          
          <h2 className="about-title">
            Empowering Modern Healthcare Through{' '}
            <span className="gradient-text">Connected Intelligence</span>
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
            <div className="about-content-left">
              <p className="about-main-text">
                <span className="about-company-highlight">Neuerung HealthTech</span> is a healthcare technology company focused on developing intelligent, connected, and clinically relevant solutions for modern healthcare. We combine artificial intelligence, medical imaging, IoT and digital platforms to support healthcare professionals, improve operational efficiency, enhance clinical decision-making, and contribute to better patient care.
              </p>

              {/* 4 Feature Highlights */}
              <div className="about-features-grid">
                {features.map((feat, idx) => {
                  const IconComp = feat.icon;
                  return (
                    <motion.div 
                      key={idx} 
                      className="about-feature-item"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <div className="about-feature-icon">
                        <IconComp style={{ width: '1rem', height: '1rem' }} />
                      </div>
                      <div>
                        <div className="about-feature-title">{feat.title}</div>
                        <div className="about-feature-desc">{feat.desc}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>



          </div>
        </motion.div>

        {/* 4 Pillars Header */}
        <div className="pillars-title-area">
          <div className="pillars-subtitle">Core Capabilities</div>
          <h3 className="pillars-main-title">Our 4 Core Technology Pillars</h3>
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

        {/* Company Stats Grid */}
        {/* <div className="about-stats-grid">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              className="stat-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div className="stat-value gradient-text">
                {stat.value}
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-subtext">{stat.subtext}</div>
            </motion.div>
          ))}
        </div> */}

      </div>
    </section>
  );
}
