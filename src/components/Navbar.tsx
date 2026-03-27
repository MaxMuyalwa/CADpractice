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
        <span className="text-2xl font-black tracking-tight text-neu-text-primary">
          CAD<span className="text-matrix-green">practice</span>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          className={`px-6 py-2 rounded-xl font-bold transition-all duration-300 bg-background/80 backdrop-blur-md text-neu-text-primary ${
            theme === 'dark' 
            ? 'shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]' 
            : 'shadow-[6px_6px_12px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]'
          }`}
        >
          Log In
        </Button>
        <Button 
          variant="default"
          className="px-6 py-2 rounded-xl font-bold bg-matrix-green text-black hover:bg-matrix-green/90 shadow-[6px_6px_12px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]"
        >
          Get Started
        </Button>
        <Button 
          variant="ghost" 
          onClick={toggleTheme}
          className={`p-2 rounded-xl transition-all duration-300 bg-background/80 backdrop-blur-md ${
            theme === 'dark' 
            ? 'shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]' 
            : 'shadow-[6px_6px_12px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]'
          }`}
        >
          {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-neu-text-secondary" />}
        </Button>
      </div>
    </nav>
  );
};
