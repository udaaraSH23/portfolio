import React from 'react';
import styles from '../Portfolio.module.css';

import Link from 'next/link';
import { projects } from '../data/projects';

export const ProjectsSection = () => {
  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.sectionTitle}>Projects & Research</h2>
      <div className={styles.expertiseGrid}>
        {projects.map((proj, idx) => (
          <div key={idx} className={styles.expertiseCard}>
            <span className={styles.prowCat} style={{ color: 'var(--ax-secondary-container)', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', display: 'block' }}>
              {proj.category}
            </span>
            <h3 className={styles.cardTitle}>{proj.title}</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.5', margin: '0 0 1.5rem 0' }}>{proj.shortDesc}</p>
            <div className={styles.cardTags}>
              {proj.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <Link href={`/projects/${proj.slug}`} style={{ display: 'inline-block', marginTop: '1.5rem', fontSize: '0.85rem', fontWeight: 800, color: 'var(--ax-primary)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
              View Project
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
