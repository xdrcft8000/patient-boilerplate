import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export default function Card({ children, className = '', onClick, hover = false }: CardProps) {
  const baseClasses = 'bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden';
  const hoverClasses = hover ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer' : '';
  const clickClasses = onClick ? 'cursor-pointer' : '';
  
  const classes = `${baseClasses} ${hoverClasses} ${clickClasses} ${className}`;
  
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
} 