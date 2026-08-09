import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import './OurTeam.css';
import drSubashImg from '../assets/dr_subash.png';
import drMeenakshiImg from '../assets/dr_meenakshi.png';
import karthikImg from '../assets/karthik.png';
import priyaImg from '../assets/priya.png';

export default function OurTeam({ openModal }) {
  const teamMembers = [
    {
      id: 'subash',
      name: "Dr. M. Subash",
      role: "Founder & CEO",
      badge: "Leadership",
      bio: "Visionary leader bridging the gap between rigorous medical practice and scalable technology. With over 15 years in clinical diagnostics, Dr. Subash spearheads Neuerung's strategic direction, ensuring all innovations meet the highest standards of clinical precision and patient safety.",
      img: drSubashImg
    },
    {
      id: 'meenakshi',
      name: "Dr. K. Meenakshi",
      role: "CMO & AI Advisor",
      bio: "Pioneering the integration of machine learning in diagnostic workflows.",
      img: drMeenakshiImg
    },
    {
      id: 'karthik',
      name: "R. Karthik",
      role: "Head of IoT & Telemetry",
      tags: ["Hardware", "Sensors"],
      bio: "Architecting robust data pipelines from edge devices to cloud infrastructure.",
      img: karthikImg
    },
    {
      id: 'priya',
      name: "S. Priya",
      role: "Lead Software Architect",
      tags: ["Cloud", "Security"],
      bio: "Designing secure, scalable, and HIPAA-compliant software architectures.",
      img: priyaImg
    }
  ];

  return (
    <section id="our-team" className="team-section">
      
      {/* Header */}
      <motion.div 
        className="team-header"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
      >
        <h2 className="team-title">
          Leadership & Innovation
        </h2>
        <p className="team-subtext">
          At the intersection of clinical precision and advanced technology. Meet the experts driving Neuerung HealthTech's mission to redefine patient telemetry and diagnostics.
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div className="team-grid">
        
        {/* Card 1: Dr. A. Subash (8 Cols) */}
        <motion.div
          className="team-card-lead"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
          whileHover={{ y: -4 }}
        >
          <div className="team-img-lead-box">
            <img
              src={teamMembers[0].img}
              alt={teamMembers[0].name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 className="team-member-name">
                  {teamMembers[0].name}
                </h3>
                <p className="team-member-role">
                  {teamMembers[0].role}
                </p>
              </div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', backgroundColor: 'rgba(94, 129, 255, 0.12)', color: 'var(--color-accent)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                <CheckCircle style={{ width: '0.875rem', height: '0.875rem' }} /> Leadership
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-slate-600)', fontFamily: 'var(--font-body)', lineHeight: 1.625 }}>
              {teamMembers[0].bio}
            </p>
            <div style={{ paddingTop: '0.5rem' }}>
              <button
                onClick={() => openModal('team-bio', teamMembers[0])}
                className="team-bio-btn"
              >
                Read Bio
              </button>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Dr. K. Meenakshi (4 Cols) */}
        <motion.div
          className="team-card-compact"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.8, 0.25, 1] }}
          whileHover={{ y: -4 }}
        >
          <div style={{ width: '100%', borderRadius: '1rem', overflow: 'hidden', aspectRatio: '16 / 9', backgroundColor: '#f1f5f9' }}>
            <img
              src={teamMembers[1].img}
              alt={teamMembers[1].name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div>
              <h3 className="team-member-name" style={{ fontSize: '1.25rem' }}>
                {teamMembers[1].name}
              </h3>
              <p className="team-member-role" style={{ fontSize: '0.75rem' }}>
                {teamMembers[1].role}
              </p>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-slate-600)', fontFamily: 'var(--font-body)', lineHeight: 1.625 }}>
              {teamMembers[1].bio}
            </p>
            <button
              onClick={() => openModal('team-bio', teamMembers[1])}
              className="team-bio-btn"
              style={{ width: '100%', marginTop: '0.5rem' }}
            >
              Read Bio
            </button>
          </div>
        </motion.div>

        {/* Card 3: R. Karthik (6 Cols) */}
        <motion.div
          className="team-card-half"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.8, 0.25, 1] }}
          whileHover={{ y: -4 }}
        >
          <div style={{ width: '7rem', height: '7rem', flexShrink: 0, borderRadius: '9999px', overflow: 'hidden', border: '4px solid #ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', backgroundColor: '#f1f5f9' }}>
            <img
              src={teamMembers[2].img}
              alt={teamMembers[2].name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
            <div>
              <h3 className="team-member-name" style={{ fontSize: '1.25rem' }}>
                {teamMembers[2].name}
              </h3>
              <p className="team-member-role" style={{ fontSize: '0.75rem' }}>
                {teamMembers[2].role}
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {teamMembers[2].tags.map((t) => (
                <span key={t} style={{ backgroundColor: '#e2e8f0', color: '#475569', padding: '0.125rem 0.625rem', borderRadius: '0.375rem', fontFamily: 'var(--font-body)', fontSize: '0.625rem', fontWeight: 600 }}>
                  {t}
                </span>
              ))}
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-slate-600)', fontFamily: 'var(--font-body)', lineHeight: 1.625 }}>
              {teamMembers[2].bio}
            </p>
            <button
              onClick={() => openModal('team-bio', teamMembers[2])}
              style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
            >
              <span>Read Bio</span>
              <ArrowRight style={{ width: '0.875rem', height: '0.875rem' }} />
            </button>
          </div>
        </motion.div>

        {/* Card 4: S. Priya (6 Cols) */}
        <motion.div
          className="team-card-half"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
          whileHover={{ y: -4 }}
        >
          <div style={{ width: '7rem', height: '7rem', flexShrink: 0, borderRadius: '9999px', overflow: 'hidden', border: '4px solid #ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', backgroundColor: '#f1f5f9' }}>
            <img
              src={teamMembers[3].img}
              alt={teamMembers[3].name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
            <div>
              <h3 className="team-member-name" style={{ fontSize: '1.25rem' }}>
                {teamMembers[3].name}
              </h3>
              <p className="team-member-role" style={{ fontSize: '0.75rem' }}>
                {teamMembers[3].role}
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {teamMembers[3].tags.map((t) => (
                <span key={t} style={{ backgroundColor: '#e2e8f0', color: '#475569', padding: '0.125rem 0.625rem', borderRadius: '0.375rem', fontFamily: 'var(--font-body)', fontSize: '0.625rem', fontWeight: 600 }}>
                  {t}
                </span>
              ))}
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-slate-600)', fontFamily: 'var(--font-body)', lineHeight: 1.625 }}>
              {teamMembers[3].bio}
            </p>
            <button
              onClick={() => openModal('team-bio', teamMembers[3])}
              style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
            >
              <span>Read Bio</span>
              <ArrowRight style={{ width: '0.875rem', height: '0.875rem' }} />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
