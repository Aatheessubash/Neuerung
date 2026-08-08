import React from 'react';

export default function Logo({ className = "", showText = true, size = "normal" }) {
  const imgHeightClass = size === "large" ? "h-16 sm:h-20" : size === "small" ? "h-10 sm:h-12" : "h-12 sm:h-14 md:h-16";
  const textClass = size === "large" ? "text-3xl sm:text-4xl" : size === "small" ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl font-extrabold";

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Brand Logo Image with enhanced size, brightness, and glow */}
      <div className="relative group">
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#003772] to-[#38BDF8] opacity-30 blur-sm group-hover:opacity-60 transition duration-300 pointer-events-none" />
        <img
          src="/images/logo.jpeg"
          alt="Neuerung HealthTech Logo"
          className={`${imgHeightClass} w-auto object-contain rounded-lg relative z-10 filter brightness-110 contrast-110 drop-shadow-md transition-transform duration-300 group-hover:scale-105`}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      {showText && (
        <span className={`font-['Plus_Jakarta_Sans'] font-extrabold text-[#003772] tracking-tight hover:text-[#004e9c] transition-colors ${textClass}`}>
          Neuerung HealthTech
        </span>
      )}
    </div>
  );
}
