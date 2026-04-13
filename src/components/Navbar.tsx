import React, { useState } from 'react';
import { Sun, Moon, ChevronDown, ExternalLink } from 'lucide-react';
import { Button } from './ui/Button';
import { useTheme } from '../contexts/ThemeContext';
import { Logo } from './Logo';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const navLinkClass = "text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-[#08CB00] dark:hover:text-[#08CB00] transition-colors duration-300";

  const resourceItems = [
    { label: "Toby's Pro Tips", href: "#pro-tips" },
    { label: "Training", href: "#training", external: true },
    { label: "Discord", href: "#discord", external: true },
    { label: "Calendar", href: "#calendar" },
    { label: "Materials FAQ", href: "#materials-faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md transition-colors duration-300">
      <div className="flex items-center justify-between px-8 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <Logo className="w-10 h-10" />
          <span className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">
            CAD<span className="text-[#08CB00]">practice</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className={navLinkClass}>About</a>
          <a href="#contact" className={navLinkClass}>Contact</a>
          
          <div 
            className="relative"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <button className={`${navLinkClass} flex items-center gap-1 cursor-pointer py-2`}>
              Resources <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isResourcesOpen && (
              <div className="absolute top-full left-0 pt-2 w-64 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-white/95 dark:bg-black/90 backdrop-blur-xl border border-gray-200 dark:border-[#08CB00]/30 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(8,203,0,0.15)] overflow-hidden p-1">
                  {resourceItems.map((item, index) => (
                    <a 
                      key={index}
                      href={item.href} 
                      className="group flex items-center justify-between px-4 py-3 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-[#08CB00]/5 dark:hover:bg-[#08CB00]/10 rounded-lg transition-all duration-300"
                    >
                      <span className="group-hover:text-[#08CB00] group-hover:translate-x-1 transition-transform duration-300">
                        {item.label}
                      </span>
                      {item.external && (
                        <div className="bg-blue-500/10 dark:bg-blue-500/20 p-1 rounded-md group-hover:bg-[#08CB00]/20 transition-colors">
                          <ExternalLink className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 group-hover:text-[#08CB00] transition-colors" />
                        </div>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href="#login" className={navLinkClass}>Log In</a>
          <a href="#signup" className={`${navLinkClass} text-[#08CB00] dark:text-[#08CB00]`}>Get Started</a>
          
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
