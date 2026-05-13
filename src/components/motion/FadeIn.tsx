'use client';

import { m, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  staggerChildren?: number;
  once?: boolean;
}

export const FadeIn = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 50,
  className = '',
  staggerChildren = 0,
  once = true,
}: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: { x: 0, y: 0 },
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
        staggerChildren,
      },
    },
  };

  return (
    <m.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </m.div>
  );
};

export const FadeInStagger = ({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) => {
  return (
    <FadeIn direction="none" staggerChildren={0.1} delay={delay} className={className}>
      {children}
    </FadeIn>
  );
};
