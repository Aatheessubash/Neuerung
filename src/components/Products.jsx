import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Stethoscope, 
  Wrench, 
  Pill, 
  Check, 
  ArrowRight
} from 'lucide-react';
import './Products.css';

// SVG Logos for Hexa Products
const HexaDoctorLogo = () => (
  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="docGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
      <path d="M50 5 L89 27.5 L89 72.5 L50 95 L11 72.5 L11 27.5 Z" fill="url(#docGrad)" stroke="#ffffff" strokeWidth="3" />
      <path d="M50 15 L78 31 L78 69 L50 85 L22 69 L22 31 Z" fill="rgba(255,255,255,0.15)" />
    </svg>
    <Stethoscope style={{ position: 'absolute', width: '22px', height: '22px', color: '#ffffff' }} />
  </div>
);

const HexaServiceLogo = () => (
  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="serviceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>
      <path d="M50 5 L89 27.5 L89 72.5 L50 95 L11 72.5 L11 27.5 Z" fill="url(#serviceGrad)" stroke="#ffffff" strokeWidth="3" />
      <path d="M50 15 L78 31 L78 69 L50 85 L22 69 L22 31 Z" fill="rgba(255,255,255,0.15)" />
    </svg>
    <Wrench style={{ position: 'absolute', width: '22px', height: '22px', color: '#ffffff' }} />
  </div>
);

const HexaPharmacyLogo = () => (
  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pharmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <path d="M50 5 L89 27.5 L89 72.5 L50 95 L11 72.5 L11 27.5 Z" fill="url(#pharmGrad)" stroke="#ffffff" strokeWidth="3" />
      <path d="M50 15 L78 31 L78 69 L50 85 L22 69 L22 31 Z" fill="rgba(255,255,255,0.15)" />
    </svg>
    <Pill style={{ position: 'absolute', width: '22px', height: '22px', color: '#ffffff' }} />
  </div>
);

const HexaCareLogo = () => (
  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="careGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>
      <path d="M50 5 L89 27.5 L89 72.5 L50 95 L11 72.5 L11 27.5 Z" fill="url(#careGrad)" stroke="#ffffff" strokeWidth="3" />
      <path d="M50 15 L78 31 L78 69 L50 85 L22 69 L22 31 Z" fill="rgba(255,255,255,0.15)" />
    </svg>
    <Heart style={{ position: 'absolute', width: '22px', height: '22px', color: '#ffffff' }} />
  </div>
);

export default function Products({ openModal }) {
  const products = [
    {
      id: 'hexa-doctor',
      name: 'Hexa Doctor',
      tagline: 'Intelligent support for modern clinical practice.',
      category: 'CLINICAL',
      theme: 'theme-doctor',
      logo: HexaDoctorLogo,
      description: 'Hexa Doctor brings intelligent digital capabilities into clinical practice, helping healthcare professionals work with connected patient information and AI-integrated workflows.',
      features: [
        'AI-assisted clinical workflows',
        'Digital clinical records',
        'Patient information management',
        'Clinical decision support',
        'Connected healthcare data',
        'Workflow optimisation'
      ],
      ctaText: 'Explore Hexa Doctor'
    },
    {
      id: 'hexa-service',
      name: 'Hexa Service',
      tagline: 'Connected healthcare services.',
      category: 'SERVICES',
      theme: 'theme-service',
      logo: HexaServiceLogo,
      description: 'Hexa Service brings healthcare service providers and users together through a connected digital ecosystem.',
      features: [
        'Nursing Care',
        'Physiotherapy',
        'Diagnostic Services',
        'Pharmacy'
      ],
      ctaText: 'Explore Hexa Service'
    },
    {
      id: 'hexa-pharmacy',
      name: 'Hexa Pharmacy',
      tagline: 'Healthcare access, simplified.',
      category: 'ACCESS',
      theme: 'theme-pharmacy',
      logo: HexaPharmacyLogo,
      description: 'Connecting pharmacy services with the wider digital healthcare ecosystem for simplified access.',
      features: [
        'Digital pharmacy access',
        'Connected healthcare',
        'Patient experience',
        'Service integration'
      ],
      ctaText: 'Explore Hexa Pharmacy'
    },
    {
      id: 'hexa-patients',
      name: 'Hexa for Patients',
      tagline: 'A connected patient healthcare experience.',
      category: 'PATIENT',
      theme: 'theme-care',
      logo: HexaCareLogo,
      description: 'Designed to connect patients with relevant healthcare information, services and experiences throughout their care journey.',
      features: [
        'Connected experience',
        'Healthcare information',
        'Service access',
        'Digital care journey'
      ],
      ctaText: 'Explore Hexa for Patients'
    }
  ];

  return (
    <section id="hexa" className="products-section">
      <div className="products-bg-orb-1" />
      <div className="products-bg-orb-2" />

      <div className="products-container">
        
        {/* Section 05: Hexa Introduction Header */}
        <motion.div 
          className="products-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ 
            display: 'inline-block', 
            fontFamily: 'var(--font-heading)', 
            fontSize: '0.75rem', 
            fontWeight: 800, 
            letterSpacing: '0.08em', 
            color: '#1d4ed8', 
            backgroundColor: '#dbeafe', 
            padding: '0.35rem 0.85rem', 
            borderRadius: '9999px', 
            marginBottom: '1rem' 
          }}>
            HEXA ECOSYSTEM
          </div>

          <h2 className="products-title">
             One Healthcare Ecosystem.<br /><span className="gradient-text">Multiple Connected Solutions.</span>
          </h2>

          <p style={{ fontSize: '1rem', fontWeight: 600, color: '#1d4ed8', marginTop: '0.5rem', fontFamily: 'var(--font-heading)' }}>
            A comprehensive healthcare platform built to enhance healthcare delivery.
          </p>

          <p className="products-subtext">
            Hexa brings together healthcare professionals, service providers and patients through a connected digital healthcare ecosystem.
          </p>
        </motion.div>

        {/* 4 Hexa Product Cards */}
        <div className="products-grid">
          {products.map((prod, idx) => {
            const LogoComp = prod.logo;
            return (
              <motion.div
                key={prod.id}
                id={prod.id}
                className={`product-card ${prod.theme}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div>
                  {/* Card Top: Logo & Category */}
                  <div className="product-card-top">
                    <div className="product-logo-box">
                      <LogoComp />
                      <div className="product-brand-title">
                        <span className="product-brand-name">{prod.name}</span>
                        <span className="product-brand-tag">{prod.tagline}</span>
                      </div>
                    </div>
                    <span className="product-category-pill">{prod.category}</span>
                  </div>

                  {/* Description */}
                  <p className="product-description">
                    {prod.description}
                  </p>

                  {/* Features */}
                  <div className="product-feature-list">
                    {prod.features.map((feat, fIdx) => (
                      <div key={fIdx} className="product-feature-item">
                        <div className="product-check-icon">
                          <Check style={{ width: '0.75rem', height: '0.75rem', strokeWidth: 3 }} />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <button
                    onClick={() => openModal && openModal('product-details', prod)}
                    className="product-action-btn"
                  >
                    <span>{prod.ctaText}</span>
                    <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
