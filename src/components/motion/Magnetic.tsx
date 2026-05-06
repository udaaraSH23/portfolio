'use client';

import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
}

export const Magnetic = ({ children, className = '' }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.3);
    y.set(middleY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x, y }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};
