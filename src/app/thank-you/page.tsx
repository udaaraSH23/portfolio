import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { ThankYouContent } from './ThankYouContent';

export const metadata: Metadata = {
  title: 'Thank You',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <Suspense fallback={null}>
      <ThankYouContent />
    </Suspense>
  );
}
