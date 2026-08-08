import React from 'react';

export default function BookDemoBanner({ openModal }) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
        <div className="bg-gradient-to-r from-[#003772] via-[#004e9c] to-[#005574] text-white rounded-3xl p-10 sm:p-16 text-center space-y-4 shadow-2xl relative overflow-hidden">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans']">
            Experience the Neuerung Advantage.
          </h2>

          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto font-['Inter'] leading-relaxed">
            Schedule a personalized demonstration of our clinical precision tools. See firsthand how our intuitive interfaces and robust analytics can elevate your medical practice.
          </p>

          <div className="pt-4">
            <button
              onClick={() => openModal('book-demo')}
              className="bg-white text-[#003772] px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-blue-50 transition-colors shadow-lg font-['Inter']"
            >
              Request Demonstration
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
