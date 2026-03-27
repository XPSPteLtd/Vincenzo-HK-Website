import React from 'react';
import { Language } from '../translations_new';
// import removed as unused

interface LoaderProps {
  isLoading: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <div 
      className={`fixed inset-0 z-[100] bg-charcoal flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative">
        {/* Animated Rings */}
        <div className="absolute inset-0 border border-gold/20 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
        <div className="absolute inset-0 border border-gold/10 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] delay-150"></div>
        
        {/* Main Container */}
        <div className="relative z-10 p-8">
            {/* Official Logo */}
            <img 
                src="https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png" 
                alt="Vincenzo Capuano Loading Logo" 
                className="h-12 md:h-16 lg:h-[8.5rem] w-auto mx-auto mb-6 object-contain animate-pulse" 
            />
            
            {/* Text Content Removed */}
        </div>
      </div>
    </div>
  );
};