import React from 'react';
import { FileCheck, CheckCircle, TrendingUp, Lightbulb, Database, LayoutDashboard } from 'lucide-react';
import { RevealText } from './RevealText';

const features = [
  {
    icon: FileCheck,
    title: 'Certified Blueprints',
    description: (
      <>
        Stop wasting hours searching for or creating 2D drawings.
        <br /><br />
        Our library contains professionally vetted engineering blueprints ready for immediate deployment to your students.
        <br /><br />
        <strong className="text-gray-900 dark:text-white font-bold">NO MORE MISSING DIMENSIONS!</strong>
      </>
    )
  },
  {
    icon: CheckCircle,
    title: 'Instant Feedback',
    description: (
      <>
        Upon submission, students instantly know if they've succeeded. If incorrect, they get to keep trying.
        <br /><br />
        <strong className="text-gray-900 dark:text-white font-bold">Educators spend less time correcting minor mistakes and more time answering in-depth modeling questions.</strong>
      </>
    )
  },
  {
    icon: TrendingUp,
    title: 'Tiered Challenges',
    description: (
      <>
        Students who are brand new to 3D CAD can start on Level 1 and work their way up.
        <br /><br />
        Students who have more CAD experience can jump to level 4 or 5 (or higher) for more complicated CAD challenges.
      </>
    )
  },
  {
    icon: Lightbulb,
    title: 'Built-in Tutorials',
    description: (
      <>
        Give every student "on demand", 1 on 1 support.
        <br /><br />
        Our built in tutorials provide step-by-step guides on how to complete the current CAD challenges, acting as a "digital teaching assistant" to help students the moment they get stuck.
      </>
    )
  },
  {
    icon: Database,
    title: 'CAD Agnostic',
    description: (
      <>
        Your Lab - Your Choice.
        <br /><br />
        CADpractice.com works with any 3D CAD System - Onshape, Fusion, SOLIDWORKS, FreeCAD, Tinkercad, Inventor, Creo, and more.
      </>
    )
  },
  {
    icon: LayoutDashboard,
    title: 'Educators Live Dashboard',
    description: (
      <>
        Total visibility from your desk.
        <br /><br />
        Create assignments and monitor results.
        <br /><br />
        See which students are stuck, which students are ahead, and which CAD competency skills they have mastered.
      </>
    )
  }
];

export const Features = () => {
  return (
    <section className="py-24 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4 flex flex-wrap justify-center items-center">
            <RevealText text="The End of CAD" />
            <span className="text-primary mx-[0.25em]">
              <RevealText text="Grading" delay={0.3} />
            </span>
            <RevealText text="Bottlenecks" delay={0.5} />
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            <RevealText text="Tools to help CAD educators reclaim their time!" delay={0.7} />
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
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              
              {/* Description */}
              <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
