import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-3 font-sans tracking-widest text-sm font-semibold transition-all duration-300 uppercase transform hover:-translate-y-1";
  
  const variants = {
    primary: "bg-white text-black hover:bg-brand-gold hover:text-white border border-transparent",
    outline: "bg-transparent text-white border border-white hover:bg-white hover:text-black"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};