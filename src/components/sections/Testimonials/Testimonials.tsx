'use client';

import React from 'react';
import styles from './Testimonials.module.css';
import baseStyles from '@/components/Base.module.css';
import { FadeIn, FadeInStagger } from '@/components/motion/FadeIn';
import { testimonials } from '@/app/data/testimonials';

export const Testimonials = () => {
  const verified = testimonials.filter((t) => t.verified && t.quote.trim());

  return (
    <section id="testimonials" className={styles.section}>
      <div className={baseStyles.container}>
        <FadeIn className={styles.sectionHeader}>
          <div className={styles.headerLabel}>WHAT CLIENTS SAY</div>
          <h2 className={styles.headerTitle}>Trusted with real work</h2>
        </FadeIn>

        {verified.length > 0 ? (
          <FadeInStagger className={styles.grid}>
            {verified.map((t) => (
              <FadeIn key={t.author} direction="up" distance={30}>
                <figure className={styles.card}>
                  <span className={styles.quoteMark}>&ldquo;</span>
                  <blockquote className={styles.quote}>{t.quote}</blockquote>
                  <figcaption className={styles.author}>
                    <span className={styles.authorName}>{t.author}</span>
                    <span className={styles.authorRole}>{t.role}</span>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </FadeInStagger>
        ) : (
          // Reserved slot - shown until a real, permitted quote exists.
          <FadeIn className={styles.placeholderCard}>
            <span className="material-symbols-outlined">format_quote</span>
            <p className={styles.placeholderText}>
              A client testimonial will live here soon.
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
};
