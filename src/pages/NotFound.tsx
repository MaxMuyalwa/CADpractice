import React from 'react';
import { motion } from 'motion/react';
import { MapPinOff, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-transparent">
      
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-sm w-full text-center space-y-6 relative z-10"
      >
        {/* Icon with slash */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center border border-gray-200 dark:border-white/10 transition-colors duration-300">
              <MapPinOff className="w-8 h-8 text-gray-600 dark:text-gray-400" />
            </div>
          </div>
        </div>

        {/* 404 Text with Gradient */}
        <div className="space-y-1">
          <h1 className="text-7xl font-black tracking-tighter leading-none bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-white/20 bg-clip-text text-transparent transition-colors duration-300">
            404
          </h1>
          <h2 className="text-2xl font-black text-gray-900 dark:text-white transition-colors duration-300">
            Lost in Space?
          </h2>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed px-4 transition-colors duration-300">
          The page you're looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>

        <div className="pt-2 px-4">
          <Button 
            asChild
            size="lg" 
            className="w-full bg-[#08CB00] hover:bg-[#07b500] text-white dark:text-black font-black py-4 md:py-6 text-base md:text-lg rounded-2xl shadow-[0_0_20px_rgba(8,203,0,0.2)] hover:shadow-[0_0_40px_rgba(8,203,0,0.4)] transition-all duration-300"
          >
            <Link to="/" className="flex items-center justify-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Return to Home
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
