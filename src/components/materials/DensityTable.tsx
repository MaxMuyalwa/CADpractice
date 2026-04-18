import React from 'react';

export const DensityTable = () => {
  const mainTable = [
    { name: "PLAIN CARBON STEEL", density: "7800", unit: "kg/m³" },
    { name: "6061 ALUMINUM", density: "2700", unit: "kg/m³" },
    { name: "ABS", density: "1020", unit: "kg/m³" },
    { name: "AMERICAN CHERRY", density: "570", unit: "kg/m³" },
  ];

  const comparisonTable = [
    { name: "ABS", system: "Onshape", density: "1052 kg/m³" },
    { name: "ABS", system: "SOLIDWORKS", density: "1020 kg/m³" },
    { name: "ABS Plastic", system: "Fusion", density: "1060 kg/m³" },
    { name: "ABS-Generic", system: "FreeCAD", density: "1060 kg/m³" },
  ];

  return (
    <section className="space-y-16">
      {/* Table 1: Primary Materials */}
      <div className="bg-white/50 dark:bg-black/40 backdrop-blur-xl border border-gray-200 dark:border-[#08CB00]/20 rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-2 h-8 bg-[#08CB00] rounded-full" />
          <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase leading-tight">
            What are the CUSTOM MATERIAL names and densities?
          </h2>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl font-medium">
          All CAD CHALLENGES in the <span className="text-gray-900 dark:text-white font-bold">CADpractice.com</span> library use one (or more) of the following materials and density values:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left border-b border-gray-200 dark:border-white/10">
                <th className="pb-4 pr-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08CB00]">Custom Material Name</span>
                </th>
                <th className="pb-4 px-4 text-right">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08CB00]">Density</span>
                </th>
                <th className="pb-4 pl-4 text-right">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08CB00]">Units</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
              {mainTable.map((row, idx) => (
                <tr key={idx} className="group hover:bg-[#08CB00]/5 transition-colors">
                  <td className="py-6 pr-4">
                    <span className="text-lg font-black text-gray-900 dark:text-white group-hover:text-[#08CB00] transition-colors uppercase tracking-tight">
                      {row.name}
                    </span>
                  </td>
                  <td className="py-6 px-4 text-right font-black text-2xl text-gray-900 dark:text-white group-hover:text-[#08CB00] transition-colors">
                    {row.density}
                  </td>
                  <td className="py-6 pl-4 text-right font-bold text-gray-400 dark:text-gray-500">
                    {row.unit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Table 2: Comparison */}
      <div className="bg-white/50 dark:bg-black/40 backdrop-blur-xl border border-gray-200 dark:border-[#08CB00]/20 rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-2 h-8 bg-[#08CB00] rounded-full" />
          <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase leading-tight">
            "SAME NAME" MATERIALS - DIFFERENT DENSITIES
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left border-b border-gray-200 dark:border-white/10">
                <th className="pb-4 pr-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08CB00]">Material Name</span>
                </th>
                <th className="pb-4 px-4 text-center">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08CB00]">3D CAD Package</span>
                </th>
                <th className="pb-4 pl-4 text-right">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08CB00]">Density</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
              {comparisonTable.map((row, idx) => (
                <tr key={idx} className="group hover:bg-[#08CB00]/5 transition-colors">
                  <td className="py-6 pr-4">
                    <span className="font-bold text-gray-900 dark:text-white group-hover:text-[#08CB00] transition-colors">
                      {row.name}
                    </span>
                  </td>
                  <td className="py-6 px-4 text-center font-bold text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {row.system}
                  </td>
                  <td className="py-6 pl-4 text-right font-black text-gray-900 dark:text-white group-hover:text-[#08CB00] transition-colors">
                    {row.density}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-10 p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
          <p className="text-sm text-red-500 font-bold leading-relaxed">
            <span className="uppercase font-black mr-2">This is a problem</span> - and it means we can’t simply rely on the DEFAULT material library. We must create a custom library of materials.
          </p>
        </div>
      </div>
    </section>
  );
};
