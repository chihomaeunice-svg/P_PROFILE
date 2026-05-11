import styles from './Footer.module.css'

const handleClick = (e, href) => {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className="container">
        <div className={styles.top}>
          <a href="#hero" className={styles.brand} onClick={e => handleClick(e, '#hero')}>
            <span className={styles.glyph}>P</span>
            <div className={styles.brandText}>
              <span className={styles.brandPrimary}>Strategic Business Development</span>
              <span className={styles.brandSecondary}>& Partnerships · East Africa</span>
            </div>
          </a>
          <nav className={styles.nav}>
            {[
              { href: '#about',   label: 'About'   },
              { href: '#sectors', label: 'Sectors' },
              { href: '#network', label: 'Network' },
              { href: '#contact', label: 'Connect' },
            ].map(l => (
              <a key={l.href} href={l.href} className={styles.link}
                onClick={e => handleClick(e, l.href)}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className={styles.rule} />
        <div className={styles.bottom}>
          <span className={styles.copy}>© 2025 · All Rights Reserved</span>
          <span className={styles.maxim}>Discretion is Standard Practice</span>
        </div>
      </div>
    </footer>
  )
}
