import React from 'react';

export const PeacockFeatherIcon = ({ size = 20, className = '', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <g transform="rotate(20 32 32)">
      {/* Outer wispy aura */}
      <path d="M32 60 C32 60 16 40 16 25 C16 10 32 5 32 5 C32 5 48 10 48 25 C48 40 32 60 32 60Z" fill="#78B833" opacity="0.6"/>
      {/* Inner green */}
      <path d="M32 54 C32 54 22 38 22 25 C22 12 32 8 32 8 C32 8 42 12 42 25 C42 38 32 54 32 54Z" fill="#329932" opacity="0.85"/>
      {/* The Eye - Blue */}
      <path d="M32 44 C32 44 25 35 25 25 C25 15 32 13 32 13 C32 13 39 15 39 25 C39 35 32 44 32 44Z" fill="#1C75BC"/>
      {/* The Eye - Dark Blue */}
      <path d="M32 36 C32 36 28 30 28 24 C28 18 32 16 32 16 C32 16 36 18 36 24 C36 30 32 36 32 36Z" fill="#000080"/>
      {/* Eye Highlight */}
      <ellipse cx="32" cy="21" rx="2" ry="3" fill="#00BFFF"/>
      {/* Quill Stem */}
      <path d="M32 10 L32 64" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round"/>
    </g>
  </svg>
);

export const FluteIcon = ({ width = 40, height = 14, className = '', style = {} }) => (
  <svg width={width} height={height} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    {/* Body */}
    <rect x="5" y="12" width="110" height="12" rx="6" fill="#F4C47A" stroke="#B8860B" strokeWidth="2"/>
    
    {/* Red Threads (Bandhan) */}
    <line x1="20" y1="12" x2="20" y2="24" stroke="#E3242B" strokeWidth="2.5"/>
    <line x1="32" y1="12" x2="32" y2="24" stroke="#E3242B" strokeWidth="2.5"/>
    <line x1="100" y1="12" x2="100" y2="24" stroke="#E3242B" strokeWidth="2.5"/>
    
    {/* Holes */}
    <circle cx="48" cy="18" r="2.5" fill="#3E2723"/>
    <circle cx="62" cy="18" r="2.5" fill="#3E2723"/>
    <circle cx="76" cy="18" r="2.5" fill="#3E2723"/>
    <circle cx="90" cy="18" r="2.5" fill="#3E2723"/>
    
    {/* Golden Tassel (Latkan) */}
    <path d="M26 24 C20 32 24 38 26 40" stroke="#FFD700" strokeWidth="1.5" fill="none"/>
    <path d="M26 24 C32 32 28 38 26 40" stroke="#FFD700" strokeWidth="1.5" fill="none"/>
    <path d="M26 24 L26 40" stroke="#FFD700" strokeWidth="1" fill="none"/>
  </svg>
);
