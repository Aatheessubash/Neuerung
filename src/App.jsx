import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HealthcareContext from './components/HealthcareContext';
import About from './components/About';
import Technology from './components/Technology';
import Products from './components/Products';
import SpecialisedSolutions from './components/SpecialisedSolutions';
import HowHexaWorks from './components/HowHexaWorks';
import WhoWeServe from './components/WhoWeServe';
import InsightsSection from './components/InsightsSection';
import ContactFooter from './components/ContactFooter';
import Modals from './components/Modals';
import FloatingContact from './components/FloatingContact';

export default function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [modalData, setModalData] = useState(null);

  const openModal = (modalType, data = null) => {
    setActiveModal(modalType);
    setModalData(data);
  };

  const closeModal = () => {
    setActiveModal(null);
    setModalData(null);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-body-bg)', color: 'var(--color-body-text)', fontFamily: 'var(--font-body)' }}>
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Top Glass Navigation Bar */}
      <Navbar openModal={openModal} />

      {/* Main Content Flow */}
      <main id="main-content">
        {/* Section 01: Hero */}
        <Hero />

        {/* Section 02: Healthcare Context */}
        <HealthcareContext />

        {/* Section 03: About Neuerung */}
        <About />

        {/* Section 04: Technology */}
        <Technology />

        {/* Section 05 - 08: Products (Hexa Doctor, Hexa Service, Hexa Pharmacy, Hexa for Patients) */}
        <Products openModal={openModal} />

        {/* Section 09: Specialised Healthcare Solutions (Geriatric, Dementia, Rehabilitation) */}
        <SpecialisedSolutions openModal={openModal} />

        {/* Section 10: How Hexa Works (Connect -> Capture -> Intelligence -> Care) */}
        <HowHexaWorks />

        {/* Section 11: Who We Serve */}
        <WhoWeServe />

        {/* Section 12: Insights */}
        <InsightsSection openModal={openModal} />
      </main>

      {/* Section 13 & Footer: Contact / Request Demo */}
      <ContactFooter />

      {/* Floating Quick Actions Widget (WhatsApp, Call, Scroll-to-Top at bottom-right) */}
      <FloatingContact />

      {/* Interactive Modals Manager */}
      <Modals
        activeModal={activeModal}
        closeModal={closeModal}
        modalData={modalData}
      />
    </div>
  );
}
