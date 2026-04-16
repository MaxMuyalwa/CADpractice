import React from 'react';
import { ArrowRight, PlayCircle, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'motion/react';

export const Hero = () => {
  const features = [
    {
      title: "Pro Challenges",
      description: "A growing library of professional CAD models designed to keep you engaged."
    },
    {
      title: "Instant Validation",
      description: "No more waiting for a grade. Get automated feedback in seconds."
    },
    {
      title: "Real-Time Tracking",
      description: "Manage entire classrooms or track your personal growth on our Skills Radar."
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-transparent">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#08CB00]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#08CB00]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-10"
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight">
                The Perfect Tool for <br />
                <span className="text-gray-900 dark:text-white">CAD Practice</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#08CB00] italic tracking-tight">
                The "Smarter CAD Workbook" for STEM Educators
              </p>
            </div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="mt-1 bg-[#08CB00]/10 dark:bg-[#08CB00]/20 p-1 rounded-md">
                    <CheckCircle2 className="w-5 h-5 text-[#08CB00]" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                      {feature.title}: <span className="font-medium text-gray-600 dark:text-gray-400">{feature.description}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="group relative flex items-center justify-center gap-3 bg-[#08CB00] hover:bg-[#07b500] text-white border-none px-8 py-6 text-lg font-bold rounded-2xl shadow-[0_0_30px_rgba(8,203,0,0.3)] hover:shadow-[0_0_40px_rgba(8,203,0,0.5)] transition-all duration-300"
              >
                Try Free Challenge
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg" 
                className="flex items-center justify-center gap-3 px-8 py-6 text-lg font-bold text-gray-600 dark:text-gray-300 hover:text-[#08CB00] dark:hover:text-[#08CB00] hover:bg-[#08CB00]/5 dark:hover:bg-[#08CB00]/10 rounded-2xl transition-all duration-300"
              >
                <PlayCircle className="w-6 h-6" />
                Watch Demo
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Image with 3D Perspective */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -20, rotateX: 10, x: 50 }}
            animate={{ opacity: 1, scale: 1, rotateY: 25, rotateX: 8, rotateZ: 2, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="relative perspective-3000 hidden lg:block"
          >
            <div className="relative">
              {/* Matrix Grid behind image - Peaking at edges */}
              <div 
                className="absolute -inset-32 pointer-events-none z-0" 
                style={{ 
                  backgroundImage: `
                    linear-gradient(to right, rgba(8, 203, 0, 0.8) 1.5px, transparent 1.5px),
                    linear-gradient(to bottom, rgba(8, 203, 0, 0.8) 1.5px, transparent 1.5px)
                  `,
                  backgroundSize: '40px 40px',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
                  maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)'
                }}
              />
              
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-[#08CB00]/20 rounded-[2rem] blur-3xl opacity-50 transition-opacity duration-500 z-0" />
              
              <div className="relative z-10 rounded-[2rem] overflow-hidden border border-gray-200/50 dark:border-white/10 shadow-2xl transform-gpu transition-transform duration-700 aspect-[1/1.15] max-h-[850px] mx-auto bg-white dark:bg-black">
                <img 
                  src="/images/hero-placeholder.png" 
                  alt="CAD Challenges Library" 
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="flex items-center justify-center h-full bg-white dark:bg-black text-gray-400 font-bold text-center p-8">Hero Image Placeholder<br/>(Wide Portrait Size)</div>';
                  }}
                />
                
                {/* Glass overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
                
                {/* Bottom fade-out gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent pointer-events-none" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#08CB00]/10 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#08CB00]/5 rounded-full blur-3xl animate-pulse delay-700" />
            </div>
          </motion.div>

          {/* Mobile Image (Simplified) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:hidden mt-12 relative max-w-[500px] mx-auto"
          >
            {/* Matrix Grid behind mobile image - Peaking at edges */}
            <div 
              className="absolute -inset-20 pointer-events-none z-0" 
              style={{ 
                backgroundImage: `
                  linear-gradient(to right, rgba(8, 203, 0, 0.8) 1.5px, transparent 1.5px),
                  linear-gradient(to bottom, rgba(8, 203, 0, 0.8) 1.5px, transparent 1.5px)
                `,
                backgroundSize: '30px 30px',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
                maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)'
              }}
            />
            
            <div className="relative z-10 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-xl aspect-[1/1.15] bg-white dark:bg-black">
              <img 
                src="/images/hero-placeholder.png" 
                alt="CAD Challenges Library" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div class="flex items-center justify-center h-full bg-white dark:bg-black text-gray-400 font-bold text-xs">Hero Image Placeholder</div>';
                }}
              />
              {/* Bottom fade-out gradient */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
