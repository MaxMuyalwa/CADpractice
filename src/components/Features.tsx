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
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
            Why CAD<span className="text-[#08CB00]">practice</span>?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to master CAD fundamentals and excel in your studies
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#E5E5E5] dark:bg-[#000805] border border-gray-200 dark:border-gray-800 rounded-[32px] p-8
              shadow-lg hover:shadow-xl
              hover:-translate-y-1
              transition-all duration-300
              group">
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#E5E5E5] dark:bg-[#000805] 
                flex items-center justify-center mb-6
                group-hover:scale-110
                transition-all duration-300
                shadow-inner">
                <feature.icon className="w-8 h-8 text-[#08CB00]" />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
