'use client';
import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/#expertise">Expertise</Link>
        <Link href="/#projects">Projects</Link>
        <Link href="/#contact">Contact</Link>
      </div>
    </nav>
  );
};
