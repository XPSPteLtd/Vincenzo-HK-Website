import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 uppercase tracking-widest";
  
  const variants = {
    primary: "bg-red text-white hover:bg-white hover:text-red hover:shadow-[0_0_20px_rgba(230,57,70,0.3)]",
    outline: "border-2 border-gold text-gold hover:bg-gold hover:text-charcoal",
    text: "text-gold hover:text-white underline-offset-4 hover:underline"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};