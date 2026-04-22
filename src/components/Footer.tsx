import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Footer = () => {
  const location = useLocation();

  return (
    <footer className="relative z-10 text-gray-900 dark:text-white pt-20 pb-12 transition-colors duration-300 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(8, 203, 0, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(8, 203, 0, 0.4) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />
      {/* Tech Dots */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-[#08CB00] rounded-full opacity-20 blur-[1px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        
        {/* Bottom Links */}
        <div className="pt-12 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
          <span>© 2026 CADpractice LLC. All rights reserved</span>
          <span className="hidden md:inline text-gray-300 dark:text-white/10">|</span>
          <Link to="/privacy" className="hover:text-gray-900 dark:hover:text-white transition-colors whitespace-nowrap">Privacy Policy</Link>
          <span className="hidden md:inline text-gray-300 dark:text-white/10">|</span>
          <Link to="/student-privacy" className="hover:text-gray-900 dark:hover:text-white transition-colors whitespace-nowrap">Student Data Privacy Policy</Link>
          <span className="hidden md:inline text-gray-300 dark:text-white/10">|</span>
          <Link to="/terms" className="hover:text-gray-900 dark:hover:text-white transition-colors whitespace-nowrap">Terms & Conditions</Link>
          <span className="hidden md:inline text-gray-300 dark:text-white/10">|</span>
          <Link to="/eula" className="hover:text-gray-900 dark:hover:text-white transition-colors whitespace-nowrap">EULA</Link>
        </div>
      </div>
    </footer>
  );
};
