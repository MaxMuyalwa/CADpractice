import React from 'react';
import { motion } from 'motion/react';

export const MaterialsList = () => {
  const materials = [
    "PLAIN CARBON STEEL",
    "6061 ALUMINUM",
    "ABS",
    "AMERICAN CHERRY",
    "1060 ALUMINUM",
    "RED OAK"
  ];

  return (
    <section className="py-8 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <p className="text-lg md:text-xl font-bold text-[#08CB00] mb-8 leading-relaxed">
          <span className="text-2xl font-black block md:inline">Most users will have 6 materials</span> in their TTT Materials Library
          <span className="text-sm font-medium opacity-70 block mt-1 md:mt-0 md:inline md:ml-2 text-gray-500 dark:text-gray-400">
            (so they can do new CAD CHALLENGES and older CAD CHALLENGES)
          </span>
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
          {materials.map((material, idx) => (
            <motion.div 
              key={material}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 group"
            >
              <div className="w-2 h-2 rounded-full bg-[#08CB00] group-hover:scale-150 transition-transform" />
              <span className="text-sm font-black tracking-widest text-gray-700 dark:text-gray-300 uppercase group-hover:text-[#08CB00] transition-colors">
                {material}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
