import React from 'react';
import './Logo.css';
import logoImg from '../assets/New_Logo.png';

export default function Logo({ className = "", showText = true, size = "normal" }) {
  return (
    <div className={`logo-wrapper ${className}`}>
      {/* Brand Logo Image with transparent background */}
      <div className="logo-image-container">
        <img
          src={logoImg}
          alt="Neuerung HealthTech Logo"
          className={`logo-img size-${size}`}
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
