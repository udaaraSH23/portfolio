import React from 'react';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '../../data/projects';
import styles from '../ProjectDetail.module.css';
import baseStyles from '@/components/Base.module.css';

// Sub-components
import { ProjectHero } from '@/components/sections/ProjectDetail/ProjectHero';
import { ProjectStats } from '@/components/sections/ProjectDetail/ProjectStats';
import { ProjectNarrative } from '@/components/sections/ProjectDetail/ProjectNarrative';
import { ProjectFeatures } from '@/components/sections/ProjectDetail/ProjectFeatures';
import { ProjectEngineering } from '@/components/sections/ProjectDetail/ProjectEngineering';
import { ProjectNavigation } from '@/components/sections/ProjectDetail/ProjectNavigation';
import { BackButton } from '@/components/sections/ProjectDetail/BackButton';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex(p => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className={baseStyles.portfolio}>
      <BackButton />

      <ProjectHero 
        title={project.title}
        category={project.category}
        tags={project.tags}
      />

      <ProjectStats 
        role={project.role}
        year={project.year || '2024'}
        client={project.client || 'Internal'}
        links={project.links}
      />

      <main className={styles.projectMain}>
        <ProjectNarrative 
          problem={project.problem || project.shortDesc}
          solution={project.solution || project.fullDesc}
        />

        <ProjectFeatures 
          features={project.keyFeatures || []}
        />

        <ProjectEngineering 
          architecture={project.architecture}
          technicalSections={project.technicalSections}
        />

        <ProjectNavigation 
          nextProject={nextProject}
        />
      </main>
    </div>
  );
}
