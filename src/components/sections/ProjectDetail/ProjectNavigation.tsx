'use client';

import React from 'react';
import Link from 'next/link';
import { m } from 'framer-motion';
import styles from './ProjectDetail.module.css';

interface ProjectNavigationProps {
  nextProject: {
    slug: string;
    title: string;
  };
  basePath?: string;
}

export const ProjectNavigation = ({ nextProject, basePath = '/recruiter' }: ProjectNavigationProps) => {
  return (
    <section className={`${styles.fullBleedSection} ${styles.lightBg}`}>
      <div className={styles.sectionInner}>
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Link href={`${basePath}/projects/${nextProject.slug}`} className={styles.projectNav}>
            <div className={styles.navContent}>
              <span className={styles.navNextLabel}>Up Next</span>
              <span className={styles.navNextTitle}>{nextProject.title}</span>
            </div>
            <div className={styles.navIconWrapper}>
              <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>arrow_forward</span>
            </div>
          </Link>
        </m.div>
      </div>
    </section>
  );
};
