import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '#about',   label: 'About'   },
  { href: '#sectors', label: 'Sectors' },
  { href: '#network', label: 'Network' },
  { href: '#contact', label: 'Connect' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [progress,  setProgress]  = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const doc  = document.documentElement
      const pct  = window.scrollY / (doc.scrollHeight - doc.clientHeight)
      setProgress(Math.min(pct * 100, 100))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeDrawer = () => setDrawerOpen(false)

  const handleNavClick = (e, href) => {
    e.preventDefault()
    closeDrawer()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <a href="#hero" className={styles.logo} onClick={e => handleNavClick(e, '#hero')}>
            <span className={styles.logoGlyph}>P</span>
            <span className={styles.logoWord}>STRATEGIC</span>
          </a>

          <ul className={styles.links}>
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className={styles.link} onClick={e => handleNavClick(e, l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className={styles.cta} onClick={e => handleNavClick(e, '#contact')}>
            Private Inquiry
          </a>

          <button
            className={`${styles.burger} ${drawerOpen ? styles.burgerOpen : ''}`}
            onClick={() => setDrawerOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span />
          </button>
        </div>
        <div className={styles.progress} style={{ width: `${progress}%` }} />
      </nav>

      {/* Mobile Drawer */}
      <div className={`${styles.overlay} ${drawerOpen ? styles.overlayOpen : ''}`} onClick={closeDrawer} />
      <div className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} className={styles.drawerLink} onClick={e => handleNavClick(e, l.href)}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className={styles.drawerCta} onClick={e => handleNavClick(e, '#contact')}>
          Private Inquiry
        </a>
      </div>
    </>
  )
}
