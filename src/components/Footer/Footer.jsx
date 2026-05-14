import { Link, useNavigate, useLocation } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const navigate  = useNavigate()
  const location  = useLocation()
  const isHome    = location.pathname === '/'

  const scrollTo = (e, hash) => {
    e.preventDefault()
    if (isHome) {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 120)
    }
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <Link to="/" className={styles.brand}>
            <span className={styles.glyph}>P</span>
            <div className={styles.brandText}>
              <span className={styles.brandName}>Peter Mushi</span>
              <span className={styles.brandRole}>Strategic Business Development · East Africa</span>
            </div>
          </Link>

          <nav className={styles.nav}>
            <a href="#about"   onClick={e => scrollTo(e, '#about')}>About</a>
            <a href="#sectors" onClick={e => scrollTo(e, '#sectors')}>Sectors</a>
            <a href="#network" onClick={e => scrollTo(e, '#network')}>Network</a>
            <Link to="/contact">Connect</Link>
          </nav>
        </div>

        <div className={styles.contactBar}>
          <a href="tel:+255786792165" className={styles.contactLink}>
            <span className={styles.contactLabel}>Phone</span>
            <span>+255 786 792 165</span>
          </a>
          <div className={styles.contactDivider} />
          <a href="mailto:petermushey7@gmail.com" className={styles.contactLink}>
            <span className={styles.contactLabel}>Email</span>
            <span>petermushey7@gmail.com</span>
          </a>
          <div className={styles.contactDivider} />
          <div className={styles.contactLink}>
            <span className={styles.contactLabel}>Based in</span>
            <span>East Africa · International</span>
          </div>
        </div>

        <div className={styles.rule} />
        <div className={styles.bottom}>
          <span>© 2025 Peter Mushi · All Rights Reserved</span>
          <span className={styles.maxim}>Discretion is Standard Practice</span>
        </div>
      </div>
    </footer>
  )
}
