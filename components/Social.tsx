
import React, { useEffect, useState } from 'react';
import { Instagram, ExternalLink, Loader2 } from 'lucide-react';
import { Language, translations } from '../translations';

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
}

interface SocialProps {
  lang: Language;
}

// Fixed the FC type to accept lang prop as required by App.tsx
export const Social: React.FC<SocialProps> = ({ lang }) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  // NOTE: In a production environment, this would fetch from a secure backend endpoint 
  // that communicates with the Instagram Basic Display API.
  // Since we are client-side only for this demo, we simulate the 'Live' feed response.
  useEffect(() => {
    const fetchFeed = async () => {
      try {
        setLoading(true);
        // Simulating network delay for realism
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Mock Data reflecting the requested @vincenzocapuano.hk content style
        const mockResponse: InstagramPost[] = [
          {
            id: "ig-2",
            media_url: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/detto-fatto-pizza.png",
            permalink: "https://www.instagram.com/vincenzocapuano.hk",
            caption: "Vivere di pizza è meraviglioso! 🍕"
          },
          {
            id: "ig-3",
            media_url: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/egg-yolk.png",
            permalink: "https://www.instagram.com/vincenzocapuano.hk",
            caption: "The secret is in the hydration. 081 Napoli. 🇮🇹"
          },
          {
            id: "ig-5",
            media_url: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/gwanciale-di-manzo.jpg",
            permalink: "https://www.instagram.com/vincenzocapuano.hk",
            caption: "Contemporary essence. Traditional heart."
          },
          {
            id: "ig-6",
            media_url: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/oven-pizza.jpg",
            permalink: "https://www.instagram.com/vincenzocapuano.hk",
            caption: "Cutting through tradition with my golden scissors. ✂️"
          }
        ];

        setPosts(mockResponse);
      } catch (error) {
        console.error("Error fetching Instagram feed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  return (
    <section className="py-28 md:py-40 bg-[#050505] overflow-hidden border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <span className="text-gold/50 tracking-[0.3em] text-[10px] uppercase font-bold block mb-3">
            {translations[lang].social.badge}
          </span>
          <h2 className="font-display italic text-3xl xs:text-4xl md:text-5xl text-white capitalize leading-none whitespace-pre-line">
            {translations[lang].social.title}
          </h2>
        </div>

        <a
          href="https://www.instagram.com/vincenzocapuano.hk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-white hover:text-gold transition-colors group border border-white/20 px-6 py-3 rounded-full hover:border-gold/50 hover:bg-gold/5"
        >
          <Instagram className="w-5 h-5" />
          <span className="text-xs font-bold tracking-widest uppercase">@vincenzocapuano.hk</span>
          <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>

      <div className="relative w-full overflow-hidden min-h-[300px]">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-gold animate-spin" />
          </div>
        ) : (
          <>
            {/* Masking for fade effect on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-[11] pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-[11] pointer-events-none"></div>

            <div className="flex gap-6 animate-scroll whitespace-nowrap py-4 will-change-transform">
              {/* Tripled array for smooth infinite loop */}
              {[...posts, ...posts, ...posts].map((post, index) => (
                <a
                  key={`${post.id}-${index}`}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[280px] h-[350px] md:w-[320px] md:h-[400px] flex-shrink-0 relative group block overflow-hidden bg-surface"
                >
                  <img
                    src={post.media_url}
                    alt={post.caption || "Instagram Post"}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gold/10 group-hover:bg-gold/0 transition-colors duration-700 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <div className="flex justify-between items-center mb-2">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-white text-xs font-light line-clamp-2 whitespace-normal leading-relaxed italic">
                      "{post.caption}"
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
