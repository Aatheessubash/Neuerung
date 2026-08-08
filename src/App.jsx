import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatToExpect from './components/WhatToExpect';
import HowIsItDone from './components/HowIsItDone';
import WhoAreWeWith from './components/WhoAreWeWith';
import OurTeam from './components/OurTeam';
import ContactFooter from './components/ContactFooter';
import Modals from './components/Modals';

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
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] font-['Inter'] selection:bg-[#003772]/20 selection:text-[#003772]">
      {/* Top Glass Navigation Bar */}
      <Navbar openModal={openModal} />

      {/* Main Single-Page Content matching screen.png & code.html */}
      <main className="pt-24">
        <Hero openModal={openModal} />
        <WhatToExpect openModal={openModal} />
        <HowIsItDone openModal={openModal} />
        <WhoAreWeWith openModal={openModal} />
        <OurTeam openModal={openModal} />
      </main>

      {/* Clinical Inquiry Contact Form, Headquarters Map & Clean Footer */}
      <ContactFooter openModal={openModal} />

      {/* Interactive Modals & Toast Manager */}
      <Modals
        activeModal={activeModal}
        closeModal={closeModal}
        modalData={modalData}
      />
    </div>
  );
}

