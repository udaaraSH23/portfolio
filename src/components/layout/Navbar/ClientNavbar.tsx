'use client';

import React, { useState, useEffect } from 'react';
import Link from '@/components/motion/TransitionLink';
import { m, useScroll, useTransform } from 'framer-motion';
import styles from './Navbar.module.css';
import { MobileMenu } from './MobileMenu';

const NAV_SECTIONS = ['services', 'projects', 'testimonials', 'contact'];

const NAV_LINKS = [
  { href: '/client', label: 'Home', section: '' },
  { href: '/client#services', label: 'Services', section: 'services' },
  { href: '/client#projects', label: 'Selected Work', section: 'projects' },
  { href: '/client#contact', label: 'Start a Project', section: 'contact' },
];

export const ClientNavbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  // Scroll-aware transforms
  const navPadding = useTransform(scrollY, [0, 200], [12, 8]);
  const navBlur = useTransform(scrollY, [0, 200], [12, 20]);
  const navBg = useTransform(scrollY, [0, 200], [
    'rgba(10, 25, 47, 0.7)',
    'rgba(10, 25, 47, 0.92)',
  ]);

  // Active section tracking
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_SECTIONS.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <m.nav
        className={styles.navbar}
        style={{
          paddingTop: navPadding,
          paddingBottom: navPadding,
          backdropFilter: useTransform(navBlur, (v) => `blur(${v}px)`),
          WebkitBackdropFilter: useTransform(navBlur, (v) => `blur(${v}px)`),
          background: navBg,
        }}
      >
        {/* Desktop Links */}
        <div className={styles.navLinks}>
          {NAV_LINKS.map((link) => {
            const isActive = link.section && activeSection === link.section;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? styles.activeLink : ''}
              >
                {link.label}
                {isActive && (
                  <m.span
                    layoutId="navIndicatorClient"
                    className={styles.activeDot}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <Link href="/recruiter" className={styles.crossoverLinkClient}>
            Technical Portfolio
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </m.nav>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
        crossover={{
          href: '/recruiter',
          label: 'Technical Portfolio',
          className: styles.mobileCrossoverClient,
        }}
      />
    </>
  );
};
