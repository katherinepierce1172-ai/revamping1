import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
        {title}
      </h2>
      {subtitle && (
        <div className={`h-1 w-24 bg-brand-gold ${center ? 'mx-auto' : ''}`} />
      )}
    </div>
  );
};