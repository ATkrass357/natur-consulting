import React from "react";

export const Logo = ({ className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`} data-testid="site-logo">
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="17" cy="17" r="16.5" stroke="#1B3B22" />
      <path d="M9 22C13 22 17 19 18.5 14.5C20 10 22.5 9 25 9C24 13 22 17 19 19.5C16 22 12 22.5 9 22Z" fill="#1B3B22" />
      <path d="M9 22C11 20 14 18.5 18 18" stroke="#9C462C" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
    <div className="leading-none">
      <div className="font-heading text-lg font-medium tracking-tight text-[#1A221C]">Ecosafe</div>
      <div className="font-label text-[10px] text-[#4A6B53]">ecoprotec GmbH</div>
    </div>
  </div>
);

export default Logo;
