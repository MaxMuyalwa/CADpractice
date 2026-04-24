import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from './ui/Button';

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://assets.codepen.io/16327/portrait-number-01.png",
  "https://assets.codepen.io/16327/portrait-number-02.png",
  "https://assets.codepen.io/16327/portrait-number-03.png",
  "https://assets.codepen.io/16327/portrait-number-04.png",
  "https://assets.codepen.io/16327/portrait-number-05.png",
  "https://assets.codepen.io/16327/portrait-number-06.png",
  "https://assets.codepen.io/16327/portrait-number-07.png",
  "https://assets.codepen.io/16327/portrait-number-01.png",
  "https://assets.codepen.io/16327/portrait-number-02.png",
  "https://assets.codepen.io/16327/portrait-number-03.png",
  "https://assets.codepen.io/16327/portrait-number-04.png",
  "https://assets.codepen.io/16327/portrait-number-05.png",
  "https://assets.codepen.io/16327/portrait-number-06.png",
  "https://assets.codepen.io/16327/portrait-number-07.png",
];

export const SocialProofGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let iteration = 0;
      const spacing = 0.1;
      const snapTime = gsap.utils.snap(spacing);
      const cards = gsap.utils.toArray('.cards li');

      gsap.set(cards, { xPercent: 400, opacity: 0, scale: 0 });

      const animateFunc = (element: any) => {
        const tl = gsap.timeline();
        tl.fromTo(element, 
          { scale: 0, opacity: 0 }, 
          { scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false }
        )
        .fromTo(element, 
          { xPercent: 400 }, 
          { xPercent: -400, duration: 1, ease: "none", immediateRender: false }, 
          0
        );
        return tl;
      };

      const buildSeamlessLoop = (items: any[], spacing: number, animateFunc: (el: any) => gsap.core.Timeline) => {
        let rawSequence = gsap.timeline({ paused: true });
        let seamlessLoop = gsap.timeline({
          paused: true,
          repeat: -1,
          onRepeat() {
            // @ts-ignore
            this._time === this._dur && (this._tTime += this._dur - 0.01);
          },
          onReverseComplete() {
            this.totalTime(this.rawTime() + this.duration() * 100);
          }
        });
        let cycleDuration = spacing * items.length;
        let dur: number;

        items.concat(items).concat(items).forEach((item, i) => {
          let anim = animateFunc(items[i % items.length]);
          rawSequence.add(anim, i * spacing);
          // @ts-ignore
          if (!dur) dur = anim.duration();
        });

        seamlessLoop.fromTo(rawSequence, {
          time: cycleDuration + dur! / 2
        }, {
          time: "+=" + cycleDuration,
          duration: cycleDuration,
          ease: "none"
        });
        return seamlessLoop;
      };

      const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);
      const playhead = { offset: 0 };
      const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());

      const scrub = gsap.to(playhead, {
        offset: 0,
        onUpdate() {
          seamlessLoop.time(wrapTime(playhead.offset));
        },
        duration: 0.5,
        ease: "power3",
        paused: true
      });

      const trigger = ScrollTrigger.create({
        start: "top top",
        trigger: sectionRef.current,
        onUpdate(self) {
          // Drive the offset based on progress. 
          const loops = window.innerWidth < 1024 ? 1.5 : 3;
          // @ts-ignore
          scrub.vars.offset = self.progress * seamlessLoop.duration() * loops;
          scrub.invalidate().restart();
        },
        end: window.innerWidth < 1024 ? "+=1500" : "+=3000",
        pin: true,
      });

      const scrollToOffset = (offset: number) => {
        // Instead of jumping the window scroll, we animate the playhead offset directly
        // This keeps the user in place but moves the cards
        gsap.to(playhead, {
          offset: offset,
          onUpdate() {
            seamlessLoop.time(wrapTime(playhead.offset));
          },
          duration: 0.5,
          ease: "power3"
        });
      };

      const nextBtn = sectionRef.current?.querySelector(".next");
      const prevBtn = sectionRef.current?.querySelector(".prev");

      if (nextBtn) nextBtn.addEventListener("click", () => {
        // @ts-ignore
        scrollToOffset(playhead.offset + spacing);
      });
      if (prevBtn) prevBtn.addEventListener("click", () => {
        // @ts-ignore
        scrollToOffset(playhead.offset - spacing);
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="social-proof-gallery relative w-full h-screen overflow-hidden bg-[#E5E5E5] dark:bg-[#000805] transition-colors duration-300">
      <div className="gallery absolute w-full h-full overflow-hidden">
        <div className="absolute top-8 md:top-12 left-0 w-full text-center z-20">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black italic tracking-tighter uppercase text-primary mb-2">
            Expert Authority
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-bold uppercase tracking-widest text-xs opacity-60">
            Join the ranks of elite CAD designers
          </p>
        </div>

        <ul className="cards absolute w-[12rem] md:w-[14rem] h-[16rem] md:h-[18rem] top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 list-none p-0 m-0">
          {images.map((src, i) => (
            <li 
              key={i} 
              className="absolute top-0 left-0 w-[12rem] md:w-[14rem] aspect-[9/16] bg-contain bg-no-repeat rounded-[0.8rem] shadow-[0_0_30px_rgba(8,203,0,0.2)]"
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </ul>

        <div className="actions absolute bottom-[40px] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-6 z-20">
          <div className="flex items-center justify-center gap-4">
            <button className="prev px-6 py-2 border border-primary/30 text-primary/70 font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all rounded-full text-[10px]">
              Prev
            </button>
            <button className="next px-6 py-2 border border-primary/30 text-primary/70 font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all rounded-full text-[10px]">
              Next
            </button>
          </div>
          
          <Button className="font-bold px-8 py-6 rounded-xl text-lg backdrop-blur-sm">
            Join 500+ Educators
          </Button>
        </div>
      </div>
    </section>
  );
};
