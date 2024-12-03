import React from 'react';
import { Hero } from './components/Hero';
import { InvestmentPlans } from './components/InvestmentPlans';
import { LiveStats } from './components/LiveStats';
import { Features } from './components/Features';
import { Trust } from './components/Trust';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <LiveStats />
      <Trust />
      <InvestmentPlans />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;