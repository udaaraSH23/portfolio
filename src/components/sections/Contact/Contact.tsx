'use client';

import React from 'react';
import styles from './Contact.module.css';
import { FadeIn } from '@/components/motion/FadeIn';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <FadeIn direction="up" delay={0.1}>
          <h2 className={styles.title}>
            LET&apos;S ARCHITECT THE <br />
            <em>FUTURE</em> TOGETHER.
          </h2>

          <p className={styles.desc}>
            Currently seeking ambitious collaborations in system design, <br />
            DevOps engineering, and full-stack product architecture.
          </p>
          <p className={styles.remoteLine}>
            <span className="material-symbols-outlined">public</span>
            Open to remote work worldwide
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.2} className={styles.actions}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
};
