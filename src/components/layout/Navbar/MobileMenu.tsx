'use client';

import React from 'react';
import { m, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from './Navbar.module.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string; isExternal?: boolean }[];
  crossover: { href: string; label: string; className: string };
}

export const MobileMenu = ({ isOpen, onClose, links, crossover }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <m.div
            className={styles.mobileBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <m.div
            className={styles.mobilePanel}
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Close Button */}
            <button className={styles.mobileClose} onClick={onClose}>
              <m.span
                initial={{ rotate: 0 }}
                animate={{ rotate: 90 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="material-symbols-outlined"
              >
                close
              </m.span>
            </button>

            {/* Links */}
            <nav className={styles.mobileNav}>
              {links.map((link, i) => (
                <m.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                >
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.mobileLink}
                      onClick={onClose}
                    >
                      <span className={styles.mobileLinkIndex}>0{i + 1}.</span>
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={styles.mobileLink}
                      onClick={onClose}
                    >
                      <span className={styles.mobileLinkIndex}>0{i + 1}.</span>
                      <span>{link.label}</span>
                    </Link>
                  )}
                </m.div>
              ))}

              {/* Crossover Link */}
              <m.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + links.length * 0.08, duration: 0.4 }}
                className={styles.mobileCrossover}
              >
                <Link href={crossover.href} className={crossover.className} onClick={onClose}>
                  <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>swap_horiz</span>
                  <span>{crossover.label}</span>
                </Link>
              </m.div>
            </nav>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
};
