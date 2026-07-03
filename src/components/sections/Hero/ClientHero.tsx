'use client';

import Image from 'next/image';
import { m, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';
import { FadeIn } from '@/components/motion/FadeIn';
import { TechnicalBackground } from '@/components/effects/TechnicalBackground';
import { FloatingGeometry } from '@/components/effects/FloatingGeometry';
import { Magnetic } from '@/components/motion/Magnetic';

export const ClientHero = () => {
  const { scrollY } = useScroll();
  const scrollDownOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section className={`${styles.hero} ${styles.clientHero}`}>
      {/* Floating engineered geometries in the background - warm accent color */}
      <FloatingGeometry color="var(--ax-secondary)" />

      {/* Subtle particle background behind left column */}
      <div className={styles.particleContainer}>
        <TechnicalBackground
          particleColor="rgba(242, 140, 40, 0.08)"
          connectionColor="rgba(242, 140, 40, 0.08)"
        />
      </div>

      {/* Animated Vertical Divider Line */}
      <div className={styles.verticalDivider}>
        <m.div
          className={`${styles.dividerScan} ${styles.verticalScan}`}
          animate={{ top: ['-10%', '110%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
        <m.div
          className={`${styles.dividerScan} ${styles.horizontalScan}`}
          animate={{ left: ['-10%', '110%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Left side: Description */}
      <div className={styles.leftColumn}>
        <div className={styles.heroContent}>
          <FadeIn direction="down" delay={0.2}>
            <span className={`${styles.heroName} ${styles.clientHeroName}`}>Udara Shanuka</span>
          </FadeIn>

          <h1 className={styles.h1}>
            <span>Custom websites and AI assistants that grow your business.</span>
          </h1>

          <FadeIn direction="up" delay={0.8} className={`${styles.heroDesc} ${styles.clientHeroDesc}`}>
            <p>
              I build fast, professional websites, online stores, and automated booking assistants that help businesses attract clients and run smoothly. 
            </p>
            <p>
              No complicated developer jargon. Just reliable, secure systems designed to get you results and save you time.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Right side: Full Image with premium clipPath wipe + slow scale */}
      <div className={styles.rightColumn}>
        <m.div
          className={styles.fullImage}
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
        >
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image
              src="/portfolio/Udara_Shanuka.png"
              alt="Udara Shanuka"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.heroImage}
            />
          </div>
        </m.div>
      </div>

      {/* Central Interactive Hub */}
      <div className={styles.centerHub}>
        <div className={styles.hubContainer}>
          {/* Left slice — sits slightly up */}
          <m.div
            className={styles.sliceWrap}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 20, delay: 1.2 }}
          >
            <a
              href="#projects"
              className={`${styles.slice} ${styles.sliceLeft}`}
            >
              <Magnetic>
                <span className={styles.sliceText}>SEE MY WORK</span>
              </Magnetic>
            </a>
          </m.div>

          {/* Right slice — sits slightly down */}
          <m.div
            className={styles.sliceWrap}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 20, delay: 1.2 }}
          >
            <a
              href="#contact"
              className={`${styles.slice} ${styles.sliceRight}`}
            >
              <Magnetic>
                <span className={styles.sliceText}>CONNECT NOW ➜</span>
              </Magnetic>
            </a>
          </m.div>
        </div>
      </div>


      {/* Scroll Down Indicator */}
      <m.div
        className={styles.scrollDown}
        style={{ opacity: scrollDownOpacity }}
      >
        <m.span
          className="material-symbols-outlined"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          keyboard_double_arrow_down
        </m.span>
      </m.div>
    </section>
  );
};
