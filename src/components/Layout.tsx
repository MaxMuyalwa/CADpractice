import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { InteractiveGrid } from './InteractiveGrid';
import { PromoBanner } from './PromoBanner';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen text-gray-900 dark:text-white font-sans relative overflow-x-hidden text-sm transition-colors duration-300">
      <PromoBanner />
      <InteractiveGrid />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
