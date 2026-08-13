import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Stethoscope, Users, Building2, Activity, Server, Network } from 'lucide-react';
import './Hero.css';

export default function Hero({ openModal }) {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Subtle Gradient & Mesh */}
      <div className="hero-bg-gradient" />
      <div className="glow-dot hero-glow-dot" />

      <div className="hero-container">
        <div className="hero-grid">
          
          {/* Left Column Text & CTAs */}
          <motion.div
            className="hero-text-col"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
          >
            {/* Tagline Badge */}
            <motion.div 
              className="hero-badge"
              whileHover={{ scale: 1.03 }}
            >
              <Sparkles className="hero-badge-icon" />
              <span>INTELLIGENT HEALTHCARE TECHNOLOGY</span>
            </motion.div>

            {/* Headline */}
            <h1 className="hero-title">
              Healthcare,{' '}
              <span className="gradient-text">
                Reimagined.
              </span>
            </h1>

            {/* Subtext */}
            <p className="hero-description">
              Intelligent, connected and clinically relevant technology designed to support healthcare professionals, connect care providers and enable better patient care.
            </p>

            {/* Dual CTAs - Primary Conversion Journey */}
            <div className="hero-cta-group">
              <motion.button
                onClick={() => handleScroll('hexa')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="hero-btn-primary"
              >
                <span>Explore Hexa</span>
                <ArrowRight style={{ width: '1rem', height: '1rem', marginLeft: '0.5rem' }} />
              </motion.button>

              <motion.button
                onClick={() => handleScroll('contact')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="hero-btn-secondary"
              >
                <span>Talk to Us</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Connected Ecosystem Diagram (Doctor ↔ Hexa ↔ Service Provider ↔ Patient) */}
          <motion.div
            className="hero-visual-col"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <motion.div 
              className="hero-visual-card"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              
              {/* Header Tag */}
              <div className="visual-card-header">
                <div className="live-inference-badge">
                  <span className="pulse-dot" />
                  <span className="live-inference-text">
                    CONNECTED ECOSYSTEM
                  </span>
                </div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#94a3b8' }}>
                  HEXA PLATFORM
                </div>
              </div>

              {/* Connected Stakeholders Visual Diagram */}
              <div className="monitor-frame">
                <div className="monitor-screen" style={{ padding: '1.25rem 1rem' }}>
                  
                  {/* Central Hexa Hub */}
                  <div style={{ textAlign: 'center', margin: '0.25rem 0 1rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '0.5rem', 
                      backgroundColor: 'rgba(37, 99, 235, 0.15)', 
                      border: '1px solid rgba(56, 189, 248, 0.4)', 
                      padding: '0.5rem 1rem', 
                      borderRadius: '9999px',
                      color: '#ffffff',
                      boxShadow: '0 0 20px rgba(56, 189, 248, 0.25)'
                    }}>
                      <Network style={{ width: '1.25rem', height: '1.25rem', color: '#38bdf8' }} />
                      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.875rem', letterSpacing: '0.05em' }}>HEXA PLATFORM CORE</span>
                    </div>
                    <div style={{ fontSize: '0.6875rem', color: '#94a3b8', marginTop: '0.375rem', fontFamily: 'monospace', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                      <abbr title="Artificial Intelligence">AI</abbr> • <abbr title="Digital Imaging & Communications in Medicine">DICOM</abbr> • <abbr title="Internet of Things Telemetry Sensors">IoT</abbr> • <abbr title="Electronic Health Record">EHR</abbr> Data Layer
                    </div>
                  </div>

                  {/* Connected Grid (Doctor, Service Provider, Patient, Telemetry) */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem' }}>
                    
                    {/* Node 1: Doctor */}
                    <div style={{ 
                      backgroundColor: 'rgba(15, 23, 42, 0.75)', 
                      border: '1px solid rgba(56, 189, 248, 0.25)', 
                      borderRadius: '0.75rem', 
                      padding: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.625rem'
                    }}>
                      <div style={{ width: '2rem', height: '2rem', borderRadius: '0.5rem', backgroundColor: 'rgba(99, 102, 241, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Stethoscope style={{ width: '1.125rem', height: '1.125rem', color: '#818cf8' }} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#f8fafc' }}>Doctors</div>
                        <div style={{ fontSize: '0.6875rem', color: '#94a3b8' }}>AI & Clinical Records</div>
                      </div>
                    </div>

                    {/* Node 2: Service Provider */}
                    <div style={{ 
                      backgroundColor: 'rgba(15, 23, 42, 0.75)', 
                      border: '1px solid rgba(251, 191, 36, 0.25)', 
                      borderRadius: '0.75rem', 
                      padding: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.625rem'
                    }}>
                      <div style={{ width: '2rem', height: '2rem', borderRadius: '0.5rem', backgroundColor: 'rgba(245, 158, 11, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Building2 style={{ width: '1.125rem', height: '1.125rem', color: '#fbbf24' }} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#f8fafc' }}>Care Providers</div>
                        <div style={{ fontSize: '0.6875rem', color: '#94a3b8' }}>Hospitals & Labs</div>
                      </div>
                    </div>

                    {/* Node 3: Patient */}
                    <div style={{ 
                      backgroundColor: 'rgba(15, 23, 42, 0.75)', 
                      border: '1px solid rgba(52, 211, 153, 0.25)', 
                      borderRadius: '0.75rem', 
                      padding: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.625rem'
                    }}>
                      <div style={{ width: '2rem', height: '2rem', borderRadius: '0.5rem', backgroundColor: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Users style={{ width: '1.125rem', height: '1.125rem', color: '#34d399' }} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#f8fafc' }}>Patients</div>
                        <div style={{ fontSize: '0.6875rem', color: '#94a3b8' }}>Care Journey Access</div>
                      </div>
                    </div>

                    {/* Node 4: Healthcare Data & IoT */}
                    <div style={{ 
                      backgroundColor: 'rgba(15, 23, 42, 0.75)', 
                      border: '1px solid rgba(168, 85, 247, 0.25)', 
                      borderRadius: '0.75rem', 
                      padding: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.625rem'
                    }}>
                      <div style={{ width: '2rem', height: '2rem', borderRadius: '0.5rem', backgroundColor: 'rgba(168, 85, 247, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Activity style={{ width: '1.125rem', height: '1.125rem', color: '#c084fc' }} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#f8fafc' }}>IoT Sensors</div>
                        <div style={{ fontSize: '0.6875rem', color: '#94a3b8' }}>Vital Sign Telemetry</div>
                      </div>
                    </div>

                  </div>

                  {/* Synchronized Status Bar */}
                  <div style={{ 
                    fontSize: '0.6875rem', 
                    fontFamily: 'monospace', 
                    color: '#64748b', 
                    display: 'flex', 
                    justify: 'space-between', 
                    alignItems: 'center',
                    marginTop: '0.875rem', 
                    paddingTop: '0.625rem', 
                    borderTop: '1px solid rgba(255,255,255,0.08)' 
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#38bdf8' }}>
                      <Server style={{ width: '0.875rem', height: '0.875rem' }} />
                      <span>Connected Healthcare Architecture</span>
                    </span>
                    <span style={{ color: '#34d399', backgroundColor: 'rgba(6, 78, 59, 0.6)', padding: '0.125rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.625rem' }}>
                      SYNCHRONIZED
                    </span>
                  </div>

                </div>
              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
