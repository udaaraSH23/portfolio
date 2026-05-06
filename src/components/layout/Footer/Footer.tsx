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
        <FadeIn direction="up">
          <span className={heroStyles.heroName} style={{ justifyContent: 'center', marginBottom: '1rem' }}>Get in Touch</span>
          
          <h2 className={styles.footerTitle}>
            Let's build something <br />
            <em>exceptional</em> together.
          </h2>
          
          <p className={styles.footerDesc}>
            Whether you have a specific project in mind or just want to discuss the latest in system design and product engineering, my inbox is always open.
          </p>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.2} className={styles.footerActions}>
          <a href="mailto:udarasenarath875@gmail.com" className={baseStyles.btnPrimary}>
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>mail</span>
            Send an Email
          </a>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/udara-senarath-8b5a73263/" target="_blank" rel="noopener noreferrer" className={heroStyles.socialLink}>LinkedIn</a>
            <a href="https://github.com/udaaraSH23" target="_blank" rel="noopener noreferrer" className={heroStyles.socialLink}>GitHub</a>
            <a href="https://medium.com/@udarasenarath" target="_blank" rel="noopener noreferrer" className={heroStyles.socialLink}>Medium</a>
          </div>
        </FadeIn>

        <FadeIn direction="none" delay={0.4} className={styles.footerBottom}>
          <div className={styles.footerLogo}>Udara Shanuka</div>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Udara Shanuka. All rights reserved.
          </p>
        </FadeIn>
      </div>
    </footer>
  );
};
