import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function OurTeam({ openModal }) {
  const teamMembers = [
    {
      id: 'subash',
      name: "Dr. A. Subash",
      role: "Founder & CEO",
      badge: "Leadership",
      bio: "Visionary leader bridging the gap between rigorous medical practice and scalable technology. With over 15 years in clinical diagnostics, Dr. Subash spearheads Neuerung's strategic direction, ensuring all innovations meet the highest standards of clinical precision and patient safety.",
      img: "/images/dr_subash.png"
    },
    {
      id: 'meenakshi',
      name: "Dr. K. Meenakshi",
      role: "CMO & AI Advisor",
      bio: "Pioneering the integration of machine learning in diagnostic workflows.",
      img: "/images/dr_meenakshi.png"
    },
    {
      id: 'karthik',
      name: "R. Karthik",
      role: "Head of IoT & Telemetry",
      tags: ["Hardware", "Sensors"],
      bio: "Architecting robust data pipelines from edge devices to cloud infrastructure.",
      img: "/images/karthik.png"
    },
    {
      id: 'priya',
      name: "S. Priya",
      role: "Lead Software Architect",
      tags: ["Cloud", "Security"],
      bio: "Designing secure, scalable, and HIPAA-compliant software architectures.",
      img: "/images/priya.png"
    }
  ];

  return (
    <section id="our-team" className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 mb-24 lg:mb-32 space-y-16 pt-12 relative overflow-hidden">
      
      {/* Header */}
      <motion.div 
        className="text-center max-w-3xl mx-auto space-y-4"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003772] font-['Plus_Jakarta_Sans'] tracking-tight">
          Leadership & Innovation
        </h2>
        <p className="text-base sm:text-lg text-[#565e74] font-['Inter'] leading-relaxed">
          At the intersection of clinical precision and advanced technology. Meet the experts driving Neuerung HealthTech's mission to redefine patient telemetry and diagnostics.
        </p>
      </motion.div>

      {/* Grid Layout matching code.html */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Card 1: Dr. A. Subash (8 Cols) */}
        <motion.div
          className="md:col-span-8 bg-white/90 backdrop-blur-md rounded-[24px] p-8 border border-[#E2E8F0] shadow-sm flex flex-col md:flex-row gap-8 items-start hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
          whileHover={{ y: -4 }}
        >
          <div className="w-full md:w-1/3 shrink-0 rounded-2xl overflow-hidden aspect-square bg-slate-100">
            <img
              src={teamMembers[0].img}
              alt={teamMembers[0].name}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
            />
          </div>
          <div className="flex-grow space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-[#003772] font-['Plus_Jakarta_Sans'] group-hover:text-[#004e9c] transition-colors">
                  {teamMembers[0].name}
                </h3>
                <p className="text-sm font-semibold text-[#565e74] font-['Inter'] mt-0.5">
                  {teamMembers[0].role}
                </p>
              </div>
              <span className="inline-flex items-center gap-1 bg-[#003772]/10 text-[#003772] px-3 py-1 rounded-full text-xs font-bold font-['Inter']">
                <CheckCircle className="w-3.5 h-3.5" /> Leadership
              </span>
            </div>
            <p className="text-sm text-[#424751] font-['Inter'] leading-relaxed">
              {teamMembers[0].bio}
            </p>
            <div className="pt-2">
              <button
                onClick={() => openModal('team-bio', teamMembers[0])}
                className="px-6 py-2 bg-[#004e9c] text-white font-['Inter'] text-xs font-bold rounded-full hover:bg-[#003772] transition-colors shadow-sm"
              >
                Read Bio
              </button>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Dr. K. Meenakshi (4 Cols) */}
        <motion.div
          className="md:col-span-4 bg-white/90 backdrop-blur-md rounded-[24px] p-6 border border-[#E2E8F0] shadow-sm flex flex-col gap-6 hover:shadow-xl transition-all duration-300 group"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.8, 0.25, 1] }}
          whileHover={{ y: -4 }}
        >
          <div className="w-full rounded-2xl overflow-hidden aspect-video bg-slate-100">
            <img
              src={teamMembers[1].img}
              alt={teamMembers[1].name}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
            />
          </div>
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-bold text-[#003772] font-['Plus_Jakarta_Sans'] group-hover:text-[#004e9c] transition-colors">
                {teamMembers[1].name}
              </h3>
              <p className="text-xs font-semibold text-[#565e74] font-['Inter']">
                {teamMembers[1].role}
              </p>
            </div>
            <p className="text-xs text-[#424751] font-['Inter'] leading-relaxed">
              {teamMembers[1].bio}
            </p>
            <button
              onClick={() => openModal('team-bio', teamMembers[1])}
              className="w-full py-2.5 mt-2 bg-[#dae2fd] text-[#003772] font-['Inter'] text-xs font-bold rounded-full hover:bg-[#bec6e0] transition-colors"
            >
              Read Bio
            </button>
          </div>
        </motion.div>

        {/* Card 3: R. Karthik (6 Cols) */}
        <motion.div
          className="md:col-span-6 bg-white/90 backdrop-blur-md rounded-[24px] p-6 border border-[#E2E8F0] shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start hover:shadow-xl transition-all duration-300 group"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.8, 0.25, 1] }}
          whileHover={{ y: -4 }}
        >
          <div className="w-28 h-28 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-sm bg-slate-100">
            <img
              src={teamMembers[2].img}
              alt={teamMembers[2].name}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
            />
          </div>
          <div className="space-y-3 text-center sm:text-left w-full">
            <div>
              <h3 className="text-xl font-bold text-[#003772] font-['Plus_Jakarta_Sans'] group-hover:text-[#004e9c] transition-colors">
                {teamMembers[2].name}
              </h3>
              <p className="text-xs font-semibold text-[#565e74] font-['Inter']">
                {teamMembers[2].role}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {teamMembers[2].tags.map((t) => (
                <span key={t} className="bg-[#e0e3e5] text-[#424751] px-2.5 py-0.5 rounded-md font-['Inter'] text-[10px] font-semibold">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-xs text-[#424751] font-['Inter'] leading-relaxed">
              {teamMembers[2].bio}
            </p>
            <button
              onClick={() => openModal('team-bio', teamMembers[2])}
              className="text-[#003772] font-['Inter'] text-xs font-bold hover:underline flex items-center justify-center sm:justify-start gap-1 group/btn"
            >
              <span>Read Bio</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Card 4: S. Priya (6 Cols) */}
        <motion.div
          className="md:col-span-6 bg-white/90 backdrop-blur-md rounded-[24px] p-6 border border-[#E2E8F0] shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start hover:shadow-xl transition-all duration-300 group"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
          whileHover={{ y: -4 }}
        >
          <div className="w-28 h-28 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-sm bg-slate-100">
            <img
              src={teamMembers[3].img}
              alt={teamMembers[3].name}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
            />
          </div>
          <div className="space-y-3 text-center sm:text-left w-full">
            <div>
              <h3 className="text-xl font-bold text-[#003772] font-['Plus_Jakarta_Sans'] group-hover:text-[#004e9c] transition-colors">
                {teamMembers[3].name}
              </h3>
              <p className="text-xs font-semibold text-[#565e74] font-['Inter']">
                {teamMembers[3].role}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {teamMembers[3].tags.map((t) => (
                <span key={t} className="bg-[#e0e3e5] text-[#424751] px-2.5 py-0.5 rounded-md font-['Inter'] text-[10px] font-semibold">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-xs text-[#424751] font-['Inter'] leading-relaxed">
              {teamMembers[3].bio}
            </p>
            <button
              onClick={() => openModal('team-bio', teamMembers[3])}
              className="text-[#003772] font-['Inter'] text-xs font-bold hover:underline flex items-center justify-center sm:justify-start gap-1 group/btn"
            >
              <span>Read Bio</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


