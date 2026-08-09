import React from 'react';
import { motion } from 'framer-motion';
import { Layers, RefreshCw } from 'lucide-react';
import './HowIsItDone.css';

export default function HowIsItDone() {
  return (
    <section id="how-is-it-done" className="architecture-section">
      <div className="architecture-container">
        <div className="architecture-grid">
          
          {/* Left Column: Specs & Features */}
          <motion.div
            className="architecture-text-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <span className="architecture-badge">
              SYSTEM ARCHITECTURE
            </span>

            <h2 className="architecture-title">
              Zero-Friction Integration
            </h2>

            <p className="architecture-desc">
              Deploy securely within your existing infrastructure. Our clinical engine interfaces directly with standard protocols, requiring no specialized hardware or disruption to clinical routines.
            </p>

            <div className="feature-list">
              {/* Feature 1 */}
              <motion.div 
                className="feature-item"
                whileHover={{ x: 4 }}
              >
                <div className="feature-icon-box">
                  <Layers style={{ width: '1.25rem', height: '1.25rem' }} />
                </div>
                <div>
                  <h4 className="feature-item-title">
                    Native DICOM Processing
                  </h4>
                  <p className="feature-item-desc">
                    Direct ingestion of imaging modalities for structural anomaly correlation.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                className="feature-item"
                whileHover={{ x: 4 }}
              >
                <div className="feature-icon-box">
                  <RefreshCw style={{ width: '1.25rem', height: '1.25rem' }} />
                </div>
                <div>
                  <h4 className="feature-item-title">
                    HL7 & FHIR Compliant EHR Sync
                  </h4>
                  <p className="feature-item-desc">
                    Bi-directional data flow ensuring risk scores are written back directly to the patient chart.
                  </p>
                </div>
              </motion.div>
            </div>

          </motion.div>

          {/* Right Column: Dark Slate JSON Terminal Code Editor Card */}
          <motion.div
            className="terminal-col"
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <motion.div 
              className="terminal-card"
              whileHover={{ y: -4 }}
            >
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className="dot-red" />
                  <div className="dot-amber" />
                  <div className="dot-emerald" />
                </div>
                <span className="terminal-filename">
                  api_payload.json
                </span>
              </div>

              <pre className="terminal-code">
{`{
  "patient_id": "PT-88492-X",
  "engine_status": "active",
  "streams": ["HL7_v2", "DICOM_WADO"],
  "inference": {
    "model": "ICU_Early_Warning_V4",
    "risk_score": 0.82,
    "confidence": 0.94,
    "flags": ["respiratory_distress", "sepsis_risk_elevated"]
  },
  "action": "trigger_rapid_response"
}`}
              </pre>

              <div className="terminal-footer">
                <span>Latency: 12ms</span>
                <span style={{ color: '#34d399', fontWeight: 'bold' }}>Status 200 OK</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
