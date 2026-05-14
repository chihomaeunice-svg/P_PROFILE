import { useEffect, useRef, useState } from 'react'
import useMagnet from '../../hooks/useMagnet'
import useCounter from '../../hooks/useCounter'
import useInView from '../../hooks/useInView'
import styles from './Hero.module.css'

const scroll = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const heroRef   = useRef(null)
  const patternRef = useRef(null)
  const magnet1   = useMagnet(0.4)
  const magnet2   = useMagnet(0.4)
  const [statsRef, statsIn] = useInView()

  const count12 = useCounter(12, 1600, statsIn)

  // Parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (patternRef.current) {
        patternRef.current.style.transform = `translateY(${y * 0.3}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(t)
  }, [])

  const words = ['Strategic', 'Presence.', 'Measured', 'Results.']

  return (
    <section id="hero" className={styles.hero} ref={heroRef}>
      <div className={styles.canvas}>
        <div ref={patternRef} className={styles.patternWrap}>
          <AfricanPattern />
        </div>
        <div className={styles.vignette} />
        <div className={styles.gradientOverlay} />
      </div>

      {/* Noise grain */}
      <div className={styles.grain} />

      <div className={styles.body}>
        <div className={`${styles.eyebrow} ${mounted ? styles.visible : ''}`}>
          <span className={styles.eyebrowDot} />
          <span>East Africa&nbsp;&nbsp;·&nbsp;&nbsp;Global Reach</span>
        </div>

        <h1 className={styles.heading}>
          {words.map((word, wi) => (
            <span key={word} className={`${styles.hLine} ${wi % 2 === 1 ? styles.hItalic : ''}`}>
              {word.split('').map((char, ci) => (
                <span
                  key={ci}
                  className={`${styles.char} ${mounted ? styles.charVisible : ''}`}
                  style={{ transitionDelay: `${100 + wi * 140 + ci * 28}ms` }}
                >
                  {char === ' ' ? ' ' : char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p className={`${styles.sub} ${mounted ? styles.fadeVisible : ''}`} style={{ transitionDelay: '780ms' }}>
          Business Development&nbsp;&nbsp;·&nbsp;&nbsp;Strategic Partnerships
        </p>

        <div className={`${styles.actions} ${mounted ? styles.fadeVisible : ''}`} style={{ transitionDelay: '940ms' }}>
          <div ref={magnet1} className={styles.magnetWrap}>
            <a href="#sectors" className={`btn-gold ${styles.btnGlow}`}
              onClick={e => { e.preventDefault(); scroll('#sectors') }}>
              Explore Sectors
            </a>
          </div>
          <div ref={magnet2} className={styles.magnetWrap}>
            <a href="#contact" className="btn-ghost"
              onClick={e => { e.preventDefault(); scroll('#contact') }}>
              Initiate Contact
            </a>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div
        ref={statsRef}
        className={`${styles.metrics} ${mounted ? styles.fadeVisible : ''}`}
        style={{ transitionDelay: '1100ms' }}
      >
        {[
          { val: `${count12}+`, lbl: 'Years Active', animate: true },
          { val: '5',           lbl: 'Core Sectors'     },
          { val: 'Pan‑Africa',  lbl: '& International'  },
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

      <div className={`${styles.scrollCue} ${mounted ? styles.fadeVisible : ''}`} style={{ transitionDelay: '1400ms' }}>
        <span className={styles.scrollLabel}>Scroll</span>
        <div className={styles.scrollBar}><div className={styles.scrollThumb} /></div>
      </div>
    </section>
  )
}

function AfricanPattern() {
  return (
    <svg className={styles.pattern} viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <rect width="80" height="80" fill="none" />
          <line x1="0" y1="0" x2="80" y2="0"  stroke="#FEC700" strokeWidth="0.35" opacity="0.22"/>
          <line x1="0" y1="0" x2="0"  y2="80" stroke="#FEC700" strokeWidth="0.35" opacity="0.22"/>
          <line x1="40" y1="0" x2="40" y2="80" stroke="#FEC700" strokeWidth="0.18" opacity="0.1"/>
          <line x1="0" y1="40" x2="80" y2="40" stroke="#FEC700" strokeWidth="0.18" opacity="0.1"/>
          <circle cx="40" cy="40" r="1.5" fill="#FEC700" opacity="0.2"/>
          <circle cx="0"  cy="0"  r="1"   fill="#FEC700" opacity="0.15"/>
          <circle cx="80" cy="0"  r="1"   fill="#FEC700" opacity="0.15"/>
          <circle cx="0"  cy="80" r="1"   fill="#FEC700" opacity="0.15"/>
          <circle cx="80" cy="80" r="1"   fill="#FEC700" opacity="0.15"/>
        </pattern>
        <pattern id="diamond" x="40" y="40" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="#FEC700" strokeWidth="0.25" opacity="0.08"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)"/>
      <rect width="100%" height="100%" fill="url(#diamond)"/>
    </svg>
  )
}
