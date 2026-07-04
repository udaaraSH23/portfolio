'use client';

import Image from 'next/image';
import { m, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';
import { FadeIn } from '@/components/motion/FadeIn';
import { WordReveal } from '@/components/motion/TextReveal';

export const Hero = () => {
  const { scrollY } = useScroll();
  const scrollDownOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section className={styles.hero}>
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

          <FadeIn direction="up" delay={1.1} className={styles.heroCtas}>
            <a href="#contact" className={`${styles.cta} ${styles.ctaFilled}`}>
              WORK WITH ME <span className={styles.ctaArrow}>➜</span>
            </a>
            <a
              href="/Udara-Shanuka-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.cta} ${styles.ctaGhost}`}
            >
              HIRE ME
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
              style={{ objectFit: 'cover', objectPosition: 'center' }}
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
