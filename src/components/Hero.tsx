import React, { useEffect, useRef } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[85vh] flex items-center pt-20 pb-16 transition-colors duration-300 overflow-hidden hero-section">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] 
        bg-[#08CB00]/5 dark:bg-[#08CB00]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] 
        bg-gray-200/50 dark:bg-gray-800/50 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col items-start text-left w-full">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-tight
              animate-fade-in-up delay-100 w-full">
              <span className="block">The "Smarter CAD Workbook"</span>
              <span className="block mt-2 bg-gradient-to-r from-[#08CB00] to-[#34d058] 
                bg-clip-text text-transparent">
                for STEM Educators
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-2xl
              animate-fade-in-up delay-200">
              Empower the next generation of engineers with game-based challenges that reward practice and precision.
              Track student progress in real-time from your educator's dashboard.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-300 justify-start">
              <Button size="lg" className="flex items-center justify-center gap-3">
                Try Free Challenge
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="secondary" size="lg" className="flex items-center justify-center gap-3">
                <PlayCircle className="w-6 h-6" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative hidden lg:block animate-fade-in-up delay-400 perspective-1000">
            <div className="relative w-full aspect-[4/3] transform rotate-y-[-15deg] rotate-x-[5deg] rotate-z-[2deg] hover:rotate-y-0 hover:rotate-x-0 hover:rotate-z-0 transition-transform duration-700 ease-out shadow-2xl rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
              {/* Replace the src below with your uploaded CAD Challenges image path, e.g., '/cad-challenges.png' */}
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop" 
                alt="CAD Challenges Interface" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#08CB00]/20 to-transparent mix-blend-overlay pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
