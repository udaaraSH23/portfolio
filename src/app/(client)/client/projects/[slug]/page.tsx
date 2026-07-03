import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '../../../../data/projects';
import baseStyles from '@/components/Base.module.css';
import styles from './ClientProjectDetail.module.css';
import Link from 'next/link';

export function generateStaticParams() {
  // Only generate params for projects that have client-specific showcase data
  return projects.filter(p => p.clientData).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.clientData) {
    return { title: 'Project Not Found' };
  }

  return {
    title: project.clientData.title,
    description: project.clientData.subtitle,
  };
}

export default async function ClientProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project || !project.clientData) {
    notFound();
  }

  const { clientData } = project;

  return (
    <div className={styles.clientDetailWrapper}>
      {/* Custom Clean Back Button */}
      <div className={baseStyles.container}>
        <Link href="/client#projects" className={styles.backButton}>
          <span className="material-symbols-outlined">arrow_back</span>
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Client Project Hero */}
      <section className={styles.heroSection}>
        <div className={baseStyles.container}>
          <div className={styles.categoryBadge}>LIVE PROJECT</div>
          <h1 className={styles.projectTitle}>{clientData.title}</h1>
          <p className={styles.projectSubtitle}>{clientData.subtitle}</p>
          <a href={clientData.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveCta}>
            <span>Visit Live Project</span>
            <span className="material-symbols-outlined">open_in_new</span>
          </a>
        </div>
      </section>

      {/* Client Narrative */}
      <section className={styles.narrativeSection}>
        <div className={baseStyles.container}>
          <div className={styles.narrativeGrid}>
            <div className={styles.narrativeBlock}>
              <h3 className={styles.blockLabel}>THE CHALLENGE</h3>
              <h2 className={styles.blockHeading}>What needed fixing</h2>
              <p className={styles.blockText}>{clientData.problem}</p>
            </div>
            <div className={styles.narrativeBlock}>
              <h3 className={styles.blockLabel}>THE SOLUTION</h3>
              <h2 className={styles.blockHeading}>What I built for you</h2>
              <p className={styles.blockText}>{clientData.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Built */}
      <section className={styles.featuresSection}>
        <div className={baseStyles.container}>
          <h2 className={styles.sectionTitle}>Key Features & Integrations</h2>
          <div className={styles.featuresGrid}>
            {clientData.features.map((feature, idx) => (
              <div key={idx} className={styles.featureCard}>
                <span className={`material-symbols-outlined ${styles.featureIcon}`}>
                  {feature.icon}
                </span>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Outcomes / Results */}
      <section className={styles.resultsSection}>
        <div className={baseStyles.container}>
          <div className={styles.resultsCard}>
            <h2 className={styles.resultsTitle}>The Business Outcomes</h2>
            <ul className={styles.resultsList}>
              {clientData.results.map((result, idx) => (
                <li key={idx} className={styles.resultItem}>
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className={styles.bottomCtaSection}>
        <div className={baseStyles.container}>
          <h2 className={styles.ctaHeading}>Interested in a similar solution?</h2>
          <p className={styles.ctaSub}>Let&apos;s discuss how we can tailor this technology to match your business goals.</p>
          <div className={styles.ctaButtonsGroup}>
            <a href="/client#contact" className={styles.primaryCta}>
              <span>Start a conversation</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a href={clientData.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.secondaryCta}>
              <span>Explore Live Project</span>
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
