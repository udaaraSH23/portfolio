'use client';

import Image from 'next/image';
import { m, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';
import { FadeIn } from '@/components/motion/FadeIn';

export const ClientHero = () => {
  const { scrollY } = useScroll();
  const scrollDownOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section className={`${styles.hero} ${styles.clientHero}`}>
      {/* Left side: Description */}
      <div className={styles.leftColumn}>
        <div className={styles.heroContent}>
          <FadeIn direction="down" delay={0.2}>
            <span className={`${styles.heroName} ${styles.clientHeroName}`}>Udara Shanuka</span>
          </FadeIn>

          <h1 className={styles.h1}>
            <span>Websites, apps, and complete business systems that grow with you.</span>
          </h1>

          <FadeIn direction="up" delay={0.8} className={`${styles.heroDesc} ${styles.clientHeroDesc}`}>
            <p>
              I build fast, professional websites, online stores, booking assistants, and the full custom platforms behind them - everything from a single landing page to multi-part systems with logins, dashboards, and payments.
            </p>
            <p>
              No complicated developer jargon. Just reliable, secure systems designed to get you results and scale with your business.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={1.1} className={styles.heroCtas}>
            <a href="#contact" className={`${styles.cta} ${styles.ctaFilled}`}>
              CONNECT NOW <span className={styles.ctaArrow}>➜</span>
            </a>
            <a href="#projects" className={`${styles.cta} ${styles.ctaGhost}`}>
              SEE MY WORK
            </a>
          </FadeIn>
        </div>
      </div>

      {/* Right side: Full Image with premium clipPath wipe + slow scale */}
      <div className={styles.rightColumn}>
        <m.div
          className={styles.fullImage}
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
        >
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image
              src="/portfolio/Udara_Shanuka.webp"
              alt="Udara Shanuka"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.heroImage}
            />
          </div>
        </m.div>
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
