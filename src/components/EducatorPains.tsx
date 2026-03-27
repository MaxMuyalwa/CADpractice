import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const EducatorPains = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = ["#pain-1", "#pain-2", "#pain-3", "#pain-4"];

    sections.forEach((id) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: id,
          scrub: 1,
          pin: true,
          start: "top top",
          end: "+=100%"
        }
      });

      // 1. Fill the Matrix Green Line
      tl.from(`${id} .line`, {
        scaleX: 0,
        transformOrigin: "left center",
        ease: "none"
      });

      // 2. Animate the Pain Header
      tl.from(`${id} h2`, {
        filter: "blur(10px)",
        opacity: 0,
        y: 20
      }, 0.1);

      // 3. Reveal the Solve Box with a "Glow" entrance
      tl.from(`${id} .solve-box`, {
        backgroundColor: "rgba(8, 203, 0, 0)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, 0.3);
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="educator-pains-container relative">
      <div id="intro" className="min-h-screen w-full flex flex-col justify-center relative overflow-hidden text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[800px] mx-auto text-center px-5">
          <h1 className="text-[#08CB00] text-6xl font-black uppercase italic leading-none mb-8">The CAD Educator's Struggle</h1>
          <p className="text-gray-600 dark:text-gray-400 text-xl">From grading nightmares to certification gaps—teaching 3D modeling is harder than it should be. See how CADpractice changes the game.</p>
          <div className="mt-12 flex justify-center"><div className="w-5 h-5 border-r-[3px] border-b-[3px] border-gray-900 dark:border-white rotate-45 animate-bounce"></div></div>
        </div>
      </div>

      <section id="pain-1" className="min-h-screen w-full flex flex-col justify-center relative overflow-hidden text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[800px] mx-auto p-12 text-left bg-white/70 dark:bg-black/30 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl">
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 mb-5 rounded-full overflow-hidden"><span className="line block h-full bg-[#08CB00] shadow-[0_0_10px_#08CB00] w-full"></span></div>
          <div className="text-[#08CB00] font-mono tracking-widest uppercase font-bold mt-5">LEVEL 01: THE CERTIFICATION GAP</div>
          <h2 className="text-5xl font-extrabold my-4 leading-tight">"They pass the tutorial, but fail the state exam."</h2>
          <p className="italic text-xl bg-gray-100 dark:bg-gray-900 p-4 border-l-4 border-[#08CB00] my-5">"Can we build an exact replica to the state tests coming up?"</p>
          <div className="solve-box bg-[#08CB00]/5 border border-[#08CB00] shadow-[0_0_15px_rgba(8,203,0,0.3)] p-6 rounded-xl mt-8 text-lg">
            <strong>THE FIX:</strong> Mock Exam Engine. Realistic, timed simulations that mirror CSWA/Onshape environments to kill test-day anxiety.
          </div>
        </div>
      </section>

      <section id="pain-2" className="min-h-screen w-full flex flex-col justify-center relative overflow-hidden text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[800px] mx-auto p-12 text-left bg-white/70 dark:bg-black/30 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl">
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 mb-5 rounded-full overflow-hidden"><span className="line block h-full bg-[#08CB00] shadow-[0_0_10px_#08CB00] w-full"></span></div>
          <div className="text-[#08CB00] font-mono tracking-widest uppercase font-bold mt-5">LEVEL 02: TUTORIAL HELL</div>
          <h2 className="text-5xl font-extrabold my-4 leading-tight">Passive Watching ≠ Active Learning</h2>
          <p className="italic text-xl bg-gray-100 dark:bg-gray-900 p-4 border-l-4 border-[#08CB00] my-5">"My students are bored... they just watch videos without actually 'doing' the CAD."</p>
          <div className="solve-box bg-[#08CB00]/5 border border-[#08CB00] shadow-[0_0_15px_rgba(8,203,0,0.3)] p-6 rounded-xl mt-8 text-lg">
            <strong>THE FIX:</strong> Deliberate Practice. Interactive tasks require 100% geometric accuracy before moving forward. No more "zombie scrolling."
          </div>
        </div>
      </section>

      <section id="pain-3" className="min-h-screen w-full flex flex-col justify-center relative overflow-hidden text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[800px] mx-auto p-12 text-left bg-white/70 dark:bg-black/30 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl">
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 mb-5 rounded-full overflow-hidden"><span className="line block h-full bg-[#08CB00] shadow-[0_0_10px_#08CB00] w-full"></span></div>
          <div className="text-[#08CB00] font-mono tracking-widest uppercase font-bold mt-5">LEVEL 03: THE GRADING TRAP</div>
          <h2 className="text-5xl font-extrabold my-4 leading-tight">"I spend hours checking one dimension."</h2>
          <p className="italic text-xl bg-gray-100 dark:bg-gray-900 p-4 border-l-4 border-[#08CB00] my-5">"Opening 30 individual CAD files to check a hole diameter is killing my prep time."</p>
          <div className="solve-box bg-[#08CB00]/5 border border-[#08CB00] shadow-[0_0_15px_rgba(8,203,0,0.3)] p-6 rounded-xl mt-8 text-lg">
            <strong>THE FIX:</strong> Auto-Grading & Instant Feedback. The system checks work in real-time, giving students a "win" and you a zero-effort gradebook.
          </div>
        </div>
      </section>

      <section id="pain-4" className="min-h-screen w-full flex flex-col justify-center relative overflow-hidden text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[800px] mx-auto p-12 text-left bg-white/70 dark:bg-black/30 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl">
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 mb-5 rounded-full overflow-hidden"><span className="line block h-full bg-[#08CB00] shadow-[0_0_10px_#08CB00] w-full"></span></div>
          <div className="text-[#08CB00] font-mono tracking-widest uppercase font-bold mt-5">Expertise Gap</div>
          <h2 className="text-5xl font-extrabold my-4 leading-tight">"I'm not always available to help every student troubleshoot."</h2>
          
          <div className="solve-box bg-[#08CB00]/5 border border-[#08CB00] shadow-[0_0_15px_rgba(8,203,0,0.3)] p-6 rounded-xl mt-8 text-lg">
            <strong>CADpractice SOLVE:</strong> 
            Our library includes tutorials by CAD Expert <strong>TooTallToby</strong>. 
            Everything is ready on day one, starting from the absolute beginner level (Origin & Modeling basics).
            <div className="cad-badge-metal mt-2.5 p-1.5 text-sm text-center">
              EXPERT AUTHORED
            </div>
          </div>
        </div>
      </section>

      <section id="victory" className="min-h-screen w-full flex flex-col justify-center relative overflow-hidden text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-gray-100 to-white dark:from-gray-900 dark:to-black text-center">
        <div>
          <div className="bg-[#08CB00] text-black px-5 py-2.5 font-black inline-block mb-5 [clip-path:polygon(10%_0%,90%_0%,100%_50%,90%_100%,10%_100%,0%_50%)]">MISSION ACCOMPLISHED</div>
          <h1 className="text-gray-900 dark:text-white text-5xl font-black italic uppercase">Ready to create your classroom?</h1>
          <p className="text-gray-600 dark:text-gray-400 text-xl mt-4">Join the CADpractice Alpha. Transform manual grading into growth.</p>
          <a href="#" className="inline-block mt-8 px-10 py-5 bg-[#08CB00] text-black no-underline font-black rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(8,203,0,0.3)] hover:bg-[#0aed00] hover:scale-105 hover:shadow-[0_0_30px_rgba(8,203,0,0.6)]">GET EARLY ACCESS</a>
        </div>
      </section>
    </div>
  );
};
