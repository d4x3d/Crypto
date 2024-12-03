import React from 'react';
import { Facebook, Twitter, Instagram, LinkedIn } from 'lucide-react';

const socialIcons = [Facebook, Twitter, Instagram, LinkedIn];

export const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {socialIcons.map((Icon, index) => (
        <a
          key={index}
          href="#"
          className="text-gray-400 hover:text-purple-400 transition-colors"
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};