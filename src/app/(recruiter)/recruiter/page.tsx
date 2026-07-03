import React from 'react';
import { Hero } from '@/components/sections/Hero/Hero';
import { Expertise } from '@/components/sections/Expertise/Expertise';
import { Projects } from '@/components/sections/Projects/Projects';
import { Contact } from '@/components/sections/Contact/Contact';
import { Footer } from '@/components/layout/Footer/Footer';
import { BlueprintDivider, DataFlowDivider, TerminalDivider } from '@/components/ui/DynamicDividers';
import { DockerArchitect } from '@/components/sections/DockerArchitect/DockerArchitect';

export default function RecruiterPage() {
  return (
    <>
      <Hero />
      <BlueprintDivider />
      <Expertise />
      <DataFlowDivider />
      <DockerArchitect />
      <Projects />
      <TerminalDivider />
      <Contact />
      <Footer />
    </>

  );
}

