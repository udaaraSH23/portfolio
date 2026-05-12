'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import styles from './Dividers.module.css';

// Divider 1: Parallax Blueprint (Hero to Expertise)
export const BlueprintDivider = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={containerRef} className={styles.parallaxWrapper} style={{ height: '200px' }}>
      <motion.div 
        className={styles.parallaxBg}
        style={{ 
          y,
          backgroundImage: 'url("/blueprint_parallax_bg_1778579129195.png")'
        }}
      />
      {/* Constant Scanning Line */}
      <motion.div 
        className={styles.scanLine}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <div className={styles.parallaxOverlay}>
        <div className={styles.parallaxLabel}>01. ARCH_SCHEMATIC</div>
      </div>
    </div>
  );
};

// Divider 2: Advanced Data Flow (Expertise to Projects)
// Divider 2: Editorial Marquee (Expertise to Projects)
export const DataFlowDivider = () => {
  const words = ["SCALING", "ORCHESTRATING", "DEPLOYING", "AUTOMATING", "ARCHITECTING", "ENGINEERING"];
  
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeContainer}>
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className={styles.marqueeContent}
        >
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              {words.map((word, idx) => (
                <span key={idx} className={styles.marqueeWord}>
                  {word}
                </span>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Floating Center Badge */}
      <div className={styles.badgeOverlay}>
        <div className={styles.centerBadge}>
          <div className={styles.badgeDot} />
          <span className={styles.badgeText}>THE_PROCESS_JOURNAL</span>
        </div>
      </div>
    </div>
  );
};

// Divider 3: Terminal Loop (Projects to Footer)
export const TerminalDivider = () => {
  const [index, setIndex] = React.useState(0);
  const logs = [
    "INITIALIZING_HANDSHAKE...",
    "SYNCING_REPOSITORY_STATE...",
    "ESTABLISHING_TLS_CONNECTION...",
    "ENCRYPTING_DATA_STREAM...",
    "READY_FOR_ENGAGEMENT"
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % logs.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.terminalWrapper}>
      <div className={styles.terminalContent}>
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 0.6, y: 0 }}
          exit={{ opacity: 0 }}
          className={styles.terminalLog}
        >
          {">"} {logs[index]}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            _
          </motion.span>
        </motion.div>
      </div>
      <div className={styles.terminalLabel}>03. END_OF_INDEX</div>
    </div>
  );
};
