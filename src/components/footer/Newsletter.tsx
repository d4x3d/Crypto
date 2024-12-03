import React from 'react';
import { Send } from 'lucide-react';

export const Newsletter = () => {
  return (
    <div>
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
  );
};