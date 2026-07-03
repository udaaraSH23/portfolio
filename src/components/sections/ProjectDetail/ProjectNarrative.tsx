'use client';

import React from 'react';
import Image from 'next/image';
import { FadeIn } from '@/components/motion/FadeIn';
import styles from './ProjectDetail.module.css';

interface ProjectNarrativeProps {
  problem: string;
  solution: string;
  image?: {
    src: string;
    alt: string;
  };
}

export const ProjectNarrative = ({ problem, solution, image }: ProjectNarrativeProps) => {
  // No image: keep the editorial sidebar layout.
  if (!image) {
    return (
      <section className={`${styles.fullBleedSection} ${styles.darkBg}`}>
        <div className={`${styles.sectionInner} ${styles.asymmetricGrid}`}>
          <FadeIn direction="up">
            <span className={styles.sectionWatermark}>01</span>
            <h2 className={styles.sectionHeading}>The Narrative</h2>
          </FadeIn>

          <div>
            <FadeIn direction="up" delay={0.2}>
              <div className={styles.pullQuote}>
                <p>{problem}</p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className={styles.editorialText}>
                <p>{solution}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    );
  }

  // With image: balanced 50/50, heading integrated into the copy column.
  return (
    <section className={`${styles.fullBleedSection} ${styles.darkBg}`}>
      <div className={`${styles.sectionInner} ${styles.narrativeImageLayout}`}>
        <FadeIn direction="up">
          <div className={styles.narrativeCopy}>
            <div className={styles.narrativeHeader}>
              <span className={styles.sectionWatermark}>01</span>
              <h2 className={styles.narrativeInlineHeading}>The Narrative</h2>
            </div>
            <div className={styles.pullQuote}>
              <p>{problem}</p>
            </div>
            <div className={styles.editorialText}>
              <p>{solution}</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <div className={styles.narrativeMockup}>
            <div className={styles.mockupBar}>
              <span className={`${styles.mockupDot} ${styles.mockupDotRed}`} />
              <span className={`${styles.mockupDot} ${styles.mockupDotYellow}`} />
              <span className={`${styles.mockupDot} ${styles.mockupDotGreen}`} />
              <div className={styles.mockupAddressBar} />
            </div>
            <div className={styles.mockupViewport}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.narrativeImage}
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
