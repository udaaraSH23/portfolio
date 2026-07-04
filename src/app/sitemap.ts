import type { MetadataRoute } from 'next';
import { projects } from './data/projects';

const SITE_URL = 'https://udarashanuka.axiolon.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const recruiterProjectPages = projects.map((project) => ({
    url: `${SITE_URL}/recruiter/projects/${project.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const clientProjectPages = projects
    .filter((project) => project.clientData)
    .map((project) => ({
      url: `${SITE_URL}/client/projects/${project.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  return [
    {
      url: SITE_URL,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/client`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/recruiter`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...recruiterProjectPages,
    ...clientProjectPages,
  ];
}
