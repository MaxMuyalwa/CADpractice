import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slideImages = [
    "/images/cad-challenges.png",
    "/images/cad-challenges-2.png",
    "/images/cad-challenges-3.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideImages.length);
    }, 4000); // Auto-scroll every 4 seconds
    return () => clearInterval(timer);
  }, [slideImages.length]);

  useEffect(() => {
    if (!sectionRef.current) return;

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[85vh] flex flex-col justify-start pt-16 lg:pt-20 pb-16 transition-colors duration-300 overflow-hidden hero-section">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] 
        bg-[#08CB00]/5 dark:bg-[#08CB00]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] 
        bg-gray-200/50 dark:bg-gray-800/50 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-center text-center w-full mx-auto mb-12">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-black text-gray-900 dark:text-white mb-6 leading-tight
            animate-fade-in-up delay-100 w-full tracking-tight">
            <span className="block whitespace-nowrap">The "Smarter CAD Workbook"</span>
            <span className="block mt-2 text-[#08CB00]">
              for STEM Educators
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto
            animate-fade-in-up delay-200">
            Empower the next generation of engineers with game-based challenges<br className="hidden md:block" />
            that reward practice and precision. Track student progress in real-time from<br className="hidden md:block" />
            your educator's dashboard.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-300 justify-center">
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

        {/* Bottom Image Stack */}
        <div className="relative w-full max-w-5xl mx-auto animate-fade-in-up delay-400 mt-32 md:mt-40 mb-24" style={{ perspective: '1200px' }}>
          <div 
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] transition-transform duration-700 ease-out group"
            style={{ transform: 'rotateX(12deg) rotateY(-6deg) rotateZ(2deg)' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'rotateX(12deg) rotateY(-6deg) rotateZ(2deg)'}
          >
            {slideImages.map((src, index) => {
              // Calculate offset relative to current index (0 is front, 1 is middle, 2 is back)
              const offset = (index - currentImageIndex + slideImages.length) % slideImages.length;
              
              return (
                <div 
                  key={index}
                  className="absolute inset-0 shadow-2xl rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-700 ease-in-out"
                  style={{
                    zIndex: 30 - offset * 10,
                    opacity: 1 - offset * 0.2,
                    transform: `translateY(${offset * 24}px) scale(${1 - offset * 0.04})`,
                  }}
                >
                  <img 
                    src={src} 
                    alt={`CAD Challenges Interface ${index + 1}`} 
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#08CB00]/10 to-transparent mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity duration-700"></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
