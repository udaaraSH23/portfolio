'use client';

import React from 'react';
import { m, AnimatePresence } from 'framer-motion';
import styles from './Expertise.module.css';
import baseStyles from '@/components/Base.module.css';
import { FadeIn } from '@/components/motion/FadeIn';

const expertiseCategories = [
  {
    id: 'FRONTEND_ENG',
    title: 'Frontend Architecture',
    sec: 'SEC_01',
    icon: 'layers',
    subsections: [
      {
        label: 'CORE_FRAMEWORKS',
        desc: 'Advanced implementation of React 18 and Next.js for high-performance server-side rendering and client-side interactivity.',
        tags: ['REACT', 'NEXT.JS', 'TYPESCRIPT', 'ANGULAR']
      },
      {
        label: 'UI_STATE_MANAGEMENT',
        desc: 'Optimized state flow using Zustand and TanStack Query for seamless data synchronization and caching.',
        tags: ['ZUSTAND', 'TANSTACK QUERY', 'FRAMER MOTION']
      }
    ]
  },
  {
    id: 'BACKEND_ARCH',
    title: 'Backend & Systems',
    sec: 'SEC_02',
    icon: 'dns',
    subsections: [
      {
        label: 'API_DEVELOPMENT',
        desc: 'Scalable microservices and RESTful APIs built with Node.js, Spring Boot, and performance-optimized Python.',
        tags: ['NODE.JS', 'EXPRESS', 'SPRING BOOT', 'PYTHON']
      },
      {
        label: 'DATA_ORCHESTRATION',
        desc: 'Robust data management using Prisma ORM and high-concurrency systems written in Go.',
        tags: ['PRISMA', 'GO', 'REST APIS']
      }
    ]
  },
  {
    id: 'DEVOPS_INFRA',
    title: 'DevOps & Infrastructure',
    sec: 'SEC_03',
    icon: 'terminal',
    subsections: [
      {
        label: 'CONTAINERIZATION',
        desc: 'Efficient container orchestration and management using Docker, Kubernetes (K3s), and Helm charts.',
        icon: 'terminal',
        tags: ['DOCKER', 'KUBERNETES', 'HELM']
      },
      {
        label: 'GITOPS_AUTOMATION',
        desc: 'Automated CI/CD pipelines and IaC workflows with ArgoCD, Terraform, and GitHub Actions.',
        tags: ['ARGOCD', 'TERRAFORM', 'JENKINS', 'ANSIBLE']
      }
    ]
  },
  {
    id: 'SYSTEM_TOOLS',
    title: 'Cloud & Tooling',
    sec: 'SEC_04',
    icon: 'cloud_queue',
    subsections: [
      {
        label: 'CLOUD_PLATFORMS',
        desc: 'Provisioning and managing secure environments across AWS and Google Cloud Platform (GCP).',
        tags: ['AWS', 'GCP', 'AZURE']
      },
      {
        label: 'STORAGE_&_TOOLS',
        desc: 'High-performance data layers and development tools for observability and testing.',
        tags: ['POSTGRESQL', 'MYSQL', 'MONGODB', 'PGVECTOR', 'GIT']
      }
    ]
  }
];

export const Expertise = () => {
  const [activeTab, setActiveTab] = React.useState(expertiseCategories[0].id);

  return (
    <section id="expertise" className={styles.section}>
      <div className={baseStyles.container}>
        <FadeIn className={styles.sectionHeader}>
          <div className={styles.headerLabel}>CORE_STACK</div>
          <h2 className={styles.headerTitle}>Technical Focus</h2>
          <p className={styles.headerDesc}>
            A summary of the technologies I use to build web applications, 
            manage infrastructure, and design maintainable software systems.
          </p>
        </FadeIn>

        <div className={styles.layout}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarLabel}>INDEX_OF_CAPABILITIES</div>
            <nav className={styles.sidebarNav}>
              {expertiseCategories.map((cat, idx) => (
                <button
                  key={cat.id}
                  className={`${styles.sidebarItem} ${activeTab === cat.id ? styles.active : ''}`}
                  onClick={() => setActiveTab(cat.id)}
                  style={{ position: 'relative' }}
                >
                  {activeTab === cat.id && (
                    <m.span
                      layoutId="activeExpertiseTab"
                      className={styles.activeTabIndicator}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={styles.sidebarNum}>0{idx + 1}.</span>
                  <span className={styles.sidebarTitle}>{cat.id}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className={styles.content}>
            <AnimatePresence mode="wait">
              {expertiseCategories.map((category) => (
                category.id === activeTab && (
                  <m.div
                    key={category.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={styles.categoryBlock}
                  >
                    <div className={styles.categoryHeader}>
                      <div className={styles.categoryTitleGroup}>
                        <span className="material-symbols-outlined">{category.icon}</span>
                        <h3 className={styles.categoryTitle}>{category.title}</h3>
                      </div>
                      <span className={styles.categorySec}>{category.sec}</span>
                    </div>

                    <div className={styles.subsectionsGrid}>
                      {category.subsections.map((sub, sIdx) => (
                        <div key={sIdx} className={styles.subsection}>
                          <div className={styles.subLabel}>{sub.label}</div>
                          <p className={styles.subDesc}>{sub.desc}</p>
                          <div className={styles.tags}>
                            {sub.tags.map((tag) => (
                              <span key={tag} className={styles.tag}>{tag}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </m.div>
                )
              ))}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </section>
  );
};
