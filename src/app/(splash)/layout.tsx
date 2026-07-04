import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Udara Shanuka | Portfolio Gateway',
  description: 'Enter the portfolio of Udara Shanuka: select the Business Partner portal for high-performance website and AI assistant solutions, or the Technical Recruiter portal for systems engineering and devops expertise.',
};

export default function SplashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
