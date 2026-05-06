'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import baseStyles from '@/components/Base.module.css';
import { TechnicalBackground } from '@/components/effects/TechnicalBackground';
import { FadeIn } from '@/components/motion/FadeIn';
import { WordReveal } from '@/components/motion/TextReveal';
import { Magnetic } from '@/components/motion/Magnetic';
import { ImageMosaic } from '@/components/motion/ImageMosaic';

export const Hero = () => {
  return (
    <section className={styles.hero} style={{ position: 'relative', overflow: 'hidden' }}>
      <TechnicalBackground />
      <div className={styles.heroContent} style={{ position: 'relative', zIndex: 1 }}>
        <FadeIn direction="down" delay={0.2}>
          <span className={styles.heroName}>Udara Shanuka</span>
        </FadeIn>
        
        <h1 className={styles.h1}>
          <WordReveal text="Building systems that actually work at scale." />
        </h1>

        <FadeIn direction="up" delay={0.8} className={styles.heroDesc}>
          <p className={styles.heroSubtext}>
            Fullstack Developer & System Architect specialized in engineering 
            reliable, maintainable, and high-performance applications.
          </p>

          <p>
            I focus on bridging the gap between elegant user experiences and robust 
            technical infrastructure. My approach combines clean architecture with 
            automation to simplify complex workflows.
          </p>
        </FadeIn>

        <div className={styles.heroActions}>
          <Magnetic>
            <a href="/Udara-Shanuka-Resume.pdf" target="_blank" rel="noopener noreferrer" className={baseStyles.btnPrimary}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span> Download Resume
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className={baseStyles.btnSecondary}>
              Contact Me
            </a>
          </Magnetic>
        </div>
      </div>

      <div className={styles.heroImageContainer}>
        <div className={styles.imageGlow} />
        <div className={styles.portfolioImageWrapper}>
          {/* Base Static Image for Clarity */}
          <div className={styles.portfolioImage}>
             <Image
              src="/portfolio/Udara_Shanuka.png"
              alt="Udara Shanuka"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          
          {/* Animated Edge Fragments Overlay */}
          <ImageMosaic 
            src="/portfolio/Udara_Shanuka.png" 
            piecesCount={36} 
            className={styles.fragmentOverlay}
          />
        </div>
      </div>
    </section>
  );
};
