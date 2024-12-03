import React from 'react';
import { Hero } from './components/Hero';
import { InvestmentPlans } from './components/InvestmentPlans';
import { LiveStats } from './components/LiveStats';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <LiveStats />
      <InvestmentPlans />
      <Features />
      <Footer />
    </div>
  );
}

export default App;