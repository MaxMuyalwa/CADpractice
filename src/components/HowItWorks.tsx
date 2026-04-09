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
    image: '/images/step-1.png' 
  },
  { 
    step: '02', 
    title: 'Model', 
    description: 'Design in your favorite CAD.',
    image: '/images/step-2.png' 
  },
  { 
    step: '03', 
    title: 'Verify', 
    description: 'Get instant mass-property feedback.',
    image: '/images/step-3.png' 
  },
  { 
    step: '04', 
    title: 'Level Up', 
    description: 'Earn Points and climb the Leader Board.',
    image: '/images/step-4.png' 
  }
];

export const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".how-it-works-stack .card");
    const cardInners = gsap.utils.toArray(".how-it-works-stack .card-inner");
    if (!cards.length || !sectionRef.current) return;

    // The Spread & Flip Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80px", // Pin below the navbar so the text is always fully visible
        end: "+=1000", // Further reduced scroll distance for a very snappy, intuitive animation
        scrub: 1,
        pin: true,
      }
    });

    // 1. Spread the cards
    tl.to(cards, {
      // Rotate each card differently
      rotation: (i: number) => (i - (cards.length - 1) / 2) * 10,
      // Spread them out horizontally (adjusted for slightly larger cards)
      x: (i: number) => (i - (cards.length - 1) / 2) * 220,
      // Slight vertical "arc" effect
      y: (i: number) => Math.abs(i - (cards.length - 1) / 2) * 20,
      scale: 1.05,
      stagger: 0.05, // Faster spread stagger
      ease: "power2.out"
    });

    // 2. Flip the cards one by one
    tl.to(cardInners, {
      rotateY: 180,
      stagger: 0.08, // Very fast stagger between flips
      ease: "power2.inOut"
    }, "+=0.05"); // Starts almost immediately after spreading

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="how-it-works-stack relative h-screen w-full overflow-hidden flex flex-col pt-8 md:pt-12 mb-[15vh]">
      {/* Section Header - Moved up by reducing section pt, but kept visible by pinning at top 80px */}
      <div className="w-full text-center shrink-0 z-50 mb-4 md:mb-8">
        <h2 className="text-[#08CB00] text-6xl md:text-8xl font-black uppercase tracking-tighter">
          How It Works
        </h2>
      </div>

      {/* Cards Container - Added pt-[10vh] to keep cards lower while text moves up */}
      <div className="stack-container relative flex-grow flex justify-center items-center w-full pb-12 pt-[10vh]">
        {steps.map((step, i) => (
          <div 
            key={i} 
            className={`card card-${i + 1} absolute w-[240px] h-[340px] perspective-[1000px]`}
            style={{ 
              zIndex: steps.length - i,
              transformOrigin: 'center bottom'
            }}
          >
            <div className="card-inner relative w-full h-full [transform-style:preserve-3d]">
              
              {/* FRONT OF CARD (Playing Card Back Placeholder) */}
              <div className="absolute inset-0 w-full h-full rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden bg-gray-800 dark:bg-gray-900 [backface-visibility:hidden]">
                {/* 
                  PLACEHOLDER IMAGE: 
                  Drop your image into the public/images folder and name it "card-back-placeholder.png" 
                */}
                <img 
                  src="/images/card-back-placeholder.png" 
                  alt="Card Back Placeholder" 
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback if the image doesn't exist yet
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                {/* Decorative border to make it look more like a playing card */}
                <div className="absolute inset-0 border-[6px] border-white/10 rounded-[20px] m-3 pointer-events-none" />
                <div className="absolute inset-0 bg-[#08CB00]/20 mix-blend-overlay pointer-events-none" />
              </div>

              {/* BACK OF CARD (Actual Step Content) */}
              <div className="absolute inset-0 w-full h-full rounded-[20px] p-6 text-white flex flex-col justify-end shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden bg-[#E5E5E5] dark:bg-gray-900 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 pointer-events-none" />

                <span className="step-num absolute top-4 right-4 text-[3rem] font-black text-white/40 leading-none pointer-events-none z-10">
                  {step.step}
                </span>

                <div className="relative z-10 mt-auto">
                  <h3 className="text-[1.5rem] font-extrabold uppercase m-0 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-base font-semibold mt-2 leading-snug">
                    {step.description}
                  </p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
