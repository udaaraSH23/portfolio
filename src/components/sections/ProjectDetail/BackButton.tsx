'use client';

import React from 'react';
import Link from 'next/link';
import { m } from 'framer-motion';

export const BackButton = ({ href = '/recruiter' }: { href?: string }) => {
  return (
    <m.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      style={{ position: 'fixed', top: '100px', left: '6vw', zIndex: 100 }}
    >
      <Link 
        href={href} 
        style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          color: 'rgba(10, 25, 47, 0.4)', 
          textDecoration: 'none', 
          fontSize: '0.8rem', 
          fontWeight: 900, 
          fontFamily: 'var(--font-mono, monospace)', 
          letterSpacing: '0.1em',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--ax-primary)';
          e.currentTarget.style.transform = 'translateX(-5px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'rgba(10, 25, 47, 0.4)';
          e.currentTarget.style.transform = 'translateX(0)';
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span> 
        RETURN_TO_BASE
      </Link>
    </m.div>
  );
};
