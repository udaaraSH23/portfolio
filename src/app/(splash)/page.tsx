'use client';

import React from 'react';
import Link from '@/components/motion/TransitionLink';
import { m } from 'framer-motion';
import styles from './Splash.module.css';

export default function SplashPage() {
  return (
    <div className={styles.container}>
      {/* Center Decorative Shield */}
      <m.div
        className={styles.centerLogo}
        animate={{
          scale: [1, 1.06, 1],
          boxShadow: [
            "0 0 20px rgba(0, 0, 0, 0.8)",
            "0 0 32px rgba(100, 255, 218, 0.25)",
            "0 0 20px rgba(0, 0, 0, 0.8)"
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span>US</span>
      </m.div>


      {/* Left: Client Path */}
      <Link href="/client" className={`${styles.pane} ${styles.clientPane}`}>
        <div className={styles.bgGrid} />
        <m.div
          className={styles.paneContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.iconWrapper}>
            <span className={`material-symbols-outlined ${styles.icon}`}>handshake</span>
          </div>
          <h2 className={styles.title}>Business Partner</h2>
          <p className={styles.description}>
            I want to build a website, online store, custom app, or set up an automated AI assistant. Show me outcomes, services, and how we can work together.
          </p>
          <button className={styles.ctaBtn}>
            <span>Explore Services</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </m.div>
      </Link>

      {/* Right: Recruiter Path */}
      <Link href="/recruiter" className={`${styles.pane} ${styles.recruiterPane}`}>
        <div className={styles.bgGrid} />
        <m.div
          className={styles.paneContent}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.iconWrapper}>
            <span className={`material-symbols-outlined ${styles.icon}`}>terminal</span>
          </div>
          <h2 className={styles.title}>Technical Recruiter</h2>
          <p className={styles.description}>
            I want to hire or contract a Full-Stack / DevOps Engineer. Show me the technical stack, codebase architecture, and systems engineering projects.
          </p>
          <button className={styles.ctaBtn}>
            <span>Inspect Tech Stack</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </m.div>
      </Link>
    </div>
  );
}
