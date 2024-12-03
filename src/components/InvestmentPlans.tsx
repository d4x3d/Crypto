import React from 'react';
import { Shield, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    icon: Shield,
    price: '$100',
    returns: '8-12%',
    risk: 'Low',
    features: ['Basic market analysis', 'Weekly reports', '24/7 Support'],
  },
  {
    name: 'Premium',
    icon: Zap,
    price: '$500',
    returns: '15-20%',
    risk: 'Medium',
    features: ['Advanced analytics', 'Daily reports', 'Priority support', 'Portfolio diversification'],
  },
  {
    name: 'Pro',
    icon: Crown,
    price: '$1000',
    returns: '25-30%',
    risk: 'High',
    features: ['AI-powered insights', 'Real-time alerts', 'Dedicated manager', 'Custom strategies'],
  },
];

export const InvestmentPlans = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Investment Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 transition-transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
              <plan.icon className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
              <div className="text-gray-400 mb-6">Starting investment</div>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-300">
                  <span>Expected Returns:</span>
                  <span className="text-purple-400">{plan.returns}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Risk Level:</span>
                  <span className="text-purple-400">{plan.risk}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-gray-400 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};