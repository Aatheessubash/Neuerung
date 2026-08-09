import React from 'react';
import './Logo.css';

export default function Logo({ className = "", showText = true, size = "normal" }) {
  return (
    <div className={`logo-wrapper ${className}`}>
      {/* Brand Logo Image with enhanced size, brightness, and glow */}
      <div className="logo-image-container">
        <div className="logo-glow" />
        <img
          src="/images/logo.jpeg"
          alt="Neuerung HealthTech Logo"
          className={`logo-img size-${size}`}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      {showText && (
        <span className={`logo-text size-${size}`}>
          Neuerung HealthTech
        </span>
      )}
    </div>
  );
}
