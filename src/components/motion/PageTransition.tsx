'use client';

import { m, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useLayoutEffect, useState } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  // True from the moment a navigation is detected until the new route's
  // content has actually painted behind the loading screen — never a
  // guessed duration. Skips the very first render (initial load), since
  // prevPathname starts equal to pathname.
  const [isNavigating, setIsNavigating] = useState(false);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsNavigating(true);
  }

  useLayoutEffect(() => {
    if (!isNavigating) return;
    // Wait two frames: one for the new route's DOM to commit, one for the
    // browser to actually paint it, before lifting the loading screen.
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setIsNavigating(false));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [isNavigating]);

  return (
    <>
      <AnimatePresence>
        {isNavigating && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: '#0A192F',
              zIndex: 9998,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}
          >
            <m.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: '1px solid var(--ax-outline-variant)',
                background: '#112240',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
              }}
            >
              US
            </m.div>
          </m.div>
        )}
      </AnimatePresence>

      <div key={pathname}>{children}</div>
    </>
  );
};
