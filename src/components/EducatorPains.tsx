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
      <style>{`
        .educator-pains-container .panel {
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
          color: var(--foreground);
          border-bottom: 1px solid var(--matrix-border);
        }

        .educator-pains-container .intro-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          padding: 0 20px;
        }

        .educator-pains-container .intro-content h1 {
          font-size: 4rem;
          font-weight: 900;
          text-transform: uppercase;
          font-style: italic;
          line-height: 0.9;
          margin-bottom: 2rem;
        }

        .educator-pains-container .content-card {
          max-width: 800px;
          margin: auto;
          padding: 3rem;
          text-align: left;
          background: var(--matrix-card-bg);
          backdrop-filter: blur(10px);
          border: 1px solid var(--matrix-border);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }

        .educator-pains-container .line-cont {
          width: 100%;
          height: 8px;
          background-color: var(--muted);
          margin-bottom: 20px;
          border-radius: 10px;
          overflow: hidden;
        }

        .educator-pains-container .line {
          display: block;
          height: 100%;
          background-color: var(--matrix-green);
          box-shadow: 0 0 10px var(--matrix-green);
          width: 100%;
        }

        .educator-pains-container .label {
          color: var(--matrix-green);
          font-family: 'Courier New', monospace;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: bold;
          margin-top: 20px;
        }

        .educator-pains-container h2 {
          font-size: 3rem;
          font-weight: 800;
          margin: 1rem 0;
          line-height: 1.1;
        }

        .educator-pains-container .pain-quote {
          font-style: italic;
          font-size: 1.2rem;
          background: var(--muted);
          padding: 15px;
          border-left: 4px solid var(--matrix-green);
          margin: 20px 0;
        }

        .educator-pains-container .solve-box {
          background: rgba(8, 203, 0, 0.05);
          border: 1px solid var(--matrix-green);
          box-shadow: 0 0 15px var(--matrix-glow);
          padding: 25px;
          border-radius: var(--radius-md);
          margin-top: 2rem;
          font-size: 1.1rem;
        }

        .educator-pains-container .victory-screen {
          background: var(--victory-bg);
          color: var(--victory-text);
          text-align: center;
        }

        .educator-pains-container .badge {
          background: var(--matrix-green);
          color: #000;
          padding: 10px 20px;
          font-weight: 900;
          display: inline-block;
          margin-bottom: 20px;
          clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
        }

        .educator-pains-container .cta-button {
          display: inline-block;
          margin-top: 30px;
          padding: 20px 40px;
          background-color: var(--matrix-green);
          color: #000;
          text-decoration: none;
          font-weight: 900;
          border-radius: 50px;
          transition: all 0.3s ease;
          box-shadow: 0 0 20px var(--matrix-glow);
        }

        .educator-pains-container .cta-button:hover {
          background-color: #0aed00;
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(8, 203, 0, 0.6);
        }

        .educator-pains-container .scroll-down {
          margin-top: 3rem;
          display: flex;
          justify-content: center;
        }

        .educator-pains-container .arrow {
          width: 20px;
          height: 20px;
          border-right: 3px solid var(--foreground);
          border-bottom: 3px solid var(--foreground);
          transform: rotate(45deg);
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0) rotate(45deg);}
          40% {transform: translateY(-10px) rotate(45deg);}
          60% {transform: translateY(-5px) rotate(45deg);}
        }
      `}</style>

      <div id="intro" className="panel">
        <div className="intro-content">
          <h1 className="text-neu-green">The CAD Educator's Struggle</h1>
          <p className="text-neu-text-secondary text-xl">From grading nightmares to certification gaps—teaching 3D modeling is harder than it should be. See how CADpractice changes the game.</p>
          <div className="scroll-down"><div className="arrow"></div></div>
        </div>
      </div>

      <section id="pain-1" className="panel">
        <div className="content-card">
          <div className="line-cont"><span className="line"></span></div>
          <div className="label">LEVEL 01: THE CERTIFICATION GAP</div>
          <h2>"They pass the tutorial, but fail the state exam."</h2>
          <p className="pain-quote">"Can we build an exact replica to the state tests coming up?"</p>
          <div className="solve-box">
            <strong>THE FIX:</strong> Mock Exam Engine. Realistic, timed simulations that mirror CSWA/Onshape environments to kill test-day anxiety.
          </div>
        </div>
      </section>

      <section id="pain-2" className="panel">
        <div className="content-card">
          <div className="line-cont"><span className="line"></span></div>
          <div className="label">LEVEL 02: TUTORIAL HELL</div>
          <h2>Passive Watching ≠ Active Learning</h2>
          <p className="pain-quote">"My students are bored... they just watch videos without actually 'doing' the CAD."</p>
          <div className="solve-box">
            <strong>THE FIX:</strong> Deliberate Practice. Interactive tasks require 100% geometric accuracy before moving forward. No more "zombie scrolling."
          </div>
        </div>
      </section>

      <section id="pain-3" className="panel">
        <div className="content-card">
          <div className="line-cont"><span className="line"></span></div>
          <div className="label">LEVEL 03: THE GRADING TRAP</div>
          <h2>"I spend hours checking one dimension."</h2>
          <p className="pain-quote">"Opening 30 individual CAD files to check a hole diameter is killing my prep time."</p>
          <div className="solve-box">
            <strong>THE FIX:</strong> Auto-Grading & Instant Feedback. The system checks work in real-time, giving students a "win" and you a zero-effort gradebook.
          </div>
        </div>
      </section>

      <section id="pain-4" className="panel">
        <div className="content-card">
          <div className="line-cont"><span className="line"></span></div>
          <div className="label">Expertise Gap</div>
          <h2>"I'm not always available to help every student troubleshoot."</h2>
          
          <div className="solve-box">
            <strong>CADpractice SOLVE:</strong> 
            Our library includes tutorials by CAD Expert <strong>TooTallToby</strong>. 
            Everything is ready on day one, starting from the absolute beginner level (Origin & Modeling basics).
            <div className="cad-badge-metal" style={{ marginTop: '10px', padding: '5px', fontSize: '0.8rem', textAlign: 'center' }}>
              EXPERT AUTHORED
            </div>
          </div>
        </div>
      </section>

      <section id="victory" className="panel victory-screen">
        <div className="victory-content">
          <div className="badge">MISSION ACCOMPLISHED</div>
          <h1 className="text-victory-text text-5xl font-black italic uppercase">Ready to create your classroom?</h1>
          <p className="text-victory-subtext text-xl">Join the CADpractice Alpha. Transform manual grading into growth.</p>
          <a href="#" className="cta-button">GET EARLY ACCESS</a>
        </div>
      </section>
    </div>
  );
};
