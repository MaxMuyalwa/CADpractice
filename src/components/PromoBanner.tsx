import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, X } from 'lucide-react';

export const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="relative bg-[#FFC107] text-black z-[100] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex-1 flex items-center min-w-0">
                <span className="flex p-2 rounded-lg bg-black/5">
                  <AlertTriangle className="h-5 w-5 text-black" aria-hidden="true" />
                </span>
                <p className="ml-3 font-bold text-sm sm:text-base">
                  EDUCATORS: Purchase next year's licenses today and get the rest of this school year FREE — email info@cadpractice.com to lock in this offer.
                </p>
              </div>
              <div className="order-2 shrink-0 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="-mr-1 flex p-2 rounded-md hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-black sm:-mr-2 transition-colors"
                >
                  <span className="sr-only">Dismiss</span>
                  <X className="h-5 w-5 text-black" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
