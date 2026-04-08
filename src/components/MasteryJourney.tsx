import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  'Extrude',
  'Revolve',
  '3D Printable Models',
  'Hole Tool',
  'Slot Tool',
  'Rib Tool',
  'Thin Walls/Shell',
  'Multi-Body',
  'Sheet Metal',
  'Patterns',
  'Sweep/Loft',
  'Symmetry',
];

export const MasteryJourney = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    const leftCol = leftColRef.current;
    const items = listRef.current?.querySelectorAll('li');
    
    if (!content || !leftCol || !items) return;

    // 1. THE BULLETPROOF PIN
    // This locks the left column in place while the right column keeps scrolling
    ScrollTrigger.create({
      trigger: content,
      start: "top top",      // Pin when the top of the section hits the top of the screen
      end: "bottom bottom",  // Unpin when the bottom of the section hits the bottom of the screen
      pin: leftCol,          // The element we are locking in place
      pinSpacing: false,     // Prevent extra space since we're in a flex container
    });

    // 2. THE WORD HIGHLIGHT
    items.forEach((item) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 55%", // When the top of the word hits 55% of the screen
          end: "bottom 45%", // When the bottom of the word passes 45%
          scrub: true,
        },
        color: "#08CB00", // Matrix Green
        opacity: 1,
        textShadow: "0px 0px 20px rgba(8, 203, 0, 0.6)", // The neon glow
        duration: 0.1
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="px-8 sm:px-20 relative overflow-visible cad-scroll-wrapper"
    >
      <div 
        ref={contentRef}
        className="flex flex-col md:flex-row items-start max-w-[1200px] mx-auto relative cad-scroll-content"
      >
        
        {/* Left Side: Pinned Column */}
        <div 
          ref={leftColRef}
          className="w-full md:w-1/2 h-screen flex items-center left-col"
        >
          <h2 className="text-gray-900 dark:text-white font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-tight m-0 sticky-text">
            <span aria-hidden="true">The 12 CAD<br/><span className="text-[#08CB00]">Competencies</span></span>
            <span className="sr-only">The 12 CAD Competencies</span>
          </h2>
        </div>

        {/* Right Side: Scrolling List */}
        <ul 
          ref={listRef} 
          className="w-full md:w-1/2 list-none m-0 pt-[50vh] pb-[calc(50vh-1.2em)] text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.2] scrolling-list" 
          aria-hidden="true"
        >
          {skills.map((skill, index) => (
            <li 
              key={index} 
              className="text-gray-600/20 dark:text-gray-400/20 mb-6 last:mb-0 transition-[text-shadow] duration-300"
            >
              {skill}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};
