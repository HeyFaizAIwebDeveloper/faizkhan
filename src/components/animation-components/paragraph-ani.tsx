"use client"
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

interface ParagraphProps {
  paragraph: string;
}

export default function Paragraph({ paragraph }: ParagraphProps) {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  });

  const words = paragraph.replace(/\s+/g, ' ').trim().split(" ");

  return (
    <p 
      ref={container}         
      className="flex flex-wrap text-xl md:text-6xl font-medium leading-none text-white"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return <Word key={i} progress={scrollYProgress} range={[start, end]} index={i}>{word}</Word>;
      })}
    </p>
  );
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  index: number;

}

const Word = ({ children, progress, range, index  }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-3 mt-3">
      <motion.span 
      transition={{ 
        duration: 0.8, 
        delay: index * 0.05,
        ease: [0.2, 0.65, 0.3, 0.9]
      }}
      className="absolute opacity-0">{children}</motion.span>
      <motion.span style={{ opacity }} >{children}</motion.span>
    </span>
  );
};