import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../contexts/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { 
    step: 'MISSION START', 
    title: 'Stop Watching. Start Modeling.', 
    description: 'Trade passive tutorials for active 3D challenges. Level up your skills by building real-world models.',
    color: '#ff4d4d' 
  },
  { 
    step: 'THE TOOLKIT', 
    title: 'Your Tools. Our Challenges.', 
    description: 'Whether you’re on Onshape, SolidWorks, or Fusion360—CADpractice is software-agnostic. Pick your "weapon" and start the clock.',
    color: '#ffb31a' 
  },
  { 
    step: 'THE ENGINE', 
    title: 'Instant "Win" Validation.', 
    description: 'No more waiting for feedback. Submit your mass, and our engine checks your accuracy instantly. If it\'s wrong, troubleshoot and fix it—be your own first line of defense.',
    color: '#22c55e' 
  },
  { 
    step: 'THE REWARD', 
    title: 'Earn PTS. Rule the Board.', 
    description: 'Rack up points for every successful model. Beat the average time to climb the Live Leaderboard and unlock exclusive achievements.',
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
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="how-it-works-stack relative h-[200vh] overflow-hidden">
      <div className="stack-container sticky top-0 h-screen flex justify-center items-center pt-[40vh]">
        {steps.map((step, i) => (
          <div 
            key={i} 
            className={`card card-${i + 1} absolute w-[280px] h-[380px] rounded-[20px] p-8 ${theme === 'dark' ? 'text-black' : 'text-white'} flex flex-col justify-end shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-md`}
            style={{ 
              backgroundColor: `${step.color}dd`, 
              zIndex: steps.length - i,
              transformOrigin: 'center bottom'
            }}
          >
            <span className="step-num absolute top-4 left-4 right-4 text-xl font-black opacity-40 leading-none pointer-events-none text-right">
              {step.step}
            </span>
            <h3 className="text-2xl font-extrabold uppercase m-0 leading-tight">
              {step.title}
            </h3>
            <p className="text-sm font-semibold mt-2 leading-snug opacity-90">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Section Header Overlay */}
      <div className="absolute top-12 left-0 w-full text-center pointer-events-none z-50">
        <h2 className="text-neu-green text-6xl md:text-8xl font-black uppercase tracking-tighter">
          How It Works
        </h2>
      </div>
    </section>
  );
};
