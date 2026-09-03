import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Send, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import './Modals.css';

export default function Modals({ activeModal, closeModal, modalData }) {
  const [demoForm, setDemoForm] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    areaOfInterest: 'Hexa Doctor',
    date: '',
    message: ''
  });

  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    if (modalData && modalData.name) {
      setDemoForm(prev => ({
        ...prev,
        areaOfInterest: modalData.name.includes('Doctor') ? 'Hexa Doctor' :
                         modalData.name.includes('Service') ? 'Hexa Service' :
                         modalData.name.includes('Pharmacy') ? 'Hexa Pharmacy' :
                         modalData.name.includes('Geriatric') ? 'Geriatric Care' :
                         modalData.name.includes('Dementia') ? 'Dementia Care' :
                         modalData.name.includes('Rehab') ? 'Rehabilitation' : 'General Enquiry'
      }));
    }
    setSubmitError(null);
  }, [modalData, activeModal]);

  // Bulletproof background scroll lock for macOS / iOS Safari, Chrome, Firefox & Edge
  useEffect(() => {
    if (!activeModal) return;

    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    const prevBodyOverflow = document.body.style.overflow;
    const prevBodyPosition = document.body.style.position;
    const prevBodyTop = document.body.style.top;
    const prevBodyLeft = document.body.style.left;
    const prevBodyWidth = document.body.style.width;
    const prevBodyHeight = document.body.style.height;
    const prevBodyPaddingRight = document.body.style.paddingRight;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevHtmlScrollBehavior = document.documentElement.style.scrollBehavior;

    // 1. Lock HTML & Body to freeze background without jumping in WebKit/Safari
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.scrollBehavior = 'auto';

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // 2. Keyboard ESC close listener
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    // 3. Prevent backdrop touchmove & wheel event propagation in Safari
    const handleBackdropEvent = (e) => {
      if (e.target && e.target.classList && e.target.classList.contains('modal-overlay')) {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('touchmove', handleBackdropEvent, { passive: false });
    document.addEventListener('wheel', handleBackdropEvent, { passive: false });

    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.documentElement.style.scrollBehavior = prevHtmlScrollBehavior;

      document.body.style.overflow = prevBodyOverflow;
      document.body.style.position = prevBodyPosition;
      document.body.style.top = prevBodyTop;
      document.body.style.left = prevBodyLeft;
      document.body.style.right = '';
      document.body.style.width = prevBodyWidth;
      document.body.style.height = prevBodyHeight;
      document.body.style.paddingRight = prevBodyPaddingRight;

      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('touchmove', handleBackdropEvent);
      document.removeEventListener('wheel', handleBackdropEvent);

      // Restore exact scroll position seamlessly
      window.scrollTo({
        top: scrollY,
        left: 0,
        behavior: 'instant'
      });
    };
  }, [activeModal, closeModal]);

  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const baseUrl = import.meta.env.VITE_API_URL || '';
      const endpoint = baseUrl ? `${baseUrl}/api/contact` : '/api/contact';

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: demoForm.name,
          organisation: demoForm.organisation,
          email: demoForm.email,
          phone: demoForm.phone,
          areaOfInterest: demoForm.areaOfInterest,
          message: demoForm.message || `Demo requested for ${demoForm.areaOfInterest}`,
          formType: 'Demo Request',
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        throw new Error(data.message || `Request failed (status ${res.status})`);
      }

      setDemoSubmitted(true);
    } catch (err) {
      console.error('Demo request error:', err);
      setSubmitError(err.message || 'Failed to submit demo request. Please contact healthtech@neuerung.in directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!activeModal) return null;

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={closeModal}>
        <motion.div
          className="modal-dialog"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.93, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 15 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="modal-close-btn"
            aria-label="Close modal"
          >
            <X style={{ width: '1.25rem', height: '1.25rem' }} />
          </button>

          {/* 1. PRODUCT DETAILS MODAL */}
          {activeModal === 'product-details' && modalData && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <div className="modal-header">
                <span className="modal-category-badge">{modalData.category || 'PRODUCT'}</span>
                <h3 className="modal-title">{modalData.name}</h3>
                <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.875rem', marginTop: '0.2rem' }}>
                  {modalData.tagline}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--color-slate-500)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                    Solution Overview
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-slate-700)', lineHeight: 1.5 }}>
                    {modalData.description}
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--color-slate-500)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.375rem' }}>
                    Core Capabilities
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '0.375rem' }}>
                    {modalData.features && modalData.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', backgroundColor: '#f8fafc', padding: '0.45rem 0.65rem', borderRadius: '0.625rem', border: '1px solid #e2e8f0', fontSize: '0.78125rem', color: '#1e293b' }}>
                        <CheckCircle2 style={{ width: '0.875rem', height: '0.875rem', color: '#10b981', flexShrink: 0 }} />
                        <span style={{ lineHeight: 1.3 }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.625rem', paddingTop: '0.625rem', borderTop: '1px solid var(--color-slate-100)', marginTop: '0.25rem' }}>
                <button onClick={closeModal} className="modal-secondary-btn" style={{ padding: '0.5rem 1rem', borderRadius: '0.625rem', border: '1px solid #cbd5e1', backgroundColor: '#f8fafc', fontWeight: 600, fontSize: '0.8125rem', cursor: 'pointer' }}>
                  Close
                </button>
                <button
                  onClick={() => {
                    closeModal();
                    const el = document.getElementById('contact');
                    if (el) {
                      const navHeight = window.innerWidth >= 1024 ? 90 : 76;
                      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
                      const elementPosition = el.getBoundingClientRect().top + scrollTop;
                      const offsetPosition = elementPosition - navHeight;
                      window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
                    }
                  }}
                  className="modal-primary-btn"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', padding: '0.5rem 1.125rem', fontSize: '0.8125rem' }}
                >
                  <span>Request Demo for {modalData.name}</span>
                  <ArrowRight style={{ width: '0.875rem', height: '0.875rem' }} />
                </button>
              </div>
            </div>
          )}

          {/* 2. SPECIALISED SOLUTION DETAILS MODAL */}
          {activeModal === 'solution-details' && modalData && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <div className="modal-header">
                <span className="modal-category-badge" style={{ color: '#0d9488', backgroundColor: '#ccfbf1' }}>SPECIALISED CARE</span>
                <h3 className="modal-title">{modalData.title}</h3>
                <p style={{ color: '#0d9488', fontWeight: 600, fontSize: '0.875rem', marginTop: '0.2rem' }}>
                  {modalData.tagline}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--color-slate-500)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                    Care Architecture
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-slate-700)', lineHeight: 1.5 }}>
                    {modalData.description}
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--color-slate-500)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.375rem' }}>
                    Key Focus Areas
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '0.375rem' }}>
                    {modalData.features && modalData.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', backgroundColor: '#f0fdf4', padding: '0.45rem 0.65rem', borderRadius: '0.625rem', border: '1px solid #bbf7d0', fontSize: '0.78125rem', color: '#166534' }}>
                        <CheckCircle2 style={{ width: '0.875rem', height: '0.875rem', color: '#16a34a', flexShrink: 0 }} />
                        <span style={{ lineHeight: 1.3 }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.625rem', paddingTop: '0.625rem', borderTop: '1px solid var(--color-slate-100)', marginTop: '0.25rem' }}>
                <button onClick={closeModal} className="modal-secondary-btn" style={{ padding: '0.5rem 1rem', borderRadius: '0.625rem', border: '1px solid #cbd5e1', backgroundColor: '#f8fafc', fontWeight: 600, fontSize: '0.8125rem', cursor: 'pointer' }}>
                  Close
                </button>
                <button
                  onClick={() => {
                    closeModal();
                    const el = document.getElementById('contact');
                    if (el) {
                      const navHeight = window.innerWidth >= 1024 ? 90 : 76;
                      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
                      const elementPosition = el.getBoundingClientRect().top + scrollTop;
                      const offsetPosition = elementPosition - navHeight;
                      window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
                    }
                  }}
                  className="modal-primary-btn"
                  style={{ backgroundColor: '#0d9488', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', padding: '0.5rem 1.125rem', fontSize: '0.8125rem' }}
                >
                  <span>Inquire About {modalData.title}</span>
                  <ArrowRight style={{ width: '0.875rem', height: '0.875rem' }} />
                </button>
              </div>
            </div>
          )}

          {/* 3. INSIGHTS MODAL */}
          {activeModal === 'insights-modal' && modalData && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="modal-header">
                <span className="modal-category-badge">{modalData.tag || 'INSIGHTS'}</span>
                <h3 className="modal-title">{modalData.title}</h3>
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--color-slate-700)', lineHeight: 1.5 }}>
                {modalData.desc}
              </p>

              <div style={{ padding: '0.875rem', borderRadius: '0.75rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', fontSize: '0.8125rem', color: '#475569', lineHeight: 1.5 }}>
                Neuerung HealthTech publishes research perspectives and technological insights on connected healthcare, medical imaging standards, and digital healthcare transformation.
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '0.5rem' }}>
                <button onClick={closeModal} className="modal-primary-btn" style={{ padding: '0.5rem 1.125rem', fontSize: '0.8125rem' }}>
                  Close Insights
                </button>
              </div>
            </div>
          )}

          {/* 4. BOOK A DEMO FORM MODAL */}
          {activeModal === 'book-demo' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="modal-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <span className="modal-category-badge">Schedule Demonstration</span>
                  <h3 className="modal-title">
                    Request a Demo
                  </h3>
                </div>
                <Logo showText={false} size="small" />
              </div>

              {demoSubmitted ? (
                <div style={{ padding: '2rem', borderRadius: '1rem', backgroundColor: '#ecfdf5', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '9999px', backgroundColor: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                    <CheckCircle2 style={{ width: '2rem', height: '2rem' }} />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a' }}>Request Submitted</h4>
                  <p style={{ fontSize: '0.875rem', color: '#475569' }}>
                    Thank you, <span style={{ fontWeight: 600, color: '#0f172a' }}>{demoForm.name}</span>. Our team will contact you at <span style={{ fontWeight: 600, color: '#0f172a' }}>{demoForm.email}</span> to confirm your session.
                  </p>
                  <button
                    onClick={() => {
                      setDemoSubmitted(false);
                      closeModal();
                    }}
                    className="modal-primary-btn"
                    style={{ background: '#059669', width: 'fit-content', margin: '0 auto' }}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDemoSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  <div className="modal-grid-2">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', color: '#334155', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Jane Doe"
                        value={demoForm.name}
                        onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                        style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '0.625rem', border: '1px solid #cbd5e1', fontSize: '0.8125rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', color: '#334155', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Organisation</label>
                      <input
                        type="text"
                        placeholder="Hospital / Medical Center"
                        value={demoForm.organisation}
                        onChange={(e) => setDemoForm({ ...demoForm, organisation: e.target.value })}
                        style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '0.625rem', border: '1px solid #cbd5e1', fontSize: '0.8125rem' }}
                      />
                    </div>
                  </div>

                  <div className="modal-grid-2">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', color: '#334155', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@hospital.org"
                        value={demoForm.email}
                        onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                        style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '0.625rem', border: '1px solid #cbd5e1', fontSize: '0.8125rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', color: '#334155', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={demoForm.phone}
                        onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                        style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '0.625rem', border: '1px solid #cbd5e1', fontSize: '0.8125rem' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', color: '#334155', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Area of Interest *</label>
                    <select
                      value={demoForm.areaOfInterest}
                      onChange={(e) => setDemoForm({ ...demoForm, areaOfInterest: e.target.value })}
                      style={{ width: '100%', padding: '0.625rem 0.875rem', borderRadius: '0.75rem', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
                    >
                      <option value="Hexa Doctor">Hexa Doctor</option>
                      <option value="Hexa Service">Hexa Service</option>
                      <option value="Hexa Pharmacy">Hexa Pharmacy</option>
                      <option value="Geriatric Care">Geriatric Care</option>
                      <option value="Dementia Care">Dementia Care</option>
                      <option value="Rehabilitation">Rehabilitation</option>
                      <option value="Technology Partnership">Technology Partnership</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  {submitError && (
                    <div style={{ padding: '0.625rem 0.875rem', borderRadius: '0.75rem', backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', fontSize: '0.75rem', lineHeight: 1.4 }}>
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="modal-primary-btn"
                    style={{ width: '100%', borderRadius: '0.75rem', padding: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}
                  >
                    {isSubmitting ? (
                      <div style={{ width: '1.25rem', height: '1.25rem', border: '2px solid #ffffff', borderTopColor: 'transparent', borderRadius: '9999px', animation: 'spin 1s linear infinite' }} />
                    ) : (
                      <>
                        <span>Submit Demo Request</span>
                        <Send style={{ width: '1rem', height: '1rem' }} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
