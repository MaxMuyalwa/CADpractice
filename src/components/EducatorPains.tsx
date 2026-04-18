import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, CheckCircle, BarChart3, Lightbulb, Database, LayoutDashboard } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const pains = [
  {
    icon: FileText,
    challenge: "Educators spend time finding (or creating) 2D Drawings",
    solutionTitle: "A library of Certified Blueprints",
    solutionDesc: "Our library contains professionally vetted engineering blueprints ready for immediate deployment to your students.",
    footer: "NO MORE MISSING DIMENSIONS!"
  },
  {
    icon: CheckCircle,
    challenge: "Grading CAD can be tedious and time consuming",
    solutionTitle: "Instant Feedback for students",
    solutionDesc: "Upon submission, students instantly know if they've succeeded. If incorrect, they get to keep trying.",
    footer: "Educators spend less time correcting minor mistakes and more time answering in-depth modeling questions."
  },
  {
    icon: BarChart3,
    challenge: "CAD Students are at different skill levels",
    solutionTitle: "Tiered CAD Challenges",
    solutionDesc: "Students who are brand new to 3D CAD can start on Level 1 and work their way up. Students who have more CAD experience can jump to level 4 or 5 (or higher) for more complicated CAD challenges."
  },
  {
    icon: Lightbulb,
    challenge: "Educators spend too much time answering \"repeat\" questions",
    solutionTitle: "Built-in Tutorials (from CAD EXPERT TooTallToby)",
    solutionDesc: "Every student can access \"on demand\", 1-on-1 support. Our built-in tutorials provide step-by-step guides on how to complete the current CAD challenges, acting as a \"digital teaching assistant\" to help students the moment they get stuck.",
    footer: "Educators spend less time answering repeat questions, and more time diving into deep and interesting conversations related to engineering and fabrication."
  },
  {
    icon: Database,
    challenge: "Not all CAD plug-ins work with our CAD system",
    solutionTitle: "CAD Agnostic",
    solutionDesc: "CADpractice.com works with any 3D CAD System - Onshape, Fusion, SOLIDWORKS, FreeCAD, Tinkercad, Inventor, Creo, and more."
  },
  {
    icon: LayoutDashboard,
    challenge: "It's hard to tell which students are struggling",
    solutionTitle: "Educators Live Dashboard",
    solutionDesc: "Total visibility from your desk. Create assignments and monitor results. See which students are stuck, which students are ahead, and which CAD competency skills they have mastered."
  }
];

export const EducatorPains = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const content = contentRef.current;
      const leftCol = leftColRef.current;

      if (content && leftCol) {
        // The "MasteryJourney" style pin
        ScrollTrigger.create({
          trigger: content,
          start: "top top",
          end: "bottom bottom",
          pin: leftCol,
          pinSpacing: false,
        });
      }

      // Animate the Cards
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="px-4 sm:px-8 relative bg-transparent overflow-visible">
      <div ref={contentRef} className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start relative">
        
        {/* Left Column - Pinned by GSAP */}
        <div ref={leftColRef} className="w-full lg:w-5/12 h-screen flex items-center pr-0 lg:pr-16 z-10 mb-12 lg:mb-0">
          <div className="flex flex-col">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
              The <span className="text-[#08CB00]">CAD Educator's</span> Struggle
            </h2>
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Teaching CAD and 3D modeling is harder than it should be.
              </p>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                See how CADpractice changes the game.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Scrolling Cards */}
        <div className="w-full lg:w-7/12 flex flex-col gap-8 pt-[20vh] pb-[20vh]">
          {pains.map((pain, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="p-8 sm:p-10 bg-transparent border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl backdrop-blur-[2px]"
            >
              <div className="space-y-6">
                <div>
                  <div className="text-[#08CB00] font-bold mb-1">Challenge:</div>
                  <div className="text-[#08CB00] text-xl sm:text-2xl font-bold leading-tight">
                    {pain.challenge}
                  </div>
                </div>

                <div className="w-16 h-16 bg-gray-100 dark:bg-white/5 rounded-xl flex items-center justify-center border border-gray-200 dark:border-white/10">
                  <pain.icon className="w-8 h-8 text-[#08CB00]" />
                </div>

                <div>
                  <div className="text-gray-900 dark:text-white font-bold mb-2">
                    SOLUTION: <span className="font-extrabold">{pain.solutionTitle}</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                    {pain.solutionDesc}
                  </p>
                </div>

                {pain.footer && (
                  <div className="pt-4 border-t border-gray-100 dark:border-white/5">
                    <p className="text-gray-900 dark:text-white font-black uppercase tracking-wide text-sm sm:text-base">
                      {pain.footer}
                    </p>
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
