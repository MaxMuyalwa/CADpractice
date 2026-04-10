import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, PlayCircle, Star } from 'lucide-react';
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
    <section ref={sectionRef} className="relative h-[120dvh] min-h-[850px] flex flex-col justify-start pt-24 lg:pt-28 pb-0 transition-colors duration-300 overflow-hidden hero-section">
      {/* Background Glows */}
      <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[1000px] h-[500px] 
        bg-[#08CB00]/15 dark:bg-[#08CB00]/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center flex-grow h-full">
        
        {/* Text Content */}
        <div className="flex flex-col items-center text-center w-full max-w-2xl mx-auto mb-6 shrink-0">
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-2 leading-tight
            animate-fade-in-up delay-100 w-full tracking-tight">
            <span className="block italic">The "Smarter CAD Workbook"</span>
            <span className="block text-[#08CB00]">
              for STEM Educators
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xs sm:text-sm text-gray-600 dark:text-[#ebeef3] mb-4 leading-relaxed max-w-xl mx-auto
            animate-fade-in-up delay-200">
            Empower the next generation of engineers with game-based challenges
            that reward practice and precision. Track student progress in real-time from
            your educator's dashboard.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up delay-300 justify-center">
            <Button size="sm" className="flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(8,203,0,0.3)] hover:shadow-[0_0_30px_rgba(8,203,0,0.5)] transition-shadow">
              Try Free Challenge
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="secondary" size="sm" className="flex items-center justify-center gap-2">
              <PlayCircle className="w-3 h-3" />
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-6 flex flex-col items-center justify-center gap-1.5 animate-fade-in-up delay-400">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#08CB00] text-[#08CB00]" />
              ))}
            </div>
          </div>
        </div>

        {/* Dashboard Image / Carousel (Flat, glowing top border) */}
        <div className="relative w-full max-w-5xl mx-auto animate-fade-in-up delay-400 flex-grow">
          <div 
            className="absolute inset-x-0 top-0 bottom-0 rounded-t-2xl sm:rounded-t-3xl border-t border-l border-r border-gray-200/50 dark:border-gray-700/50 bg-gray-100 dark:bg-[#0a0a0a] overflow-hidden shadow-[0_-20px_60px_rgba(8,203,0,0.15)]"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)'
            }}
          >
            {/* Inner top glow line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#08CB00] to-transparent opacity-80 z-20" />
            
            {slideImages.map((src, index) => (
              <img 
                key={index}
                src={src} 
                alt={`CAD Challenges Interface ${index + 1}`} 
                className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out z-10 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
