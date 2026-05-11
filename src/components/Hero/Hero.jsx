import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const handleClick = (e, href) => {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      {/* Decorative canvas */}
      <div className={styles.canvas}>
        <AfricanPattern />
        <div className={styles.vignette} />
        <div className={styles.gradientOverlay} />
      </div>

      {/* Main content */}
      <div className={styles.body}>
        <div className={`${styles.eyebrow} ${mounted ? styles.visible : ''}`}>
          <span className={styles.eyebrowDot} />
          <span>East Africa&nbsp;&nbsp;·&nbsp;&nbsp;Global Reach</span>
        </div>

        <h1 className={styles.heading}>
          {['Strategic', 'Presence.', 'Measured', 'Results.'].map((word, i) => (
            <span
              key={word}
              className={`${styles.hLine} ${i % 2 === 1 ? styles.hItalic : ''} ${mounted ? styles.lineVisible : ''}`}
              style={{ transitionDelay: `${80 + i * 130}ms` }}
            >
              {word}
            </span>
          ))}
        </h1>

        <p className={`${styles.sub} ${mounted ? styles.fadeVisible : ''}`} style={{ transitionDelay: '650ms' }}>
          Business Development&nbsp;&nbsp;·&nbsp;&nbsp;Strategic Partnerships
        </p>

        <div className={`${styles.actions} ${mounted ? styles.fadeVisible : ''}`} style={{ transitionDelay: '820ms' }}>
          <a href="#sectors" className="btn-gold" onClick={e => handleClick(e, '#sectors')}>
            Explore Sectors
          </a>
          <a href="#contact" className="btn-ghost" onClick={e => handleClick(e, '#contact')}>
            Initiate Contact
          </a>
        </div>
      </div>

      {/* Metrics bar */}
      <div className={`${styles.metrics} ${mounted ? styles.fadeVisible : ''}`} style={{ transitionDelay: '1000ms' }}>
        {[
          { val: '12+',       lbl: 'Years Active'      },
          { val: '5',         lbl: 'Core Sectors'      },
          { val: 'Pan‑Africa', lbl: '& International'  },
        ].map((m, i) => (
          <div key={m.lbl} className={styles.metricsItem}>
            {i > 0 && <div className={styles.metricSep} />}
            <div className={styles.metric}>
              <span className={styles.metricVal}>{m.val}</span>
              <span className={styles.metricLbl}>{m.lbl}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll cue */}
      <div className={`${styles.scrollCue} ${mounted ? styles.fadeVisible : ''}`} style={{ transitionDelay: '1200ms' }}>
        <span className={styles.scrollLabel}>Scroll</span>
        <div className={styles.scrollBar}>
          <div className={styles.scrollThumb} />
        </div>
      </div>
    </section>
  )
}

function AfricanPattern() {
  return (
    <svg className={styles.pattern} viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <rect width="80" height="80" fill="none" />
          <line x1="0" y1="0" x2="80" y2="0"  stroke="#c9a84c" strokeWidth="0.3" opacity="0.25"/>
          <line x1="0" y1="0" x2="0"  y2="80" stroke="#c9a84c" strokeWidth="0.3" opacity="0.25"/>
          <line x1="40" y1="0" x2="40" y2="80" stroke="#c9a84c" strokeWidth="0.15" opacity="0.12"/>
          <line x1="0" y1="40" x2="80" y2="40" stroke="#c9a84c" strokeWidth="0.15" opacity="0.12"/>
          <circle cx="40" cy="40" r="1.5" fill="#c9a84c" opacity="0.18"/>
          <circle cx="0"  cy="0"  r="1"   fill="#c9a84c" opacity="0.14"/>
          <circle cx="80" cy="0"  r="1"   fill="#c9a84c" opacity="0.14"/>
          <circle cx="0"  cy="80" r="1"   fill="#c9a84c" opacity="0.14"/>
          <circle cx="80" cy="80" r="1"   fill="#c9a84c" opacity="0.14"/>
        </pattern>
        <pattern id="diamond" x="40" y="40" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="#c9a84c" strokeWidth="0.2" opacity="0.1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)"/>
      <rect width="100%" height="100%" fill="url(#diamond)"/>
    </svg>
  )
}
