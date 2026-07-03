'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';
import { Magnetic } from '@/components/motion/Magnetic';

export const Footer = () => {
  const pathname = usePathname() || '';
  const isClientRoute = pathname.startsWith('/client');

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Row 2: Footer Bottom Metadata */}
        <div className={styles.bottomRow}>

          <div className={styles.copyright}>
            UDARA_SHANUKA <span className={styles.year}>© {new Date().getFullYear()}</span>
          </div>

          <div className={styles.socials}>
            <Magnetic>
              <a href="https://www.linkedin.com/in/udara-senarath-8b5a73263/" target="_blank" rel="noopener noreferrer" className={isClientRoute ? styles.clientSocialLink : styles.recruiterSocialLink}>LINKEDIN</a>
            </Magnetic>
            <Magnetic>
              <a href="https://github.com/udaaraSH23" target="_blank" rel="noopener noreferrer" className={isClientRoute ? styles.clientSocialLink : styles.recruiterSocialLink}>GITHUB</a>
            </Magnetic>
            <Magnetic>
              <a href="https://medium.com/@udarasenarath" target="_blank" rel="noopener noreferrer" className={isClientRoute ? styles.clientSocialLink : styles.recruiterSocialLink}>MEDIUM</a>
            </Magnetic>
          </div>

          <div className={styles.systemStatus}>
            <span className={styles.statusDot} />
            <span className={styles.statusText}>AVAILABLE_FOR_HIRE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
