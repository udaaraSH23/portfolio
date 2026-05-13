'use client';

import { m, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

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
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
        
        return (
          <m.span
            key={i}
            style={{ opacity, display: 'inline-block', marginRight: '0.25em' }}
          >
            {word}
          </m.span>
        );
      })}
    </span>
  );
};
