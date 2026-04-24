import React from 'react';
import { motion } from 'motion/react';
import { DensityCards } from '../components/materials/DensityCards';
import { DensityTable } from '../components/materials/DensityTable';
import { CADTutorials } from '../components/materials/CADTutorials';
import { EvolvingFAQ } from '../components/materials/EvolvingFAQ';

export const MaterialsFAQ = () => {
  return (
    <main className="pt-10 md:pt-12 lg:pt-16 pb-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-4"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 uppercase text-gray-900 dark:text-white sm:whitespace-nowrap">
            <span className="text-primary">CUSTOM</span> Materials Libraries
          </h1>
          <p className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            - How to and FAQ -
          </p>
          <p className="text-lg md:text-xl font-medium text-gray-500 dark:text-gray-400">
            For various 3D CAD systems
          </p>
          <div className="h-1 w-24 bg-[#08CB00] mx-auto rounded-full mt-8" />
          <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-400">
            By Toby on April 15, 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-12"
        >
          {/* Section 1: Names and Densities */}
          <div className="space-y-6">
            <DensityCards />
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                The 4 materials used at <a href="https://cadpractice.com" className="text-[#08CB00] border-b border-[#08CB00]/30 hover:border-[#08CB00] transition-colors pb-0.5">CADpractice.com</a>
              </p>
            </div>
          </div>
          <DensityTable />

          {/* Section: Why Custom Materials? */}
          <section className="py-12 space-y-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white uppercase leading-tight">
                  Why do we use CUSTOM MATERIAL densities?
                </h2>
                <div className="w-16 h-1 bg-[#08CB00]" />
              </div>
              
              <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl">
                <p>
                  At <span className="text-gray-900 dark:text-white font-bold">CADpractice.com</span> we challenge the user to calculate the mass of a 3D model, and <span className="text-[#08CB00] font-bold">mass is calculated by multiplying volume x density.</span>
                </p>
                <p>
                  Therefore, if your material density does not match the material density on the 2D drawing title block, your answer will be <span className="text-red-500 font-bold uppercase">incorrect</span> (even if the model geometry is correct).
                </p>
                <p>
                  We’ve discovered that different 3D CAD packages ship with "Default Materials Libraries" which contain materials with the <span className="font-bold">SAME MATERIAL NAME</span>, but which have have a <span className="text-primary font-bold">DIFFERENT MATERIAL DENSITY.</span>
                </p>
              </div>
            </motion.div>

            {/* Added Table here via subcomponent update later */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white uppercase leading-tight">
                A valuable skill to learn!
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl">
                We also decided to add "custom materials" to our CADpractice.com challenges to help CAD designers learn a fundamental skill: <span className="text-gray-900 dark:text-white font-bold italic underline">Creating and managing a new custom materials library in your CAD system.</span>
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl pt-4">
                As a CAD designer (or engineer), you’ll regularly need to calculate the mass of your 3D models by <span className="font-bold italic text-primary">multiplying volume x density</span> – and the density is typically applied by assigning a "material" to your 3D model.
              </p>
              
              <div className="text-center p-8 rounded-2xl bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-6">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400">At some point you’ll be asked to:</p>
                <ul className="space-y-6">
                  <li className="flex gap-4 items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">Use a <span className="font-bold">custom density provided by the customer</span> (instead of the "out of the box material density")</p>
                  </li>
                  <li className="flex gap-4 items-center text-xs font-black text-primary uppercase tracking-[0.2em] py-2">
                    <div className="h-[1px] flex-1 bg-primary/20" />
                    <span>AND / OR</span>
                    <div className="h-[1px] flex-1 bg-primary/20" />
                  </li>
                  <li className="flex gap-4 items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">Work with <span className="font-bold">a material that does not exist</span> in the "out of the box" library of materials</p>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Matweb Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 dark:text-white uppercase">
                Matweb - an online library of materials
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl">
                Sometimes the customer will provide these material specifications, and sometimes you’ll be tasked to find the material properties, at which point you can rely on resources like{' '}
                <a href="https://www.matweb.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-black hover:underline">
                  https://www.matweb.com/
                </a>{' '}
                to examine the properties of a wide variety of materials.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white uppercase leading-tight">
                How to create custom materials in for CADpractice.com
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl italic font-medium">
                <p>
                  As of April 2026, the CADpractice team is in the process of creating content for all 3D CAD systems, explaining this process.
                </p>
                <p>
                  CADpractice.com was created by TooTallToby, and his website (TooTallToby.com) uses the same materials.
                </p>
                <p>
                   Some of these HOW TO guides will reference the TooTallToby materials, until the migration process is complete.
                </p>
              </div>
            </motion.div>

            <CADTutorials />
          </section>

          <EvolvingFAQ />
        </motion.div>
      </div>
    </main>
  );
};
