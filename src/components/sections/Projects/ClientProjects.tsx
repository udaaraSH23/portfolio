'use client';

import React from 'react';
import styles from './Projects.module.css';
import baseStyles from '@/components/Base.module.css';
import { FadeIn, FadeInStagger } from '@/components/motion/FadeIn';
import { TiltCard } from '@/components/motion/TiltCard';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/app/data/projects';

export const ClientProjects = () => {
  // Filter for projects that have client-specific showcase data
  const clientShowcase = projects.filter(proj => proj.clientData);

  return (
    <section id="projects" className={`${styles.section} ${styles.clientSection}`}>
      <div className={baseStyles.container}>
        <FadeIn className={styles.sectionHeader}>
          <div className={`${styles.headerLabel} ${styles.clientLabel}`}>SELECTED WORK</div>
          <h2 className={`${styles.headerTitle} ${styles.clientTitle}`}>Real Results, Live Systems</h2>
          <p className={`${styles.headerDesc} ${styles.clientDesc}`}>
            A look at some of the live websites, online stores, and AI voice solutions built to solve real-world business challenges.
          </p>
        </FadeIn>

        <FadeInStagger className={styles.projectsGrid}>
          {clientShowcase.map((proj, idx) => (
            <FadeIn key={idx} direction="up" distance={30}>
               <TiltCard className={`${styles.projectCard} ${styles.clientProjectCard}`}>
                {/* Phase 4: Structured Technical Thumbnail (Orange theme) */}
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
                        <pattern id={`grid-cli-${idx}`} width="16" height="16" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1" fill="var(--ax-secondary)" opacity="0.15" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#grid-cli-${idx})`} />
                      <line x1="0" y1="30%" x2="100%" y2="30%" stroke="var(--ax-secondary)" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.15" />
                      <line x1="40%" y1="0" x2="40%" y2="100%" stroke="var(--ax-secondary)" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.15" />
                    </svg>
                  )}
                  <span className={`${styles.ghostNum} ${styles.clientGhostNum}`}>0{idx + 1}</span>
                </div>

                <div className={styles.cardHeader}>
                  <span className={`${styles.projYear} ${styles.clientProjYear}`}>{proj.year?.split(' ')[0] || '2025'}</span>
                  <span className={`${styles.projCat} ${styles.clientProjCat}`}>LIVE PROJECT</span>
                </div>
                
                <h3 className={`${styles.cardTitle} ${styles.clientCardTitle}`}>
                  {proj.clientData?.title || proj.title}
                </h3>
                <p className={`${styles.cardDesc} ${styles.clientCardDesc}`}>
                  {proj.clientData?.subtitle || proj.shortDesc}
                </p>
                
                <div className={styles.cardTags}>
                  {proj.clientData?.features.slice(0, 3).map(f => (
                    <span key={f.title} className={`${styles.tag} ${styles.clientTag}`}>
                      {f.title}
                    </span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <Link href={`/client/projects/${proj.slug}`} className={`${styles.viewLink} ${styles.clientViewLink}`}>
                    <span>VIEW RESULTS</span>
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
