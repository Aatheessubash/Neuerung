import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Activity, 
  Microscope, 
  Home, 
  HeartPulse, 
  Users, 
  Stethoscope, 
  UserCheck 
} from 'lucide-react';
import './WhoWeServe.css';

export default function WhoWeServe() {
  const pointsOfCare = [
    { title: 'Hospitals', icon: Building2, desc: 'Enterprise acute & specialized inpatient environments.' },
    { title: 'Clinics', icon: Activity, desc: 'Outpatient clinical practices & multi-specialty centers.' },
    { title: 'Diagnostic Centres', icon: Microscope, desc: 'Imaging labs, pathology centers & diagnostic facilities.' },
    { title: 'Homecare Service Providers', icon: Home, desc: 'Connected home health & continuous remote monitoring.' },
    { title: 'Rehabilitation Centres', icon: HeartPulse, desc: 'Recovery, therapy tracking & long-term rehab facilities.' },
    { title: 'Senior Care / Assisted Living', icon: Users, desc: 'Assisted living facilities & specialized eldercare.' },
    { title: 'Healthcare Professionals', icon: Stethoscope, desc: 'Doctors, nurses, therapists & clinical care teams.' },
    { title: 'Patients', icon: UserCheck, desc: 'Individuals & families navigating digital healthcare journeys.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', stiffness: 240, damping: 20 }
    }
  };

  return (
    <section id="who-we-serve" className="serve-section">
      <div className="serve-container">
        
        {/* Header */}
        <motion.div 
          className="serve-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="serve-badge">POINTS OF CARE</div>
          <h2 className="serve-title">
            Built for every <span className="gradient-text">point of care.</span>
          </h2>
          <p className="serve-intro">
            Neuerung technologies support the diverse care settings, providers, professionals, and patients across the modern healthcare continuum.
          </p>
        </motion.div>

        {/* 8 Card Grid with Framer Motion Staggered Entrance */}
        <motion.div 
          className="serve-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
        >
          {pointsOfCare.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="serve-card"
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02, boxShadow: "0 12px 25px rgba(94, 129, 255, 0.12)" }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="serve-icon-box"
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Icon style={{ width: '1.25rem', height: '1.25rem' }} />
                </motion.div>
                <div>
                  <h3 className="serve-card-title">{item.title}</h3>
                  <p className="serve-card-desc">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
