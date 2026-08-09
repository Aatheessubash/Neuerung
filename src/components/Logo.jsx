import React from 'react';
import './Logo.css';

export default function Logo({ className = "", showText = true, size = "normal" }) {
  return (
    <div className={`logo-wrapper ${className}`}>
      {/* Brand Logo Image with transparent background */}
      <div className="logo-image-container">
        <img
          src={`${import.meta.env.BASE_URL}/images/logo-removebg-preview.png`.replace(/\/+/g, '/')}
          alt="Neuerung HealthTech Logo"
          className={`logo-img size-${size}`}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      {showText && (
        <div className={`logo-text-container size-${size}`}>
          <span className="logo-title">N e u e r u n g</span>
          <span className="logo-subtitle">H E A L T H T E C H</span>
        </div>
      )}
    </div>
  );
}
