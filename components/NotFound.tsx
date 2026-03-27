import React from 'react';
import { SafeImage } from './ui/SafeImage';
import { useNavigate } from 'react-router-dom';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center bg-charcoal overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 opacity-20">
        <SafeImage 
          src="https://images.unsplash.com/photo-1618214227918-6229af0bf942?q=80&w=2070&auto=format&fit=crop" 
          alt="Burnt Pizza Background" 
          fallbackPrompt="A burnt pizza crust or dropped pizza in dramatic moody lighting"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-2xl flex flex-col items-center">
        <h1 className="text-gold font-display capitalize text-8xl md:text-[10rem] leading-none mb-4 animate-[pulse_4s_ease-in-out_infinite]">
          404
        </h1>
        <h2 className="text-white font-serif capitalize text-3xl md:text-5xl mb-6 italic">
          Mamma Mia!
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-10 font-light tracking-wide">
          It looks like this page got lost in the oven. The recipe you're looking for doesn't exist or has been moved.
        </p>
        
        <button 
          onClick={() => navigate('/')}
          className="px-10 py-4 bg-transparent border border-gold text-gold font-bold text-xs tracking-mega capitalize hover:bg-gold hover:text-charcoal transition-all duration-300 shadow-lg"
        >
          Return to Kitchen
        </button>
      </div>
    </section>
  );
};
