'use client';

import React from 'react';
import styles from './Projects.module.css';
import baseStyles from '@/components/Base.module.css';
import { FadeIn, FadeInStagger } from '@/components/motion/FadeIn';
import { TiltCard } from '@/components/motion/TiltCard';

import Link from 'next/link';
import { projects } from '@/app/data/projects';

export const Projects = () => {
  return (
    <section id="projects" className={baseStyles.section}>
      <FadeIn>
        <h2 className={baseStyles.sectionTitle}>Projects & Research</h2>
      </FadeIn>

      <FadeInStagger className={baseStyles.cardGrid}>
        {projects.map((proj, idx) => (
          <FadeIn key={idx} direction="up" distance={30}>
            <TiltCard className={baseStyles.featureCard}>
              <span className={styles.prowCat}>
                {proj.category}
              </span>
              <h3 className={baseStyles.cardTitle}>{proj.title}</h3>
              <p className={baseStyles.cardDesc}>{proj.shortDesc}</p>
              <div className={baseStyles.cardTags}>
                {proj.tags.map(tag => (
                  <span key={tag} className={baseStyles.tag}>{tag}</span>
                ))}
              </div>
              <Link href={`/projects/${proj.slug}`} className={styles.viewProjectLink}>
                View Project
              </Link>
            </TiltCard>
          </FadeIn>
        ))}
      </FadeInStagger>
    </section>
  );
};
