import React from 'react';
import { Hero } from '@/components/sections/Hero/Hero';
import { Expertise } from '@/components/sections/Expertise/Expertise';
import { Projects } from '@/components/sections/Projects/Projects';
import { Footer } from '@/components/layout/Footer/Footer';

export default function PortfolioPage() {
  return (
    <>
      <Hero />
      <Expertise />
      <Projects />
      <Footer />
    </>
  );
}
