import React, { useState } from 'react';
import Logo from './Logo';
import { Mail, Phone, MapPin, Lock, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactFooter({ openModal }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    organization: '',
    businessType: '',
    demoDate: '',
    message: ''
  });

  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setForm({
        fullName: '',
        email: '',
        organization: '',
        businessType: '',
        demoDate: '',
        message: ''
      });
      setTimeout(() => {
        setShowToast(false);
      }, 4500);
    }, 600);
  };

  return (
    <section id="contact" className="relative pt-12 overflow-hidden">
      {/* Experience the Neuerung Advantage Header */}
      <motion.div 
        className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 mb-16 text-center md:text-left max-w-3xl"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003772] font-['Plus_Jakarta_Sans'] tracking-tight mb-6">
          Experience the Neuerung Advantage.
        </h2>
        <p className="text-base sm:text-lg text-[#565e74] font-['Inter'] leading-relaxed">
          Schedule a personalized demonstration of our clinical precision tools. See firsthand how our intuitive interfaces and robust analytics can elevate your medical practice.
        </p>
      </motion.div>

      {/* Main Grid: Form + Headquarters */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 mb-24 lg:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Clinical Inquiry Form (8 Cols) */}
          <motion.div
            className="lg:col-span-8 bg-white/90 backdrop-blur-md rounded-2xl border border-[#E2E8F0] shadow-sm p-8 md:p-12 relative overflow-hidden"
            initial={{ opacity: 0, x: -30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#d6e3ff] rounded-full blur-3xl opacity-30 pointer-events-none" />

            <div className="mb-8 relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#003772] font-['Plus_Jakarta_Sans'] mb-2">
                Clinical Inquiry
              </h3>
              <p className="text-sm text-[#565e74] font-['Inter']">
                Please provide your details, and our technical integration team will reach out shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10 font-['Inter']">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#424751] uppercase tracking-wider block" htmlFor="fullName">
                    Full Name <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="Dr. Jane Doe"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className="w-full h-14 px-4 bg-white border border-[#E2E8F0] rounded-xl text-sm text-[#191c1e] input-focus-ring transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#424751] uppercase tracking-wider block" htmlFor="email">
                    Professional Email <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jane.doe@hospital.org"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full h-14 px-4 bg-white border border-[#E2E8F0] rounded-xl text-sm text-[#191c1e] input-focus-ring transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#424751] uppercase tracking-wider block" htmlFor="organization">
                  Hospital or Organization <span className="text-[#ba1a1a]">*</span>
                </label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    id="organization"
                    type="text"
                    required
                    placeholder="General Medical Center"
                    value={form.organization}
                    onChange={(e) => setForm({ ...form, organization: e.target.value })}
                    className="w-full h-14 pl-12 pr-4 bg-white border border-[#E2E8F0] rounded-xl text-sm text-[#191c1e] input-focus-ring transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#424751] uppercase tracking-wider block" htmlFor="businessType">
                    Business Type
                  </label>
                  <select
                    id="businessType"
                    value={form.businessType}
                    onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                    className="w-full h-14 px-4 bg-white border border-[#E2E8F0] rounded-xl text-sm text-[#191c1e] input-focus-ring transition-all"
                  >
                    <option value="" disabled>Select facility type...</option>
                    <option value="hospital">Hospital / Medical Center</option>
                    <option value="clinic">Private Clinic</option>
                    <option value="diagnostic">Diagnostic Laboratory</option>
                    <option value="other">Other Healthcare Provider</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#424751] uppercase tracking-wider block" htmlFor="demoDate">
                    Preferred Demo Date
                  </label>
                  <input
                    id="demoDate"
                    type="date"
                    value={form.demoDate}
                    onChange={(e) => setForm({ ...form, demoDate: e.target.value })}
                    className="w-full h-14 px-4 bg-white border border-[#E2E8F0] rounded-xl text-sm text-[#191c1e] input-focus-ring transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#424751] uppercase tracking-wider block" htmlFor="message">
                  Specific Requirements or Focus Areas
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="We are particularly interested in seeing your diagnostic imaging module..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full p-4 bg-white border border-[#E2E8F0] rounded-xl text-sm text-[#191c1e] input-focus-ring transition-all placeholder:text-slate-400 resize-none"
                ></textarea>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-slate-500 text-xs">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  <span>Secure & HIPAA Compliant Inquiry</span>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto h-14 px-8 bg-[#003772] hover:bg-[#004e9c] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md group font-['Inter']"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Sidebar Headquarters & Map (4 Cols) */}
          <motion.div
            className="lg:col-span-4 flex flex-col gap-6"
            initial={{ opacity: 0, x: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.8, 0.25, 1] }}
          >
            {/* Headquarters Contact Card */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-[#E2E8F0] shadow-sm p-8">
              <h4 className="text-xl font-bold text-[#003772] font-['Plus_Jakarta_Sans'] mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#004e9c]" />
                Our Headquarters
              </h4>
              <div className="space-y-4 text-xs sm:text-sm text-[#565e74] font-['Inter']">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#003772] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-[#191c1e] mb-1">Neuerung HealthTech Innovations</p>
                    <p>Tech Park, Level 4</p>
                    <p>Madurai, Tamil Nadu 625001</p>
                    <p>India</p>
                  </div>
                </div>

                <div className="w-full h-px bg-[#E2E8F0] my-4" />

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#003772] shrink-0" />
                  <a href="tel:+918005550199" className="hover:text-[#003772] transition-colors font-medium">
                    +91 800 555 0199
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#003772] shrink-0" />
                  <a href="mailto:demo@neuerung.health" className="hover:text-[#003772] transition-colors font-medium">
                    demo@neuerung.health
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Google Map Card */}
            <div className="rounded-2xl overflow-hidden shadow-sm h-64 relative border border-[#E2E8F0] bg-slate-100">
              <iframe
                title="Neuerung Madurai Headquarters Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.123456789!2d78.123456789!3d9.923456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c58242173863%3A0x706106051137ee1!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute bottom-3 right-3 pointer-events-none">
                <div className="bg-white/90 backdrop-blur-sm border border-[#E2E8F0] px-3 py-1.5 rounded-full shadow-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#003772]" />
                  <span className="font-['Inter'] text-xs font-bold text-[#003772]">Tech Park, Madurai</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Clean Slate Footer */}
      <footer className="bg-[#e0e3e5] border-t border-[#c2c6d3]">
        <div className="w-full py-16 px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 space-y-4">
            <Logo showText={true} />
            <p className="font-['Inter'] text-xs sm:text-sm text-[#424751] mt-4 leading-relaxed">
              Intelligent healthcare solutions for a connected world.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-xs uppercase tracking-wider text-[#191c1e] mb-4">
              Platform
            </h4>
            <ul className="space-y-3 font-['Inter'] text-xs sm:text-sm text-[#424751]">
              <li><a href="#solutions" className="hover:text-[#003772] transition-colors">Solutions</a></li>
              <li><a href="#who-are-we-with" className="hover:text-[#003772] transition-colors">Mission</a></li>
              <li><a href="#how-is-it-done" className="hover:text-[#003772] transition-colors">Why Choose Us</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-xs uppercase tracking-wider text-[#191c1e] mb-4">
              Company
            </h4>
            <ul className="space-y-3 font-['Inter'] text-xs sm:text-sm text-[#424751]">
              <li><a href="#our-team" className="hover:text-[#003772] transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-[#003772] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-xs uppercase tracking-wider text-[#191c1e] mb-4">
              Legal
            </h4>
            <ul className="space-y-3 font-['Inter'] text-xs sm:text-sm text-[#424751]">
              <li><a href="#" className="hover:text-[#003772] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#003772] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="w-full border-t border-[#c2c6d3]/60 py-6 px-4 sm:px-6 md:px-12 text-center">
          <p className="font-['Inter'] text-xs text-[#424751]">
            © 2024 Neuerung HealthTech Private Limited. Madurai, Tamil Nadu.
          </p>
        </div>
      </footer>

      {/* Floating Success Toast Notification with Spring Physics */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="fixed bottom-8 right-8 z-50 bg-white border border-[#003772] shadow-2xl rounded-2xl p-4 flex items-start gap-4 max-w-sm"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6 text-[#003772]" />
            </div>
            <div>
              <h4 className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#003772] uppercase tracking-wider mb-1">
                Inquiry Received
              </h4>
              <p className="font-['Inter'] text-xs text-[#565e74] leading-relaxed">
                Thank you. Our integration team will contact you shortly to confirm your demo schedule.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}


