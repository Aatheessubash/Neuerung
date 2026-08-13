import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Stethoscope, 
  Building2, 
  Activity, 
  Microscope, 
  Home, 
  Pill, 
  HeartPulse
} from 'lucide-react';
import './HealthcareContext.css';

export default function HealthcareContext() {
  const stakeholders = [
    { name: 'Patients', icon: Users },
    { name: 'Doctors', icon: Stethoscope },
    { name: 'Hospitals', icon: Building2 },
    { name: 'Clinics', icon: Activity },
    { name: 'Diagnostics', icon: Microscope },
    { name: 'Homecare', icon: Home },
    { name: 'Pharmacy', icon: Pill },
    { name: 'Rehabilitation', icon: HeartPulse },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', stiffness: 260, damping: 20 }
    }
  };

  return (
    <section id="context" className="context-section">
      <div className="context-container">
        
        {/* Header */}
        <motion.div 
          className="context-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="context-title">
            Healthcare is connected.<br />
            <span className="gradient-text">Your technology should be too.</span>
          </h2>
          <p className="context-intro">
            Modern healthcare relies on multiple connected stakeholders working together to deliver care.
          </p>
        </motion.div>

        {/* Stakeholder Network Grid with Staggered Framer Motion Reveal */}
        <motion.div 
          className="context-stakeholders-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
        >
          {stakeholders.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.name}
                className="stakeholder-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4, boxShadow: "0 10px 25px rgba(94, 129, 255, 0.15)" }}
                whileTap={{ scale: 0.96 }}
              >
                <motion.div 
                  className="stakeholder-icon-box"
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Icon style={{ width: '1.25rem', height: '1.25rem' }} />
                </motion.div>
                <span className="stakeholder-name">{item.name}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Transition Callout */}
        <motion.div 
          className="context-transition-card"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
        >
          <p className="transition-text">
            <strong>Neuerung</strong> builds technology that connects these healthcare experiences.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
