import React from 'react';
import { motion } from 'motion/react';

interface LegalLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export const LegalLayout = ({ title, lastUpdated, children }: LegalLayoutProps) => {
  return (
    <main className="pt-32 pb-20 px-4 relative min-h-screen bg-transparent overflow-hidden">
      {/* Background System */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#08CB00]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(8, 203, 0, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(8, 203, 0, 0.4) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-2 tracking-tight uppercase">
              {title}
            </h1>
            {lastUpdated && (
              <p className="text-[10px] font-black text-[#08CB00] uppercase tracking-widest">
                Last Updated: {lastUpdated}
              </p>
            )}
          </div>
          
          <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none 
            prose-headings:font-bold prose-headings:text-lg prose-headings:mb-4 prose-headings:mt-8
            prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-p:font-bold prose-p:leading-relaxed prose-p:mb-4
            prose-strong:text-gray-900 dark:prose-strong:text-white
            prose-li:text-gray-600 dark:prose-li:text-gray-400 prose-li:font-bold prose-li:mb-2
            prose-ol:mb-6 prose-ul:mb-6">
            {children}
          </div>
        </motion.div>
      </div>
    </main>
  );
};
