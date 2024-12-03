import React from 'react';
import { Shield, LineChart, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Your investments are protected by state-of-the-art security protocols and insurance coverage.',
  },
  {
    icon: LineChart,
    title: 'Advanced Analytics',
    description: 'Make informed decisions with our real-time market analysis and AI-powered insights.',
  },
  {
    icon: Lock,
    title: 'Regulatory Compliance',
    description: 'We operate under strict regulatory frameworks to ensure your investments are safe and compliant.',
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};