'use client';

import { m } from 'framer-motion';
import styles from './HeroDivider.module.css';

export type HeroDividerVariant = 'console' | 'bridge' | 'core';

/**
 * Rigid, structural hero "dividers" — none use a full-height line.
 * Each treats the two CTAs as anchors and connects/wraps them instead.
 * Swap `variant` to try each:
 *   'console' -> SVG bracket-frame that wraps the CTA cluster
 *   'bridge'  -> horizontal triangulated truss beam spanning the two CTAs
 *   'core'    -> compact central node (concentric squares + arm stubs)
 * Once finalized, keep the chosen branch and delete the rest.
 */
export const HeroDivider = ({ variant }: { variant: HeroDividerVariant }) => {
  if (variant === 'console') {
    return (
      <div className={`${styles.divider} ${styles.console}`} aria-hidden>
        <svg
          className={styles.consoleSvg}
          viewBox="0 0 220 320"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Corner L-brackets */}
          <path d="M10 46 V10 H46" className={styles.stroke} />
          <path d="M174 10 H210 V46" className={styles.stroke} />
          <path d="M210 274 V310 H174" className={styles.stroke} />
          <path d="M46 310 H10 V274" className={styles.stroke} />

          {/* Top & bottom cap rails that "connect" the two buttons */}
          <line x1="70" y1="10" x2="150" y2="10" className={styles.stroke} />
          <line x1="70" y1="310" x2="150" y2="310" className={styles.stroke} />

          {/* Mid connector arms reaching out to both halves */}
          <line x1="10" y1="160" x2="-40" y2="160" className={styles.arm} />
          <line x1="210" y1="160" x2="260" y2="160" className={styles.arm} />

          {/* Corner bolt squares */}
          {[
            [10, 10],
            [210, 10],
            [210, 310],
            [10, 310],
          ].map(([cx, cy]) => (
            <rect
              key={`${cx}-${cy}`}
              x={cx - 3}
              y={cy - 3}
              width="6"
              height="6"
              className={styles.bolt}
            />
          ))}

          {/* Animated scan node travelling the frame's left rail */}
          <m.rect
            x="7"
            width="6"
            height="6"
            className={styles.marker}
            animate={{ y: [46, 274] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'bridge') {
    return (
      <div className={`${styles.divider} ${styles.bridge}`} aria-hidden>
        <svg
          className={styles.bridgeSvg}
          viewBox="0 0 320 140"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Top & bottom chords */}
          <line x1="20" y1="30" x2="300" y2="30" className={styles.stroke} />
          <line x1="20" y1="110" x2="300" y2="110" className={styles.stroke} />

          {/* End pylons (anchor to the two buttons) */}
          <line x1="20" y1="30" x2="20" y2="110" className={styles.stroke} />
          <line x1="300" y1="30" x2="300" y2="110" className={styles.stroke} />

          {/* Triangulated web members */}
          <path
            d="M20 110 L73 30 L126 110 L180 30 L233 110 L300 30"
            className={styles.arm}
          />
          <path
            d="M20 30 L73 110 L126 30 L180 110 L233 30 L300 110"
            className={styles.arm}
          />

          {/* Joint nodes along the chords */}
          {[20, 73, 126, 180, 233, 300].map((x) => (
            <g key={x}>
              <rect x={x - 3} y="27" width="6" height="6" className={styles.bolt} />
              <rect x={x - 3} y="107" width="6" height="6" className={styles.bolt} />
            </g>
          ))}

          {/* Load marker rolling across the top chord */}
          <m.rect
            y="27"
            width="6"
            height="6"
            className={styles.marker}
            animate={{ x: [17, 297] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          />
        </svg>
      </div>
    );
  }

  // core
  return (
    <div className={`${styles.divider} ${styles.core}`} aria-hidden>
      <svg
        className={styles.coreSvg}
        viewBox="0 0 140 140"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Arm stubs to all four sides */}
        <line x1="70" y1="0" x2="70" y2="34" className={styles.arm} />
        <line x1="70" y1="106" x2="70" y2="140" className={styles.arm} />
        <line x1="0" y1="70" x2="34" y2="70" className={styles.arm} />
        <line x1="106" y1="70" x2="140" y2="70" className={styles.arm} />

        {/* Concentric rigid squares */}
        <rect x="34" y="34" width="72" height="72" className={styles.stroke} />
        <m.rect
          x="46"
          y="46"
          width="48"
          height="48"
          className={styles.stroke}
          style={{ transformOrigin: '70px 70px' }}
          animate={{ rotate: [0, 90] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />

        {/* Center bolt */}
        <rect x="65" y="65" width="10" height="10" className={styles.marker} />

        {/* Corner bolts on outer square */}
        {[
          [34, 34],
          [106, 34],
          [106, 106],
          [34, 106],
        ].map(([cx, cy]) => (
          <rect
            key={`${cx}-${cy}`}
            x={cx - 3}
            y={cy - 3}
            width="6"
            height="6"
            className={styles.bolt}
          />
        ))}
      </svg>
    </div>
  );
};
