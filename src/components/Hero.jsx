import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import './Hero.css';
import homeVideo from '../assets/homeVideo.mp4';

export default function Hero() {
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

            <div className="hero-video-wrapper">
              <video
                className="hero-video"
                src={homeVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
