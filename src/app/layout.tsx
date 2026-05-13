import type { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import styles from '@/components/Base.module.css';
import { AnimationProvider } from '@/components/motion/AnimationProvider';

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

export const metadata: Metadata = {
  title: 'Udara Shanuka | Portfolio',
  description: 'Portfolio of Udara Shanuka, a developer driven by problem-solving and system design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        <div className={styles.portfolio}>
          <Navbar />
          <main>
            <AnimationProvider>
              {children}
            </AnimationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
