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
        <h3 className="text-2xl font-black mb-3 tracking-tight text-gray-900 dark:text-white">
          AN EVOLVING FAQ
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
          This guide is updated regularly with new CAD tutorials, community scripts, and material data. Check back often for the latest TooTallToby custom material resources!
        </p>
        
        <div className="mt-8 flex justify-center gap-4">
          <div className="h-px w-12 bg-gray-200 dark:bg-white/10 self-center" />
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">More content in progress</span>
          <div className="h-px w-12 bg-gray-200 dark:bg-white/10 self-center" />
        </div>
      </div>
    </motion.div>
  );
};
