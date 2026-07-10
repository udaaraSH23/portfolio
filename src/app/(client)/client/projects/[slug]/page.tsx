import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProjectBySlug, projects } from '../../../../data/projects';
import baseStyles from '@/components/Base.module.css';
import styles from './ClientProjectDetail.module.css';
import Link from '@/components/motion/TransitionLink';

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

/** Strips protocol / trailing slash so the browser mockup shows a clean domain. */
function displayUrl(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

export default async function ClientProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project || !project.clientData) {
    notFound();
  }

  const { clientData } = project;
  const stack = (project.tags ?? []).slice(0, 6);

  return (
    <div className={styles.clientDetailWrapper}>
      <div className={baseStyles.container}>
        {/* Custom Clean Back Button */}
        <Link href="/client#projects" className={styles.backButton}>
          <span className="material-symbols-outlined">arrow_back</span>
          <span>Back to Projects</span>
        </Link>

        {/* Client Project Hero - split layout */}
        <section className={styles.heroSection}>
          <div className={styles.heroCopy}>
            <div className={styles.categoryBadge}>
              <span className={styles.liveDot} />
              LIVE PROJECT
            </div>
            <h1 className={styles.projectTitle}>{clientData.title}</h1>
            <p className={styles.projectSubtitle}>{clientData.subtitle}</p>

            {stack.length > 0 && (
              <div className={styles.stackRow}>
                {stack.map((tech) => (
                  <span key={tech} className={styles.stackTag}>{tech}</span>
                ))}
              </div>
            )}

            <div className={styles.heroActions}>
              <a href={clientData.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveCta}>
                <span>Visit Live Project</span>
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
              <a href="/client#contact" className={styles.ghostCta}>
                <span>Start a similar project</span>
              </a>
            </div>
          </div>

          {project.narrativeImage && (
            <a
              href={clientData.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroMockup}
              aria-label="Open live project"
            >
              <div className={styles.browserBar}>
                <span className={styles.browserDots}>
                  <i /><i /><i />
                </span>
                <span className={styles.browserUrl}>{displayUrl(clientData.liveUrl)}</span>
              </div>
              <div className={styles.browserViewport}>
                <Image
                  src={project.narrativeImage.src}
                  alt={project.narrativeImage.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                  className={styles.mockupImage}
                  priority
                />
              </div>
            </a>
          )}
        </section>

        {/* Client Narrative - editorial two-column */}
        <section className={styles.narrativeSection}>
          <div className={styles.narrativeGrid}>
            <div className={styles.narrativeBlock}>
              <h3 className={styles.blockLabel}>The Challenge</h3>
              <p className={styles.blockText}>{clientData.problem}</p>
            </div>
            <div className={styles.narrativeBlock}>
              <h3 className={`${styles.blockLabel} ${styles.labelAccent}`}>The Solution</h3>
              <p className={styles.blockText}>{clientData.solution}</p>
            </div>
          </div>
        </section>

        {/* Key Features Built - clean list */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionHead}>
            <h3 className={styles.blockLabel}>What&apos;s Included</h3>
            <h2 className={styles.sectionTitle}>Key features &amp; integrations</h2>
          </div>
          <div className={styles.featuresGrid}>
            {clientData.features.map((feature, idx) => (
              <div key={idx} className={styles.featureItem}>
                <div className={styles.featureHead}>
                  <span className={`material-symbols-outlined ${styles.featureIcon}`}>
                    {feature.icon}
                  </span>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                </div>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Project Outcomes / Results - impact strip */}
        <section className={styles.resultsSection}>
          <div className={styles.sectionHead}>
            <h3 className={`${styles.blockLabel} ${styles.labelAccent}`}>The Impact</h3>
          </div>
          <div className={styles.impactStrip}>
            {clientData.results.map((result, idx) => (
              <div key={idx} className={styles.impactItem}>
                {result}
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className={styles.bottomCtaSection}>
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
        </section>
      </div>
    </div>
  );
}
