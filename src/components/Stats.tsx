import React from 'react';

const stats = [
  { value: '2,500+', label: 'Students' },
  { value: '156', label: 'Challenges' },
  { value: '12', label: 'Quizzes' },
  { value: '5', label: 'CAD Platforms' }
];

export const Stats = () => {
  return (
    <section className="py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 rounded-[32px] bg-background
              shadow-[8px_8px_16px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)]">
              <div className="text-4xl lg:text-5xl font-black text-matrix-green mb-3">
                {stat.value}
              </div>
              <div className="text-xs font-black text-neu-text-secondary uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
