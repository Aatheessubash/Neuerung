import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play, TrendingUp, Monitor } from 'lucide-react';
import './Hero.css';
import dicomScanImg from '../assets/dicom_chest_scan.png';

export default function Hero({ openModal }) {
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
              <span>Healthcare, Reimagined</span>
            </motion.div>

            {/* Headline */}
            <h1 className="hero-title">
              Clinical AI Engine:{' '}
              <span className="gradient-text">
                Precision Diagnostics
              </span>
            </h1>

            {/* Subtext */}
            <p className="hero-description">
              Empowering critical care with real-time risk scoring, predictive triage, and anomaly detection. Seamlessly integrated into your existing EHR and DICOM workflows for immediate clinical impact.
            </p>

            {/* Dual CTAs */}
            <div className="hero-cta-group">
              <motion.button
                onClick={() => openModal('tech-specs')}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="hero-btn-primary"
              >
                <span>Explore Technical Specs</span>
                <ArrowRight style={{ width: '1rem', height: '1rem', marginLeft: '0.5rem' }} />
              </motion.button>

              <motion.button
                onClick={() => openModal('video-demo')}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="hero-btn-secondary"
              >
                <Play style={{ width: '1rem', height: '1rem', marginRight: '0.5rem', fill: 'currentColor' }} />
                <span>Watch System Demo</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Visual Monitor Showcase Card */}
          <motion.div
            className="hero-visual-col"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <motion.div 
              className="hero-visual-card"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              
              {/* Header Tag */}
              <div className="visual-card-header">
                <div className="live-inference-badge">
                  <span className="pulse-dot" />
                  <span className="live-inference-text">
                    LIVE INFERENCE
                  </span>
                </div>
              </div>

              {/* Monitor Graphic Frame */}
              <div className="monitor-frame">
                
                {/* Desktop Monitor Screen Mockup */}
                <div className="monitor-screen">
                  
                  {/* Top Bar of DICOM Viewer */}
                  <div className="monitor-screen-top">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'monospace' }}>
                      <Monitor style={{ width: '1rem', height: '1rem', color: '#38BDF8' }} />
                      <span>Neuerung HealthTech — Clinical AI Engine</span>
                    </div>
                    <span style={{ color: '#34d399', fontFamily: 'monospace', fontSize: '0.625rem', backgroundColor: '#022c22', padding: '0.125rem 0.5rem', borderRadius: '0.25rem' }}>
                      SYNCHRONIZED
                    </span>
                  </div>

                  {/* DICOM Chest Scan Visual Simulation */}
                  <div className="dicom-grid">
                    <div className="dicom-image-box">
                      
                      {/* Active DICOM Medical Laser Beam Scanner Line */}
                      <div className="animate-laser-scan" />

                      <img 
                        src={dicomScanImg} 
                        alt="DICOM Clinical AI Scan" 
                        className="dicom-img"
                      />

                      <div className="dicom-overlay-tag">
                        <span style={{ width: '0.375rem', height: '0.375rem', borderRadius: '9999px', backgroundColor: '#38BDF8' }} />
                        <span>Targeting Anomaly #01</span>
                      </div>
                    </div>

                    <div className="dicom-stats-box">
                      <div className="stat-item">
                        <div style={{ color: '#94a3b8' }}>Risk Assessment</div>
                        <div style={{ color: '#38BDF8', fontWeight: 'bold', fontSize: '0.75rem', marginTop: '0.125rem' }}>High Sensitivity</div>
                      </div>
                      <div className="stat-item">
                        <div style={{ color: '#94a3b8' }}>Model Confidence</div>
                        <div style={{ color: '#34d399', fontWeight: 'bold', fontSize: '0.75rem', marginTop: '0.125rem' }}>99.2%</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ fontSize: '0.625rem', fontFamily: 'monospace', color: '#64748b', display: 'flex', justifyContent: 'space-between', paddingTop: '0.25rem', borderTop: '1px solid #1e293b' }}>
                    <span>EHR Sync: PT-88492-X</span>
                    <span>Modality: DICOM 3.0</span>
                  </div>

                </div>
              </div>

              {/* Floating Accuracy Badge (Bottom Right) */}
              <motion.div 
                className="hero-floating-accuracy"
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.8 }}
              >
                <div style={{ padding: '0.625rem', borderRadius: '0.75rem', backgroundColor: '#ecfdf5', color: '#059669' }}>
                  <TrendingUp style={{ width: '1.25rem', height: '1.25rem' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    ICU Alert Accuracy
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', fontFamily: 'var(--font-heading)' }}>
                    99.2%
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
