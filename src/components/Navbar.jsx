import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUp, ChevronRight } from 'lucide-react';
import Logo from './Logo';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import './Navbar.css';

export default function Navbar({ openModal }) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const isNavClicking = useRef(false);
  const scrollTimeout = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Ecosystem', href: '#who-are-we-with', id: 'who-are-we-with' },
    { name: 'Our Team', href: '#our-team', id: 'our-team' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      if (isNavClicking.current) return;

      // Bottom of page detection -> activate 'contact'
      const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 60);
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      const scrollPosition = window.scrollY + 140;
      let current = 'home';

      for (const link of navLinks) {
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

  const handleNavClick = (e, href, id) => {
    if (e) e.preventDefault();

    setMobileMenuOpen(false);
    isNavClicking.current = true;
    setActiveSection(id);

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    scrollTimeout.current = setTimeout(() => {
      isNavClicking.current = false;
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <a href="#home" onClick={(e) => handleNavClick(e, '#home', 'home')} className="navbar-brand-link">
            <Logo showText={true} size="normal" />
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="navbar-desktop-nav">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
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
            <motion.button
              onClick={() => openModal('book-demo')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="navbar-demo-btn"
            >
              Book a Demo
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
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.id)}
                    className={`navbar-mobile-link ${isActive ? 'active' : ''}`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight style={{ width: '1rem', height: '1rem', opacity: isActive ? 1 : 0.4 }} />
                  </a>
                );
              })}

              <div className="navbar-mobile-contact">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openModal('book-demo');
                  }}
                  className="navbar-mobile-contact-btn"
                >
                  Book a Demo
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

      {/* Floating Scroll-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="navbar-scroll-top-btn"
            title="Scroll to Top"
          >
            <ArrowUp style={{ width: '1.25rem', height: '1.25rem' }} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
