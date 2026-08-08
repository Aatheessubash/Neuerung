import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

export default function Navbar({ openModal }) {
  const [activeSection, setActiveSection] = useState('solutions');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'We are', href: '#who-are-we-with', id: 'who-are-we-with' },
    { name: 'Solutions', href: '#solutions', id: 'solutions' },
    { name: 'Why us', href: '#how-is-it-done', id: 'how-is-it-done' },
    { name: 'Our team', href: '#our-team', id: 'our-team' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const scrollPosition = window.scrollY + 100;
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
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-[#E2E8F0] shadow-sm transition-all duration-300 ease-in-out">
        
        {/* Scroll Progress Bar at the top of Header */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#003772] via-[#004e9c] to-[#38BDF8] origin-left z-50"
          style={{ scaleX }}
        />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center h-24">
          
          {/* Brand */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home', 'home')} className="flex items-center gap-3">
            <Logo showText={true} />
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 font-['Inter'] text-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`transition-all duration-200 py-1 relative ${
                    isActive
                      ? 'text-[#003772] font-bold'
                      : 'text-[#565e74] hover:text-[#003772]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#003772] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={(e) => handleNavClick(e, '#contact', 'contact')}
              className="hidden lg:block text-[#003772] hover:opacity-80 transition-opacity font-['Inter'] text-xs font-semibold uppercase tracking-wider"
            >
              Contact us
            </button>
            
            <motion.button
              onClick={() => openModal('book-demo')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="bg-[#003772] text-white px-6 py-2 rounded-full font-['Inter'] text-xs font-bold uppercase tracking-wider hover:bg-[#004e9c] transition-colors shadow-sm"
            >
              Book a Demo
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-[#003772]"
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
            className="md:hidden bg-white border-b border-[#E2E8F0] px-6 py-4 space-y-3 shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`block text-sm py-2 px-3 rounded-lg ${
                  activeSection === link.id
                    ? 'bg-blue-50 text-[#003772] font-bold'
                    : 'text-[#565e74] hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={(e) => handleNavClick(e, '#contact', 'contact')}
                className="text-left py-2 px-3 text-xs font-bold uppercase tracking-wider text-[#003772]"
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
            className="fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full bg-[#003772] text-white shadow-xl flex items-center justify-center hover:bg-[#004e9c] transition-colors border border-white/20"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}


