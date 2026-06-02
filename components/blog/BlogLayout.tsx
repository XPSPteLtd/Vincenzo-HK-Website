
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Language } from '../../translations';

interface BlogLayoutProps {
  lang: Language;
  onBookClick: () => void;
  eyebrow: string;
  title: string;
  metaDesc?: string;
  readTime?: string;
  children: React.ReactNode;
}

export const BlogLayout: React.FC<BlogLayoutProps> = ({
  lang,
  onBookClick,
  eyebrow,
  title,
  readTime,
  children,
}) => {
  const isHK = lang === 'hk';

  return (
    <div className="bg-charcoal min-h-screen pt-24 lg:pt-40 pb-24">

      {/* Article Hero */}
      <header className="max-w-3xl mx-auto px-6 pt-10 pb-16">
        <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
          {eyebrow}
        </p>
        <h1 className="font-display text-4xl md:text-6xl text-white leading-tight mb-6">
          {title}
        </h1>
        {readTime && (
          <p className="text-white/30 text-xs font-sans font-light tracking-widest uppercase">
            {readTime}
          </p>
        )}
      </header>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-white/[0.08] mb-16" />
      </div>

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-6 pb-20">
        {children}
      </article>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-white/[0.08] mb-16" />
      </div>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-10">
        <div className="bg-surface border border-white/[0.07] p-10 text-center">
          <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
            {isHK ? '親身體驗' : 'Experience It in Person'}
          </p>
          <h2 className="font-display text-3xl text-white mb-4">
            {isHK ? '在香港灣仔品嚐當代拿坡里薄餅' : 'Contemporary Neapolitan Pizza in Wan Chai, Hong Kong'}
          </h2>
          <p className="text-white/50 text-sm font-sans font-light mb-8">
            {isHK
              ? 'Lee Tung Avenue, GF Unit 01 04 05, 灣仔 • 午市 12:00–15:00 · 晚市 18:00–23:00'
              : 'Lee Tung Avenue, GF Unit 01 04 05, Wan Chai • Lunch 12:00–15:00 · Dinner 18:00–23:00'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookClick}
              className="inline-flex items-center justify-center gap-2 bg-gold text-charcoal text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 hover:bg-white transition-colors"
            >
              {isHK ? '立即訂座' : 'Reserve a Table'}
              <ChevronRight size={14} />
            </button>
            <a
              href="/menu"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 hover:border-white/60 hover:text-white transition-colors"
            >
              {isHK ? '查看菜單' : 'Explore the Menu'}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

// ─── Prose helpers ────────────────────────────────────────────────────────────

export const BlogH2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="font-display text-3xl text-white mt-12 mb-5">{children}</h2>
);

export const BlogH3: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="font-sans text-base font-semibold text-white/90 mt-7 mb-3 tracking-wide">{children}</h3>
);

export const BlogP: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-white/60 text-sm font-sans font-light leading-relaxed mb-5">{children}</p>
);

export const BlogHighlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <blockquote className="border-l-2 border-gold pl-6 my-8">
    <p className="font-display text-2xl text-white italic">{children}</p>
  </blockquote>
);

export const BlogList: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="space-y-3 mb-6 ml-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-white/60 text-sm font-sans font-light">
        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const BlogImage: React.FC<{ src: string; alt: string; caption?: string }> = ({ src, alt, caption }) => (
  <figure className="my-10">
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full object-cover max-h-[480px] rounded-sm"
    />
    {caption && (
      <figcaption className="text-white/30 text-xs font-sans text-center mt-3 tracking-wide">
        {caption}
      </figcaption>
    )}
  </figure>
);

export interface FAQItem { q: string; a: React.ReactNode; }
export const BlogFAQ: React.FC<{ title: string; items: FAQItem[] }> = ({ title, items }) => (
  <div className="mt-12">
    <h2 className="font-display text-3xl text-white mb-8">{title}</h2>
    <div>
      {items.map((item, i) => (
        <div key={i} className="border-b border-white/[0.08] py-5">
          <h3 className="text-white text-sm font-sans font-semibold mb-2">{item.q}</h3>
          <div className="text-white/60 text-sm font-sans font-light leading-relaxed">{item.a}</div>
        </div>
      ))}
    </div>
  </div>
);
