'use client';

import { m, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useLayoutEffect, useState, useEffect, useRef } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

// Only show the overlay if navigation takes longer than this. Prefetched
// routes resolve within a frame or two, so fast navigations never flash it.
const LOADER_DELAY_MS = 150;

export const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [isNavigating, setIsNavigating] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [shouldLiftLoader, setShouldLiftLoader] = useState(false);
  const lastLocation = useRef({ pathname: '', search: '' });

  // If path changes, trigger the paint verification layout effect to lift the loader
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setShouldLiftLoader(true);
  }

  // Reset the overlay as soon as navigation ends (render-time state adjustment)
  if (!isNavigating && showLoader) {
    setShowLoader(false);
  }

  // Snapshot the location after each route change so popstate can tell real
  // page changes apart from hash-only jumps
  useEffect(() => {
    lastLocation.current = {
      pathname: window.location.pathname,
      search: window.location.search,
    };
  }, [pathname]);

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

  // Navigation signals: TransitionLink dispatches 'navigation-start' for real
  // SPA navigations (via next/link onNavigate); popstate covers back/forward
  useEffect(() => {
    const handleStart = () => setIsNavigating(true);
    const handleEnd = () => setIsNavigating(false);

    const handlePopState = () => {
      const samePage =
        window.location.pathname === lastLocation.current.pathname &&
        window.location.search === lastLocation.current.search;
      lastLocation.current = {
        pathname: window.location.pathname,
        search: window.location.search,
      };
      // Hash-only history entries (e.g. #section jumps) don't need the loader
      if (!samePage) setIsNavigating(true);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('navigation-start', handleStart);
    window.addEventListener('navigation-end', handleEnd);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('navigation-start', handleStart);
      window.removeEventListener('navigation-end', handleEnd);
    };
  }, []);

  // Debounce the overlay so near-instant navigations never flash it
  useEffect(() => {
    if (!isNavigating) return;
    const timer = setTimeout(() => setShowLoader(true), LOADER_DELAY_MS);
    return () => clearTimeout(timer);
  }, [isNavigating]);

  // Safety timeout: ensure the loader never gets stuck forever (e.g. if navigation fails)
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
        {showLoader && (
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
