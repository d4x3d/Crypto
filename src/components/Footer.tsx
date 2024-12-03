import React from 'react';
import { Facebook, Twitter, Instagram, Github, Send } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
            <p className="text-gray-400 leading-relaxed">
              We're revolutionizing crypto investments with cutting-edge technology and unparalleled security.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Features', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {['FAQ', 'Privacy Policy', 'Terms of Service', 'Support Center'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-r-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 CryptoInvest. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Github].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};