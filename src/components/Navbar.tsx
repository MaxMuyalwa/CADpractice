import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { Button } from './ui/Button';
import { useTheme } from '../contexts/ThemeContext';
import { Logo } from './Logo';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (href: string) => {
    if (href.startsWith('http')) return false;
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      return location.pathname === (path || '/') && location.hash === `#${hash}`;
    }
    return location.pathname === href;
  };

  const getNavLinkClass = (href: string) => {
    const active = isActive(href);
    return `text-sm font-bold transition-colors duration-300 ${
      active 
        ? 'text-[#08CB00] dark:text-[#08CB00]' 
        : 'text-gray-600 dark:text-gray-300 hover:text-[#08CB00] dark:hover:text-[#08CB00]'
    }`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md transition-colors duration-300">
      <div className="flex items-center justify-between px-6 md:px-12 py-3 lg:py-4 w-full mx-auto">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center gap-2">
            <Logo className="w-10 h-10" />
            <span className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">
              CAD<span className="text-[#08CB00]">practice</span>
            </span>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/about" className={getNavLinkClass('/about')}>About</Link>
          <Link to="/materials-faq" className={getNavLinkClass('/materials-faq')}>Materials FAQ</Link>
        </div>

        {/* Right: Auth & Theme */}
        <div className="flex-1 flex items-center justify-end gap-6">
          <Link to="/#login" className={getNavLinkClass('/#login')}>Log In</Link>
          <Link to="/#signup" className={getNavLinkClass('/#signup')}>Get Started</Link>
          
          <Button 
            variant="ghost" 
            onClick={toggleTheme}
            className={`p-2 rounded-xl transition-all duration-300 bg-[#E5E5E5]/50 dark:bg-[#000805]/50 backdrop-blur-md ${
              theme === 'dark' 
              ? 'shadow-inner' 
              : 'shadow-md'
            }`}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};
