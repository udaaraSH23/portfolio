'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      <motion.button 
        className={styles.stickyTrigger}
        onClick={() => setIsOpen(true)}
      >
        <div className={styles.triggerContent}>
          <span className="material-symbols-outlined">dock</span>
          <span className={styles.triggerText}>DOCKER_ENGINE</span>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.fullTakeover}
            initial={{ clipPath: 'circle(0% at 100% 50%)' }}
            animate={{ clipPath: 'circle(150% at 100% 50%)' }}
            exit={{ clipPath: 'circle(0% at 100% 50%)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className={styles.takeoverContainer}>
              {/* Header */}
              <div className={styles.takeoverHeader}>
                <div className={styles.systemInfo}>
                  <span className={styles.statusDot} />
                  AXIOLON_DOCKER_ARCHITECT // PRODUCTION_STATION
                </div>
                <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              {/* Floating Satellites Around the Page */}
              {DOCKER_PROTOCOLS.map((proto, index) => (
                <motion.button
                  key={proto.id}
                  className={`${styles.satelliteBtn} ${activeProto === index ? styles.active : ''}`}
                  style={proto.pos as any}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onClick={() => setActiveProto(index)}
                >
                  <div className={styles.btnCore}>
                    <span className={styles.btnLabel}>STEP_{index + 1}</span>
                    <span className={styles.btnTitle}>{proto.title}</span>
                  </div>
                </motion.button>
              ))}

              {/* Central Visualization Stage */}
              <div className={styles.centralStage}>
                <div className={styles.stackVisual}>
                  {DOCKER_PROTOCOLS.map((p, i) => (
                    <motion.div 
                      key={p.id}
                      className={styles.layer}
                      animate={{
                        opacity: activeProto === null || activeProto >= i ? 1 : 0.2,
                        scale: activeProto === i ? 1.05 : 1,
                        backgroundColor: activeProto === i ? p.data.color + '33' : '#161b22',
                        borderColor: activeProto === i ? p.data.color : 'rgba(255,255,255,0.1)'
                      }}
                    />
                  ))}
                  <div className={styles.baseKernel}>KERNEL_BASE</div>
                </div>

                {/* Centered Explanation Box */}
                <div className={styles.explanationBox}>
                  {activeData ? (
                    <AnimatePresence mode="wait">
                      <motion.div
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
                      </motion.div>
                    </AnimatePresence>
                  ) : (
                    <div className={styles.idleState}>SELECT A PROTOCOL SATELLITE TO ANALYZE ARCHITECTURE</div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
