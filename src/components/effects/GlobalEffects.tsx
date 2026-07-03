'use client';

import { CustomCursor } from './CustomCursor';
import { ScrollProgress } from './ScrollProgress';
import { Preloader } from './Preloader';

/**
 * Client-side global effects bundle.
 * Renders effects that need 'use client' and Framer Motion context.
 */
export const GlobalEffects = () => {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
    </>
  );
};

