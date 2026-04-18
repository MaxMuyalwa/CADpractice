import React from 'react';
import { useLocation } from 'react-router-dom';

export const Footer = () => {
  const location = useLocation();

  return (
    <footer className="relative z-10 text-gray-900 dark:text-white pt-20 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Bottom Links */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-600 dark:text-gray-400 font-bold uppercase tracking-widest">
          <p>© 2026 CADpractice LLC. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
