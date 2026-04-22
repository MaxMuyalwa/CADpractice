import React from 'react';
import { motion } from 'motion/react';
import { PlayCircle, Play } from 'lucide-react';
import { Button } from './ui/Button';

export const BookDemoCTA = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 relative z-10 bg-transparent overflow-hidden">
      {/* Subtle green glow behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#08CB00]/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 md:mb-12 tracking-tight leading-tight"
        >
          Ready to see how CADpractice fits into your specific curriculum?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <Button 
            asChild
            size="lg" 
            className="group relative flex items-center justify-center gap-3 bg-[#08CB00] hover:bg-[#07b500] text-white dark:text-black border-none px-8 py-6 lg:px-12 lg:py-8 text-lg lg:text-xl font-black rounded-2xl shadow-[0_0_40px_rgba(8,203,0,0.3)] hover:shadow-[0_0_60px_rgba(8,203,0,0.5)] transition-all duration-300 transform hover:-translate-y-1"
          >
            <a 
              href="https://www.youtube.com/watch?v=nIbKGe5stow&list=PLDGrwExMGkBrDZ2biad6LK5aE6-Zw_oh5&index=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <PlayCircle className="w-5 h-5 lg:w-6 lg:h-6" />
              How it Works
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
