import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Scan, 
  Radio, 
  LayoutGrid, 
  Database, 
  BarChart3, 
  CheckCircle2 
} from 'lucide-react';
import './Technology.css';

export default function Technology() {
  const techItems = [
    {
      icon: Cpu,
      title: "Artificial Intelligence",
      tagline: "AI-assisted clinical workflows",
      desc: "Intelligent algorithms integrated into care processes to provide clinical decision support and workflow optimization.",
      highlight: "Clinician decision support"
    },
    {
      icon: Scan,
      title: "Medical Imaging",
      tagline: "Connected imaging data",
      desc: "Advanced processing tools and DICOM standards supporting diagnostic review and radiological communication.",
      highlight: "DICOM & CloudPACS standards"
    },
    {
      icon: Radio,
      title: "IoT & Telemetry",
      tagline: "Connected hardware sensors",
      desc: "Continuous vital telemetry and wireless sensor monitoring across inpatient and remote care environments.",
      highlight: "Continuous vital tracking"
    },
    {
      icon: LayoutGrid,
      title: "Digital Health Platforms",
      tagline: "Integrated software suites",
      desc: "Modular platforms connecting healthcare professionals, service providers, and patients in a unified ecosystem.",
      highlight: "Unified multi-stakeholder access"
    },
    {
      icon: Database,
      title: "EHR / Health Data",
      tagline: "Interoperable health records",
      desc: "Structured clinical data management and secure standards ensuring seamless patient information flow.",
      highlight: "HL7 & FHIR interoperability"
    },
    {
      icon: BarChart3,
      title: "Analytics & Intelligence",
      tagline: "Healthcare intelligence",
      desc: "Actionable data processing providing operational and clinical visibility for enhanced patient care.",
      highlight: "Actionable operational metrics"
    }
  ];

  return (
    <section id="technology" className="tech-section">
      <div className="tech-container">
        
        {/* Section Header */}
        <motion.div 
          className="tech-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="tech-badge">CONNECTED ARCHITECTURE</div>
          <h2 className="tech-title">
            The technology behind{' '}
            <span className="gradient-text">connected healthcare.</span>
          </h2>
          <p className="tech-description">
            Neuerung combines <abbr title="Artificial Intelligence">AI</abbr>, medical imaging, <abbr title="Internet of Things">IoT</abbr> telemetry, and digital health platforms into a cohesive technical architecture designed around real clinical needs.
          </p>
        </motion.div>

        {/* 6 Grid items */}
        <div className="tech-grid">
          {techItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="tech-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className="tech-card-header">
                  <div className="tech-icon-box">
                    <Icon style={{ width: '1.5rem', height: '1.5rem' }} />
                  </div>
                  <span className="tech-tagline">{item.tagline}</span>
                </div>
                
                <h3 className="tech-card-title">{item.title}</h3>
                <p className="tech-card-desc">{item.desc}</p>

                <div className="tech-check-row">
                  <CheckCircle2 style={{ width: '1rem', height: '1rem', color: '#0284c7', flexShrink: 0 }} />
                  <span>{item.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
