import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';

const cadPlatforms = [
  'SOLIDWORKS',
  'Fusion 360',
  'Onshape',
  'Inventor',
  'Solid Edge',
  'AutoCAD',
  'Revit',
  'Rhino',
];

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-background text-neu-text-primary pt-20 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* CAD Platforms Banner */}
        <div className="mb-12">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-neu-text-secondary mb-8">
            Compatible with all leading CAD platforms
          </h3>
          
          <div className="relative overflow-hidden py-4">
            <motion.div 
              className="flex whitespace-nowrap gap-16 items-center w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[...cadPlatforms, ...cadPlatforms].map((platform, i) => (
                <div key={i} className="opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default">
                  <span className="text-2xl font-black italic tracking-tighter uppercase">{platform}</span>
                </div>
              ))}
            </motion.div>
            
            {/* Gradient Overlays for smooth fade */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
          </div>
        </div>

        <hr className="border-neu-shadow-dark/10 mb-16" />

        {/* Testimonial */}
        <div className="mb-16 max-w-3xl mx-auto">
          <blockquote className="text-2xl md:text-3xl font-medium italic mb-4 leading-tight">
            "CADpractice turned my students from passive users to critical thinkers."
          </blockquote>
          <cite className="text-neu-text-secondary not-italic font-bold uppercase tracking-widest text-sm">
            — [TEACHER NAME], STEM Coordinator
          </cite>
        </div>

        {/* CTA Area */}
        <div className="mb-16">
          <Button size="lg" className="px-12 py-8 text-xl">
            Create Your Free Teacher Account
          </Button>
        </div>

        {/* Bottom Links */}
        <div className="pt-12 border-t border-neu-shadow-dark/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neu-text-secondary font-bold uppercase tracking-widest">
          <p>© 2026 CADpractice LLC. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-neu-text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neu-text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neu-text-primary transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
