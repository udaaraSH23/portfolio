import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero/Hero';
import { Expertise } from '@/components/sections/Expertise/Expertise';
import { Projects } from '@/components/sections/Projects/Projects';
import { Contact } from '@/components/sections/Contact/Contact';
import { Footer } from '@/components/layout/Footer/Footer';
import { BlueprintDivider, DataFlowDivider, TerminalDivider } from '@/components/ui/DynamicDividers';
import { DockerArchitect } from '@/components/sections/DockerArchitect/DockerArchitect';

export const metadata: Metadata = {
  title: 'DevOps & Full-Stack Systems Engineering Portfolio',
  description: 'Inspect the technical portfolio of Udara Shanuka: cloud automation (Terraform, Ansible), container orchestration (Kubernetes, Helm, ArgoCD), clean architectures (Go, Node.js), and SSO configurations.',
};

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

