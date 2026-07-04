'use client';

import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import styles from './DockerArchitect.module.css';

const DOCKER_PROTOCOLS = [
  {
    id: 'PROTO_1',
    title: 'BASE_ENVIRONMENT',
    pos: { top: '15%', left: '10%' },
    data: {
      subtitle: 'Lean Foundation',
      description: 'Use Alpine Linux or Distroless images to reduce attack surface and size.',
      code: 'FROM node:20-alpine AS base',
      impact: '800MB → 120MB',
      color: '#0DB7ED'
    }
  },
  {
    id: 'PROTO_2',
    title: 'CACHE_OPTIMIZE',
    pos: { top: '45%', left: '8%' },
    data: {
      subtitle: 'Dependency Isolation',
      description: 'Copy package.json first to ensure layers are cached unless deps change.',
      code: 'COPY package*.json ./\nRUN npm ci',
      impact: 'Build Speed +60%',
      color: '#64FFDA'
    }
  },
  {
    id: 'PROTO_3',
    title: 'SECURE_RUN',
    pos: { top: '75%', left: '10%' },
    data: {
      subtitle: 'Non-Root User',
      description: 'Never run as root. Create a dedicated system user for execution.',
      code: 'USER node\nCMD ["node", "app.js"]',
      impact: 'Risk -90%',
      color: '#FF4D4D'
    }
  },
  {
    id: 'PROTO_4',
    title: 'MULTI_STAGE',
    pos: { top: '15%', right: '10%' },
    data: {
      subtitle: 'Production Stripping',
      description: 'Build in one stage, copy only binaries to the production stage.',
      code: 'COPY --from=build /app/dist .',
      impact: '450MB → 45MB',
      color: '#FFD700'
    }
  },
  {
    id: 'PROTO_5',
    title: 'HEALTH_CHECK',
    pos: { top: '45%', right: '8%' },
    data: {
      subtitle: 'Orchestration Ready',
      description: 'Define health checks so orchestrators know when the service is alive.',
      code: 'HEALTHCHECK --interval=30s ...',
      impact: 'Uptime +25%',
      color: '#64FFDA'
    }
  },
  {
    id: 'PROTO_6',
    title: 'SCAN_IMAGE',
    pos: { top: '75%', right: '10%' },
    data: {
      subtitle: 'Vulnerability Scan',
      description: 'Integrate tools like Trivy or Snyk to scan for CVEs during build.',
      code: 'RUN trivy image [name]',
      impact: 'CVEs: ZERO',
      color: '#64FFDA'
    }
  }
];

export const DockerArchitect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProto, setActiveProto] = useState<number | null>(null);

  const activeData = activeProto !== null ? DOCKER_PROTOCOLS[activeProto].data : null;

  return (
    <>
      <m.button
        className={styles.stickyTrigger}
        onClick={() => setIsOpen(true)}
      >
        <div className={styles.triggerContent}>
          <span className="material-symbols-outlined">redeem</span>
          <span className={styles.triggerText}>TIP_FROM_ME</span>
        </div>
      </m.button>

      <AnimatePresence>
        {isOpen && (
          <m.div
            className={styles.fullTakeover}
            initial={{ clipPath: 'circle(0% at 100% 60%)' }}
            animate={{ clipPath: 'circle(150% at 100% 60%)' }}
            exit={{ clipPath: 'circle(0% at 100% 60%)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className={styles.takeoverContainer}>


              <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
                <span className="material-symbols-outlined">close</span>
                <span className={styles.closeText}>EXIT_STATION</span>
              </button>

              {/* Central Visualization Stage */}
              <div className={styles.centralStage}>
                <div className={styles.stageHeader}>
                  <h2 className={styles.stageTitle}>CONTAINER ARCHITECTURE OPTIMIZATION</h2>
                  <p className={styles.stageSubtitle}>
                    A PRODUCTION-GRADE BLUEPRINT FOR MULTI-STAGE DOCKER BUILDS
                  </p>
                </div>

                <div className={styles.stackVisual}>
                  <div className={styles.baseKernel}>KERNEL_BASE</div>
                  {DOCKER_PROTOCOLS.map((p, i) => (
                    <m.button
                      key={p.id}
                      className={styles.layer}
                      onClick={() => setActiveProto(i)}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.98 }}
                      animate={{
                        opacity: activeProto === null || activeProto >= i ? 1 : 0.4,
                        backgroundColor: activeProto === i ? p.data.color + '22' : '#0d1117',
                        borderColor: activeProto === i ? p.data.color : 'rgba(255,255,255,0.1)'
                      }}
                    >
                      <span className={styles.layerStep}>[STEP_0{i + 1}]</span>
                      <span className={styles.layerTitle}>{p.title}</span>
                      {activeProto === i && (
                        <m.span
                          layoutId="activeIndicator"
                          className={styles.activeIndicator}
                          style={{ backgroundColor: p.data.color }}
                        />
                      )}
                    </m.button>
                  ))}
                </div>

                {/* Steps (Satellites) - Hidden on mobile, floating for desktop */}
                <div className={styles.satellitesWrapper}>
                  {DOCKER_PROTOCOLS.map((proto, index) => (
                    <m.button
                      key={proto.id}
                      className={`${styles.satelliteBtn} ${activeProto === index ? styles.active : ''}`}
                      style={proto.pos as React.CSSProperties}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      onClick={() => setActiveProto(index)}
                    >
                      <div className={styles.btnCore}>
                        <span className={styles.btnLabel}>STEP_{index + 1}</span>
                        <span className={styles.btnTitle}>{proto.title}</span>
                      </div>
                    </m.button>
                  ))}
                </div>

                {/* Centered Explanation Box */}
                <div className={styles.explanationBox}>
                  {activeData ? (
                    <AnimatePresence mode="wait">
                      <m.div
                        key={activeProto}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={styles.explanationContent}
                      >
                        <div className={styles.expHeader}>
                          <span className={styles.expSubtitle} style={{ color: activeData.color }}>{activeData.subtitle}</span>
                          <span className={styles.expImpact}>{activeData.impact}</span>
                        </div>
                        <p className={styles.expDesc}>{activeData.description}</p>
                        <div className={styles.expCode}>
                          <code>{activeData.code}</code>
                        </div>
                      </m.div>
                    </AnimatePresence>
                  ) : (
                    <div className={styles.idleState}>SELECT A CONTAINER LAYER TO ANALYZE ARCHITECTURE</div>
                  )}
                </div>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};
