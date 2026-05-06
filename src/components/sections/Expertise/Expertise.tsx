'use client';

import React from 'react';
import styles from './Expertise.module.css';
import baseStyles from '@/components/Base.module.css';
import { FadeIn, FadeInStagger } from '@/components/motion/FadeIn';
import { TiltCard } from '@/components/motion/TiltCard';

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

export const Expertise = () => {
  return (
    <section id="expertise" className={baseStyles.section}>
      <FadeIn>
        <h2 className={baseStyles.sectionTitle}>Expertise</h2>
      </FadeIn>
      
      <FadeInStagger className={baseStyles.cardGrid}>
        {expertiseItems.map((item, idx) => (
          <FadeIn key={idx} direction="up" distance={20}>
            <TiltCard className={baseStyles.featureCard}>
              <div className={baseStyles.cardIconRow}>
                <span className="material-symbols-outlined" style={{ color: 'var(--ax-accent)', fontSize: '32px' }}>{item.icon}</span>
                <span className={baseStyles.cardNum}>0{idx + 1}</span>
              </div>
              <h3 className={baseStyles.cardTitle}>{item.title}</h3>
              <p className={baseStyles.cardDesc}>
                {item.desc}
              </p>
              <div className={baseStyles.cardTags}>
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className={baseStyles.tag}>{tag}</span>
                ))}
              </div>
            </TiltCard>
          </FadeIn>
        ))}
      </FadeInStagger>
    </section>
  );
};
