import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  {
    paragraphs: [
      "Using CADpractice.com was such a great way to build student’s skills in 3D CAD. As a STEM teacher, I’m always looking for content and curriculum that is not only informative, but easy to use as a teacher and student. CADpractice does exactly that with a side of gamification!",
      "CADpractice has great pacing levels and guides of various commands and skills of CAD and helps student prepare for various CAD certifications by checking their work using volume and mass. As a school using Onshape already, having the tutorials were also a huge help for students!",
      "Overall, thanks to CADpractice, students not only grew in their CAD skills, but also became efficient and confident in their skills!"
    ],
    source: "Steve S.",
    date: "Instructor | Engineering, Robotics, & Mechatronics"
  },
  {
    paragraphs: [
      "I started off by giving students 2D drawings of my own creation. It took a ton of effort, and students were not fully engaged. Now we're using CADpractice and we are firing on all cylinders!",
      "From a teacher's perspective, being able to assign models quickly and see student progress on one screen is a huge improvement. From a student's perspective, they absolutely love it! Some love the impromptu speed-modeling competitions, while others are driven by the Global Leaderboard.",
      "The best thing about CADpractice is having the support of a wonderfully skilled team like Toby and Vicki. I'm a former rocket scientist and atmospheric physicist, and I have never seen a more helpful or engaging platform."
    ],
    source: "Chris Odom",
    date: "STEM Educator & Former Rocket Scientist (30+ Years Experience)"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      className="py-12 md:py-20 lg:py-24 px-4 bg-transparent relative z-10 transition-colors duration-300"
      style={{ 
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Testimonials Title */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
            What <span className="text-[#08CB00]">Educators</span> are Saying
          </h3>
        </div>

        {/* Testimonial Slideshow */}
        <div className="mb-8 md:mb-16 max-w-5xl mx-auto min-h-[300px] md:min-h-[350px] flex flex-col justify-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <blockquote className="space-y-6 mb-8 max-w-4xl mx-auto">
                {testimonials[currentIndex].paragraphs.map((para, i) => (
                  <p key={i} className="text-lg md:text-xl font-medium italic leading-relaxed tracking-tight text-gray-700 dark:text-gray-300">
                    "{para}"
                  </p>
                ))}
              </blockquote>
              <cite className="text-gray-600 dark:text-gray-400 not-italic font-bold uppercase tracking-[0.2em] text-sm md:text-base">
                — {testimonials[currentIndex].source}, {testimonials[currentIndex].date}
              </cite>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
