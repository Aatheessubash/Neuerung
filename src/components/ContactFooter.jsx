import React, { useState } from 'react';
import Logo from './Logo';
import { Mail, Phone, MapPin, Lock, ArrowRight, CheckCircle2, Building2, Navigation, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContactFooter.css';
import gst from '../assets/gst.png'
import { COMPANY } from '../constants/company';

export default function ContactFooter() {
  const [form, setForm] = useState({
    name: '',
    organisation: '',
    phone: '',
    email: '',
    areaOfInterest: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full Name is required';
    if (!form.organisation.trim()) newErrors.organisation = 'Organisation is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.areaOfInterest) newErrors.areaOfInterest = 'Please select an area of interest';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setForm({
        name: '',
        organisation: '',
        phone: '',
        email: '',
        areaOfInterest: '',
        message: ''
      });
      setErrors({});
      setTimeout(() => {
        setShowToast(false);
      }, 4500);
    }, 600);
  };

  const handleNavScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="contact" className="contact-footer-section">
      {/* Header */}
      <motion.div
        className="contact-header-container"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
      >
        <h2 className="contact-section-title">
          Let's build <span className="gradient-text">better healthcare together.</span>
        </h2>
        <p className="contact-section-subtext">
          Whether you are a hospital, clinic, healthcare professional, service provider or technology partner, we'd like to understand how Neuerung can support your healthcare ecosystem.
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
                Start a Conversation
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-slate-600)', fontFamily: 'var(--font-body)' }}>
                Please fill in your details below, and our clinical team will reach out promptly.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 10, fontFamily: 'var(--font-body)' }}>

              {/* Name & Organisation */}
              <div className="form-grid-2">
                <div className="form-field-group">
                  <label className="form-field-label" htmlFor="contact-name">
                    Full Name <span className="required-asterisk">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Dr. Jane Doe"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  {errors.name && (
                    <span className="field-error-text">
                      <AlertCircle size={12} /> {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-field-group">
                  <label className="form-field-label" htmlFor="contact-organisation">
                    Organisation <span className="required-asterisk">*</span>
                  </label>
                  <input
                    id="contact-organisation"
                    name="organisation"
                    type="text"
                    required
                    placeholder="General Hospital / Medical Center"
                    value={form.organisation}
                    onChange={(e) => {
                      setForm({ ...form, organisation: e.target.value });
                      if (errors.organisation) setErrors({ ...errors, organisation: null });
                    }}
                    className={`form-input ${errors.organisation ? 'input-error' : ''}`}
                    aria-invalid={errors.organisation ? "true" : "false"}
                  />
                  {errors.organisation && (
                    <span className="field-error-text">
                      <AlertCircle size={12} /> {errors.organisation}
                    </span>
                  )}
                </div>
              </div>

              {/* Email & Phone */}
              <div className="form-grid-2">
                <div className="form-field-group">
                  <label className="form-field-label" htmlFor="contact-email">
                    Professional Email <span className="required-asterisk">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane.doe@hospital.org"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && (
                    <span className="field-error-text">
                      <AlertCircle size={12} /> {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-field-group">
                  <label className="form-field-label" htmlFor="contact-phone">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="form-input"
                  />
                  <span className="field-hint-text">Format: +91 98765 43210</span>
                </div>
              </div>

              {/* Area of Interest */}
              <div className="form-field-group">
                <label className="form-field-label" htmlFor="contact-area">
                  Area of Interest <span className="required-asterisk">*</span>
                </label>
                <select
                  id="contact-area"
                  name="areaOfInterest"
                  required
                  value={form.areaOfInterest}
                  onChange={(e) => {
                    setForm({ ...form, areaOfInterest: e.target.value });
                    if (errors.areaOfInterest) setErrors({ ...errors, areaOfInterest: null });
                  }}
                  className={`form-input ${errors.areaOfInterest ? 'input-error' : ''}`}
                  aria-invalid={errors.areaOfInterest ? "true" : "false"}
                >
                  <option value="" disabled>Select an area of interest...</option>
                  <option value="Hexa Doctor">Hexa Doctor</option>
                  <option value="Hexa Service">Hexa Service</option>
                  <option value="Hexa Pharmacy">Hexa Pharmacy</option>
                  <option value="Geriatric Care">Geriatric Care</option>
                  <option value="Dementia Care">Dementia Care</option>
                  <option value="Rehabilitation">Rehabilitation</option>
                  <option value="Technology Partnership">Technology Partnership</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
                {errors.areaOfInterest && (
                  <span className="field-error-text">
                    <AlertCircle size={12} /> {errors.areaOfInterest}
                  </span>
                )}
              </div>

              {/* Message Textarea */}
              <div className="form-field-group">
                <label className="form-field-label" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  placeholder="How can Neuerung support your healthcare goals?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="form-textarea"
                ></textarea>
              </div>

              {/* Privacy Consent & Submit Action */}
              <div className="form-action-container">
                <div className="privacy-consent-row">
                  <Lock style={{ width: '1rem', height: '1rem', color: '#059669', flexShrink: 0 }} />
                  <span>By submitting this inquiry, you agree to our clinical data handling guidelines.</span>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="form-submit-btn"
                >
                  {isSubmitting ? (
                    <div style={{ width: '1.25rem', height: '1.25rem', border: '2px solid #ffffff', borderTopColor: 'transparent', borderRadius: '9999px', animation: 'spin 1s linear infinite' }} />
                  ) : (
                    <>
                      <span>Talk to Neuerung</span>
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
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Building2 style={{ width: '1.25rem', height: '1.25rem', color: 'var(--color-accent)' }} />
                Our Headquarters
              </h3>
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img
                      src={gst}
                      alt="GST"
                      style={{
                        width: '1.5rem',
                        height: '1.5rem',
                        objectFit: 'contain',
                        flexShrink: 0
                      }}
                    />
                    {COMPANY.contact.gstin}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Phone style={{ width: '1rem', height: '1rem', color: 'var(--color-primary)', flexShrink: 0 }} />
                  <a href={`tel:${COMPANY.contact.phone}`} style={{ fontWeight: 500 }}>
                    {COMPANY.contact.phone}
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Mail style={{ width: '1rem', height: '1rem', color: 'var(--color-primary)', flexShrink: 0 }} />
                  <a href={`mailto:${COMPANY.contact.email1}`} style={{ fontWeight: 500 }}>
                    {COMPANY.contact.email1}
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
                style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

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
                  padding: '8px 14px',
                  borderRadius: '999px',
                  fontSize: '12px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading, Poppins, sans-serif)',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(29,78,216,0.45)',
                  whiteSpace: 'nowrap'
                }}
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
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: '#424751', marginTop: '1rem', lineHeight: 1.625 }}>
              Healthcare, Reimagined.<br />Intelligent, connected and clinically relevant technology.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#191c1e', marginBottom: '1rem' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#424751' }}>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavScroll('about'); }}>About Neuerung</a></li>
              <li><a href="#technology" onClick={(e) => { e.preventDefault(); handleNavScroll('technology'); }}>Technology</a></li>
              <li><a href="#who-we-serve" onClick={(e) => { e.preventDefault(); handleNavScroll('who-we-serve'); }}>Who We Serve</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavScroll('contact'); }}>Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#191c1e', marginBottom: '1rem' }}>
              Hexa Ecosystem
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#424751' }}>
              <li><a href="#hexa" onClick={(e) => { e.preventDefault(); handleNavScroll('hexa'); }}>Hexa Overview</a></li>
              <li><a href="#hexa-doctor" onClick={(e) => { e.preventDefault(); handleNavScroll('hexa-doctor'); }}>Hexa Doctor</a></li>
              <li><a href="#hexa-service" onClick={(e) => { e.preventDefault(); handleNavScroll('hexa-service'); }}>Hexa Service</a></li>
              <li><a href="#hexa-pharmacy" onClick={(e) => { e.preventDefault(); handleNavScroll('hexa-pharmacy'); }}>Hexa Pharmacy</a></li>
              <li><a href="#hexa-patients" onClick={(e) => { e.preventDefault(); handleNavScroll('hexa-patients'); }}>Hexa for Patients</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#191c1e', marginBottom: '1rem' }}>
              Specialised Solutions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#424751' }}>
              <li><a href="#geriatric-care" onClick={(e) => { e.preventDefault(); handleNavScroll('geriatric-care'); }}>Geriatric Care</a></li>
              <li><a href="#dementia-care" onClick={(e) => { e.preventDefault(); handleNavScroll('dementia-care'); }}>Dementia Care</a></li>
              <li><a href="#rehabilitation" onClick={(e) => { e.preventDefault(); handleNavScroll('rehabilitation'); }}>Rehabilitation</a></li>
              <li><a href="#insights" onClick={(e) => { e.preventDefault(); handleNavScroll('insights'); }}>Insights</a></li>
            </ul>
          </div>
        </div>

        <div style={{ width: '100%', borderTop: '1px solid rgba(194, 198, 211, 0.6)', padding: '1.5rem 1rem', textAlignment: 'center' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#424751', textAlign: 'center' }}>
            © {new Date().getFullYear()} Neuerung HealthTech Private Limited. All rights reserved.
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
            role="alert"
          >
            <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <CheckCircle2 style={{ width: '1.5rem', height: '1.5rem', color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                Inquiry Received
              </h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-slate-600)', lineHeight: 1.625 }}>
                Thank you for contacting Neuerung HealthTech. Our team will get back to you shortly.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
