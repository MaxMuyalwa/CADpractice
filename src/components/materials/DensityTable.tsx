import React from 'react';

export const DensityTable = () => {
  const tableData = [
    { old: "PLAIN CARBON STEEL", new: "PLAIN CARBON STEEL", density: "7800", unit: "kg/m³" },
    { old: "1060 ALUMINUM", new: "6061 ALUMINUM", density: "2700", unit: "kg/m³" },
    { old: "ABS", new: "ABS", density: "1020", unit: "kg/m³" },
    { old: "RED OAK", new: "AMERICAN CHERRY", density: "570", unit: "kg/m³" },
  ];

  return (
    <section className="bg-white/50 dark:bg-black/40 backdrop-blur-xl border border-gray-200 dark:border-[#08CB00]/20 rounded-3xl p-8 md:p-12 shadow-2xl">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-2 h-8 bg-[#08CB00] rounded-full" />
        <h2 className="text-3xl font-black tracking-tight uppercase leading-tight">
          What are the material names and densities used in the TooTallToby challenges?
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b border-gray-200 dark:border-white/10">
              <th className="pb-4 pr-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08CB00]">Custom Material Name</span>
                <div className="flex gap-8 mt-1">
                  <span className="text-xs font-bold text-gray-400 italic w-32 shrink-0">Before 2026</span>
                  <span className="text-xs font-bold italic text-gray-900 dark:text-white">2026 & forward</span>
                </div>
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
            {tableData.map((row, idx) => (
              <tr key={idx} className="group hover:bg-[#08CB00]/5 transition-colors">
                <td className="py-4 pr-4">
                  <div className="flex items-center gap-8">
                    <span className="text-sm font-medium text-gray-400 italic w-32 shrink-0">{row.old}</span>
                    <span className="text-sm font-black text-gray-900 dark:text-white group-hover:text-[#08CB00] transition-colors">{row.new}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-right font-black text-lg text-gray-900 dark:text-white group-hover:text-[#08CB00] transition-colors">
                  {row.density}
                </td>
                <td className="py-4 pl-4 text-right font-bold text-gray-400 dark:text-gray-500">
                  {row.unit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 p-6 rounded-2xl bg-[#08CB00]/5 border border-[#08CB00]/20">
        <p className="text-xs font-black uppercase tracking-widest text-[#08CB00] mb-4">Note: In the TooTallToby CUSTOM MATERIALS LIBRARY:</p>
        <ul className="space-y-3">
          <li className="text-sm text-gray-600 dark:text-gray-400 flex gap-3">
            <span className="text-[#08CB00]">•</span>
            <span>The density of <strong className="text-gray-900 dark:text-white">6061 ALUMINUM</strong> (new material) is the same as the density of <span className="italic">1060 ALUMINUM</span> (old material)</span>
          </li>
          <li className="text-sm text-gray-600 dark:text-gray-400 flex gap-3">
            <span className="text-[#08CB00]">•</span>
            <span>The density of <strong className="text-gray-900 dark:text-white">AMERICAN CHERRY</strong> (new material) is the same as the density of <span className="italic">RED OAK</span> (old material)</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
