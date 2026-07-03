'use client';

import React from 'react';
import { FadeIn } from '@/components/motion/FadeIn';
import styles from './ProjectDetail.module.css';

interface ProjectResultsProps {
  results?: string[];
}

export const ProjectResults = ({ results }: ProjectResultsProps) => {
  if (!results || results.length === 0) return null;

  return (
    <section className={`${styles.fullBleedSection} ${styles.altBg}`}>
      <div className={`${styles.sectionInner} ${styles.asymmetricGrid}`}>
        <FadeIn direction="up">
          <span className={styles.sectionWatermark}>04</span>
          <h2 className={styles.sectionHeading}>Results</h2>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {results.map((result, i) => {
            const isTodo = result.trim().toUpperCase().startsWith('TODO');
            return (
              <FadeIn key={i} direction="up" delay={0.1 * i}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    background: 'white',
                    border: '1px solid rgba(10, 25, 47, 0.08)',
                    opacity: isTodo ? 0.55 : 1,
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      color: isTodo ? 'var(--ax-on-surface-variant)' : 'var(--ax-secondary)',
                      fontSize: '1.5rem',
                      flexShrink: 0,
                    }}
                  >
                    {isTodo ? 'pending' : 'check_circle'}
                  </span>
                  <p
                    style={{
                      fontSize: '1.05rem',
                      lineHeight: 1.6,
                      color: 'var(--ax-primary)',
                      fontStyle: isTodo ? 'italic' : 'normal',
                      margin: 0,
                    }}
                  >
                    {result}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
