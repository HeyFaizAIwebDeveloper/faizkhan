'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface MaskTextProps {
  children: string;
}

const MaskText = ({ children }: MaskTextProps) => {
  const animation = {
    initial: { x: "100%" },
    animate: (i: number) => ({
      x: "0",
      transition: {
        duration: 1,
        ease: [0.33, 1, 0.68, 1],
      }
    })
  };

  return (
    
      <>
        {children.split('').map((char, index) => (
          <div key={index} className="inline-block overflow-hidden">
            <motion.span
              custom={index}
              variants={animation}
              initial="initial"
              animate="animate"
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          </div>
        ))}
      </>
    
  );
}

export default MaskText;