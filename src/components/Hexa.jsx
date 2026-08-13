import React from 'react';
import { motion } from 'framer-motion';

export default function Hexa({ openModal }) {
  const hexaProducts = [
    {
      id: 'hexa-doctor',
      num: '01',
      tag: 'CLINICAL',
      subLogo: 'DOCTOR',
      title: 'Intelligent support for modern clinical practice.',
      desc: 'AI-integrated digital capabilities designed to help healthcare professionals work with connected patient information and workflows.',
      features: [
        'AI-assisted workflows',
        'Digital clinical records',
        'Clinical decision support',
        'Connected healthcare data'
      ],
      linkText: 'Explore Hexa Doctor →',
      featured: true
    },
    {
      id: 'hexa-service',
      num: '02',
      tag: 'SERVICES',
      subLogo: 'SERVICE',
      title: 'Connected healthcare services.',
      desc: 'Bringing healthcare service providers and users together through a connected digital ecosystem.',
      features: [
        'Nursing Care',
        'Physiotherapy',
        'Diagnostic Services',
        'Pharmacy'
      ],
      linkText: 'Explore Hexa Service →',
      featured: false
    },
    {
      id: 'hexa-pharmacy',
      num: '03',
      tag: 'ACCESS',
      subLogo: 'PHARMACY',
      title: 'Healthcare access, simplified.',
      desc: 'Connecting pharmacy services with the wider digital healthcare ecosystem.',
      features: [
        'Digital pharmacy access',
        'Connected healthcare',
        'Patient experience',
        'Service integration'
      ],
      linkText: 'Explore Hexa Pharmacy →',
      featured: false
    },
    {
      id: 'hexa-patients',
      num: '04',
      tag: 'PATIENT',
      subLogo: 'PATIENTS',
      title: 'A connected patient healthcare experience.',
      desc: 'Designed to connect patients with relevant healthcare information, services and experiences.',
      features: [
        'Connected experience',
        'Healthcare information',
        'Service access',
        'Digital care journey'
      ],
      linkText: 'Explore Hexa for Patients →',
      featured: false
    }
  ];

  return (
    <section id="hexa" className="hexa-section">
      <div className="container">
        <div className="hexa-intro">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label light-label">
              THE HEXA ECOSYSTEM
            </span>

            <h2>
              One Healthcare Ecosystem.<br />
              <span>Multiple Connected Solutions.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hexa brings together healthcare professionals, service providers and
            patients through a connected digital healthcare ecosystem.
          </motion.p>
        </div>

        <div className="hexa-grid">
          {hexaProducts.map((prod, index) => (
            <motion.article
              key={prod.id}
              className={`hexa-card ${prod.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="card-top">
                <span className="product-number">{prod.num}</span>
                <span className="product-tag">{prod.tag}</span>
              </div>

              <div className="hexa-logo">
                HEXA <small>{prod.subLogo}</small>
              </div>

              <h3>{prod.title}</h3>

              <p>{prod.desc}</p>

              <ul>
                {prod.features.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>

              <a
                href={`#${prod.id}`}
                className="card-link"
                onClick={(e) => {
                  e.preventDefault();
                  if (openModal) {
                    openModal('product-details', prod);
                  }
                }}
              >
                {prod.linkText}
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
