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
            {/* Official Logo */}
            <img 
                src="https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png" 
                alt="Vincenzo Capuano Loading Logo" 
                className="h-16 w-auto mx-auto mb-6 object-contain animate-pulse" 
            />
            
            {/* Text Content */}
            <div className="text-center space-y-3 overflow-hidden">
                <h1 className="font-display text-3xl md:text-4xl text-white tracking-[0.2em] uppercase animate-fade-in-up">
                    Vincenzo Capuano
                </h1>
                <div className="flex items-center justify-center gap-3 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <span className="h-px w-6 bg-gold/50"></span>
                    <span className="text-[10px] md:text-xs text-gold tracking-[0.4em] uppercase">Hong Kong</span>
                    <span className="h-px w-6 bg-gold/50"></span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};