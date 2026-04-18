import React from 'react';
import { motion } from 'motion/react';

export const CADTutorials = () => {
  return (
    <section className="space-y-24">
      {/* Onshape */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-8 text-gray-900 dark:text-white uppercase">
          How to create a Custom Materials Library in Onshape:
        </h3>
        
        <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
          <div className="w-full md:w-32 aspect-square rounded-2xl bg-gray-100 dark:bg-white/5 border border-dashed border-gray-300 dark:border-white/20 flex items-center justify-center overflow-hidden shrink-0">
            <img 
              src="/images/onshape-logo.png" 
              alt="Onshape Logo" 
              className="w-full h-full object-contain p-4"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="text-center p-4"><span class="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">Onshape</span></div>';
              }}
            />
          </div>

          <div className="space-y-6 flex-1 pt-2">
            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">CADpractice Materials - Onshape STEP BY STEP GUIDE (Video):</p>
              <a 
                href="https://youtu.be/3UjhaU6VVm0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#08CB00] hover:underline font-black break-all block text-lg"
              >
                https://youtu.be/3UjhaU6VVm0
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Link to CADpractice Onshape Materials Library (you must be logged in):</p>
              <a 
                href="https://cad.onshape.com/documents/503b534221996ca9cc287c4c/w/8ea3e6ef26310ac9d6679ddf/e/c8f1da559d611e18b45b4c2a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#08CB00] hover:underline font-medium break-all block text-sm italic"
              >
                https://cad.onshape.com/documents/503b534221996ca9cc28...
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SOLIDWORKS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-8 text-gray-900 dark:text-white uppercase">
          How to create a Custom Materials Library in SOLIDWORKS:
        </h3>
        
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
          <div className="w-full md:w-32 aspect-square rounded-2xl bg-gray-100 dark:bg-white/5 border border-dashed border-gray-300 dark:border-white/20 flex items-center justify-center overflow-hidden shrink-0">
            <img 
              src="/images/solidworks-logo.png" 
              alt="SOLIDWORKS Logo" 
              className="w-full h-full object-contain p-4"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="text-center p-4"><span class="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">SOLIDWORKS</span></div>';
              }}
            />
          </div>

          <div className="space-y-6 flex-1 pt-2">
            <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20 mb-4">
              <p className="text-xs font-bold text-yellow-600 dark:text-yellow-500 italic">
                NOTE: As of April 2026 - This is TooTallToby Material - but it can be used to set up your CADpractice Library of Custom Materials.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Toby’s SolidWorks Video Tutorial:</p>
                <a 
                  href="https://www.youtube.com/watch?v=yf-OE5qAvdc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#08CB00] hover:underline font-black break-all block text-lg"
                >
                  https://www.youtube.com/watch?v=yf-OE5qAvdc
                </a>
              </div>

              <div className="space-y-1">
                <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Link to DOWNLOAD Toby’s Materials Library – 2026 version:</p>
                <a 
                  href="https://drive.google.com/drive/folders/11d9n7s03u5YhrrA2v1pwtNzd_Jacllyj?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#08CB00] hover:underline font-medium break-all block text-sm italic"
                >
                  https://drive.google.com/drive/folders/11d9n7s03u5YhrrA2v1pwtNzd_Jacllyj?usp=sharing
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Fusion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-8 text-gray-900 dark:text-white uppercase">
          How to create a Custom Materials Library in Fusion:
        </h3>
        
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
          <div className="w-full md:w-32 aspect-square rounded-2xl bg-gray-100 dark:bg-white/5 border border-dashed border-gray-300 dark:border-white/20 flex items-center justify-center overflow-hidden shrink-0">
            <img 
              src="/images/fusion-logo.png" 
              alt="Fusion Logo" 
              className="w-full h-full object-contain p-4"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="text-center p-4"><span class="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">Fusion</span></div>';
              }}
            />
          </div>

          <div className="space-y-6 flex-1 pt-2">
            <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20 mb-4">
              <p className="text-xs font-bold text-yellow-600 dark:text-yellow-500 italic">
                NOTE: As of April 2026 - This is TooTallToby Material - but it can be used to set up your CADpractice Library of Custom Materials.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Toby’s Fusion Video Tutorial:</p>
                <a 
                  href="https://www.youtube.com/watch?v=VTeFVz6D2ok" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#08CB00] hover:underline font-black break-all block text-lg"
                >
                  https://www.youtube.com/watch?v=VTeFVz6D2ok
                </a>
              </div>

              <div className="space-y-1">
                <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Link to DOWNLOAD Toby’s Fusion Materials Library (2026 version – 4 materials):</p>
                <a 
                  href="https://drive.google.com/drive/folders/1axoADyPv2MEd4nQ58TSmBjSsxCn0j1nh?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#08CB00] hover:underline font-medium break-all block text-sm italic"
                >
                  https://drive.google.com/drive/folders/1axoADyPv2MEd4nQ58TSmBjSsxCn0j1nh?usp=sharing
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* FreeCAD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-8 text-gray-900 dark:text-white uppercase">
          How to create a Custom Materials Library in FreeCAD:
        </h3>
        
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
          <div className="w-full md:w-32 aspect-square rounded-2xl bg-gray-100 dark:bg-white/5 border border-dashed border-gray-300 dark:border-white/20 flex items-center justify-center overflow-hidden shrink-0">
            <img 
              src="/images/freecad-logo.png" 
              alt="FreeCAD Logo" 
              className="w-full h-full object-contain p-4"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="text-center p-4"><span class="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">FreeCAD</span></div>';
              }}
            />
          </div>

          <div className="space-y-6 flex-1 pt-2">
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                In FreeCAD you can use the <span className="font-bold text-gray-900 dark:text-white">CENTER OF MASS</span> tool to assign a custom property for material density to a model and calculate mass.
              </p>
              <a 
                href="https://wiki.freecad.org/Macro_CenterOfMass" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#08CB00] hover:underline font-black break-all block"
              >
                https://wiki.freecad.org/Macro_CenterOfMass
              </a>

              <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                <p className="text-xs font-bold text-yellow-600 dark:text-yellow-500 italic">
                  NOTE: As of April 2026 - The following playlist is from the TooTallToby YouTube channel - but it can be used to set up your CADpractice Library of Custom Materials.
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">For more info on how to use this tool, take a look at this FreeCAD tutorial Playlist:</p>
                <a 
                  href="https://www.youtube.com/playlist?list=PLzMIhOgu1Y5fhIJJ3f6qfpUtpbJirCBxo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#08CB00] hover:underline font-medium break-all block text-sm italic"
                >
                  https://www.youtube.com/playlist?list=PLzMIhOgu1Y5fhIJJ3f6qfpUtpbJirCBxo
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Inventor */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-8 text-gray-900 dark:text-white uppercase">
          How to create a Custom Materials Library in Inventor:
        </h3>
        
        <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
          <div className="w-full md:w-32 aspect-square rounded-2xl bg-gray-100 dark:bg-white/5 border border-dashed border-gray-300 dark:border-white/20 flex items-center justify-center overflow-hidden shrink-0">
            <img 
              src="/images/inventor-logo.png" 
              alt="Inventor Logo" 
              className="w-full h-full object-contain p-4"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="text-center p-4"><span class="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">Inventor</span></div>';
              }}
            />
          </div>

          <div className="space-y-6 flex-1 pt-2">
            <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20 mb-4">
              <p className="text-xs font-bold text-yellow-600 dark:text-yellow-500 italic">
                NOTE: As of April 2026 - This is TooTallToby Materials - but it can be used to set up your CADpractice Library of Custom Materials.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Materials library for INVENTOR - Shared by a member of the TTT community - hosted on TooTallToby’s google drive:</p>
              <a 
                href="https://drive.google.com/drive/folders/1YtRXXg3MMBEtzvIV8g5voDfcIsBjQts3?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#08CB00] hover:underline font-black break-all block text-sm italic"
              >
                https://drive.google.com/drive/folders/1YtRXXg3MMBEtzvIV8g5voDfcIsBjQts3?usp=sharing
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CREO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-8 text-gray-900 dark:text-white uppercase">
          How to create a Custom Materials Library in CREO:
        </h3>
        
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
          <div className="w-full md:w-32 aspect-square rounded-2xl bg-gray-100 dark:bg-white/5 border border-dashed border-gray-300 dark:border-white/20 flex items-center justify-center overflow-hidden shrink-0">
            <img 
              src="/images/creo-logo.png" 
              alt="CREO Logo" 
              className="w-full h-full object-contain p-4"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="text-center p-4"><span class="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">Creo</span></div>';
              }}
            />
          </div>

          <div className="space-y-6 flex-1 pt-2">
            <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20 mb-4">
              <p className="text-xs font-bold text-yellow-600 dark:text-yellow-500 italic">
                NOTE: As of April 2026 - This is TooTallToby Materials - but it can be used to set up your CADpractice Library of Custom Materials.
              </p>
            </div>

            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed font-medium text-sm">
              <p className="font-bold text-gray-900 dark:text-white uppercase text-xs tracking-widest mb-2">Materials library for CREO - Shared by a member of the TTT community - hosted on TooTallToby’s google drive:</p>
              
              <div className="p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 italic">
                <p>
                  "Here are the inch and a mm templates for Creo. The material files should live in the same folder. The template has a flat to screen annotation that will display the calculated mass, based on the selected material."
                </p>
              </div>

              <a 
                href="https://drive.google.com/drive/folders/1fsGNoyTsuaTupMKfzYGdhJK4pZ7vLWqw?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#08CB00] hover:underline font-black break-all block text-sm"
              >
                https://drive.google.com/drive/folders/1fsGNoyTsuaTupMKfzYGdhJK4pZ7vLWqw?usp=sharing
              </a>
            </div>

            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest pt-4 border-t border-gray-100 dark:border-white/5">
              For more materials info please visit us on Discord and check out the <span className="text-[#08CB00]">#materials-tools</span> channel
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
