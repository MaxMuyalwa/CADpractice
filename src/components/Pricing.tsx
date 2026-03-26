import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

export const Pricing = () => {
  return (
    <section className="relative z-10 py-24 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 text-neu-text-primary">Straightforward <span className="text-matrix-green">Pricing</span></h2>
          <p className="text-neu-text-secondary">Choose the plan that fits your classroom or district needs.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Educator Free */}
          <div className="bg-background border border-neu-shadow-dark/10 rounded-3xl p-8 shadow-[8px_8px_16px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)] transition-all hover:-translate-y-1">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2 text-neu-text-primary">Educator Free</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-matrix-green">$0</span>
                <span className="text-neu-text-secondary text-sm">/ forever</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {['Unlimited Students', 'Full Curriculum Access', 'Basic Progress Tracking', 'Community Support'].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-neu-text-secondary">
                  <CheckCircle2 className="w-5 h-5 text-matrix-green" /> {feature}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full py-6">Create Free Account</Button>
          </div>

          {/* School / District */}
          <div className="bg-background border-2 border-matrix-green rounded-3xl p-8 shadow-[12px_12px_24px_var(--shadow-dark-intense),-6px_-6px_12px_var(--shadow-light)] relative transition-all hover:-translate-y-1">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-matrix-green text-black text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-full shadow-lg">
              Most Popular
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2 text-neu-text-primary">School / District</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-matrix-green">Custom</span>
                <span className="text-neu-text-secondary text-sm">/ annual</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {['LMS Integration (Canvas/Schoology)', 'Advanced District Analytics', 'SSO & Rostering (Clever/ClassLink)', 'Dedicated Success Manager', 'Custom Curriculum Mapping'].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-neu-text-secondary">
                  <CheckCircle2 className="w-5 h-5 text-matrix-green" /> {feature}
                </li>
              ))}
            </ul>
            <Button variant="default" className="w-full py-6">Contact Sales</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
