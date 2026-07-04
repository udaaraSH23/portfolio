import type { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import './globals.css';
import styles from '@/components/Base.module.css';
import { AnimationProvider } from '@/components/motion/AnimationProvider';
import { GlobalEffects } from '@/components/effects/GlobalEffects';
import { PageTransition } from '@/components/motion/PageTransition';

const roboto = Roboto({
  variable: '--ax-font-body',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: '--ax-font-heading',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
});

const SITE_URL = 'https://udarashanuka.axiolon.com';
const SITE_DESCRIPTION =
  'Udara Shanuka builds and deploys web applications and backend systems - from business websites and AI booking assistants to e-commerce backends and cloud infrastructure.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Udara Shanuka | Full-Stack & DevOps Engineer',
    template: '%s | Udara Shanuka',
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Udara Shanuka',
    title: 'Udara Shanuka | Full-Stack & DevOps Engineer',
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Udara Shanuka | Full-Stack & DevOps Engineer',
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Udara Shanuka',
    jobTitle: 'Full-Stack & DevOps Engineer',
    url: SITE_URL,
    sameAs: [
      'https://github.com/udaaraSH23',
    ],
    description: SITE_DESCRIPTION,
    knowsAbout: [
      'Full-Stack Development',
      'DevOps',
      'Kubernetes',
      'Terraform',
      'Next.js',
      'Go',
      'Node.js',
      'Spring Boot',
      'Cloud Infrastructure',
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link rel="alternate" type="text/markdown" title="LLM-friendly version" href="/llms.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        {/* Noise texture overlay - pure CSS, no JS */}
        <div className="noiseOverlay" aria-hidden="true" />

        <div className={styles.portfolio}>
          <main>
            <AnimationProvider>
              <GlobalEffects />
              <PageTransition>
                {children}
              </PageTransition>
            </AnimationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
