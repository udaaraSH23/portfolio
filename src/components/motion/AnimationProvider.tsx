'use client';

import { LazyMotion, domMax } from 'framer-motion';
import { ReactNode } from 'react';

/**
 * Optimization Provider for Framer Motion.
 * Uses LazyMotion with domMax to reduce initial JavaScript bundle size.
 * Animations will only load the features they need.
 */
export function AnimationProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domMax} strict>
      {children}
    </LazyMotion>
  );
}
