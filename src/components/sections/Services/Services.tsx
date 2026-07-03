'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { m } from 'framer-motion';
import { Magnetic } from '@/components/motion/Magnetic';
import styles from './Services.module.css';
import baseStyles from '@/components/Base.module.css';
import { FadeIn, FadeInStagger } from '@/components/motion/FadeIn';
import { services, processSteps } from '@/app/data/services';

export const Services = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className={styles.section}>
      <div className={baseStyles.container}>
        <FadeIn className={styles.sectionHeader}>
          <div className={styles.headerLabel}>SERVICES</div>
          <h2 className={styles.headerTitle}>What I can build for you</h2>
          <p className={styles.headerDesc}>
            Practical software that helps your business run and grow — explained
            in plain language, with real projects to back it up.
          </p>
        </FadeIn>

        <FadeInStagger className={styles.servicesGrid}>
          {services.map((service, idx) => {
            // Bento roles: 0 = large dark feature, 3 = wide horizontal, rest = compact tiles.
            const isFeatured = idx === 0;
            const isWide = idx === services.length - 1;
            const cardClass = [
              styles.serviceCard,
              isFeatured ? styles.featured : '',
              isWide ? styles.wide : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <FadeIn key={service.title} direction="up" distance={30} className={cardClass}>
                <span className={styles.cardNum}>0{idx + 1}</span>

                <div className={styles.cardBody}>
                  <div className={styles.iconWrapper}>
                    <span className={`material-symbols-outlined ${styles.serviceIcon}`}>
                      {service.icon}
                    </span>
                  </div>
                  <div className={styles.cardHeadings}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDesc}>{service.desc}</p>
                  </div>
                </div>

                {service.features && (isFeatured || isWide) && (
                  <ul className={styles.featuresList}>
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className={styles.featureItem}>
                        <span className={`material-symbols-outlined ${styles.featureIcon}`}>
                          done
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {service.proofSlug && (
                  <Link href={`/projects/${service.proofSlug}`} className={styles.proofLink}>
                    <span className="material-symbols-outlined">check_circle</span>
                    <span className={styles.proofText}>
                      See it in action: {service.proofLabel}
                    </span>
                    <span className={`material-symbols-outlined ${styles.proofArrow}`}>
                      arrow_forward
                    </span>
                  </Link>
                )}
              </FadeIn>
            );
          })}
        </FadeInStagger>

        <FadeIn className={styles.processHeader}>
          <div className={styles.headerLabel}>HOW IT WORKS</div>
          <h3 className={styles.processTitle}>A simple path from idea to launch</h3>
        </FadeIn>

        <FadeInStagger className={styles.processGrid}>
          {processSteps.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <FadeIn
                key={step.title}
                direction="up"
                distance={20}
                className={`${styles.processStepWrapper} ${isActive ? styles.wrapperActive : ''}`}
              >
                <div className={`${styles.processStep} ${isActive ? styles.active : ''}`}>
                  <span className={styles.processNum}>0{idx + 1}</span>
                  <div className={styles.processIconWrapper}>
                    <span className={`material-symbols-outlined ${styles.processIcon}`}>
                      {step.icon}
                    </span>
                  </div>
                  <h4 className={styles.processStepTitle}>{step.title}</h4>
                  <p className={styles.processStepDesc}>{step.desc}</p>
                  
                  {/* Phase 4: Dynamic progress bar */}
                  {isActive && (
                    <m.div
                      className={styles.progressBar}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 2.5, ease: 'linear' }}
                      style={{ originX: 0 }}
                    />
                  )}
                </div>

              </FadeIn>
            );
          })}
        </FadeInStagger>

        <FadeIn className={styles.ctaRow}>
          <Magnetic>
            <a href="#contact" className={styles.ctaButton}>
              <span>Start a conversation</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </Magnetic>
        </FadeIn>

      </div>
    </section>
  );
};
