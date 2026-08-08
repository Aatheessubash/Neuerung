import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Neuerung's AI clinical decision engine reduced our emergency triage delays significantly. The integrated DICOM scan alerts enable our radiologists to prioritize critical cases within minutes.",
      author: "Dr. V. Ramanathan",
      title: "Chief of Radiology & Diagnostics",
      facility: "Super Specialty Hospital, Tamil Nadu"
    },
    {
      quote: "The wireless IoT telemetry hubs stream patient vitals continuously to our nurse central dashboard with virtually zero latency. It has transformed bedside monitoring across our wards.",
      author: "Dr. S. Sundaram",
      title: "Director of Intensive Care Units",
      facility: "Healthcare Network, South India"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold text-[#004E9C] uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Clinical Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004E9C] tracking-tight font-['Poppins']">
            WHAT OUR CLINICIANS SAY
          </h2>
          <p className="text-base text-slate-600">
            Real feedback from hospital directors and medical teams using Neuerung HealthTech solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md relative overflow-hidden flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900 font-['Poppins']">{t.author}</div>
                  <div className="text-xs font-semibold text-[#004E9C]">{t.title}</div>
                  <div className="text-[11px] text-slate-400">{t.facility}</div>
                </div>
                <Quote className="w-8 h-8 text-blue-100 flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
