import React from 'react';
import { Button } from './ui/Button';

export const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden transition-colors duration-300">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-matrix-green/5 blur-3xl rounded-full scale-150 opacity-30" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl lg:text-6xl font-black text-neu-text-primary mb-8 leading-tight">
          Ready to Level Up Your <span className="text-matrix-green">CAD Skills?</span>
        </h2>
        
        <p className="text-xl text-neu-text-secondary mb-12 max-w-2xl mx-auto">
          Join thousands of students mastering CAD fundamentals with our hands-on practice platform.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <Button size="lg" className="px-12 py-8 text-xl">
            Get Started Free
          </Button>
          
          <Button variant="outline" size="lg" className="px-12 py-8 text-xl">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};
