import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';

export const Guarantee = () => {
  return (
    <section className="relative z-10 py-24 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-8">
        <div className="border border-gray-200 dark:border-gray-800 rounded-[40px] p-12 shadow-2xl bg-[#E5E5E5] dark:bg-[#000805] flex flex-col md:flex-row items-center gap-12 transition-all">
          <div className="shrink-0 relative">
            <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.2)]">
              <ShieldCheck className="w-16 h-16 text-black" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">100% Educator Satisfaction <span className="text-primary">Guarantee</span></h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
              Our mission is to help you build a smarter CAD lab. If CADpractice isn't the right fit for your classroom within the first 60 days, we will refund 100% of your purchase including your initial startup pack and any additional seats. No hurdles, no hassles. We’re only successful if your students are succeeding.
            </p>
            <Button variant="link" className="text-gray-900 dark:text-white font-bold hover:text-primary transition-colors">
              Read the full policy terms
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
