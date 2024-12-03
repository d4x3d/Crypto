import React from 'react';
import { FooterSection } from './FooterSection';
import { FooterLinks } from './FooterLinks';
import { Newsletter } from './Newsletter';
import { SocialLinks } from './SocialLinks';

const quickLinks = ['About', 'Features', 'Pricing', 'Contact'];
const supportLinks = ['FAQ', 'Privacy Policy', 'Terms of Service', 'Support Center'];

export const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <FooterSection title="About Us">
            <p className="text-gray-400 leading-relaxed">
              We're revolutionizing crypto investments with cutting-edge technology and unparalleled security.
            </p>
          </FooterSection>
          
          <FooterSection title="Quick Links">
            <FooterLinks links={quickLinks} />
          </FooterSection>
          
          <FooterSection title="Support">
            <FooterLinks links={supportLinks} />
          </FooterSection>
          
          <FooterSection title="Newsletter">
            <Newsletter />
          </FooterSection>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 CryptoInvest. All rights reserved.
            </p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};