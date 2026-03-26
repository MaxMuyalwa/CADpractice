import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from './ui/Button';
import { useTheme } from '../contexts/ThemeContext';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="relative z-50 flex items-center justify-between px-8 py-8 max-w-7xl mx-auto bg-transparent transition-colors duration-300">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-matrix-green rounded-2xl flex items-center justify-center shadow-[6px_6px_12px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]">
          <span className="text-black font-black text-2xl">C</span>
        </div>
        <span className="text-2xl font-black tracking-tight text-neu-text-primary">
          CAD<span className="text-matrix-green">practice</span>
        </span>
      </div>
      <div className="flex items-center gap-6">
        <Button 
          variant="ghost" 
          onClick={toggleTheme}
          className={`p-3 rounded-2xl transition-all duration-300 bg-background ${
            theme === 'dark' 
            ? 'shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]' 
            : 'shadow-[6px_6px_12px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]'
          }`}
        >
          {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-neu-text-secondary" />}
        </Button>
        <Button variant="ghost" className="text-neu-text-secondary font-bold hover:text-neu-text-primary transition-colors">Log In</Button>
        <Button variant="default">
          Get Started
        </Button>
      </div>
    </nav>
  );
};
