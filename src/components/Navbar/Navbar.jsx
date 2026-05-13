import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'

const links = [
  { href: '#about',   label: 'About',   home: true  },
  { href: '#sectors', label: 'Sectors', home: true  },
  { href: '#network', label: 'Network', home: true  },
  { to: '/contact',   label: 'Connect', home: false },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [progress,   setProgress]   = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location  = useLocation()
  const navigate  = useNavigate()
  const isHome    = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const doc = document.documentElement
      const pct = window.scrollY / (doc.scrollHeight - doc.clientHeight)
      setProgress(Math.min(pct * 100, 100))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on route change
  useEffect(() => { setDrawerOpen(false) }, [location])

  const scrollTo = (hash) => {
    if (isHome) {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 120)
    }
  }

  const handleLink = (e, link) => {
    if (link.href) {
      e.preventDefault()
      setDrawerOpen(false)
      scrollTo(link.href)
    } else {
      setDrawerOpen(false)
    }
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoGlyph}>P</span>
            <span className={styles.logoWord}>STRATEGIC</span>
          </Link>

          <ul className={styles.links}>
            {links.map(l => (
              <li key={l.label}>
                {l.href ? (
                  <a href={l.href} className={styles.link} onClick={e => handleLink(e, l)}>
                    {l.label}
                  </a>
                ) : (
                  <Link to={l.to} className={`${styles.link} ${location.pathname === l.to ? styles.active : ''}`}>
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Link to="/contact" className={styles.cta}>Private Inquiry</Link>

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

      <div className={`${styles.overlay} ${drawerOpen ? styles.overlayOpen : ''}`}
        onClick={() => setDrawerOpen(false)} />

      <div className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ''}`}>
        {links.map(l => (
          l.href ? (
            <a key={l.label} href={l.href} className={styles.drawerLink} onClick={e => handleLink(e, l)}>
              {l.label}
            </a>
          ) : (
            <Link key={l.label} to={l.to} className={styles.drawerLink}>
              {l.label}
            </Link>
          )
        ))}
        <Link to="/contact" className={styles.drawerCta}>Private Inquiry</Link>
      </div>
    </>
  )
}
