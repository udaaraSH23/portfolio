'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './ThankYou.module.css';

const REDIRECT_SECONDS = 15;

export const ThankYouContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const destination = searchParams.get('from') || '/';
  const [secondsLeft, setSecondsLeft] = React.useState(REDIRECT_SECONDS);

  React.useEffect(() => {
    if (secondsLeft <= 0) {
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('navigation-start'));
      }
      router.replace(destination);
      return;
    }
    const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft, destination, router]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <span className={`material-symbols-outlined ${styles.icon}`}>check_circle</span>
        <h1 className={styles.title}>Thanks - your message is on its way</h1>
        <p className={styles.desc}>
          I&apos;ll get back to you soon. In the meantime, feel free to explore more of my work.
        </p>
        <p className={styles.redirectNote}>
          Redirecting you back in {secondsLeft}s -{' '}
          <a
            className={styles.homeLink}
            href={destination}
            onClick={(e) => {
              e.preventDefault();
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('navigation-start'));
              }
              router.replace(destination);
            }}
          >
            go now
          </a>
        </p>
      </div>
    </div>
  );
};
