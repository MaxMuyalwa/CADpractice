import React from 'react';
import { motion } from 'motion/react';
import { DensityCards } from '../components/materials/DensityCards';
import { MaterialsList } from '../components/materials/MaterialsList';
import { DensityTable } from '../components/materials/DensityTable';
import { CADTutorials } from '../components/materials/CADTutorials';
import { EvolvingFAQ } from '../components/materials/EvolvingFAQ';

export const MaterialsFAQ = () => {
  return (
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-12"
        >
          <DensityCards />
          <MaterialsList />
          <DensityTable />

          {/* Detailed FAQ Sections - Not in boxes */}
          <section className="py-12 px-4 md:px-8 space-y-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-gray-900 dark:text-white uppercase">
                Why do we use custom material densities?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Most CAD software has built-in materials, but their densities can vary slightly between programs (e.g., one might use 7850 kg/m³ for steel while another uses 7800 kg/m³). To ensure everyone gets the <span className="font-bold text-[#08CB00]">EXACT SAME MASS</span> regardless of their software, TooTallToby uses standardized custom densities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-gray-900 dark:text-white uppercase">
                Why did 2 of the TooTallToby materials change?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                In 2026, the material names were updated to be more descriptive and professional. <span className="italic">1060 Aluminum</span> became <span className="font-bold text-gray-900 dark:text-white">6061 ALUMINUM</span> and <span className="italic">Red Oak</span> became <span className="font-bold text-gray-900 dark:text-white">AMERICAN CHERRY</span>. The densities remained exactly the same to maintain compatibility with older challenges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-gray-900 dark:text-white uppercase">
                How do I create a new custom material?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-8">
                The process varies by software, but the goal is always the same: create a new material entry and manually set the <span className="font-bold text-[#08CB00]">DENSITY</span> value to match the TooTallToby standards.
              </p>
            </motion.div>

            <CADTutorials />
          </section>

          <EvolvingFAQ />
        </motion.div>
      </div>
    </main>
  );
};
