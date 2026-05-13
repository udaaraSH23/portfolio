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
        <div className={styles.parallaxLabel}>01. SYSTEM_CAPABILITIES</div>
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

      {/* Floating Center Label */}
      <div className={styles.badgeOverlay}>
        <div className={styles.parallaxLabel}>02. THE_PROCESS_JOURNAL</div>
      </div>
    </div>
  );
};

// Divider 3: Terminal Loop (Projects to Footer)
export const TerminalDivider = () => {
  const scrollToTarget = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.kineticWrapper}>
      {/* Horizontal Line Container */}
      <div className={styles.lineGrid}>
        <div className={styles.gradientLine} />
        
        <div className={styles.pulseContainer}>
          {/* Soft Outer Glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.4, 1], 
              opacity: [0.1, 0.3, 0.1] 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className={styles.outerGlow}
          />
          
          {/* The "Ping" Sequence */}
          <div className={styles.pingSequence}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  backgroundColor: ["rgba(39, 39, 42, 1)", "var(--ax-accent)", "rgba(39, 39, 42, 1)"],
                  scale: [1, 1.25, 1],
                  boxShadow: [
                    "0 0 0px rgba(100, 255, 218, 0)", 
                    "0 0 12px rgba(100, 255, 218, 0.5)", 
                    "0 0 0px rgba(100, 255, 218, 0)"
                  ]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
                className={styles.pingDot}
              />
            ))}
          </div>
        </div>
        
        <div className={styles.gradientLineRight} />
      </div>

      <motion.button 
        onClick={scrollToTarget}
        whileHover={{ y: 5 }}
        className={styles.actionButton}
      >
        <span className={styles.actionLabel}>
          Initialize_Link
        </span>
        
        {/* Animated Vertical Beam */}
        <div className={styles.beamContainer}>
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ 
              duration: 1.8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className={styles.scanBeam}
          />
        </div>
        
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={styles.chevronIcon}
        >
          <span className="material-symbols-outlined">expand_more</span>
        </motion.div>
      </motion.button>
    </div>
  );
};
