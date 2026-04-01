import React from 'react';
import { Scissors } from 'lucide-react';

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
            {/* Brand Logo */}
            <img 
              src="https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png" 
              alt="Vincenzo Capuano Loading Logo" 
              className="h-28 md:h-44 lg:h-56 w-auto mx-auto object-contain animate-pulse drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            />
        </div>
      </div>
    </div>
  );
};