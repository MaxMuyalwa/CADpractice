import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const RevealText: React.FC<RevealTextProps> = ({ text, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const words = text.trim().split(/\s+/);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay }
    }
  };

  const child = {
    visible: {
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    },
    hidden: {
      y: "120%",
      rotate: 8,
      opacity: 0,
    }
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden inline-flex mr-[0.25em] pb-1 -mb-1">
          <motion.span variants={child} className="inline-block origin-bottom-left">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};
