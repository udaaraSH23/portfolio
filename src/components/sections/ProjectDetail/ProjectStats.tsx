'use client';

import React from 'react';
import { m } from 'framer-motion';
import styles from './ProjectDetail.module.css';

interface ProjectStatsProps {
  role: string;
  year: string;
  client: string;
  links?: {
    live?: string;
    github?: string;
    docs?: string;
  };
}

export const ProjectStats = ({ role, year, client, links }: ProjectStatsProps) => {
  return (
    <m.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className={styles.projectStatsBar}
    >
      <div className={styles.statItem}>
        <span className={styles.statLabel}>Role</span>
        <span className={styles.statValue}>{role}</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>Year</span>
        <span className={styles.statValue}>{year || '2024'}</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>Client</span>
        <span className={styles.statValue}>{client || 'Internal'}</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>Links</span>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {links?.live && (
            <a href={links.live} target="_blank" rel="noopener noreferrer" className={styles.statLink} aria-label="View live project">
              <span className="material-symbols-outlined" aria-hidden="true">open_in_new</span>
            </a>
          )}
          {links?.github && (
            <a href={links.github} target="_blank" rel="noopener noreferrer" className={styles.statLink} aria-label="View source code on GitHub">
              <span className="material-symbols-outlined" aria-hidden="true">code</span>
            </a>
          )}
          {links?.docs && (
            <a href={links.docs} target="_blank" rel="noopener noreferrer" className={styles.statLink} aria-label="View documentation">
              <span className="material-symbols-outlined" aria-hidden="true">menu_book</span>
            </a>
          )}
        </div>
      </div>
    </m.div>
  );
};
