import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';

export const Guarantee = () => {
  return (
    <section className="relative z-10 py-24 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-8">
        <div className="border border-neu-shadow-dark/10 rounded-[40px] p-12 shadow-[16px_16px_32px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)] flex flex-col md:flex-row items-center gap-12 transition-all">
          <div className="shrink-0 relative">
            <div className="w-32 h-32 bg-matrix-green rounded-full flex items-center justify-center shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.2)]">
              <ShieldCheck className="w-16 h-16 text-black" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black mb-4 text-neu-text-primary">100% Exam Pass <span className="text-matrix-green">Guarantee</span></h2>
            <p className="text-neu-text-secondary text-lg leading-relaxed mb-6">
              We stand by our curriculum. If your students complete the required CAD PRACTICE modules and do not pass their official certification, we will refund your licensing costs. No questions asked.
            </p>
            <Button variant="link" className="text-neu-text-primary font-bold hover:text-matrix-green transition-colors">
              Read the full policy terms
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
