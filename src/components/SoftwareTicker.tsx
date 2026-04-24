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
    <section 
      className="pt-10 md:pt-12 lg:pt-16 pb-4 md:pb-6 lg:pb-8 overflow-hidden relative z-20"
      style={{ 
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 mb-6 md:mb-10 text-center">
        <p className="text-[10px] md:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-[0.4em]">
          Compatible with all leading CAD platforms
        </p>
      </div>
      
      {/* Dynamic View: Stationary for Mobile/Tablet, Scrolling for Desktop */}
      <div className="relative">
        {/* Stationary Text for Mobile/Tablet */}
        <div className="lg:hidden">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 px-6 md:px-12 max-w-4xl mx-auto">
            {softwares.slice(0, 10).map((software, i) => (
              <span 
                key={i} 
                className="text-lg md:text-xl font-bold italic text-gray-900 dark:text-white opacity-40 uppercase tracking-tight"
              >
                {software}
              </span>
            ))}
            <span className="text-lg md:text-xl font-bold italic text-primary opacity-80 uppercase tracking-tight">
              & More...
            </span>
          </div>
        </div>

        {/* Desktop Ticker */}
        <div className="hidden lg:flex overflow-hidden mb-12">
          <div className="flex gap-24 items-center whitespace-nowrap px-12 animate-ticker">
            {[...softwares, ...softwares].map((software, i) => (
              <span 
                key={i} 
                className="relative pb-2 text-4xl font-black italic text-gray-900 dark:text-white opacity-40 hover:opacity-100 transition-all duration-300 cursor-default flex-shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[5px] after:bg-primary after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out"
              >
                {software}
              </span>
            ))}
          </div>
        </div>
        
        {/* Desktop Gradient Fades */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-background via-background/50 to-transparent z-10 pointer-events-none" />
        <div className="hidden lg:block absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-background via-background/50 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};
