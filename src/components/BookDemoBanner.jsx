import React from 'react';

export default function BookDemoBanner({ openModal }) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
        <div className="bg-brand-gradient text-white rounded-3xl p-10 sm:p-16 text-center space-y-4 shadow-2xl shadow-[#5E81FF]/30 relative overflow-hidden">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans']">
            Experience the Neuerung Advantage.
          </h2>

          <p className="text-sm sm:text-base text-blue-50 max-w-2xl mx-auto font-['Inter'] leading-relaxed">
            Schedule a personalized demonstration of our clinical precision tools. See firsthand how our intuitive interfaces and robust analytics can elevate your medical practice.
          </p>

          <div className="pt-4">
            <button
              onClick={() => openModal('book-demo')}
              className="bg-white text-[#5E81FF] px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all shadow-lg hover:scale-105 font-['Inter']"
            >
              Request Demonstration
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
