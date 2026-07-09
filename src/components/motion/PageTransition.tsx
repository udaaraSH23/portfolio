'use client';

import { m, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useLayoutEffect, useState, useEffect } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [isNavigating, setIsNavigating] = useState(false);
  const [shouldLiftLoader, setShouldLiftLoader] = useState(false);

  // If path changes, trigger the paint verification layout effect to lift the loader
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsNavigating(true);
    setShouldLiftLoader(true);
  }

  // Handle painting detection: wait two frames after a path change to lift the loader
  useLayoutEffect(() => {
    if (!shouldLiftLoader) return;
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        setIsNavigating(false);
        setShouldLiftLoader(false);
      });
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [shouldLiftLoader]);

  // Intercept navigation triggers
  useEffect(() => {
    const handleStart = () => setIsNavigating(true);
    const handleEnd = () => setIsNavigating(false);

    // 1. Intercept standard internal anchor clicks
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Ignore external/special links
      if (
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('sms:') ||
        href.startsWith('javascript:') ||
        anchor.getAttribute('target') === '_blank' ||
        anchor.hasAttribute('download')
      ) {
        return;
      }

      // Ignore modifier keys (Cmd/Ctrl + click)
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      try {
        const targetUrl = new URL(href, window.location.href);
        const currentUrl = new URL(window.location.href);

        // Ignore different origins
        if (targetUrl.origin !== currentUrl.origin) {
          return;
        }

        // Ignore hash jumps / same page scrolls
        if (
          targetUrl.pathname === currentUrl.pathname &&
          targetUrl.search === currentUrl.search
        ) {
          return;
        }

        // Internal navigation detected! Trigger loading immediately.
        setIsNavigating(true);
      } catch {
        // Invalid URL: fallback to normal behavior
      }
    };

    // 2. Intercept browser back/forward buttons
    const handlePopState = () => {
      setIsNavigating(true);
    };

    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('navigation-start', handleStart);
    window.addEventListener('navigation-end', handleEnd);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('navigation-start', handleStart);
      window.removeEventListener('navigation-end', handleEnd);
    };
  }, []);

  // 3. Safety Timeout: Ensure loader never gets stuck forever (e.g. if navigation is cancelled or fails)
  useEffect(() => {
    if (!isNavigating) return;
    const timer = setTimeout(() => {
      setIsNavigating(false);
      setShouldLiftLoader(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isNavigating]);

  return (
    <>
      <AnimatePresence>
        {isNavigating && (
          <>
            {/* Top Loading Progress Line */}
            <m.div
              initial={{ width: '0%', opacity: 1 }}
              animate={{ width: ['0%', '30%', '70%', '90%'] }}
              exit={{ width: '100%', opacity: 0 }}
              transition={{
                width: { times: [0, 0.2, 0.5, 0.9], duration: 4, ease: 'easeOut' },
                opacity: { duration: 0.2 }
              }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '4px',
                background: 'linear-gradient(90deg, var(--ax-secondary) 0%, var(--ax-accent) 100%)',
                boxShadow: '0 0 10px var(--ax-accent)',
                zIndex: 9999,
              }}
            />

            {/* Main overlay wrapper */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, pointerEvents: 'none' }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'fixed',
                inset: 0,
                background: '#0A192F',
                zIndex: 9998,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: shouldLiftLoader ? 'none' : 'auto', // release clicks immediately when path changes
              }}
            >
              {/* Premium Spinning Ring and Pulsing Brand Logo */}
              <div style={{ position: 'relative', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <m.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '3px solid transparent',
                    borderTopColor: 'var(--ax-secondary)',
                    borderRightColor: 'var(--ax-accent)',
                    boxShadow: '0 0 15px rgba(100, 255, 218, 0.15)',
                  }}
                />
                <m.div
                  animate={{ scale: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--ax-color-surface)',
                    border: '1px solid var(--ax-outline-variant)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--ax-color-text)',
                    fontWeight: 800,
                    fontSize: '1rem',
                    letterSpacing: '0.05em',
                    boxShadow: 'inset 0 0 8px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  US
                </m.div>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>

      <div key={pathname}>{children}</div>
    </>
  );
};
