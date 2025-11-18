"use client";

import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Use setTimeout to avoid synchronous state update in effect
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black border border-white text-white font-mono text-xs z-50 max-w-xs">
      <div className="p-4">
        <h3 className="font-bold mb-2">COOKIES.TXT</h3>
        <p className="mb-3">
          THIS SITE USES COOKIES TO ENHANCE YOUR BROWSING EXPERIENCE. 
          BY CONTINUING, YOU ACCEPT OUR COOKIE POLICY.
        </p>
        <div className="flex justify-end space-x-2">
          <button 
            onClick={() => setIsVisible(false)}
            className="px-3 py-1 border border-white hover:bg-white hover:text-black transition-colors"
          >
            DECLINE
          </button>
          <button 
            onClick={acceptCookies}
            className="px-3 py-1 bg-white text-black hover:bg-gray-200 transition-colors"
          >
            ACCEPT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;