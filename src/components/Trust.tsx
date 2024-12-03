import React from 'react';
import { Shield, Users, Award, Building2 } from 'lucide-react';

const trustItems = [
  {
    icon: Shield,
    title: '$1B+ Protected',
    description: 'Assets secured with bank-grade encryption',
  },
  {
    icon: Users,
    title: '2M+ Users',
    description: 'Trusted by investors worldwide',
  },
  {
    icon: Award,
    title: 'Top Rated',
    description: '4.9/5 average user rating',
  },
  {
    icon: Building2,
    title: 'Regulated',
    description: 'Licensed in multiple jurisdictions',
  },
];

export const Trust = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map((item) => (
            <div key={item.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 mb-4">
                <item.icon className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};