import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

export const IndividualAccess = () => {
  const points = [
    {
      title: "Pro Challenges",
      description: "A growing library of professional CAD models designed to keep you engaged."
    },
    {
      title: "Instant Feedback",
      description: "Validation on every model to ensure your work meets industry standards."
    },
    {
      title: "Timed Benchmarking",
      description: "See how your speed compares to the global community on our live leaderboards."
    },
    {
      title: "Skill Badges",
      description: "Earn digital badges as you master new levels and complete side challenges."
    }
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 sm:px-8 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6 lg:space-y-8"
          >
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-tight tracking-tight">
                Individual Access - $50/Year
              </h2>
              <h3 className="text-xl md:text-3xl font-bold text-[#08CB00]">
                Not in a Classroom? <br />
                Practice on Your Own.
              </h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl">
              Master the same challenges used in top engineering classrooms. 
              Whether you’re prepping for certification or competing for the top of the leaderboard, 
              CADpractice gives you the tools to succeed.
            </p>

            <Button 
              size="lg" 
              className="bg-[#08CB00] hover:bg-[#07b500] text-white dark:text-black font-black px-6 py-4 lg:px-10 lg:py-8 text-base md:text-lg rounded-2xl shadow-[0_0_30px_rgba(8,203,0,0.2)]"
            >
              Create your STUDENT ACCOUNT
            </Button>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 pt-4 lg:pt-12"
          >
            {points.map((point, i) => (
              <div key={i} className="flex gap-4 items-start group">
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-[#08CB00] fill-[#08CB00]/10" />
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    {point.title}: <span className="font-medium text-gray-600 dark:text-gray-400">{point.description}</span>
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
