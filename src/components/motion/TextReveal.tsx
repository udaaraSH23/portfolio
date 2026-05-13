'use client';

import { m, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface TextRevealProps {
  text: string;
  className?: string;
}

export const WordReveal = ({ text, className = '' }: TextRevealProps) => {
  const words = text.split(' ');
  
  return (
    <span className={className}>
      {words.map((word, i) => (
        <m.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </m.span>
      ))}
    </span>
  );
};

export const ScrollWordReveal = ({ text, className = '' }: TextRevealProps) => {
  const targetRef = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const words = text.split(' ');
  
  return (
    <span ref={targetRef} className={className}>
      {words.map((word, i) => (
        <ScrollWord 
          key={i} 
          word={word} 
          index={i} 
          total={words.length} 
          progress={scrollYProgress} 
        />
      ))}
    </span>
  );
};


const ScrollWord = ({ 
  word, 
  index, 
  total, 
  progress 
}: { 
  word: string; 
  index: number; 
  total: number; 
  progress: MotionValue<number>; 
}) => {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0, 1]);
  
  return (
    <m.span
      style={{ opacity, display: 'inline-block', marginRight: '0.25em' }}
    >
      {word}
    </m.span>
  );
};
