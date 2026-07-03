'use client';

import React, { useEffect, useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';

const MIN_DISPLAY_MS = 400;

export const Preloader = () => {
  // `null` = undecided (SSR / not yet mounted). false = not a first visit, render nothing.
  const [isActive, setIsActive] = useState<boolean | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // sessionStorage is client-only, so the first-visit decision must happen here,
    // not during render (which would cause an SSR/hydration mismatch).
    /* eslint-disable react-hooks/set-state-in-effect */
    const hasVisited = sessionStorage.getItem('visited');
    if (hasVisited) {
      setIsActive(false);
      return;
    }
    sessionStorage.setItem('visited', 'true');
    setIsActive(true);
    setIsVisible(true);
    /* eslint-enable react-hooks/set-state-in-effect */

    const startedAt = Date.now();
    let cancelled = false;

    // Real readiness signal: DOM + subresources loaded.
    const loaded = new Promise<void>((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', () => resolve(), { once: true });
      }
    });

    // Fonts settled, so text doesn't re-swap after the reveal.
    const fontsReady = document.fonts?.ready ?? Promise.resolve();

    Promise.all([loaded, fontsReady]).then(() => {
      if (cancelled) return;
      // Anti-flicker floor: never dismiss faster than the eye can register it.
      const elapsed = Date.now() - startedAt;
      const wait = Math.max(0, MIN_DISPLAY_MS - elapsed);
      window.setTimeout(() => {
        if (!cancelled) setIsVisible(false);
      }, wait);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  // Not a first visit — render nothing at all.
  if (isActive === false) return null;

  return (
    <AnimatePresence>
      {isVisible && (
      <m.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ 
          clipPath: 'inset(0 0 100% 0)',
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
        }}
        style={{
          position: 'fixed',
          inset: 0,
          background: '#0A192F',
          zIndex: 999999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Logo container */}
          <m.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '1px solid var(--ax-outline-variant)',
              background: '#112240',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '1.5rem',
              letterSpacing: '0.05em',
              boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
            }}
          >
            US
          </m.div>

          {/* Status Label */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              marginTop: '1.5rem',
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: '9px',
              color: 'var(--ax-accent)',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
            }}
          >
            Initializing_Core...
          </m.div>

          {/* Sweeping scan beam */}
          <m.div
            animate={{ top: ['-20%', '120%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              left: '-20%',
              width: '140%',
              height: '2px',
              background: 'var(--ax-accent)',
              boxShadow: '0 0 12px var(--ax-accent)',
              opacity: 0.6,
            }}
          />
        </div>
      </m.div>
      )}
    </AnimatePresence>
  );
};
