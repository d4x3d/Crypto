import React from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
};