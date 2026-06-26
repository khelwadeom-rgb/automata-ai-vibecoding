import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = '', size = 32 }: LogoProps) {
  return (
    <div className={`relative flex items-center justify-center transition-all duration-300 group ${className}`}>
      {/* Glow aura background */}
      <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 transform transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          {/* Main shield gradient */}
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" /> {/* Indigo 500 */}
            <stop offset="50%" stopColor="#8b5cf6" /> {/* Violet 500 */}
            <stop offset="100%" stopColor="#ec4899" /> {/* Pink 500 */}
          </linearGradient>
          
          {/* Inner core/circuit gradient */}
          <linearGradient id="coreGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a78bfa" /> {/* Violet 400 */}
            <stop offset="100%" stopColor="#38bdf8" /> {/* Sky 400 */}
          </linearGradient>

          {/* Glow filter */}
          <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Protective Shield Contour */}
        <path
          d="M50 12 C68 12, 82 16, 85 30 C88 56, 74 76, 50 88 C26 76, 12 56, 15 30 C18 16, 32 12, 50 12 Z"
          stroke="url(#shieldGradient)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-[0_0_8px_rgba(99,102,241,0.4)]"
        />

        {/* Inner Shield Overlay (slightly smaller for premium dual-layer depth effect) */}
        <path
          d="M50 19 C64 19, 75 22, 77 32 C79 51, 68 67, 50 77 C32 67, 21 51, 23 32 C25 22, 36 19, 50 19 Z"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />

        {/* Brain Neural Net/Circuit Nodes and Connections inside shield */}
        
        {/* Connection Lines */}
        {/* Central Vertical Spine */}
        <line x1="50" y1="32" x2="50" y2="62" stroke="url(#coreGradient)" strokeWidth="2" strokeDasharray="1 2" />
        
        {/* Left Neural Connections */}
        <line x1="50" y1="32" x2="35" y2="44" stroke="url(#coreGradient)" strokeWidth="2" />
        <line x1="35" y1="44" x2="35" y2="58" stroke="url(#coreGradient)" strokeWidth="1.5" />
        <line x1="35" y1="58" x2="50" y2="62" stroke="url(#coreGradient)" strokeWidth="1.5" />
        
        {/* Right Neural Connections */}
        <line x1="50" y1="32" x2="65" y2="44" stroke="url(#coreGradient)" strokeWidth="2" />
        <line x1="65" y1="44" x2="65" y2="58" stroke="url(#coreGradient)" strokeWidth="1.5" />
        <line x1="65" y1="58" x2="50" y2="62" stroke="url(#coreGradient)" strokeWidth="1.5" />

        {/* Horizontal bridge */}
        <line x1="35" y1="44" x2="65" y2="44" stroke="url(#coreGradient)" strokeWidth="1" strokeDasharray="2 2" />

        {/* Node Circles (glowing) */}
        {/* Top Intelligence Node */}
        <circle cx="50" cy="32" r="5" fill="#38bdf8" filter="url(#logoGlow)" />
        <circle cx="50" cy="32" r="2.5" fill="#ffffff" />

        {/* Center Process Node */}
        <circle cx="50" cy="47" r="4" fill="url(#shieldGradient)" />
        <circle cx="50" cy="47" r="2" fill="#ffffff" />

        {/* Bottom Secure Node */}
        <circle cx="50" cy="62" r="5" fill="#a78bfa" filter="url(#logoGlow)" />
        <circle cx="50" cy="62" r="2.5" fill="#ffffff" />

        {/* Left Brain Hemisphere Nodes */}
        <circle cx="35" cy="44" r="3.5" fill="#818cf8" />
        <circle cx="35" cy="44" r="1.5" fill="#ffffff" />

        <circle cx="35" cy="58" r="3.5" fill="#6366f1" />
        <circle cx="35" cy="58" r="1.5" fill="#ffffff" />

        {/* Right Brain Hemisphere Nodes */}
        <circle cx="65" cy="44" r="3.5" fill="#c084fc" />
        <circle cx="65" cy="44" r="1.5" fill="#ffffff" />

        <circle cx="65" cy="58" r="3.5" fill="#a78bfa" />
        <circle cx="65" cy="58" r="1.5" fill="#ffffff" />
      </svg>
    </div>
  );
}
