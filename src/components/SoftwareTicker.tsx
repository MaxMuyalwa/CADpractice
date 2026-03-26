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
    <section className="py-16 bg-background overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <p className="text-[10px] md:text-xs font-bold text-neu-text-secondary/60 uppercase tracking-[0.4em]">
          Compatible with all leading CAD platforms
        </p>
      </div>
      
      <div className="flex overflow-hidden mb-12">
        <div className="flex gap-12 md:gap-24 items-center whitespace-nowrap px-12 animate-ticker">
          {[...softwares, ...softwares, ...softwares, ...softwares].map((software, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-4xl font-black italic text-neu-text-primary/50 uppercase tracking-tight hover:text-matrix-green transition-colors duration-300 cursor-default flex-shrink-0"
            >
              {software}
            </span>
          ))}
        </div>
      </div>
      
      {/* Bottom Divider Line */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-[1px] bg-neu-shadow-dark/10 w-full" />
      </div>

      {/* Gradient Fades */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-background via-background/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-background via-background/50 to-transparent z-10 pointer-events-none" />
    </section>
  );
};
