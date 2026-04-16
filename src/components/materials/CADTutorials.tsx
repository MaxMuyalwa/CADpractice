import React from 'react';
import { motion } from 'motion/react';

export const CADTutorials = () => {
  return (
    <section className="space-y-24">
      {/* SOLIDWORKS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-8 text-gray-900 dark:text-white">
          How to create custom TooTallToby Materials in SOLIDWORKS:
        </h3>
        
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
          <div className="w-full md:w-48 aspect-square rounded-2xl bg-gray-100 dark:bg-white/5 border border-dashed border-gray-300 dark:border-white/20 flex items-center justify-center overflow-hidden shrink-0">
            <img 
              src="/images/solidworks-logo.png" 
              alt="SOLIDWORKS Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="text-center p-4"><span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Logo Placeholder</span><br/><span class="text-[10px] text-gray-500">solidworks-logo.png</span></div>';
              }}
            />
          </div>

          <div className="space-y-6 flex-1">
            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Toby’s SolidWorks Video Tutorial:</p>
              <a 
                href="https://www.youtube.com/watch?v=yf-OE5qAvdc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#08CB00] hover:underline font-bold break-all block"
              >
                https://www.youtube.com/watch?v=yf-OE5qAvdc
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Link to DOWNLOAD Toby’s Materials Library – 2026 version:</p>
              <a 
                href="https://drive.google.com/drive/folders/11d9n7s03u5YhrrA2v1pwtNzd_Jacllyj?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#08CB00] hover:underline font-bold break-all block"
              >
                https://drive.google.com/drive/folders/11d9n7s03u5YhrrA2v1pwtNzd_Jacllyj?usp=sharing
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Onshape */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-8 text-gray-900 dark:text-white">
          How to create custom TooTallToby Materials in Onshape:
        </h3>
        
        <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
          <div className="w-full md:w-48 aspect-square rounded-2xl bg-gray-100 dark:bg-white/5 border border-dashed border-gray-300 dark:border-white/20 flex items-center justify-center overflow-hidden shrink-0">
            <img 
              src="/images/onshape-logo.png" 
              alt="Onshape Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="text-center p-4"><span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Logo Placeholder</span><br/><span class="text-[10px] text-gray-500">onshape-logo.png</span></div>';
              }}
            />
          </div>

          <div className="space-y-6 flex-1">
            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Toby’s Onshape Video Tutorial:</p>
              <a 
                href="https://www.youtube.com/watch?v=bPBjYcfvOjc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#08CB00] hover:underline font-bold break-all block"
              >
                https://www.youtube.com/watch?v=bPBjYcfvOjc
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Link to Toby’s Onshape Materials Library (all 6 materials):</p>
              <a 
                href="https://cad.onshape.com/documents/6796f2b9ea4303aac1700dc7/w/f5d0431ed2105d2066e4523e/e/d444f8698ff6c7492bee776c" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#08CB00] hover:underline font-bold break-all block"
              >
                https://cad.onshape.com/documents/6796f2b9ea4303aac1700dc7/w/f5d0431ed2105d2066e4523e/e/d444f8698ff6c7492bee776c
              </a>
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
        <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-8 text-gray-900 dark:text-white">
          How to create custom TooTallToby Materials in Fusion:
        </h3>
        
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
          <div className="w-full md:w-48 aspect-square rounded-2xl bg-gray-100 dark:bg-white/5 border border-dashed border-gray-300 dark:border-white/20 flex items-center justify-center overflow-hidden shrink-0">
            <img 
              src="/images/fusion-logo.png" 
              alt="Fusion Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="text-center p-4"><span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Logo Placeholder</span><br/><span class="text-[10px] text-gray-500">fusion-logo.png</span></div>';
              }}
            />
          </div>

          <div className="space-y-6 flex-1">
            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Toby’s Fusion Video Tutorial:</p>
              <a 
                href="https://www.youtube.com/watch?v=VTeFVz6D2ok" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#08CB00] hover:underline font-bold break-all block"
              >
                https://www.youtube.com/watch?v=VTeFVz6D2ok
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Link to DOWNLOAD Toby’s Fusion Materials Library (2026 version – 4 materials):</p>
              <a 
                href="https://drive.google.com/drive/folders/1axoADyPv2MEd4nQ58TSmBjSsxCn0j1nh?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#08CB00] hover:underline font-bold break-all block"
              >
                https://drive.google.com/drive/folders/1axoADyPv2MEd4nQ58TSmBjSsxCn0j1nh?usp=sharing
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">RamBros3D - updated Fusion360 script (20205) to calculate mass (including RED OAK):</p>
              <a 
                href="https://github.com/rambros3d/CalculateMass-fusion360/releases/download/ttt/CalculateMass_ultimate.zip" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#08CB00] hover:underline font-bold break-all block"
              >
                https://github.com/rambros3d/CalculateMass-fusion360/releases/download/ttt/CalculateMass_ultimate.zip
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Shapr3D */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-8 text-gray-900 dark:text-white">
          How to Calculate Mass in Shapr3D for TooTallToby Challenges:
        </h3>
        
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
          <div className="w-full md:w-48 aspect-square rounded-2xl bg-gray-100 dark:bg-white/5 border border-dashed border-gray-300 dark:border-white/20 flex items-center justify-center overflow-hidden shrink-0">
            <img 
              src="/images/shapr3d-logo.png" 
              alt="Shapr3D Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="text-center p-4"><span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Logo Placeholder</span><br/><span class="text-[10px] text-gray-500">shapr3d-logo.png</span></div>';
              }}
            />
          </div>

          <div className="space-y-6 flex-1">
            <div className="p-6 rounded-2xl bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
              <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                Posted from the TooTallToby Discord in the #Materials-Tools channel
              </p>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed italic">
                <p className="font-bold not-italic text-gray-900 dark:text-white">From Jerid Hill:</p>
                <p>
                  "I use Shapr3d. It doesn't have weight calculations but it's a fairly good program. I created an html page that allows me to convert the weights over. If you want the html code, let me know me know and I'll send it to you. It's a basic calculator but it works well. Not sure many people would need it since their software would most likely have it built in."
                </p>
                <p>
                  "Either way, here is my web url you can test it out: <a href="http://screenerschoice.com/myconvert.html" target="_blank" rel="noopener noreferrer" className="text-[#08CB00] hover:underline font-bold not-italic">http://screenerschoice.com/myconvert.html</a>"
                </p>
                <p>
                  "Again, let me know if you want the code, I'll gladly send it to you."
                </p>
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
        <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-8 text-gray-900 dark:text-white">
          How to Calculate Mass in FreeCAD for TooTallToby Challenges:
        </h3>
        
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
          <div className="w-full md:w-48 aspect-square rounded-2xl bg-gray-100 dark:bg-white/5 border border-dashed border-gray-300 dark:border-white/20 flex items-center justify-center overflow-hidden shrink-0">
            <img 
              src="/images/freecad-logo.png" 
              alt="FreeCAD Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="text-center p-4"><span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Logo Placeholder</span><br/><span class="text-[10px] text-gray-500">freecad-logo.png</span></div>';
              }}
            />
          </div>

          <div className="space-y-6 flex-1">
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                In FreeCAD you can use the <span className="font-bold text-gray-900 dark:text-white">CENTER OF MASS</span> tool to assign a custom property for material density to a model: Everyone on the forums says "use the center of mass macro"
              </p>
              <a 
                href="https://wiki.freecad.org/Macro_CenterOfMass" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#08CB00] hover:underline font-bold break-all block"
              >
                https://wiki.freecad.org/Macro_CenterOfMass
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">For more info on how to use this tool, take a look at this FreeCAD tutorial Playlist:</p>
              <a 
                href="https://www.youtube.com/playlist?list=PLzMIhOgu1Y5fhIJJ3f6qfpUtpbJirCBxo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#08CB00] hover:underline font-bold break-all block"
              >
                https://www.youtube.com/playlist?list=PLzMIhOgu1Y5fhIJJ3f6qfpUtpbJirCBxo
              </a>
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
        <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-8 text-gray-900 dark:text-white">
          How to create custom TooTallToby Materials in Inventor:
        </h3>
        
        <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
          <div className="w-full md:w-48 aspect-square rounded-2xl bg-gray-100 dark:bg-white/5 border border-dashed border-gray-300 dark:border-white/20 flex items-center justify-center overflow-hidden shrink-0">
            <img 
              src="/images/inventor-logo.png" 
              alt="Inventor Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="text-center p-4"><span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Logo Placeholder</span><br/><span class="text-[10px] text-gray-500">inventor-logo.png</span></div>';
              }}
            />
          </div>

          <div className="space-y-6 flex-1">
            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Materials library for INVENTOR – Posted by Kingrol on TTT Discord: (Pre-2026)</p>
              <a 
                href="https://drive.google.com/drive/folders/1YtRXXg3MMBEtzvIV8g5voDfcIsBjQts3?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#08CB00] hover:underline font-bold break-all block"
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
        <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-8 text-gray-900 dark:text-white">
          How to create custom TooTallToby Materials in CREO:
        </h3>
        
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
          <div className="w-full md:w-48 aspect-square rounded-2xl bg-gray-100 dark:bg-white/5 border border-dashed border-gray-300 dark:border-white/20 flex items-center justify-center overflow-hidden shrink-0">
            <img 
              src="/images/creo-logo.png" 
              alt="CREO Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="text-center p-4"><span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Logo Placeholder</span><br/><span class="text-[10px] text-gray-500">creo-logo.png</span></div>';
              }}
            />
          </div>

          <div className="space-y-6 flex-1">
            <div className="space-y-4">
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Materials library for CREO – Posted by KateLeipold on TTT Discord: (Pre-2026)</p>
              <div className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
                <p className="font-bold not-italic text-gray-900 dark:text-white">KateLeipold:</p>
                <p>
                  "Here are an inch and a mm template for Creo. The material files should live in the same folder. The template has a flat to screen annotation that will display the calculated mass, based on the selected material."
                </p>
              </div>
              <a 
                href="https://drive.google.com/drive/folders/1fsGNoyTsuaTupMKfzYGdhJK4pZ7vLWqw?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#08CB00] hover:underline font-bold break-all block"
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
