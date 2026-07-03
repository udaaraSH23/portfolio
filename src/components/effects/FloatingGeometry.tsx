'use client';

import React from 'react';
import { m } from 'framer-motion';

interface FloatingGeometryProps {
  color?: string;
}

export const FloatingGeometry = ({ color = 'var(--ax-accent)' }: FloatingGeometryProps) => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {/* Dashed Circle */}
      <m.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        style={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          opacity: 0.15,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke={color}
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
        />
      </m.svg>

      {/* Tech corner box */}
      <m.div
        style={{
          position: 'absolute',
          top: '60%',
          left: '12%',
          width: '60px',
          height: '60px',
          borderLeft: `1px solid ${color}`,
          borderTop: `1px solid ${color}`,
          opacity: 0.1,
        }}
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Plus signs grid or matrix */}
      <m.svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        style={{
          position: 'absolute',
          top: '25%',
          right: '55%',
          opacity: 0.15,
        }}
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <path d="M 0,20 H 40 M 20,0 V 40" stroke={color} strokeWidth="1" />
      </m.svg>

      {/* Angle indicators */}
      <m.div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '45%',
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: '12px',
          color: color,
          opacity: 0.15,
          letterSpacing: '0.2em',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        [SYS_INIT_OK]
      </m.div>
    </div>
  );
};
