import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const cryptoData = [
  { name: 'Bitcoin', price: '45,234.67', change: '+2.4%', trending: true },
  { name: 'Ethereum', price: '3,114.89', change: '-1.2%', trending: false },
  { name: 'Solana', price: '112.45', change: '+5.7%', trending: true },
  { name: 'Cardano', price: '1.24', change: '+0.8%', trending: true },
];

export const LiveStats = () => {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-white">Market Overview</h2>
          <div className="text-sm text-gray-400">Live updates every 30 seconds</div>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {cryptoData.map((crypto) => (
            <div key={crypto.name} className="bg-gray-900 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{crypto.name}</h3>
                {crypto.trending ? (
                  <TrendingUp className="w-5 h-5 text-green-400" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-red-400" />
                )}
              </div>
              <div className="text-2xl font-bold text-white mb-2">
                ${crypto.price}
              </div>
              <div className={`text-sm ${
                crypto.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
              }`}>
                {crypto.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};