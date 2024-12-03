import React from 'react';
import { Hero } from '../components/Hero';
import { LiveStats } from '../components/LiveStats';
import { Trust } from '../components/Trust';
import { InvestmentPlans } from '../components/InvestmentPlans';
import { Features } from '../components/Features';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';

export const HomePage = () => {
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
};