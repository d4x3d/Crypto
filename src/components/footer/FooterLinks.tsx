import React from 'react';

interface FooterLinksProps {
  links: string[];
}

export const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => {
  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
};