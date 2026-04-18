import React from 'react';
import { motion } from 'motion/react';

export const DensityCards = () => {
  const materials = [
    { 
      name: "PLAIN CARBON STEEL", 
      value: "7800", 
      unit: "kg/m³",
      style: "bg-gradient-to-br from-gray-400 via-gray-200 to-gray-500 shadow-inner border border-white/20"
    },
    { 
      name: "6061 ALUMINUM", 
      value: "2700", 
      unit: "kg/m³",
      style: "bg-gradient-to-br from-gray-200 via-white to-gray-300 shadow-inner border border-white/40"
    },
    { 
      name: "ABS (PLASTIC)", 
      value: "1020", 
      unit: "kg/m³",
      style: "bg-yellow-400 shadow-[inset_0_2px_10px_rgba(255,255,255,0.5)] border border-yellow-500/50"
    },
    { 
      name: "AMERICAN CHERRY", 
      value: "570", 
      unit: "kg/m³",
      style: "bg-gradient-to-br from-orange-800 via-orange-600 to-orange-900 shadow-inner border border-orange-400/20"
    }
  ];

  return (
    <section className="bg-white/50 dark:bg-black/40 backdrop-blur-xl border border-gray-200 dark:border-[#08CB00]/20 rounded-3xl p-8 md:p-12 shadow-2xl">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-2 h-8 bg-[#08CB00] rounded-full" />
        <h2 className="text-3xl font-black tracking-tight uppercase">Material Density Values</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {materials.map((material, idx) => (
          <motion.div
            key={material.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + (idx * 0.1) }}
            className="group flex items-center gap-6 p-6 rounded-2xl bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-[#08CB00]/50 transition-all duration-300"
          >
            <div className={`w-20 h-20 rounded-xl shrink-0 ${material.style} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">
                {material.name}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black tracking-tighter text-gray-900 dark:text-white group-hover:text-[#08CB00] transition-colors">
                  {material.value}
                </span>
                <span className="text-sm font-bold text-gray-400 dark:text-gray-500">
                  {material.unit}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
