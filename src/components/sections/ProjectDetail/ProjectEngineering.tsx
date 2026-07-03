'use client';

import React from 'react';
import { FadeIn } from '@/components/motion/FadeIn';
import styles from './ProjectDetail.module.css';
import baseStyles from '@/components/Base.module.css';

interface TechnicalSection {
  title: string;
  content: string;
}

interface ProjectEngineeringProps {
  architecture?: {
    summary: string;
    stack: string[];
  };
  technicalSections?: TechnicalSection[];
}

export const ProjectEngineering = ({ architecture, technicalSections }: ProjectEngineeringProps) => {
  return (
    <section className={`${styles.fullBleedSection} ${styles.darkBg} ${styles.gridPaper}`}>
      <div className={`${styles.sectionInner} ${styles.asymmetricGrid}`}>
        <FadeIn direction="up">
          <span className={styles.sectionWatermark}>03</span>
          <h2 className={styles.sectionHeading}>Engineering</h2>
        </FadeIn>
        
        <div className={styles.technicalContent}>
          <FadeIn direction="up" delay={0.2}>
            <div className={styles.terminalWindow}>
              <div className={styles.terminalHeader}>
                <div className={styles.terminalDot} style={{ background: '#ff5f56' }}></div>
                <div className={styles.terminalDot} style={{ background: '#ffbd2e' }}></div>
                <div className={styles.terminalDot} style={{ background: '#27c93f' }}></div>
                <span style={{ marginLeft: '10px', fontSize: '0.7rem', opacity: 0.5, letterSpacing: '0.1em', fontFamily: 'var(--font-mono, monospace)' }}>ARCHITECTURE_MANIFEST.json</span>
              </div>
              
              <div className={styles.terminalContent}>
                {architecture && (
                  <div style={{ marginBottom: '3rem' }}>
                    <p style={{ color: 'var(--ax-accent)', fontWeight: 900, marginBottom: '1.25rem', fontFamily: 'var(--font-mono, monospace)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>{"// SYSTEM_OVERVIEW"}</p>
                    <p style={{ color: 'white', lineHeight: 1.6, fontSize: '1.15rem', fontWeight: 300 }}>
                      {architecture.summary}
                    </p>
                    <div className={styles.techStackGrid} style={{ marginTop: '2rem' }}>
                      {architecture.stack.map(tech => (
                        <span 
                          key={tech} 
                          className={baseStyles.tag} 
                          style={{ 
                            background: 'rgba(16, 185, 129, 0.1)', 
                            color: 'var(--ax-accent)', 
                            border: '1px solid rgba(16, 185, 129, 0.2)', 
                            fontSize: '0.7rem' 
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
                  {technicalSections?.map((section, i) => (
                    <div key={i} style={{ borderLeft: '2px solid rgba(16, 185, 129, 0.2)', paddingLeft: '1.5rem' }}>
                      <p style={{ color: 'var(--ax-accent)', fontWeight: 900, marginBottom: '0.75rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono, monospace)', letterSpacing: '0.1em' }}>0{i + 1}_MODULE: {section.title.toUpperCase()}</p>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300 }}>
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
