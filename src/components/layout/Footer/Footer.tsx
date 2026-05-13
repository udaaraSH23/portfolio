'use client';

import React from 'react';
import styles from './Footer.module.css';
import baseStyles from '@/components/Base.module.css';
import heroStyles from '@/components/sections/Hero/Hero.module.css';
import { FadeIn } from '@/components/motion/FadeIn';

export const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footerContainer}>
        <FadeIn direction="up" delay={0.1}>
          <h2 className={styles.footerTitle}>
            LET'S ARCHITECT THE <br />
            <em>FUTURE</em> TOGETHER.
          </h2>

          <p className={styles.footerDesc}>
            Currently seeking ambitious collaborations in system design, <br />
            DevOps engineering, and full-stack product architecture.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.2} className={styles.footerActions}>
          <a href="mailto:udarasenarath875@gmail.com" className={styles.primaryAction}>
            <span className="material-symbols-outlined">alternate_email</span>
            CONTACT_ME
          </a>

          <div className={styles.socialGrid}>
            <a href="https://www.linkedin.com/in/udara-senarath-8b5a73263/" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
              <span className={styles.socialLabel}>LINKEDIN</span>
            </a>
            <a href="https://github.com/udaaraSH23" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
              <span className={styles.socialLabel}>GITHUB</span>
            </a>
            <a href="https://medium.com/@udarasenarath" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
              <span className={styles.socialLabel}>MEDIUM</span>
            </a>
          </div>
        </FadeIn>
      </div>

      <FadeIn direction="none" delay={0.4} className={styles.footerBottom}>
        <div className={styles.footerMeta}>
          <div className={styles.footerLogo}>UDARA_SHANUKA</div>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} // ALL_SYSTEMS_OPERATIONAL
          </p>
        </div>

        <div className={styles.systemStatus}>
          <span className={styles.statusLabel}>STATUS:</span>
          <span className={styles.statusValue}>AVAILABLE_FOR_HIRE</span>
        </div>
      </FadeIn>
    </footer>
  );
};
