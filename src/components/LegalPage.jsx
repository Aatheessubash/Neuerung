import React, { useEffect, useRef } from 'react';
import { COMPANY } from '../constants/company';
import './LegalPage.css';

function ContentBlocks({ blocks }) {
  return blocks.map((block, index) => {
    if (block.type === 'list') {
      return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
    }
    if (block.type === 'heading') return <h3 key={index}>{block.text}</h3>;
    if (block.type === 'email') {
      return <p key={index}>Email: <a href={`mailto:${COMPANY.contact.email1}`}>{COMPANY.contact.email1}</a></p>;
    }
    if (block.text.startsWith('Website: ')) {
      const url = block.text.slice(9);
      return <p key={index}>Website: <a href={url}>{url}</a></p>;
    }
    return <p key={index}>{block.text}</p>;
  });
}

export default function LegalPage({ document: policy, slug }) {
  const headingRef = useRef(null);
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${policy.title} | Neuerung HealthTech`;
    window.scrollTo({ top: 0, behavior: 'instant' });
    headingRef.current?.focus({ preventScroll: true });
    return () => { document.title = previousTitle; };
  }, [policy.title]);

  return (
    <div className="legal-page">
      <a href="#main-content" className="skip-to-content" onClick={(event) => {
        event.preventDefault();
        headingRef.current?.focus();
      }}>Skip to main content</a>
      <main id="main-content" className="legal-main">
        <article>
          <header className="legal-intro">
            <p className="legal-eyebrow">Neuerung HealthTech</p>
            <h1 ref={headingRef} tabIndex={-1}>{policy.title}</h1>
            <div className="legal-dates">{policy.dates.map((date) => <p key={date}>{date}</p>)}</div>
          </header>
          <div className="legal-content">
            <ContentBlocks blocks={policy.intro} />
            {policy.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                <ContentBlocks blocks={section.blocks} />
              </section>
            ))}
          </div>
        </article>
      </main>
      <footer className="legal-footer">
        <nav aria-label="Legal information">
          <a href="#/terms-and-conditions" aria-current={slug === 'terms-and-conditions' ? 'page' : undefined}>Terms &amp; Conditions</a>
          <a href="#/privacy-policy" aria-current={slug === 'privacy-policy' ? 'page' : undefined}>Privacy Policy</a>
          <a href="#home">Home</a>
        </nav>
        <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
