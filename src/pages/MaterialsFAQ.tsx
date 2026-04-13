import React from 'react';
import { motion } from 'motion/react';
import { InteractiveGrid } from '../components/InteractiveGrid';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const MaterialsFAQ = () => {
  return (
    <div className="min-h-screen text-gray-900 dark:text-white font-sans relative overflow-x-hidden text-sm transition-colors duration-300">
      <InteractiveGrid />
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              TooTallToby's <span className="text-[#08CB00]">CUSTOM MATERIALS</span>
              <br />
              <span className="text-2xl md:text-4xl opacity-80">- How to and FAQ -</span>
            </h1>
            <div className="h-1 w-24 bg-[#08CB00] mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/50 dark:bg-black/40 backdrop-blur-xl border border-gray-200 dark:border-[#08CB00]/20 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 border-4 border-[#08CB00]/20 border-t-[#08CB00] rounded-full animate-spin mb-6" />
              <h2 className="text-2xl font-bold mb-2">Content Coming Soon</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-md">
                We are currently preparing the comprehensive guide and FAQ for TooTallToby's custom materials. Stay tuned!
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
