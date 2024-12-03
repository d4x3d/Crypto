import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black opacity-90" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Crypto Journey</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Experience the future of investing with our secure, transparent, and innovative crypto investment platform.
          </p>
          <button className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2">
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};