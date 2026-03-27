import React from 'react';

const stats = [
  { value: '2,500+', label: 'Students' },
  { value: '156', label: 'Challenges' },
  { value: '12', label: 'Quizzes' },
  { value: '5', label: 'CAD Platforms' }
];

export const Stats = () => {
  return (
    <section className="py-20 bg-[#E5E5E5] dark:bg-[#000805] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 rounded-[32px] bg-[#E5E5E5] dark:bg-[#000805] shadow-lg">
              <div className="text-4xl lg:text-5xl font-black text-[#08CB00] mb-3">
                {stat.value}
              </div>
              <div className="text-xs font-black text-gray-600 dark:text-gray-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
