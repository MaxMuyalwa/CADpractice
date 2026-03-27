import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../contexts/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { 
    step: '01', 
    title: 'Choose', 
    description: 'Pick a certified challenge.',
    color: '#ff4d4d' 
  },
  { 
    step: '02', 
    title: 'Model', 
    description: 'Design in your favorite CAD.',
    color: '#ffb31a' 
  },
  { 
    step: '03', 
    title: 'Verify', 
    description: 'Get instant mass-property feedback.',
    color: '#22c55e' 
  },
  { 
    step: '04', 
    title: 'Level Up', 
    description: 'Earn Points and climb the Leader Board.',
    color: '#3399ff' 
  }
];

export const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const cards = gsap.utils.toArray(".how-it-works-stack .card");
    if (!cards.length || !sectionRef.current) return;

    // The "Spread" Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
      }
    });

    tl.to(cards, {
      // Rotate each card differently: -15deg, -5deg, 5deg, 15deg
      rotation: (i: number) => (i - (cards.length - 1) / 2) * 15,
      // Spread them out horizontally
      x: (i: number) => (i - (cards.length - 1) / 2) * 300,
      // Slight vertical "arc" effect
      y: (i: number) => Math.abs(i - (cards.length - 1) / 2) * 40,
      scale: 1.1,
      stagger: 0.1,
      ease: "power2.out"
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="how-it-works-stack relative h-[200vh] overflow-hidden">
      <div className="stack-container sticky top-0 h-screen flex justify-center items-center pt-[40vh]">
        {steps.map((step, i) => (
          <div 
            key={i} 
            className={`card card-${i + 1} absolute w-[280px] h-[380px] rounded-[20px] p-8 ${theme === 'dark' ? 'text-black' : 'text-white'} flex flex-col justify-end shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10`}
            style={{ 
              backgroundColor: step.color, 
              zIndex: steps.length - i,
              transformOrigin: 'center bottom'
            }}
          >
            <span className="step-num absolute top-4 right-4 text-[4rem] font-black opacity-30 leading-none pointer-events-none">
              {step.step}
            </span>
            <h3 className="text-[2rem] font-extrabold uppercase m-0 leading-tight">
              {step.title}
            </h3>
            <p className="text-lg font-semibold mt-2 leading-snug">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Section Header Overlay */}
      <div className="absolute top-12 left-0 w-full text-center pointer-events-none z-50">
        <h2 className="text-[#08CB00] text-6xl md:text-8xl font-black uppercase tracking-tighter">
          How It Works
        </h2>
      </div>
    </section>
  );
};
