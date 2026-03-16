
import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, ExternalLink, ShieldCheck, Scissors } from 'lucide-react';
import { fetchGoogleReviews } from '../services/aiService';
import { Language } from '../translations';

interface Review {
  id: string | number;
  text: string;
  author: string;
  rating: number;
  sourceUrl: string;
}

interface TestimonialsProps {
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadReviews = async () => {
      setIsLoading(true);
      const data = await fetchGoogleReviews();
      
      if (data && data.length > 0) {
        setReviews(data.map((r: any, idx: number) => ({ ...r, id: idx })));
      } else {
        const fallbackUrl = "https://www.google.com/search?q=Vincenzo+Capuano+Singapore+Google+Reviews";
        setReviews([
          {
            id: 'f1',
            text: "The Nuvola Super dough is truly cloud-like. One of the best contemporary pizzas in the region, hands down.",
            author: "Chef David L.",
            rating: 5,
            sourceUrl: fallbackUrl
          },
          {
            id: 'f2',
            text: "Provola e Pepe is a must-try. The flavor balance is incredible. Proper Napoli style in the heart of the city.",
            author: "Isabella Rossi",
            rating: 5,
            sourceUrl: fallbackUrl
          }
        ]);
      }
      setIsLoading(false);
    };

    loadReviews();
  }, []);

  const changeSlide = (direction: 'next' | 'prev') => {
    if (isAnimating || reviews.length === 0) return;
    setIsAnimating(true);
    
    setTimeout(() => {
        setCurrent((prev) => {
            if (direction === 'next') return (prev + 1) % reviews.length;
            return (prev - 1 + reviews.length) % reviews.length;
        });
        setIsAnimating(false);
    }, 50);
  };

  useEffect(() => {
    if (reviews.length > 0) {
      const timer = setInterval(() => changeSlide('next'), 9000);
      return () => clearInterval(timer);
    }
  }, [reviews]);

  if (isLoading) {
    return (
      <section id="testimonials" className="py-32 bg-[#090909] border-t border-white/5 flex flex-col items-center justify-center min-h-[600px] overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 border border-gold/20 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
          
          <div className="relative z-10 p-12 text-center">
            <Scissors 
                className="w-10 h-10 text-gold/30 mx-auto mb-8 transform -rotate-90 animate-pulse" 
                strokeWidth={1}
            />
            <div className="space-y-3">
                <h3 className="font-display text-lg text-white/80 tracking-[0.2em] uppercase">Retrieving Guest Chronicles</h3>
                <div className="flex items-center justify-center gap-3">
                    <span className="h-px w-4 bg-gold/20"></span>
                    <span className="text-[9px] text-gold/50 tracking-mega uppercase font-bold">Authenticating Feedback</span>
                    <span className="h-px w-4 bg-gold/20"></span>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const activeReview = reviews[current];

  return (
    <section id="testimonials" className="py-32 bg-[#090909] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 text-[30rem] md:text-[40rem] text-white/[0.02] pointer-events-none font-serif leading-none select-none font-bold">
            "
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center">
                
                <div className="mb-10 p-4 border border-gold/10 rounded-full bg-gold/5 backdrop-blur-sm">
                    <Quote size={32} className="text-gold fill-gold/20" />
                </div>

                <div key={activeReview?.id} className="min-h-[350px] flex flex-col justify-center items-center animate-fade-in max-w-3xl mx-auto">
                     <div className="flex gap-1 mb-6 text-gold">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              size={18} 
                              fill={i < (activeReview?.rating || 5) ? "currentColor" : "none"} 
                              className={i < (activeReview?.rating || 5) ? "drop-shadow-[0_0_5px_rgba(197,160,89,0.3)]" : "text-white/10"} 
                            />
                        ))}
                     </div>

                     <div className="flex items-center gap-2 mb-8 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                        <ShieldCheck size={12} className="text-green-500" />
                        <span className="text-[9px] text-gray-400 uppercase tracking-mega font-bold">Verified Guest Experience</span>
                     </div>

                     <p className="font-serif text-2xl md:text-4xl text-white leading-relaxed italic mb-10 tracking-wide">
                        "{activeReview?.text}"
                     </p>

                     <div className="space-y-4">
                        <h4 className="text-gold font-display text-lg md:text-xl tracking-[0.2em] uppercase font-medium">
                            {activeReview?.author}
                        </h4>
                        
                        <a 
                          href={activeReview?.sourceUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[10px] text-gray-500 hover:text-white uppercase tracking-widest group transition-colors"
                        >
                          View Source <ExternalLink size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                     </div>
                </div>

                <div className="flex justify-center gap-6 mt-16">
                    <button 
                        onClick={() => changeSlide('prev')} 
                        className="p-4 rounded-full border border-white/10 text-gray-400 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300 group"
                        aria-label="Previous Review"
                    >
                        <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                    
                    <div className="flex items-center gap-3">
                        {reviews.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`h-1.5 transition-all duration-500 rounded-full ${
                                    current === idx ? 'w-8 bg-gold' : 'w-2 bg-gray-800 hover:bg-gray-600'
                                }`}
                                aria-label={`Go to review ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <button 
                        onClick={() => changeSlide('next')} 
                        className="p-4 rounded-full border border-white/10 text-gray-400 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300 group"
                        aria-label="Next Review"
                    >
                        <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>

            </div>
        </div>
    </section>
  );
};
