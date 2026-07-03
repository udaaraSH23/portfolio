import React from 'react';
import { ClientHero } from '@/components/sections/Hero/ClientHero';
import { Services } from '@/components/sections/Services/Services';
import { ClientProjects } from '@/components/sections/Projects/ClientProjects';
import { Testimonials } from '@/components/sections/Testimonials/Testimonials';
import { Contact } from '@/components/sections/Contact/Contact';
import { Footer } from '@/components/layout/Footer/Footer';
import { TerminalDivider } from '@/components/ui/DynamicDividers';

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
    </>

  );
}

