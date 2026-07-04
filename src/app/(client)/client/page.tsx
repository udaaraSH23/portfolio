import React from 'react';
import type { Metadata } from 'next';
import { ClientHero } from '@/components/sections/Hero/ClientHero';
import { Services } from '@/components/sections/Services/Services';
import { ClientProjects } from '@/components/sections/Projects/ClientProjects';
import { Testimonials } from '@/components/sections/Testimonials/Testimonials';
import { Contact } from '@/components/sections/Contact/Contact';
import { Footer } from '@/components/layout/Footer/Footer';
import { TerminalDivider } from '@/components/ui/DynamicDividers';
import { ProjectCompass } from '@/components/sections/ProjectCompass/ProjectCompass';

export const metadata: Metadata = {
  title: 'Business Websites & AI Booking Assistants',
  description: 'Get custom, high-speed business websites, headless e-commerce systems, and 24/7 automated AI voice/chat booking assistants tailored to your industry goals.',
};

export default function ClientPage() {
  return (
    <>
      <ClientHero />
      <Services />
      <ClientProjects />
      <Testimonials />
      <TerminalDivider />
      <Contact />
      <Footer />
      <ProjectCompass />
    </>

  );
}

