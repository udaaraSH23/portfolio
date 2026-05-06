import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, projects } from '../../data/projects';
import styles from '../../Portfolio.module.css';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex(p => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className={styles.portfolio}>
      {/* Back Button Overlay */}
      <div style={{ position: 'fixed', top: '100px', left: '6vw', zIndex: 100 }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span> Back
        </Link>
      </div>

      <header className={styles.projectPageHero}>
        <span className={styles.projectCategory}>{project.category}</span>
        <h1 className={styles.projectTitle}>{project.title}</h1>
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {project.tags.map(tag => (
            <span key={tag} className={styles.tag} style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', background: 'transparent' }}>
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Stats Bar */}
      <div className={styles.projectStatsBar}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Role</span>
          <span className={styles.statValue}>{project.role}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Year</span>
          <span className={styles.statValue}>{project.year || '2024'}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Client</span>
          <span className={styles.statValue}>{project.client || 'Internal'}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Links</span>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {project.links?.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ax-secondary-container)' }}>
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
            )}
            {project.links?.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ax-primary)' }}>
                <span className="material-symbols-outlined">code</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <main className={styles.projectMain}>
        {/* Section 1: Overview */}
        <section className={`${styles.fullBleedSection} ${styles.lightBg}`}>
          <div className={`${styles.sectionInner} ${styles.asymmetricGrid}`}>
            <div>
              <span className={styles.sectionWatermark}>01</span>
              <h2 className={styles.sectionHeading}>The Narrative</h2>
            </div>
            <div>
              <div className={styles.pullQuote}>
                <p style={{ fontSize: '1.25rem', margin: 0, lineHeight: 1.6 }}>
                  {project.problem || project.shortDesc}
                </p>
              </div>
              <div className={styles.editorialText}>
                <p>
                  {project.solution || project.fullDesc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <section className={`${styles.fullBleedSection} ${styles.altBg}`}>
            <div className={`${styles.sectionInner} ${styles.asymmetricGrid}`}>
              <div>
                <span className={styles.sectionWatermark}>02</span>
                <h2 className={styles.sectionHeading}>Key Features</h2>
              </div>
              <div className={styles.staggeredGrid}>
                {project.keyFeatures.map((feature, i) => (
                  <div key={i} className={styles.featureCardStaggered}>
                    <span className={styles.featureNumber}>0{i + 1}</span>
                    <span className={`material-symbols-outlined ${styles.featureIcon}`} style={{ fontSize: '3rem' }}>
                      {feature.icon || 'star'}
                    </span>
                    <h3 className={styles.featureTitle} style={{ fontSize: '1.5rem', marginTop: '1rem' }}>{feature.title}</h3>
                    <p className={styles.featureDesc}>{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 3: Technical Deep-Dive */}
        <section className={`${styles.fullBleedSection} ${styles.darkBg} ${styles.gridPaper}`}>
          <div className={`${styles.sectionInner} ${styles.asymmetricGrid}`}>
            <div>
              <span className={styles.sectionWatermark}>03</span>
              <h2 className={styles.sectionHeading}>Engineering</h2>
            </div>
            <div className={styles.technicalContent}>
              <div className={styles.terminalWindow}>
                <div className={styles.terminalHeader}>
                  <div className={styles.terminalDot} style={{ background: '#ff5f56' }}></div>
                  <div className={styles.terminalDot} style={{ background: '#ffbd2e' }}></div>
                  <div className={styles.terminalDot} style={{ background: '#27c93f' }}></div>
                  <span style={{ marginLeft: '10px', fontSize: '0.7rem', opacity: 0.5, letterSpacing: '0.1em' }}>ARCHITECTURE_MANIFEST.json</span>
                </div>
                <div className={styles.terminalContent}>
                   {/* Architecture Summary */}
                  {project.architecture && (
                    <div style={{ marginBottom: '3rem' }}>
                      <p style={{ color: 'var(--ax-secondary-container)', fontWeight: 800, marginBottom: '1rem' }}>// SYSTEM_OVERVIEW</p>
                      <p style={{ color: 'white', lineHeight: 1.6, fontSize: '1.1rem' }}>
                        {project.architecture.summary}
                      </p>
                      <div className={styles.techStackGrid} style={{ marginTop: '2rem' }}>
                        {project.architecture.stack.map(tech => (
                          <span key={tech} className={styles.techTag} style={{ background: 'rgba(252, 148, 48, 0.1)', color: 'var(--ax-secondary-container)', border: '1px solid rgba(252, 148, 48, 0.2)' }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technical Sections */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {project.technicalSections?.map((section, i) => (
                      <div key={i} style={{ borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '1.5rem' }}>
                        <p style={{ color: 'var(--ax-secondary-container)', fontWeight: 800, marginBottom: '0.5rem', fontSize: '0.8rem' }}>0{i + 1}_MODULE: {section.title.toUpperCase()}</p>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                          {section.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Next Project */}
        <section className={`${styles.fullBleedSection} ${styles.lightBg}`}>
          <div className={styles.sectionInner}>
            <Link href={`/projects/${nextProject.slug}`} className={styles.projectNav} style={{ border: 'none', background: 'var(--ax-bg)', borderRadius: '12px', padding: '60px' }}>
              <div>
                <span className={styles.navNextLabel}>Up Next</span>
                <span className={styles.navNextTitle} style={{ fontSize: '2.5rem' }}>{nextProject.title}</span>
              </div>
              <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
