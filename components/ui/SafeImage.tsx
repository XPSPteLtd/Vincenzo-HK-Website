
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { getCachedImage } from '../../services/aiService';
import { Image as ImageIcon } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  fallbackPrompt: string;
  className?: string;
  aspectRatio?: "1:1" | "4:3" | "16:9" | "9:16";
}

/**
 * Optimized SafeImage to prevent flickering during state updates and filtering.
 */
export const SafeImage: React.FC<SafeImageProps> = ({ 
  src, 
  alt, 
  fallbackPrompt, 
  className = "",
  aspectRatio = "1:1" 
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const imgRef = useRef<HTMLImageElement>(null);
  const isLoadedRef = useRef(false);
  const currentSrcRef = useRef(src);
  const isResolvingRef = useRef(false);

  // Synchronous check for cached images before browser paints
  useLayoutEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalHeight > 0) {
      if (!isLoadedRef.current) {
        setIsLoaded(true);
        isLoadedRef.current = true;
      }
    }
  });

  useEffect(() => {
    const resolve = async () => {
      if (isResolvingRef.current) return;
      isResolvingRef.current = true;

      try {
        const cached = await getCachedImage(fallbackPrompt, aspectRatio);
        const targetSrc = src || cached;

        // Only update and reset loaded state if the source is truly different
        if (targetSrc !== currentSrcRef.current) {
          currentSrcRef.current = targetSrc;
          setCurrentSrc(targetSrc);
          setIsLoaded(false);
          isLoadedRef.current = false;
          setHasError(false);
        }
      } catch (e) {
        console.warn("SafeImage: Cache resolution failed", e);
      } finally {
        isResolvingRef.current = false;
      }
    };

    resolve();
  }, [src, fallbackPrompt, aspectRatio]);

  const handleLoad = () => {
    setIsLoaded(true);
    isLoadedRef.current = true;
    setHasError(false);
  };

  const handleError = () => {
    if (hasError) return;
    
    setHasError(true);
    setIsLoaded(false);
    isLoadedRef.current = false;
    
    const fallback = "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop";
    if (currentSrc !== fallback) {
      setCurrentSrc(fallback);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-[#0A0A0A] ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 z-10 bg-charcoal flex items-center justify-center transition-opacity duration-300">
          <div className="w-full h-full bg-gradient-to-br from-charcoal to-surface animate-pulse flex items-center justify-center">
            <ImageIcon className="text-white/5 w-6 h-6" />
          </div>
        </div>
      )}

      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
