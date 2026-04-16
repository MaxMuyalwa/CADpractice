import React from 'react';

const softwares = [
  'Onshape',
  'Fusion',
  'SOLIDWORKS',
  'FreeCAD',
  'Alibre',
  'Creo',
  'Tinkercad',
  'Catia',
  'Plasticity',
  'Inventor',
  'IronCAD',
  'SolidEdge',
  'Rhino',
  'NX',
  '& More...'
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
              className="relative pb-1 md:pb-2 text-2xl md:text-4xl font-black italic text-gray-900 dark:text-white opacity-50 hover:opacity-100 transition-all duration-300 cursor-default flex-shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 md:after:h-[5px] after:bg-[#08CB00] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out"
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
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-background via-background/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-background via-background/50 to-transparent z-10 pointer-events-none" />
    </section>
  );
};
