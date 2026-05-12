'use client';

import React from 'react';
import styles from './Dividers.module.css';
import { FadeIn } from '../motion/FadeIn';

interface DividerProps {
  label?: string;
  type?: 'line' | 'marker' | 'dashed';
}

export const SectionDivider: React.FC<DividerProps> = ({ label, type = 'line' }) => {
  return (
    <div className={styles.dividerWrapper}>
      <FadeIn>
        <div className={`${styles.divider} ${styles[type]}`}>
          {label && (
            <div className={styles.marker}>
              <span className={styles.markerLine}></span>
              <span className={styles.markerText}>{label}</span>
              <span className={styles.markerLine}></span>
            </div>
          )}
        </div>
      </FadeIn>
    </div>
  );
};
