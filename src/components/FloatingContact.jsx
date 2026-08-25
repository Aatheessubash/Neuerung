import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowUp } from 'lucide-react';
import { COMPANY } from '../constants/company';
import './FloatingContact.css';

export const WhatsAppIcon = ({ size = 20, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export default function FloatingContact() {
  const rawPhone = COMPANY.contact.phone; // "+91 638 155 7889"
  const cleanPhone = rawPhone.replace(/[^\d+]/g, '');
  const waNumber = rawPhone.replace(/\D/g, '');
  const waMessage = encodeURIComponent(
    'Hello Neuerung Team, I would like to know more about your healthcare solutions and services.'
  );
  const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;
  const callUrl = `tel:${cleanPhone}`;

  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside className="floating-contact-container" aria-label="Floating Quick Actions">
      {/* 1. WhatsApp Button (Bottom-most) */}
      <div
        className="floating-btn-wrapper"
        onMouseEnter={() => setHoveredBtn('whatsapp')}
        onMouseLeave={() => setHoveredBtn(null)}
      >
        <AnimatePresence>
          {hoveredBtn === 'whatsapp' && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.15 }}
              className="floating-tooltip floating-tooltip-whatsapp"
              role="tooltip"
            >
              <span className="tooltip-title">Chat on WhatsApp</span>
              <span className="tooltip-sub">Instant Support</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-contact-btn floating-whatsapp-btn"
          aria-label="Chat with Neuerung HealthTech on WhatsApp"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <WhatsAppIcon size={18} className="floating-btn-icon" />
          <span className="floating-pulse-ring floating-pulse-whatsapp" aria-hidden="true" />
        </motion.a>
      </div>

      {/* 2. Call Button (Middle) */}
      <div
        className="floating-btn-wrapper"
        onMouseEnter={() => setHoveredBtn('call')}
        onMouseLeave={() => setHoveredBtn(null)}
      >
        <AnimatePresence>
          {hoveredBtn === 'call' && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.15 }}
              className="floating-tooltip"
              role="tooltip"
            >
              <span className="tooltip-title">Call Us</span>
              <span className="tooltip-sub">{rawPhone}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          href={callUrl}
          className="floating-contact-btn floating-call-btn"
          aria-label={`Call Neuerung HealthTech at ${rawPhone}`}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25, delay: 0.05 }}
        >
          <Phone className="floating-btn-icon" size={17} />
          <span className="floating-pulse-ring floating-pulse-call" aria-hidden="true" />
        </motion.a>
      </div>

      {/* 3. Scroll Up Button (Top-most when visible) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            className="floating-btn-wrapper"
            onMouseEnter={() => setHoveredBtn('scroll')}
            onMouseLeave={() => setHoveredBtn(null)}
            initial={{ opacity: 0, scale: 0.6, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 15 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            {hoveredBtn === 'scroll' && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.15 }}
                className="floating-tooltip"
                role="tooltip"
              >
                <span className="tooltip-title">Back to Top</span>
              </motion.div>
            )}

            <motion.button
              onClick={scrollToTop}
              className="floating-contact-btn floating-scroll-btn"
              aria-label="Scroll back to top of page"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
            >
              <ArrowUp className="floating-btn-icon" size={17} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
