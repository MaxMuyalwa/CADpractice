import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export const InteractiveGrid = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);

  // Smooth out the movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const smoothGlowX = useSpring(glowX, springConfig);
  const smoothGlowY = useSpring(glowY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate relative movement for the grid (-20 to 20 pixels)
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);

      // Absolute position for the glow
      glowX.set(e.clientX);
      glowY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, glowX, glowY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-background">
      {/* Subtle radial glow that follows mouse */}
      <motion.div
        className="absolute w-[1000px] h-[1000px] rounded-full pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(8, 203, 0, 0.1) 0%, transparent 70%)',
          left: 0,
          top: 0,
          x: smoothGlowX,
          y: smoothGlowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  );
};
