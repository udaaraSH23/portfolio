import React from 'react';
import { PortfolioHero } from './components/PortfolioHero';
import { ExpertiseGrid } from './components/ExpertiseGrid';
import { ProjectsSection } from './components/ProjectsSection';
import styles from './Portfolio.module.css';

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <ExpertiseGrid />
      <ProjectsSection />
      
      {/* Footer Section */}
      <footer id="contact" className={styles.section} style={{ textAlign: 'center', borderTop: '1px solid var(--ax-outline-variant)' }}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
          Interested in working together or just want to talk tech?
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <a href="mailto:udarasenarath875@gmail.com" className={styles.navLogo} style={{ fontSize: '1.1rem' }}>Email</a>
          <a href="https://www.linkedin.com/in/udara-senarath-8b5a73263/" target="_blank" rel="noopener noreferrer" className={styles.navLogo} style={{ fontSize: '1.1rem' }}>LinkedIn</a>
          <a href="https://github.com/udaaraSH23" target="_blank" rel="noopener noreferrer" className={styles.navLogo} style={{ fontSize: '1.1rem' }}>GitHub</a>
          <a href="https://medium.com/@udarasenarath" target="_blank" rel="noopener noreferrer" className={styles.navLogo} style={{ fontSize: '1.1rem' }}>Medium</a>
        </div>
        <p style={{ marginTop: '4rem', opacity: 0.5, fontSize: '0.8rem' }}>
          © 2026 Udara Shanuka. All rights reserved.
        </p>
      </footer>
    </>
  );
}
