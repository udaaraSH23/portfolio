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
    <section id="projects" className={styles.section}>
      <div className={baseStyles.container}>
        <FadeIn className={styles.sectionHeader}>
          <div className={styles.headerLabel}>SELECTED_WORKS_&_RESEARCH</div>
          <h2 className={styles.headerTitle}>Portfolio Case Studies</h2>
          <p className={styles.headerDesc}>
            A curated selection of full-stack applications, AI integrations, and infrastructure 
            research projects focusing on scalability, security, and developer experience.
          </p>
        </FadeIn>

        <FadeInStagger className={styles.projectsGrid}>
          {projects.map((proj, idx) => (
            <FadeIn key={idx} direction="up" distance={30}>
              <TiltCard className={styles.projectCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.projYear}>{proj.year?.split(' ')[0] || '2025'}</span>
                  <span className={styles.projCat}>{proj.category.toUpperCase()}</span>
                </div>
                
                <h3 className={styles.cardTitle}>{proj.title}</h3>
                <p className={styles.cardDesc}>{proj.shortDesc}</p>
                
                <div className={styles.cardTags}>
                  {proj.tags.slice(0, 4).map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <Link href={`/projects/${proj.slug}`} className={styles.viewLink}>
                    <span>VIEW_CASE_STUDY</span>
                    <span className="material-symbols-outlined">arrow_right_alt</span>
                  </Link>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
};
