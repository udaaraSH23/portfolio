'use client';
import React from 'react';
import Link from 'next/link';
import styles from '../Portfolio.module.css';

export const PortfolioNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navLogo}>
        Udara.
      </Link>
      <div className={styles.navLinks}>
        <a href="#expertise">Expertise</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};
