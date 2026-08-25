import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { WhatsAppIcon } from './FloatingContact';
import { COMPANY } from '../constants/company';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const NAV_LINKS = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { 
    name: 'Hexa', 
    href: '#hexa', 
    id: 'hexa',
    hasDropdown: true,
    subItems: [
      { name: 'Hexa Overview', id: 'hexa' },
      { name: 'Hexa Doctor', id: 'hexa-doctor' },
      { name: 'Hexa Service', id: 'hexa-service' },
      { name: 'Hexa Pharmacy', id: 'hexa-pharmacy' },
      { name: 'Hexa for Patients', id: 'hexa-patients' },
    ]
  },
  { 
    name: 'Solutions', 
    href: '#solutions', 
    id: 'solutions',
    hasDropdown: true,
    subItems: [
      { name: 'Geriatric Care', id: 'geriatric-care' },
      { name: 'Dementia Care', id: 'dementia-care' },
      { name: 'Rehabilitation', id: 'rehabilitation' },
    ]
  },
  { name: 'Technology', href: '#technology', id: 'technology' },
  { name: 'Who We Serve', href: '#who-we-serve', id: 'who-we-serve' },
  { name: 'Insights', href: '#insights', id: 'insights' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar({ openModal }) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hexaDropdownOpen, setHexaDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  
  const isNavClicking = useRef(false);
  const scrollTimeout = useRef(null);

  const waNumber = COMPANY.contact.phone.replace(/\D/g, '');
  const waMessage = encodeURIComponent(
    'Hello Neuerung Team, I would like to know more about your healthcare solutions and services.'
  );
  const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (isNavClicking.current) return;

      const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 60);
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      const scrollPosition = window.scrollY + 140;
      let current = 'home';

      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = link.id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const handleNavClick = (e, id) => {
    if (e) e.preventDefault();

    isNavClicking.current = true;
    setActiveSection(id);

    // Close all menus immediately
    setMobileMenuOpen(false);
    setHexaDropdownOpen(false);
    setSolutionsDropdownOpen(false);

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    // Execute smooth scroll after a brief delay so layout settles post-drawer close
    setTimeout(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        if (el) {
          const navHeight = 84; // Fixed header height offset
          const elementPosition = el.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navHeight;

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          });
        }
      }
    }, 60);

    scrollTimeout.current = setTimeout(() => {
      isNavClicking.current = false;
    }, 1000);
  };

  return (
    <>
      <header className="navbar-header">
        
        {/* Top Progress Bar */}
        <motion.div
          className="navbar-scroll-progress"
          style={{ scaleX }}
        />

        <div className="navbar-inner-container">

          {/* Brand Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="navbar-brand-link">
            <Logo showText={true} size="normal" />
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="navbar-desktop-nav">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              
              if (link.name === 'Hexa') {
                return (
                  <div 
                    key={link.name} 
                    className="nav-dropdown-wrapper"
                    onMouseEnter={() => setHexaDropdownOpen(true)}
                    onMouseLeave={() => setHexaDropdownOpen(false)}
                    style={{ position: 'relative' }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`navbar-nav-link ${isActive ? 'active' : ''}`}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                    >
                      <span>{link.name}</span>
                      <ChevronDown style={{ width: '0.875rem', height: '0.875rem' }} />
                      {isActive && (
                        <motion.div
                          layoutId="activeTabUnderline"
                          className="navbar-active-underline"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </a>

                    <AnimatePresence>
                      {hexaDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            backgroundColor: '#ffffff',
                            borderRadius: '0.875rem',
                            padding: '0.5rem',
                            minWidth: '11rem',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
                            border: '1px solid var(--color-slate-200, #e2e8f0)',
                            zIndex: 100
                          }}
                        >
                          {link.subItems.map(sub => (
                            <a
                              key={sub.id}
                              href={`#${sub.id}`}
                              onClick={(e) => handleNavClick(e, sub.id)}
                              style={{
                                display: 'block',
                                padding: '0.5rem 0.75rem',
                                borderRadius: '0.5rem',
                                fontSize: '0.8125rem',
                                fontWeight: 600,
                                color: 'var(--color-slate-800, #1e293b)',
                                textDecoration: 'none',
                                transition: 'background-color 0.15s'
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
                              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                              {sub.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if (link.name === 'Solutions') {
                return (
                  <div 
                    key={link.name} 
                    className="nav-dropdown-wrapper"
                    onMouseEnter={() => setSolutionsDropdownOpen(true)}
                    onMouseLeave={() => setSolutionsDropdownOpen(false)}
                    style={{ position: 'relative' }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`navbar-nav-link ${isActive ? 'active' : ''}`}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                    >
                      <span>{link.name}</span>
                      <ChevronDown style={{ width: '0.875rem', height: '0.875rem' }} />
                      {isActive && (
                        <motion.div
                          layoutId="activeTabUnderline"
                          className="navbar-active-underline"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </a>

                    <AnimatePresence>
                      {solutionsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            backgroundColor: '#ffffff',
                            borderRadius: '0.875rem',
                            padding: '0.5rem',
                            minWidth: '11rem',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
                            border: '1px solid var(--color-slate-200, #e2e8f0)',
                            zIndex: 100
                          }}
                        >
                          {link.subItems.map(sub => (
                            <a
                              key={sub.id}
                              href={`#${sub.id}`}
                              onClick={(e) => handleNavClick(e, sub.id)}
                              style={{
                                display: 'block',
                                padding: '0.5rem 0.75rem',
                                borderRadius: '0.5rem',
                                fontSize: '0.8125rem',
                                fontWeight: 600,
                                color: 'var(--color-slate-800, #1e293b)',
                                textDecoration: 'none',
                                transition: 'background-color 0.15s'
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
                              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                              {sub.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`navbar-nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="navbar-active-underline"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="navbar-actions">
            <motion.a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="navbar-whatsapp-btn"
              aria-label="Chat with us on WhatsApp"
              title="Chat with us on WhatsApp"
            >
              <WhatsAppIcon size={18} />
              <span>WhatsApp</span>
            </motion.a>

            <motion.button
              onClick={() => openModal && openModal('book-demo')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="navbar-demo-btn"
            >
              Request a Demo
            </motion.button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`navbar-mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X style={{ width: '1.5rem', height: '1.5rem' }} /> : <Menu style={{ width: '1.5rem', height: '1.5rem' }} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="navbar-mobile-drawer"
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <React.Fragment key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`navbar-mobile-link ${isActive ? 'active' : ''}`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight style={{ width: '1rem', height: '1rem', opacity: isActive ? 1 : 0.4 }} />
                    </a>

                    {link.subItems && (
                      <div style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.375rem', marginBottom: '0.5rem' }}>
                        {link.subItems.map(sub => (
                          <a
                            key={sub.id}
                            href={`#${sub.id}`}
                            onClick={(e) => handleNavClick(e, sub.id)}
                            style={{ fontSize: '0.8125rem', color: '#64748b', textDecoration: 'none', padding: '0.375rem 0.5rem', display: 'block' }}
                          >
                            • {sub.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </React.Fragment>
                );
              })}

              <div className="navbar-mobile-contact">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar-mobile-whatsapp-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <WhatsAppIcon size={18} />
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (openModal) openModal('book-demo');
                  }}
                  className="navbar-mobile-contact-btn"
                >
                  Request a Demo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop Overlay when Mobile Drawer is Open */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="navbar-mobile-overlay"
          />
        )}
      </AnimatePresence>
    </>
  );
}
