'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SectionScrollerProps {
  children: React.ReactNode[];
}

export const SectionScroller = ({ children }: SectionScrollerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // The height needs to be enough to provide scroll distance
  // But we use CSS snapping for a better feel
  return (
    <div 
      ref={containerRef} 
      style={{ 
        height: `${children.length * 100}vh`, 
        position: 'relative',
        scrollSnapType: 'y mandatory',
        overflowY: 'auto',
        overflowX: 'hidden',
        scrollbarWidth: 'none', // Hide scrollbar for cleaner look
      }}
    >
      {children.map((child, index) => {
        return (
          <SectionItem 
            key={index} 
            index={index} 
            total={children.length} 
            containerRef={containerRef}
          >
            {child}
          </SectionItem>
        );
      })}
    </div>
  );
};

const SectionItem = ({ 
  children, 
  index, 
  total, 
  containerRef
}: { 
  children: React.ReactNode; 
  index: number; 
  total: number; 
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ['start end', 'end start'],
  });

  // Fade in and out based on progress through THIS specific scroll snap point
  // scrollYProgress goes from 0 (item entering) to 1 (item leaving)
  // Since we use scroll-snap, 0.5 is when it's centered
  const opacity = useTransform(scrollYProgress, [0.1, 0.45, 0.55, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.45, 0.55, 0.9], [0.9, 1, 1, 0.9]);
  
  // For the very first and very last sections, we keep them visible at the boundaries
  const opacityAdjusted = index === 0 
    ? useTransform(scrollYProgress, [0, 0.5, 0.55, 0.9], [1, 1, 1, 0])
    : index === total - 1
    ? useTransform(scrollYProgress, [0.1, 0.45, 0.5, 1], [0, 1, 1, 1])
    : opacity;

  const scaleAdjusted = index === 0
    ? useTransform(scrollYProgress, [0, 0.5, 0.55, 0.9], [1, 1, 1, 0.9])
    : index === total - 1
    ? useTransform(scrollYProgress, [0.1, 0.45, 0.5, 1], [0.9, 1, 1, 1])
    : scale;

  return (
    <div 
      ref={itemRef}
      style={{ 
        height: '100vh', 
        width: '100%',
        scrollSnapAlign: 'start',
        position: 'relative',
        zIndex: total - index
      }}
    >
      <motion.div
        style={{
          opacity: opacityAdjusted,
          scale: scaleAdjusted,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // We only allow pointer events when the section is mostly visible
          pointerEvents: 'auto', 
          zIndex: 10,
        }}
      >
        <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

