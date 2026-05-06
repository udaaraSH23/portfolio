import Image from 'next/image';
import styles from '../Portfolio.module.css';
import { TechnicalBackground } from './TechnicalBackground';

export const PortfolioHero = () => {
  return (
    <section className={styles.hero} style={{ position: 'relative', overflow: 'hidden' }}>
      <TechnicalBackground />
      <div className={styles.heroContent} style={{ position: 'relative', zIndex: 1 }}>
        <span className={styles.heroName}>Udara Shanuka</span>
        <h1 className={styles.h1}>
          A developer driven by problem-solving and system design.
        </h1>

        <div className={styles.heroDesc}>
          <p className={styles.heroSubtext}>Building scalable applications and designing systems that are reliable, maintainable, and easy to operate.</p>

          <p>
            I work across the full stack and focus on structuring applications and infrastructure in a way that supports long-term scalability and efficient delivery. My approach combines clean architecture with automation to simplify development and deployment workflows.
          </p>

          <p>
            I’ve built systems ranging from multi-service platforms to production web applications, with an emphasis on performance, reliability, and real-world usability.
          </p>
        </div>

        <div className={styles.heroActions}>
          <a href="/Udara-Shanuka-Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span> Download Resume
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            Contact Me
          </a>
        </div>
      </div>

      <div className={styles.heroImageContainer}>
        <div className={styles.portfolioImage} style={{ overflow: 'hidden', position: 'relative' }}>
          <Image
            src="/portfolio/Udara_Shanuka.png"
            alt="Udara Shanuka"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>
    </section>
  );
};
