'use client';

import React from 'react';
import { FadeIn } from '@/components/motion/FadeIn';
import styles from '@/app/projects/ProjectDetail.module.css';

interface Feature {
  title: string;
  desc: string;
  icon?: string;
}

interface ProjectFeaturesProps {
  features: Feature[];
}

export const ProjectFeatures = ({ features }: ProjectFeaturesProps) => {
  if (!features || features.length === 0) return null;

  return (
    <section className={`${styles.fullBleedSection} ${styles.altBg}`}>
      <div className={`${styles.sectionInner} ${styles.asymmetricGrid}`}>
        <FadeIn direction="up">
          <span className={styles.sectionWatermark}>02</span>
          <h2 className={styles.sectionHeading}>Key Features</h2>
        </FadeIn>
        
        <div className={styles.staggeredGrid}>
          {features.map((feature, i) => (
            <FadeIn key={i} direction="up" delay={0.1 * i}>
              <div className={styles.featureCardStaggered}>
                <span className={styles.featureNumber}>0{i + 1}</span>
                <span className={`material-symbols-outlined ${styles.featureIcon}`} style={{ fontSize: '3rem' }}>
                  {feature.icon || 'star'}
                </span>
                <h3 className={styles.featureTitle} style={{ fontSize: '1.5rem', marginTop: '1rem' }}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
