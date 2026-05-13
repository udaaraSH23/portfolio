import React from 'react';
import { Hero } from '@/components/sections/Hero/Hero';
import { Expertise } from '@/components/sections/Expertise/Expertise';
import { Projects } from '@/components/sections/Projects/Projects';
import { Footer } from '@/components/layout/Footer/Footer';
import { BlueprintDivider, DataFlowDivider, TerminalDivider } from '@/components/ui/DynamicDividers';
import { DockerArchitect } from '@/components/sections/DockerArchitect/DockerArchitect';

export default function PortfolioPage() {
  return (
    <>
      <Hero />
      <BlueprintDivider />
      <Expertise />
      <DataFlowDivider />
      <DockerArchitect />

      <Projects />
      <TerminalDivider />
      <Footer />
    </>
  );
}
