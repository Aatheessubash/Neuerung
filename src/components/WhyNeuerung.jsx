import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Cpu, Network, Maximize, Heart } from 'lucide-react';
import './WhyNeuerung.css';

export default function WhyNeuerung() {
  const blocks = [
    {
      icon: Stethoscope,
      title: 'Clinically Relevant',
      desc: 'Designed around real healthcare needs.'
    },
    {
      icon: Cpu,
      title: 'Intelligent',
      desc: 'AI-driven capabilities designed to support healthcare workflows.'
    },
    {
      icon: Network,
      title: 'Connected',
      desc: 'Connecting healthcare professionals, service providers and patients.'
    },
    {
      icon: Maximize,
      title: 'Scalable',
      desc: 'Built for evolving healthcare environments.'
    },
    {
      icon: Heart,
      title: 'Patient-Centric',
      desc: 'Designed around better healthcare experiences and care journeys.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', stiffness: 220, damping: 20 }
    }
  };

  return (
    <section id="why-us" className="why-section">
      <div className="why-container">
        
        {/* Header */}
        <motion.div 
          className="why-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="why-badge">THE NEUERUNG ADVANTAGE</div>
          <h2 className="why-title">
            Why Neuerung?
          </h2>
          <p className="why-intro">
            Five fundamental principles guiding how we build technology for healthcare.
          </p>
        </motion.div>

        {/* 5 Content Blocks Layout with Staggered Framer Motion Reveal */}
        <motion.div 
          className="why-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
        >
          {blocks.map((block) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={block.title}
                className="why-card"
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.03, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div 
                  className="why-icon-box"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Icon style={{ width: '1.5rem', height: '1.5rem' }} />
                </motion.div>
                <h3 className="why-card-title">{block.title}</h3>
                <p className="why-card-desc">{block.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
