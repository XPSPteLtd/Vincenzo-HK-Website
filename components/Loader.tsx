import React, { useState, useEffect } from 'react';

interface LoaderProps {
  isLoading: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  const [showLocation, setShowLocation] = useState(false);

  useEffect(() => {
    // Reveal location text shortly after loader appears
    const timer = setTimeout(() => {
      setShowLocation(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#111111] flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl mix-blend-screen" />
        
        {/* Main Brand Logo */}
        <div className="relative z-10 overflow-hidden mb-8">
          <img 
            src="https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png" 
            alt="Vincenzo Capuano" 
            className="h-24 md:h-32 lg:h-40 w-auto object-contain animate-[pulse_3s_ease-in-out_infinite] drop-shadow-[0_0_15px_rgba(197,160,89,0.3)]"
          />
        </div>

        {/* Location Element */}
        <div
          className={`flex flex-col items-center transition-all duration-700 ease-out ${
            showLocation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-gold/50 to-transparent mb-4" />
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-gold/80">
            Hong Kong
          </span>
        </div>
      </div>
    </div>
  );
};