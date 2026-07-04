'use client';

import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import styles from './ProjectCompass.module.css';

const CLARITY_STEPS = [
  {
    id: 'STEP_1',
    title: 'THE_OUTCOME',
    pos: { top: '15%', left: '10%' },
    data: {
      subtitle: 'What result do you actually want?',
      description: 'Not "a website" - a business outcome. More phone bookings? More online sales? Fewer emails asking the same question? Naming the outcome tells me what to build toward.',
      example: '"I want more phone bookings from people who find us on Google Maps."',
      impact: 'Scope Clarity +80%',
      color: 'var(--ax-secondary)'
    }
  },
  {
    id: 'STEP_2',
    title: 'YOUR_CUSTOMER',
    pos: { top: '45%', left: '8%' },
    data: {
      subtitle: 'Who is actually using this?',
      description: 'A busy parent booking on their phone needs something very different from a B2B buyer comparing vendors on a laptop. Knowing the audience shapes every design decision.',
      example: '"Mostly local customers, 30-55, browsing on their phone during lunch breaks."',
      impact: 'Fewer Redesigns',
      color: 'var(--ax-secondary)'
    }
  },
  {
    id: 'STEP_3',
    title: 'MUST_VS_NICE',
    pos: { top: '75%', left: '10%' },
    data: {
      subtitle: 'Separate must-haves from nice-to-haves',
      description: 'List everything you imagine, then mark what the business cannot launch without vs. what could wait for phase two. This keeps the first build fast and on budget.',
      example: 'Must: online booking. Nice-to-have: loyalty points dashboard.',
      impact: 'Avoids Scope Creep',
      color: 'var(--ax-secondary)'
    }
  },
  {
    id: 'STEP_4',
    title: 'REFERENCE_SITES',
    pos: { top: '15%', right: '10%' },
    data: {
      subtitle: 'Show me, don’t just tell me',
      description: 'Send 2-3 sites or apps you like, and say why - the layout, the speed, the tone. A quick reference saves rounds of back-and-forth guessing.',
      example: '"Like this booking flow, but with our colors and a simpler menu."',
      impact: 'Faster First Draft',
      color: 'var(--ax-secondary)'
    }
  },
  {
    id: 'STEP_5',
    title: 'RAW_MATERIALS',
    pos: { top: '45%', right: '8%' },
    data: {
      subtitle: 'Gather your content early',
      description: 'Logo, photos, service descriptions, pricing, testimonials - whatever you already have. Waiting on content is the single biggest cause of project delays.',
      example: '"Here\'s our logo, 20 photos, and a doc with all our service copy."',
      impact: 'Timeline -30% Risk',
      color: 'var(--ax-secondary)'
    }
  },
  {
    id: 'STEP_6',
    title: 'BUDGET_TIMELINE',
    pos: { top: '75%', right: '10%' },
    data: {
      subtitle: 'A rough number and a rough date',
      description: 'You don’t need an exact figure - a range and a target launch date let me recommend the right approach instead of over- or under-building for your situation.',
      example: '"Around $2-4k, and we\'d love to launch before our busy season starts."',
      impact: 'Right-Sized Quote',
      color: 'var(--ax-secondary)'
    }
  }
];

export const ProjectCompass = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const activeData = activeStep !== null ? CLARITY_STEPS[activeStep].data : null;

  return (
    <>
      <m.button
        className={styles.stickyTrigger}
        onClick={() => setIsOpen(true)}
      >
        <div className={styles.triggerContent}>
          <span className="material-symbols-outlined">tips_and_updates</span>
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

              <div className={styles.centralStage}>
                <div className={styles.stageHeader}>
                  <h2 className={styles.stageTitle}>PROJECT CLARITY TOOLKIT</h2>
                  <p className={styles.stageSubtitle}>
                    SIX QUICK THINGS TO FIGURE OUT SO WE CAN COMMUNICATE FAST AND BUILD THE RIGHT THING
                  </p>
                </div>

                <div className={styles.stackVisual}>
                  <div className={styles.baseKernel}>START_HERE</div>
                  {CLARITY_STEPS.map((s, i) => (
                    <m.button
                      key={s.id}
                      className={styles.layer}
                      onClick={() => setActiveStep(i)}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.98 }}
                      animate={{
                        opacity: activeStep === null || activeStep >= i ? 1 : 0.4,
                        backgroundColor: activeStep === i ? 'rgba(242, 140, 40, 0.13)' : '#1a140d',
                        borderColor: activeStep === i ? 'var(--ax-secondary)' : 'rgba(255,255,255,0.1)'
                      }}
                    >
                      <span className={styles.layerStep}>[STEP_0{i + 1}]</span>
                      <span className={styles.layerTitle}>{s.title}</span>
                      {activeStep === i && (
                        <m.span
                          layoutId="activeIndicatorClient"
                          className={styles.activeIndicator}
                          style={{ backgroundColor: 'var(--ax-secondary)' }}
                        />
                      )}
                    </m.button>
                  ))}
                </div>

                <div className={styles.satellitesWrapper}>
                  {CLARITY_STEPS.map((step, index) => (
                    <m.button
                      key={step.id}
                      className={`${styles.satelliteBtn} ${activeStep === index ? styles.active : ''}`}
                      style={step.pos as React.CSSProperties}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      onClick={() => setActiveStep(index)}
                    >
                      <div className={styles.btnCore}>
                        <span className={styles.btnLabel}>STEP_{index + 1}</span>
                        <span className={styles.btnTitle}>{step.title}</span>
                      </div>
                    </m.button>
                  ))}
                </div>

                <div className={styles.explanationBox}>
                  {activeData ? (
                    <AnimatePresence mode="wait">
                      <m.div
                        key={activeStep}
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
                          <code>{activeData.example}</code>
                        </div>
                      </m.div>
                    </AnimatePresence>
                  ) : (
                    <div className={styles.idleState}>PICK A STEP TO SEE HOW TO THINK ABOUT IT</div>
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
