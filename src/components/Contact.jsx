import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Building, User, MessageSquare, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
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
                  <div className="text-xs text-slate-400 font-semibold uppercase">Headquarters</div>
                  <div className="text-sm font-bold text-slate-800">
                    Madurai, Tamil Nadu, India
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">Registered Office & Development Hub</div>
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

            {/* Embedded Google Map Placeholder / Madurai Iframe */}
            <div className="bg-white rounded-3xl p-3 border border-slate-200/80 shadow-lg overflow-hidden">
              <div className="relative w-full h-56 rounded-2xl overflow-hidden">
                <iframe
                  title="Neuerung HealthTech Madurai Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15723.364239841804!2d78.1189!3d9.9252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc94e5a9c0019e0d!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
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
