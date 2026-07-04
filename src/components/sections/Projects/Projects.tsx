'use client';

import React from 'react';
import styles from './Projects.module.css';
import baseStyles from '@/components/Base.module.css';
import { FadeIn, FadeInStagger } from '@/components/motion/FadeIn';
import { TiltCard } from '@/components/motion/TiltCard';

import Link from 'next/link';
import Image from 'next/image';
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
                {/* Phase 4: Technical Project Thumbnail */}
                <div className={styles.cardThumbnail}>
                  {proj.narrativeImage ? (
                    <Image 
                      src={proj.narrativeImage.src} 
                      alt={proj.narrativeImage.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.thumbnailImage}
                      style={{ objectFit: 'cover' }}
                      priority={idx < 3}
                    />
                  ) : (
                    <svg width="100%" height="100%" className={styles.thumbnailPattern} xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id={`grid-rec-${idx}`} width="16" height="16" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1" fill="var(--ax-accent)" opacity="0.15" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#grid-rec-${idx})`} />
                      <line x1="0" y1="30%" x2="100%" y2="30%" stroke="var(--ax-accent)" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.15" />
                      <line x1="40%" y1="0" x2="40%" y2="100%" stroke="var(--ax-accent)" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.15" />
                    </svg>
                  )}
                  <span className={styles.ghostNum}>0{idx + 1}</span>
                </div>

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
                  <Link href={`/recruiter/projects/${proj.slug}`} className={styles.viewLink}>
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
