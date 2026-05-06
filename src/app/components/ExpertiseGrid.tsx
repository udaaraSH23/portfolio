import React from 'react';
import styles from '../Portfolio.module.css';

const expertiseItems = [
  {
    title: 'Frontend',
    icon: 'developer_mode',
    desc: 'Crafting responsive, high-performance user interfaces with modern frameworks.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'SCSS']
  },
  {
    title: 'Backend',
    icon: 'dns',
    desc: 'Designing scalable APIs and robust server-side logic for complex data flows.',
    tags: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis']
  },
  {
    title: 'Fullstack',
    icon: 'layers',
    desc: 'Bridging the gap between user experience and technical infrastructure.',
    tags: ['Architecture', 'System Design', 'API Integration']
  },
  {
    title: 'DevOps',
    icon: 'terminal',
    desc: 'Automating deployments and managing cloud infrastructure for high availability.',
    tags: ['Docker', 'Kubernetes', 'CI/CD', 'GCP', 'AWS']
  }
];

export const ExpertiseGrid = () => {
  return (
    <section id="expertise" className={styles.section}>
      <h2 className={styles.sectionTitle}>Expertise</h2>
      <div className={styles.expertiseGrid}>
        {expertiseItems.map((item, idx) => (
          <div key={idx} className={styles.expertiseCard}>
            <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', color: 'var(--ax-secondary)', marginBottom: '1.5rem', display: 'block' }}>
              {item.icon}
            </span>
            <h3 className={item.title === 'Frontend' ? styles.cardTitle : styles.cardTitle}>{item.title}</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.5', margin: '0 0 1.5rem 0' }}>{item.desc}</p>
            <div className={styles.cardTags}>
              {item.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
