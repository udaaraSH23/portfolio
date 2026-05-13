'use client';

import React from 'react';
import { FadeIn } from '@/components/motion/FadeIn';
import styles from '@/app/projects/ProjectDetail.module.css';

interface ProjectNarrativeProps {
  problem: string;
  solution: string;
}

export const ProjectNarrative = ({ problem, solution }: ProjectNarrativeProps) => {
  return (
    <section className={`${styles.fullBleedSection} ${styles.darkBg}`}>
      <div className={`${styles.sectionInner} ${styles.asymmetricGrid}`}>
        <FadeIn direction="up">
          <span className={styles.sectionWatermark}>01</span>
          <h2 className={styles.sectionHeading}>The Narrative</h2>
        </FadeIn>
        
        <div>
          <FadeIn direction="up" delay={0.2}>
            <div className={styles.pullQuote}>
              <p>
                {problem}
              </p>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3}>
            <div className={styles.editorialText}>
              <p>{solution}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
