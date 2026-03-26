import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Award } from 'lucide-react';
import { Button } from './ui/Button';

const pressTestimonials = [
  {
    quote: "The fastest 3D CAD modelers in the world.",
    source: "Engineering.com",
    date: "October 2024"
  },
  {
    quote: "TooTallToby and The Gamification of 3D CAD",
    source: "The Engineering Entrepreneur Podcast",
    date: "July 2025"
  },
  {
    quote: "CAD Best Practices, Speed Modeling, & Gamification",
    source: "Pipeline Design & Engineering",
    date: "April 2025"
  },
  {
    quote: "Mastering 3D CAD and Building a Thriving Learning Community",
    source: "The Infill Podcast",
    date: "February 2025"
  },
  {
    quote: "Treating Product Design Like a Sport",
    source: "Masters of Engineering",
    date: "April 2023"
  },
  {
    quote: "Why Speed Modelling makes you a better Designer",
    source: "Fully Defined",
    date: "January 2025"
  }
];

export const Footer = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % pressTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative z-10 bg-background text-neu-text-primary pt-20 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Testimonial Slideshow */}
        <div className="mb-16 max-w-5xl mx-auto min-h-[240px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <blockquote className="text-3xl md:text-5xl font-medium italic mb-8 leading-tight tracking-tight">
                "{pressTestimonials[currentTestimonial].quote}"
              </blockquote>
              <cite className="text-neu-text-secondary not-italic font-bold uppercase tracking-[0.2em] text-base">
                — {pressTestimonials[currentTestimonial].source}, {pressTestimonials[currentTestimonial].date}
              </cite>
            </motion.div>
          </AnimatePresence>
          
        </div>

        {/* CTA Area */}
        <div className="mb-16 flex flex-col items-center">
          <Button size="lg" className="px-12 py-8 text-xl">
            Create Your EDUCATOR Account
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
