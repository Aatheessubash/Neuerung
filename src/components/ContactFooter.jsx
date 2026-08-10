import React, { useState } from 'react';
import Logo from './Logo';
import { Mail, Phone, MapPin, Lock, ArrowRight, CheckCircle2, Building2, Navigation } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContactFooter.css';
import { COMPANY } from '../constants/company';

export default function ContactFooter({ openModal }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    organization: '',
    businessType: '',
    demoDate: '',
    message: ''
  });

  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setForm({
        fullName: '',
        email: '',
        organization: '',
        businessType: '',
        demoDate: '',
        message: ''
      });
      setTimeout(() => {
        setShowToast(false);
      }, 4500);
    }, 600);
  };

  return (
    <section id="contact" className="contact-footer-section">
      {/* Experience the Neuerung Advantage Header */}
      <motion.div 
        className="contact-header-container"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
      >
        <h2 className="contact-section-title">
          Experience the Neuerung Advantage.
        </h2>
        <p className="contact-section-subtext">
          Schedule a personalized demonstration of our clinical precision tools. See firsthand how our intuitive interfaces and robust analytics can elevate your medical practice.
        </p>
      </motion.div>

      {/* Main Grid: Form + Headquarters */}
      <div className="contact-main-container">
        <div className="contact-grid">
          
          {/* Clinical Inquiry Form (8 Cols) */}
          <motion.div
            className="inquiry-form-card"
            initial={{ opacity: 0, x: -30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <div style={{ position: 'absolute', top: '-6rem', right: '-6rem', width: '16rem', height: '16rem', backgroundColor: '#d6e3ff', borderRadius: '9999px', filter: 'blur(40px)', opacity: 0.3, pointerEvents: 'none' }} />

            <div style={{ marginBottom: '2rem', position: 'relative', zIndex: 10 }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                Clinical Inquiry
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-slate-600)', fontFamily: 'var(--font-body)' }}>
                Please provide your details, and our technical integration team will reach out shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 10, fontFamily: 'var(--font-body)' }}>
              <div className="form-grid-2">
                <div className="form-field-group">
                  <label className="form-field-label" htmlFor="fullName">
                    Full Name <span style={{ color: '#ba1a1a' }}>*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="Dr. Jane Doe"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-field-group">
                  <label className="form-field-label" htmlFor="email">
                    Professional Email <span style={{ color: '#ba1a1a' }}>*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jane.doe@hospital.org"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-field-group">
                <label className="form-field-label" htmlFor="organization">
                  Hospital or Organization <span style={{ color: '#ba1a1a' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <Building2 style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', width: '1.25rem', height: '1.25rem', color: '#94a3b8' }} />
                  <input
                    id="organization"
                    type="text"
                    required
                    placeholder="General Medical Center"
                    value={form.organization}
                    onChange={(e) => setForm({ ...form, organization: e.target.value })}
                    className="form-input"
                    style={{ paddingLeft: '3rem' }}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-field-group">
                  <label className="form-field-label" htmlFor="businessType">
                    Business Type
                  </label>
                  <select
                    id="businessType"
                    value={form.businessType}
                    onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                    className="form-input"
                  >
                    <option value="" disabled>Select facility type...</option>
                    <option value="hospital">Hospital / Medical Center</option>
                    <option value="clinic">Private Clinic</option>
                    <option value="diagnostic">Diagnostic Laboratory</option>
                    <option value="other">Other Healthcare Provider</option>
                  </select>
                </div>

                <div className="form-field-group">
                  <label className="form-field-label" htmlFor="demoDate">
                    Preferred Demo Date
                  </label>
                  <input
                    id="demoDate"
                    type="date"
                    value={form.demoDate}
                    onChange={(e) => setForm({ ...form, demoDate: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-field-group">
                <label className="form-field-label" htmlFor="message">
                  Specific Requirements or Focus Areas
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="We are particularly interested in seeing your diagnostic imaging module..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="form-textarea"
                ></textarea>
              </div>

              <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.75rem' }}>
                  <Lock style={{ width: '1rem', height: '1rem', color: '#059669' }} />
                  <span>Secure & HIPAA Compliant Inquiry</span>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="form-submit-btn"
                >
                  {isSubmitting ? (
                    <div style={{ width: '1.25rem', height: '1.25rem', border: '2px solid #ffffff', borderTopColor: 'transparent', borderRadius: '9999px', animation: 'spin 1s linear infinite' }} />
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Sidebar Headquarters & Map (4 Cols) */}
          <motion.div
            className="sidebar-col"
            initial={{ opacity: 0, x: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.8, 0.25, 1] }}
          >
            {/* Headquarters Contact Card */}
            <div className="hq-card">
              <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Building2 style={{ width: '1.25rem', height: '1.25rem', color: 'var(--color-accent)' }} />
                Our Headquarters
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem', color: 'var(--color-slate-600)', fontFamily: 'var(--font-body)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <MapPin style={{ width: '1rem', height: '1rem', color: 'var(--color-primary)', marginTop: '0.25rem', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontWeight: 'bold', color: 'var(--color-body-text)', marginBottom: '0.25rem' }}>{COMPANY.name}</p>
                    <p>{COMPANY.address.line1},</p>
                    <p>{COMPANY.address.line2},</p>
                    <p>{COMPANY.address.line3},</p>
                    <p>{COMPANY.address.state},</p>
                    <p>{COMPANY.address.country}</p>
                  </div>
                </div>

                <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--color-slate-200)', margin: '0.5rem 0' }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Phone style={{ width: '1rem', height: '1rem', color: 'var(--color-primary)', flexShrink: 0 }} />
                  <a href="tel:+918005550199" style={{ fontWeight: 500 }}>
                    +91 800 555 0199
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Mail style={{ width: '1rem', height: '1rem', color: 'var(--color-primary)', flexShrink: 0 }} />
                  <a href="mailto:demo@neuerung.health" style={{ fontWeight: 500 }}>
                    demo@neuerung.health
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Google Map Card */}
            <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', height: '16rem', position: 'relative', border: '1px solid var(--color-slate-200)', backgroundColor: '#f1f5f9' }}>
              <iframe
                title="Neuerung HealthTech – Nagamalai, Madurai"
                src={COMPANY.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.5) contrast(1.2)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Navigate Button — bottom-right corner */}
              <a
                href={COMPANY.directionsUrl}
                target="_blank"
                rel="noreferrer"
                title={`Get Directions to ${COMPANY.shortName}`}
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  zIndex: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#1d4ed8',
                  color: '#ffffff',
                  padding: '7px 12px',
                  borderRadius: '999px',
                  fontSize: '12px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading, Poppins, sans-serif)',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(29,78,216,0.45)',
                  transition: 'background-color 0.2s, transform 0.15s',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1e40af'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#1d4ed8'; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <Navigation size={13} style={{ flexShrink: 0 }} />
                Get Directions
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Clean Slate Footer */}
      <footer className="site-footer">
        <div className="site-footer-inner">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Logo showText={true} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#424751', marginTop: '1rem', leading: 1.625 }}>
              Intelligent healthcare solutions for a connected world.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#191c1e', marginBottom: '1rem' }}>
              Platform
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#424751' }}>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#who-are-we-with">Ecosystem</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#191c1e', marginBottom: '1rem' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#424751' }}>
              <li><a href="#our-team">Our Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#191c1e', marginBottom: '1rem' }}>
              Legal
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#424751' }}>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div style={{ width: '100%', borderTop: '1px solid rgba(194, 198, 211, 0.6)', padding: '1.5rem 1rem', textAlignment: 'center' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#424751', textAlign: 'center' }}>
            © 2026 Neuerung HealthTech Private Limited. Madurai, Tamil Nadu.
          </p>
        </div>
      </footer>

      {/* Floating Success Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="toast-notification"
          >
            <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <CheckCircle2 style={{ width: '1.5rem', height: '1.5rem', color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                Inquiry Received
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-slate-600)', lineHeight: 1.625 }}>
                Thank you. Our integration team will contact you shortly to confirm your demo schedule.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
