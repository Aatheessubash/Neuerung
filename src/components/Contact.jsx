import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Building, User, MessageSquare, Globe, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY } from '../constants/company';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const baseUrl = import.meta.env.VITE_API_URL || '';
      const endpoint = baseUrl ? `${baseUrl}/api/contact` : '/api/contact';

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          organisation: formData.organization,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          formType: 'Contact Form',
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        throw new Error(data.message || `Submission failed (status ${res.status})`);
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Contact submission error:', err);
      setSubmitError(err.message || 'Failed to send message. Please contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Molecular Background Grid */}
      <div className="absolute inset-0 bg-hex-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold">
            <Mail className="w-4 h-4 text-blue-600" />
            <span>Connect With Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Poppins']">
            Let's Shape the Future of{' '}
            <span className="gradient-text">
              Healthcare Together
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Have questions about our AI diagnostic tools, medical imaging, or IoT solutions? Contact our team in Madurai, India.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Google Map */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Information Card */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-lg shadow-blue-900/5 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 font-['Poppins'] pb-3 border-b border-slate-100">
                Contact Information
              </h3>

              {/* Email 1 */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Official Enquiries</div>
                  <a
                    href="mailto:healthtech@neuerung.in"
                    className="text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors"
                  >
                    healthtech@neuerung.in
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">Primary Domain Email</div>
                </div>
              </div>

              {/* Email 2 */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-sky-50 text-sky-600 flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Secondary / Gmail</div>
                  <a
                    href="mailto:neuerunghealthtech@gmail.com"
                    className="text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors"
                  >
                    neuerunghealthtech@gmail.com
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">Alternative Contact</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Registered Office</div>
                  <a
                    href={COMPANY.placeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors"
                  >
                    {COMPANY.address.line1},<br />
                    {COMPANY.address.line2},<br />
                    {COMPANY.address.line3},<br />
                    {COMPANY.address.state}, {COMPANY.address.country}
                  </a>
                </div>
              </div>

              {/* Domain */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 flex-shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Official Website</div>
                  <a
                    href="https://neuerung.in"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-blue-600 hover:underline"
                  >
                    neuerung.in
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Google Map with Logo Pin */}
            <div className="bg-white rounded-3xl p-3 border border-slate-200/80 shadow-lg overflow-hidden">
              <div className="relative w-full h-56 rounded-2xl overflow-hidden">
                <iframe
                  title="Neuerung HealthTech – Nagamalai, Madurai"
                  src={COMPANY.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>

                {/* Navigate Button — bottom-right corner */}
                <a
                  href={COMPANY.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  title={`Get Directions to ${COMPANY.shortName}`}
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    zIndex: 20,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: '#1d4ed8',
                    color: '#ffffff',
                    padding: '7px 12px',
                    borderRadius: '999px',
                    fontSize: '12px',
                    fontWeight: 700,
                    fontFamily: 'Poppins, sans-serif',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(29,78,216,0.45)',
                    transition: 'background-color 0.2s, transform 0.15s',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1e40af'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#1d4ed8'; e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  <Navigation size={13} style={{ flexShrink: 0 }} />
                  Get Directions
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl shadow-blue-900/5 relative">
              
              <h3 className="text-2xl font-bold text-slate-900 font-['Poppins'] mb-2">
                Send Us a Message
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Fill out the form below to request a product demo or discuss strategic clinical partnerships.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 font-['Poppins']">Message Received!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out to Neuerung HealthTech. Our clinical engineering team will contact you shortly at <span className="font-semibold text-slate-900">{formData.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', organization: '', email: '', phone: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Dr. Rajesh Kumar"
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-slate-50/50"
                        />
                      </div>
                    </div>

                    {/* Organization */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1.5">
                        Organization / Hospital
                      </label>
                      <div className="relative">
                        <Building className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="Apollo / City Hospital"
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-slate-50/50"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@hospital.com"
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-slate-50/50"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1.5">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-slate-50/50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1.5">
                      Your Message / Enquiry *
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
                      <textarea
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your clinical requirements or integration goals..."
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-slate-50/50"
                      ></textarea>
                    </div>
                  </div>

                  {submitError && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                      {submitError}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-base font-semibold text-white bg-brand-gradient hover:opacity-90 shadow-lg shadow-[#5E81FF]/30 transition-all duration-200 flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
