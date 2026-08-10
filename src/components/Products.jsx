import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Stethoscope, 
  Wrench, 
  Pill, 
  Check, 
  ArrowRight, 
  Hexagon, 
  Activity, 
  ShieldCheck, 
  Cpu, 
  PackageCheck 
} from 'lucide-react';
import './Products.css';

// Custom SVG Hexagon Logo Badge for HEXA Care
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

// Custom SVG Hexagon Logo Badge for HEXA Doctor
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

// Custom SVG Hexagon Logo Badge for HEXA Service
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

// Custom SVG Hexagon Logo Badge for HEXA Pharmacy
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

export default function Products({ openModal }) {
  const products = [
    {
      id: 'hexa-care',
      name: 'HEXA Care',
      tagline: 'Patient Care & Tele-Health Suite',
      category: 'Patient Centric',
      theme: 'theme-care',
      logo: HexaCareLogo,
      description: 'Intelligent patient management, continuous remote vital tracking, and automated caregiver alerts to ensure seamless, end-to-end patient care.',
      features: [
        'Real-time vital signs monitoring & early warnings',
        'Patient engagement portal & tele-consultations',
        'Personalized care pathways & discharge tracking',
        '24/7 ICU & ward patient status dashboards'
      ]
    },
    {
      id: 'hexa-doctor',
      name: 'HEXA Doctor',
      tagline: 'Clinical Decision Support & EHR',
      category: 'Physicians & Labs',
      theme: 'theme-doctor',
      logo: HexaDoctorLogo,
      description: 'Empowers clinicians with AI-driven diagnostic insights, seamless DICOM radiological image viewing, and instant EHR synchronization.',
      features: [
        'AI-assisted diagnostic recommendations',
        'Cloud-native DICOM image viewer & analysis',
        'HL7 & FHIR compliant EHR integration',
        'Fast e-prescribing and clinical documentation'
      ]
    },
    {
      id: 'hexa-service',
      name: 'HEXA Service',
      tagline: 'Operations & IoT Asset Management',
      category: 'Hospital Ops',
      theme: 'theme-service',
      logo: HexaServiceLogo,
      description: 'Streamlines hospital facility management, biomedical equipment tracking, and automated maintenance ticketing via smart IoT sensors.',
      features: [
        'Real-time IoT medical equipment tracking',
        'Automated preventive maintenance alerts',
        'Hospital facility & bed capacity management',
        'Operational efficiency & uptime analytics'
      ]
    },
    {
      id: 'hexa-pharmacy',
      name: 'HEXA Pharmacy',
      tagline: 'Smart Pharmacy & Inventory Intelligence',
      category: 'Pharmacy & Supply',
      theme: 'theme-pharmacy',
      logo: HexaPharmacyLogo,
      description: 'End-to-end digital pharmacy platform for e-prescription fulfillment, smart batch tracking, drug interaction checking, and automated restocking.',
      features: [
        'Instant e-prescription processing & dispensing',
        'Automated low-stock & expiry notifications',
        'Drug interaction & allergy safety checks',
        'Multi-branch inventory synchronization'
      ]
    }
  ];

  return (
    <section id="products" className="products-section">
      <div className="products-bg-orb-1" />
      <div className="products-bg-orb-2" />

      <div className="products-container">
        
        {/* Section Header */}
        <motion.div 
          className="products-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {/* <div className="products-badge">
            <Hexagon style={{ width: '1rem', height: '1rem' }} />
            <span>Product Suite</span>
          </div> */}

          <h2 className="products-title">
             Our<span className="gradient-text"> Products</span>
          </h2>

          <p className="products-subtext">
            Hexa connects patients, doctors, and healthcare providers through integrated digital solutions, enabling personalized care, seamless appointments, efficient workflows, and specialized support for geriatric care, dementia, and rehabilitation.
          </p>
        </motion.div>

        {/* 4 Products Grid */}
        <div className="products-grid">
          {products.map((prod, idx) => {
            const LogoComp = prod.logo;
            return (
              <motion.div
                key={prod.id}
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
                    onClick={() => openModal && openModal('book-demo', { product: prod.name })}
                    className="product-action-btn"
                  >
                    <span>Request Demo for {prod.name}</span>
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
