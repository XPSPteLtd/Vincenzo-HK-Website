
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-charcoal flex flex-col items-center justify-center px-6 text-center">
      <div className="relative mb-12">
        <h1 className="text-[12rem] md:text-[18rem] font-display italic text-white/5 leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <img 
            src="https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png" 
            alt="Vincenzo Capuano" 
            className="h-24 md:h-32 mb-6"
          />
          <p className="text-gold font-display text-2xl md:text-4xl italic">Page Not Found</p>
        </div>
      </div>
      
      <p className="text-white/60 font-sans text-sm md:text-base max-w-md mb-10 leading-relaxed">
        The pizza you are looking for might have been eaten, or the page has moved to another table.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-300 px-6 py-3"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Go Back</span>
        </button>
        
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 bg-gold hover:bg-white text-charcoal px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 shadow-xl shadow-gold/10"
        >
          <Home size={16} />
          Return Home
        </button>
      </div>
    </div>
  );
};
