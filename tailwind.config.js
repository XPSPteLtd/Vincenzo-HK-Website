/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './*.{tsx,ts}',
    './components/**/*.{tsx,ts}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#050505',
        surface: '#121212',
        gold: '#C5A059',
        red: '#D62828',
        offwhite: '#E5E5E5',
      },
      fontFamily: {
        serif: ['"Lobster"', 'cursive'],
        sans: ['"Montserrat"', 'sans-serif'],
        display: ['"Lobster"', 'cursive'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop')",
        'dough-pattern': "url('https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=2080&auto=format&fit=crop')",
      },
      letterSpacing: {
        mega: '0.3em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        scroll: 'scroll 40s linear infinite',
        'custom-pulse': 'customPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' },
        },
        customPulse: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(197, 160, 89, 0.4)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 0 10px rgba(197, 160, 89, 0)' },
        },
      },
    },
  },
  plugins: [],
};
