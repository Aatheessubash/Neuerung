import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import './Navbar.css';

export default function Navbar({ openModal }) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Re-aligned in exact DOM order of page sections
  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Solutions', href: '#solutions', id: 'solutions' },
    { name: 'Architecture', href: '#how-is-it-done', id: 'how-is-it-done' },
    { name: 'Ecosystem', href: '#who-are-we-with', id: 'who-are-we-with' },
    { name: 'Our Team', href: '#our-team', id: 'our-team' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(id);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="navbar-header">
        
        {/* Scroll Progress Bar at the top of Header */}
        <motion.div
          className="navbar-scroll-progress"
          style={{ scaleX }}
        />

        <div className="navbar-inner-container">
          
          {/* Brand */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home', 'home')} className="navbar-brand-link">
            <Logo showText={true} />
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
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="navbar-actions">
            <button
              onClick={(e) => handleNavClick(e, '#contact', 'contact')}
              className="navbar-contact-btn"
            >
              Contact us
            </button>
            
            <motion.button
              onClick={() => openModal('book-demo')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="navbar-demo-btn"
            >
              Book a Demo
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="navbar-mobile-toggle"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="navbar-mobile-drawer"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`navbar-mobile-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.name}
              </a>
            ))}
            <div className="navbar-mobile-contact">
              <button
                onClick={(e) => handleNavClick(e, '#contact', 'contact')}
                className="navbar-mobile-contact-btn"
              >
                Contact us
              </button>
            </div>
          </motion.div>
        )}
      </header>

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
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
