'use client';

import React from 'react';
import { m } from 'framer-motion';
import styles from '@/app/projects/ProjectDetail.module.css';
import baseStyles from '@/components/Base.module.css';
import { TechnicalBackground } from '@/components/effects/TechnicalBackground';

interface ProjectHeroProps {
  title: string;
  category: string;
  tags: string[];
}

export const ProjectHero = ({ title, category, tags }: ProjectHeroProps) => {
  return (
    <m.header
      initial={{ backgroundColor: '#0A192F' }} // Start with brand dark blue
      animate={{ backgroundColor: '#f2f4f7' }} // Transition to Technical Parchment
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={styles.projectPageHero}
      style={{ position: 'relative' }}
    >
      <TechnicalBackground
        particleColor="rgba(7, 9, 12, 0.15)"
        connectionColor="rgba(0, 0, 0, 0.03)"
        blobColorPrimary="rgba(12, 12, 12, 0.12)"
        blobColorSecondary="rgba(11, 11, 12, 0.08)"
      />

      <m.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={styles.projectCategory}
        style={{ position: 'relative', zIndex: 2 }}
      >
        {category}
      </m.span>

      <m.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={styles.projectTitle}
        style={{ position: 'relative', zIndex: 2 }}
      >
        {title}
      </m.h1>

      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ display: 'flex', gap: '0.65rem', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 2 }}
      >
        {tags.map((tag, i) => (
          <span
            key={tag}
            className={baseStyles.tag}
            style={{
              borderColor: 'rgba(10, 25, 47, 0.1)',
              color: 'var(--ax-primary)',
              background: 'transparent',
              fontSize: '0.7rem',
              fontFamily: 'var(--font-mono, monospace)',
              fontWeight: 600
            }}
          >
            {tag}
          </span>
        ))}
      </m.div>
    </m.header>
  );
};
