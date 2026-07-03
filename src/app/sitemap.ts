import type { MetadataRoute } from 'next';
import { projects } from './data/projects';

const SITE_URL = 'https://udarashanuka.axiolon.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = projects.map((project) => ({
    url: `${SITE_URL}/recruiter/projects/${project.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...projectPages,
  ];
}
