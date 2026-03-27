import React from 'react';
import { Box, Layers, TrendingUp, Zap, Trophy, BarChart } from 'lucide-react';

const features = [
  {
    icon: Box,
    title: 'Hands-On Practice',
    description: 'Real-world CAD challenges with instant feedback'
  },
  {
    icon: Layers,
    title: 'Multi-Platform Support',
    description: 'Works with Fusion, Onshape, SolidWorks, FreeCAD, Inventor'
  },
  {
    icon: TrendingUp,
    title: 'Progressive Learning',
    description: 'Start easy, master advanced concepts'
  },
  {
    icon: Zap,
    title: 'Instant Feedback',
    description: 'Know immediately if your solution is correct'
  },
  {
    icon: Trophy,
    title: 'Competitive Leaderboards',
    description: 'Compete with students worldwide'
  },
  {
    icon: BarChart,
    title: 'Track Progress',
    description: 'Monitor your improvement over time'
  }
];

export const Features = () => {
  return (
    <section className="py-24 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-neu-text-primary mb-4">
            Why CAD<span className="text-matrix-green">practice</span>?
          </h2>
          <p className="text-lg text-neu-text-secondary max-w-2xl mx-auto">
            Everything you need to master CAD fundamentals and excel in your studies
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-background/80 backdrop-blur-md border border-neu-shadow-dark/10 rounded-[32px] p-8
              shadow-[10px_10px_20px_var(--shadow-dark),-5px_-5px_10px_var(--shadow-light)]
              hover:shadow-[12px_12px_24px_var(--shadow-dark-intense),-6px_-6px_12px_var(--shadow-light)]
              hover:-translate-y-1
              transition-all duration-300
              group">
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-background/50 backdrop-blur-md 
                flex items-center justify-center mb-6
                group-hover:scale-110
                transition-all duration-300
                shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]">
                <feature.icon className="w-8 h-8 text-matrix-green" />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-black text-neu-text-primary mb-3">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-neu-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
