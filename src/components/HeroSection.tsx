"use client";

import React, { useState, useEffect, useMemo } from 'react';

const HeroSection: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const texts = useMemo(() => [
    'SYSTEM BOOTUP INITIATED...',
    'LOADING VIDEO ID: AAM.6W1QA02RZFAA / PKGS XFRK V4P2C',
    'FRAMES: 1920X1080/29.90',
    'LOUDNESS: -25.60D',
    'CODECS: AVC1 & OPUS (2911)',
    'DIRECTORS & POST-PRODUCTION STUDIO BASED IN PARIS',
    'VFX, 3D, MOTION DESIGN, GRADING, EDITING'
  ], []);

  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 100;
    const current = texts[loopNum % texts.length];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex <= current.length) {
        setCurrentText(current.substring(0, currentIndex));
        setCurrentIndex(prev => prev + 1);
      }
      else if (!isDeleting && currentIndex > current.length) {
        setIsDeleting(true);
      }
      else if (isDeleting && currentIndex >= 0) {
        setCurrentText(current.substring(0, currentIndex));
        setCurrentIndex(prev => prev - 1);
      }
      else if (isDeleting && currentIndex < 0) {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
        setCurrentIndex(0);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, loopNum, texts]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Grid background texture */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      ></div>

      <div className="relative z-10 text-center max-w-4xl">
        {/* ORAGE Logo */}
        <h1 className="text-6xl md:text-8xl font-mono font-bold mb-8 tracking-wider">
          ORAGE
        </h1>

        {/* Animated console messages */}
        <div className="h-32 flex items-center justify-center">
          <p className="font-mono text-lg md:text-xl min-h-8">
            {currentText}
            <span className="ml-1 animate-pulse">|</span>
          </p>
        </div>

        {/* Main headline */}
        <h2 className="text-2xl md:text-3xl font-mono font-bold mt-12 mb-4">
          DIRECTORS & POST-PRODUCTION STUDIO BASED IN PARIS
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl font-mono">
          VFX, 3D, MOTION DESIGN, GRADING, EDITING
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <p className="font-mono text-sm">SCROLL DOWN</p>
      </div>
    </div>
  );
};

export default HeroSection;