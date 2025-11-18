"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black bg-opacity-80 backdrop-blur-sm border-b border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="text-white font-mono font-bold text-xl">
              ORAGE
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className="text-white hover:text-gray-300 px-3 py-2 font-mono text-sm border-b border-transparent hover:border-white transition-colors"
              >
                HOME
              </Link>
              <Link 
                href="/projects" 
                className="text-white hover:text-gray-300 px-3 py-2 font-mono text-sm border-b border-transparent hover:border-white transition-colors"
              >
                PROJECTS
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-gray-300 px-3 py-2 font-mono text-sm border-b border-transparent hover:border-white transition-colors"
              >
                ABOUT
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-gray-300 px-3 py-2 font-mono text-sm border-b border-transparent hover:border-white transition-colors"
              >
                CONTACT
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <span className="font-mono text-sm">
                {isMenuOpen ? 'CLOSE' : 'MENU'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-opacity-95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="text-white hover:text-gray-300 block px-3 py-2 font-mono text-sm border-b border-transparent hover:border-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              href="/projects" 
              className="text-white hover:text-gray-300 block px-3 py-2 font-mono text-sm border-b border-transparent hover:border-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              PROJECTS
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-gray-300 block px-3 py-2 font-mono text-sm border-b border-transparent hover:border-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-gray-300 block px-3 py-2 font-mono text-sm border-b border-transparent hover:border-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;