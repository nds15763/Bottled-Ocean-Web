import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  icon?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, title, className = "", icon }) => {
  return (
    <div className={`bg-white rounded-3xl p-6 shadow-[0_8px_0_rgba(209,229,245,1)] border-4 border-card-border ${className}`}>
      {(title || icon) && (
        <div className="flex flex-col items-center mb-4">
          {icon && <div className="text-ocean-500 mb-2">{icon}</div>}
          {title && <h3 className="text-xl font-display font-bold text-gray-700">{title}</h3>}
        </div>
      )}
      <div className="text-gray-600 font-sans leading-relaxed">
        {children}
      </div>
    </div>
  );
};