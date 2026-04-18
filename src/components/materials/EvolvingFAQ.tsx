import React from 'react';
import { motion } from 'motion/react';

export const EvolvingFAQ = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-[#08CB00]/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-white/30 dark:bg-black/20 backdrop-blur-md border border-dashed border-gray-300 dark:border-white/10 rounded-3xl p-12 text-center overflow-hidden">
        <h3 className="text-2xl font-black mb-4 tracking-tight text-gray-900 dark:text-white uppercase">
          AN EVOLVING FAQ
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-base max-w-xl mx-auto leading-relaxed mb-8">
          This guide is updated regularly to feature additional CAD systems, tips, and tricks.
          If you’d like to contribute to this <span className="text-[#08CB00] font-bold">MATERIALS FAQ</span> with your setup, please contact us at:
        </p>
        
        <a 
          href="mailto:Info@CADpractice.com"
          className="inline-block text-xl md:text-2xl font-black text-[#08CB00] hover:scale-110 transition-transform duration-300 underline underline-offset-8 decoration-2"
        >
          Info@CADpractice.com
        </a>

        <div className="mt-12 flex justify-center gap-4">
          <div className="h-px w-12 bg-gray-200 dark:bg-white/10 self-center" />
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Together we grow</span>
          <div className="h-px w-12 bg-gray-200 dark:bg-white/10 self-center" />
        </div>
      </div>
    </motion.div>
  );
};
