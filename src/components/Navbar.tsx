import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from './ui/Button';
import { useTheme } from '../contexts/ThemeContext';
import { Logo } from './Logo';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="relative z-50 flex items-center justify-between px-8 py-4 max-w-6xl mx-auto bg-transparent transition-colors duration-300">
      <div className="flex items-center gap-2">
        <Logo className="w-10 h-10" />
        <span className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">
          CAD<span className="text-[#08CB00]">practice</span>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          className={`px-6 py-2 rounded-xl font-bold transition-all duration-300 bg-[#E5E5E5] dark:bg-[#000805] text-gray-900 dark:text-white ${
            theme === 'dark' 
            ? 'shadow-inner' 
            : 'shadow-md'
          }`}
        >
          Log In
        </Button>
        <Button 
          variant="default"
          className="px-6 py-2 rounded-xl font-bold bg-[#08CB00] text-black hover:bg-[#08CB00]/90 shadow-md"
        >
          Get Started
        </Button>
        <Button 
          variant="ghost" 
          onClick={toggleTheme}
          className={`p-2 rounded-xl transition-all duration-300 bg-[#E5E5E5] dark:bg-[#000805] ${
            theme === 'dark' 
            ? 'shadow-inner' 
            : 'shadow-md'
          }`}
        >
          {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
        </Button>
      </div>
    </nav>
  );
};
