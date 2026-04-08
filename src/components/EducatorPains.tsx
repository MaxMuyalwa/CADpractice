import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const pains = [
  {
    level: "LEVEL 01: THE CERTIFICATION GAP",
    quote: "\"They pass the tutorial, but fail the state exam.\"",
    subquote: "\"Can we build an exact replica to the state tests coming up?\"",
    fix: "Mock Exam Engine. Realistic, timed simulations that mirror CSWA/Onshape environments to kill test-day anxiety."
  },
  {
    level: "LEVEL 02: TUTORIAL HELL",
    quote: "Passive Watching ≠ Active Learning",
    subquote: "\"My students are bored... they just watch videos without actually 'doing' the CAD.\"",
    fix: "Deliberate Practice. Interactive tasks require 100% geometric accuracy before moving forward. No more \"zombie scrolling.\""
  },
  {
    level: "LEVEL 03: THE GRADING TRAP",
    quote: "\"I spend hours checking one dimension.\"",
    subquote: "\"Opening 30 individual CAD files to check a hole diameter is killing my prep time.\"",
    fix: "Auto-Grading & Instant Feedback. The system checks work in real-time, giving students a \"win\" and you a zero-effort gradebook."
  },
  {
    level: "Expertise Gap",
    quote: "\"I'm not always available to help every student troubleshoot.\"",
    subquote: "",
    fix: "Our library includes tutorials by CAD Expert TooTallToby. Everything is ready on day one, starting from the absolute beginner level (Origin & Modeling basics).",
    badge: "EXPERT AUTHORED"
  }
];

export const EducatorPains = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const content = contentRef.current;
    const leftCol = leftColRef.current;

    // 1. Pin the Left Column using GSAP
    if (content && leftCol) {
      ScrollTrigger.create({
        trigger: content,
        start: "top 20%",      // Pin when the top of the section hits 20% down the screen
        end: "bottom bottom",  // Unpin when the bottom of the section hits the bottom of the screen
        pin: leftCol,          // The element we are locking in place
        pinSpacing: false,     // Prevent extra space since we're in a flex container
      });
    }

    // 2. Animate the Cards
    cardsRef.current.forEach((card) => {
      if (!card) return;
      
      gsap.fromTo(card, 
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="pt-8 pb-8 px-4 sm:px-8 relative overflow-visible">
      {/* 2-Column Layout */}
      <div ref={contentRef} className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start relative">
        
        {/* Left Column - Pinned by GSAP */}
        <div ref={leftColRef} className="w-full lg:w-5/12 flex flex-col justify-center pr-0 lg:pr-16 z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
            The CAD Educator's Struggle
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            From grading nightmares to certification gaps—teaching 3D modeling is harder than it should be. See how CADpractice changes the game.
          </p>
          <button className="flex items-center gap-3 px-8 py-4 bg-[#08CB00] text-black font-bold rounded-full hover:bg-[#0aed00] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(8,203,0,0.3)] self-start">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right Column - Scrolling Cards */}
        <div className="w-full lg:w-7/12 flex flex-col gap-[15vh] pt-[10vh] pb-[5vh]">
          {pains.map((pain, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="p-8 sm:p-10 bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 rounded-3xl shadow-2xl"
            >
              <div className="text-[#08CB00] font-mono tracking-widest uppercase font-bold mb-4 text-sm">
                {pain.level}
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                {pain.quote}
              </h3>
              
              {pain.subquote && (
                <p className="italic text-lg text-gray-600 dark:text-gray-400 bg-gray-100/50 dark:bg-gray-900/50 p-5 border-l-4 border-[#08CB00] mb-8 rounded-r-lg">
                  {pain.subquote}
                </p>
              )}
              
              <div className="bg-[#08CB00]/5 border border-[#08CB00]/30 p-6 rounded-2xl">
                <strong className="text-[#08CB00] block mb-2">THE FIX:</strong>
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-lg">
                  {pain.fix}
                </p>
                {pain.badge && (
                  <div className="inline-block mt-4 px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-black text-xs font-bold rounded">
                    {pain.badge}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
