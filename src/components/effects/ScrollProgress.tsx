'use client';

import { m, useScroll, useSpring, useTransform } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Hide the bar when at the very top (0% scroll)
  const opacity = useTransform(scrollYProgress, [0, 0.02], [0, 1]);

  return (
    <m.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: 'var(--ax-accent)',
        transformOrigin: '0%',
        scaleX,
        opacity,
        zIndex: 99997,
        pointerEvents: 'none',
      }}
    />
  );
};
