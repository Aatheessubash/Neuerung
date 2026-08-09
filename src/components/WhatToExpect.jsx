import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, ShieldCheck } from 'lucide-react';
import './WhatToExpect.css';

export default function WhatToExpect({ openModal }) {
  return (
    <section id="solutions" className="capabilities-section">
      <div className="capabilities-container">
        
        {/* Section Header */}
        <motion.div 
          className="capabilities-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
        >
          <h2 className="capabilities-title">
            Core Capabilities & Solutions
          </h2>
          <p className="capabilities-subtext">
            Our algorithms operate continuously in the background, surfacing critical insights directly into your clinical line of sight.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="bento-grid">
          
          {/* Top Row: 2 Cards */}
          <div className="bento-row">
            
            {/* Card 1: Automated Guidelines (5 cols) */}
            <motion.div
              className="bento-card-5"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
              whileHover={{ y: -4 }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="bento-card-icon-circle">
                  <ShieldCheck style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
                <h3 className="card-title">
                  Automated Guidelines
                </h3>
                <p className="card-desc">
                  Real-time cross-referencing of patient vitals and history against the latest global clinical protocols, reducing diagnostic variance.
                </p>
              </div>

              <div style={{ paddingTop: '2rem' }}>
                <button
                  onClick={() => openModal('clinical-ai')}
                  className="card-action-btn"
                >
                  <span>View Protocol Library</span>
                  <ArrowRight style={{ width: '0.875rem', height: '0.875rem', marginLeft: '0.25rem' }} />
                </button>
              </div>
            </motion.div>

            {/* Card 2: Sub-clinical Anomaly Detection (7 cols) */}
            <motion.div
              className="bento-card-7"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.8, 0.25, 1] }}
              whileHover={{ y: -4 }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '28rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="bento-card-icon-circle">
                    <Activity style={{ width: '1.5rem', height: '1.5rem' }} />
                  </div>
                  <span style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', backgroundColor: '#e2e8f0', color: '#334155', fontSize: '0.6875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Continuous Monitoring
                  </span>
                </div>
                
                <h3 className="card-title">
                  Sub-clinical Anomaly Detection
                </h3>
                
                <p className="card-desc">
                  Identifying minute physiological deviations before they cascade into critical events. Our early warning system analyzes multi-modal data streams for ICU risk scoring.
                </p>
              </div>

              {/* Graphic Waveform Stream Mockup */}
              <div className="waveform-card">
                <div style={{ fontSize: '0.625rem', fontFamily: 'monospace', color: '#94a3b8', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Real-Time Sensor Stream</span>
                  <span style={{ color: '#2563eb', fontWeight: 'bold' }}>Sync</span>
                </div>
                <div className="waveform-screen">
                  <svg style={{ width: '100%', height: '100%', opacity: 0.85 }} viewBox="0 0 200 80">
                    <motion.path 
                      d="M0 40 Q 25 10, 50 40 T 100 40 T 150 10 T 200 40" 
                      fill="none" 
                      stroke="#38BDF8" 
                      strokeWidth="2"
                      animate={{ strokeDashoffset: [0, -40] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                      strokeDasharray="8 4"
                    />
                    <path d="M0 40 Q 30 70, 60 40 T 120 40 T 180 20 T 200 40" fill="none" stroke="#2563EB" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Card: Predictive Triage Engine */}
          <motion.div
            className="bento-card-full"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.8, 0.25, 1] }}
            whileHover={{ y: -4 }}
          >
            {/* Radial 75% Risk Chart */}
            <div className="radial-chart-box">
              <svg style={{ width: '7rem', height: '7rem', transform: 'rotate(-90deg)' }} viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#E2E8F0" strokeWidth="10" />
                <motion.circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  fill="none" 
                  stroke="#5E81FF" 
                  strokeWidth="10" 
                  strokeDasharray="251.2" 
                  initial={{ strokeDashoffset: 251.2 }}
                  whileInView={{ strokeDashoffset: 62.8 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                  strokeLinecap="round" 
                />
              </svg>
              <div style={{ position: 'absolute', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a', fontFamily: 'var(--font-heading)' }}>75%</div>
                <div style={{ fontSize: '0.625rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Risk Score</div>
              </div>
            </div>

            {/* Text & Action */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '42rem' }}>
              <h3 className="card-title" style={{ marginTop: 0 }}>
                Predictive Triage Engine
              </h3>
              <p className="card-desc">
                Optimize emergency department flow by forecasting patient deterioration trajectories. The AI assesses incoming vital signs and historical context to prioritize intervention automatically.
              </p>
              <div>
                <button
                  onClick={() => openModal('clinical-ai')}
                  className="card-action-btn"
                >
                  <span>See ED Workflow Integration</span>
                  <ArrowRight style={{ width: '0.875rem', height: '0.875rem', marginLeft: '0.25rem' }} />
                </button>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
