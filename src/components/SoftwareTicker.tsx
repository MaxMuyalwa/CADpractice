import React from 'react';

const softwares = [
  'AutoCAD',
  'Revit',
  'Rhino',
  'SolidWorks',
  'Fusion 360',
  'Onshape',
  'Inventor'
];

export const SoftwareTicker = () => {
  return (
    <section className="py-16 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <p className="text-[10px] md:text-xs font-bold text-gray-600/60 dark:text-gray-400/60 uppercase tracking-[0.4em]">
          Compatible with all leading CAD platforms
        </p>
      </div>
      
      <div className="flex overflow-hidden mb-12">
        <div className="flex gap-12 md:gap-24 items-center whitespace-nowrap px-12 animate-ticker">
          {[...softwares, ...softwares, ...softwares, ...softwares].map((software, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-4xl font-black italic text-gray-900 dark:text-white opacity-50 hover:opacity-100 hover:text-[#08CB00] hover:drop-shadow-[0_0_12px_rgba(8,203,0,0.8)] transition-all duration-300 cursor-default flex-shrink-0"
            >
              {software}
            </span>
          ))}
        </div>
      </div>
      
      {/* Bottom Divider Line */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-[1px] bg-gray-200 dark:bg-gray-800 w-full" />
      </div>

      {/* Gradient Fades */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#E5E5E5] dark:from-[#000805] via-[#E5E5E5]/50 dark:via-[#000805]/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#E5E5E5] dark:from-[#000805] via-[#E5E5E5]/50 dark:via-[#000805]/50 to-transparent z-10 pointer-events-none" />
    </section>
  );
};
