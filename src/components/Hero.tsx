import React, { useEffect, useRef } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { MorphingCadWireframe } from './MorphingCadWireframe';
import { Button } from './ui/Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const scannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !gridRef.current || !scannerRef.current) return;

    // Scan line animation
    gsap.to(scannerRef.current, {
      y: "600px",
      opacity: 0,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Grid parallax shift
    gsap.to(gridRef.current, {
      backgroundPosition: "0px 50px",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative pt-20 lg:pt-32 pb-16 lg:pb-24 transition-colors duration-300 overflow-hidden hero-section">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] 
        bg-matrix-green/5 dark:bg-matrix-green/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] 
        bg-neu-shadow-dark/5 dark:bg-neu-shadow-dark/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col items-start text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-6
              bg-background border border-neu-shadow-dark/10
              shadow-[4px_4px_8px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]
              animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-matrix-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-matrix-green" />
              </span>
              <span className="text-sm font-semibold text-matrix-green">
                NEW: Interactive Challenges
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neu-text-primary mb-8 leading-tight
              animate-fade-in-up delay-100">
              <span className="block">Gamified CAD Practice for&nbsp;the</span>
              <span className="block mt-2 bg-gradient-to-r from-matrix-green to-[#34d058] 
                bg-clip-text text-transparent">
                Next&nbsp;Generation of Engineers
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-neu-text-secondary mb-12 leading-relaxed max-w-xl
              animate-fade-in-up delay-200">
              Master CAD fundamentals through hands-on challenges and comprehensive quizzes. 
              Practice with Fusion, Onshape, SolidWorks, and more.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 animate-fade-in-up delay-300 justify-start">
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

          {/* Right Side: Morphing CAD Wireframe */}
          <div className="relative hidden lg:block animate-fade-in-up delay-400 lg:translate-y-12">
            <MorphingCadWireframe />
          </div>
        </div>
      </div>
    </section>
  );
};
