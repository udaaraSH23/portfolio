'use client';

import Image from 'next/image';
import { m } from 'framer-motion';
import styles from './Hero.module.css';
import { FadeIn } from '@/components/motion/FadeIn';
import { WordReveal } from '@/components/motion/TextReveal';

export const Hero = () => {
  return (
    <section className={styles.hero}>

      {/* Animated Vertical Divider Line */}
      <div className={styles.verticalDivider}>
        {/* Desktop Vertical Scan */}
        <m.div
          className={`${styles.dividerScan} ${styles.verticalScan}`}
          animate={{ top: ['-10%', '110%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        {/* Mobile Horizontal Scan */}
        <m.div
          className={`${styles.dividerScan} ${styles.horizontalScan}`}
          animate={{ left: ['-10%', '110%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Left side: Description */}
      <div className={styles.leftColumn}>
        <div className={styles.heroContent}>
          <FadeIn direction="down" delay={0.2}>
            <span className={styles.heroName}>Udara Shanuka</span>
          </FadeIn>

          <h1 className={styles.h1}>
            <WordReveal text="Building systems that actually work at scale." />
          </h1>

          <FadeIn direction="up" delay={0.8} className={styles.heroDesc}>
            <p>
              Focused on building maintainable applications and learning how modern software systems are designed and operated. I enjoy working with frontend technologies, backend services, databases, containers, and CI/CD workflows.
            </p>
            <p style={{ marginTop: '1rem' }}>
              I’m especially interested in clean architecture, developer experience, and creating software that is practical to use and easy to manage over time.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Right side: Full Image */}
      <div className={styles.rightColumn}>
        <div className={styles.fullImage}>
          <Image
            src="/portfolio/Udara_Shanuka.png"
            alt="Udara Shanuka"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      </div>

      {/* Central Interactive Hub */}
      <div className={styles.centerHub}>
        {/* Buttons attached to either side */}
        <div className={styles.hubActions}>
          <m.a
            href="/Udara-Shanuka-Resume.pdf"
            target="_blank"
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: -90, opacity: 1 }}
            transition={{ type: 'spring', damping: 20, delay: 1.2 }}
            className={`${styles.hubBtn} ${styles.resumeBtn}`}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
            Resume
          </m.a>

          <m.a
            href="#contact"
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 90, opacity: 1 }}
            transition={{ type: 'spring', damping: 20, delay: 1.2 }}
            className={`${styles.hubBtn} ${styles.contactBtn}`}
          >
            Contact
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
          </m.a>
        </div>

        {/* Animated Circle */}
        <m.div
          className={styles.interactiveCircle}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 15, delay: 1 }}
        >
          <div className={styles.techGrid} />

          <div className={styles.circleCore}>
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              {/* Concentric Dashed Rings */}
              {[1, 2, 3].map((i) => (
                <m.circle
                  key={i}
                  cx="50"
                  cy="50"
                  r={15 * i}
                  fill="none"
                  stroke="var(--ax-accent)"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                />
              ))}

              {/* Pulsing Crosshair */}
              <m.path
                d="M 50 10 L 50 90 M 10 50 L 90 50"
                stroke="var(--ax-accent)"
                strokeWidth="0.5"
                opacity="0.3"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Rotating Scanner Line */}
              <m.line
                x1="50"
                y1="50"
                x2="50"
                y2="10"
                stroke="var(--ax-accent)"
                strokeWidth="1"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ originX: '50px', originY: '50px' }}
              />
            </svg>
          </div>
        </m.div>
      </div>
    </section>
  );
};
