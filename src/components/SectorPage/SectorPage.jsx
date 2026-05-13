import { Link } from 'react-router-dom'
import useInView from '../../hooks/useInView'
import styles from './SectorPage.module.css'

export default function SectorPage({ sector }) {
  const [heroRef, heroIn] = useInView()
  const [bodyRef, bodyIn] = useInView()

  return (
    <div className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroPattern} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroBody}`} ref={heroRef}>
          <Link to="/" className={styles.back}>← Back to Overview</Link>
          <div className={`${styles.heroNum} ${heroIn ? styles.visible : ''}`}>{sector.num}</div>
          <h1 className={`${styles.heroTitle} ${heroIn ? styles.visible : ''}`}>
            {sector.title}
          </h1>
          <p className={`${styles.heroSub} ${heroIn ? styles.visible : ''}`}>
            {sector.tagline}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className={styles.content}>
        <div className="container" ref={bodyRef}>
          <div className={styles.grid}>

            <div className={`${styles.left} ${bodyIn ? styles.visible : ''}`}>
              <div className="section-label">Overview</div>
              <h2 className="section-heading">{sector.heading}</h2>
              <p className={styles.lead}>{sector.lead}</p>
              {sector.body.map((para, i) => (
                <p key={i} className={styles.para}>{para}</p>
              ))}
            </div>

            <div className={`${styles.right} ${bodyIn ? styles.visible : ''}`}>

              <div className={styles.offerCard}>
                <div className="section-label">What Peter Offers</div>
                <ul className={styles.offerList}>
                  {sector.offers.map(o => (
                    <li key={o} className={styles.offerItem}>
                      <span className={styles.offerDot} />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.ctaCard}>
                <p className={styles.ctaText}>
                  Ready to explore opportunities in {sector.shortTitle}?
                </p>
                <Link to="/contact" className={`btn-gold ${styles.ctaBtn}`}>
                  Initiate a Conversation
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Other sectors */}
      <section className={styles.others}>
        <div className="container">
          <div className="section-label">Other Sectors</div>
          <div className={styles.othersGrid}>
            {sector.related.map(r => (
              <Link key={r.path} to={r.path} className={styles.otherCard}>
                <span className={styles.otherNum}>{r.num}</span>
                <span className={styles.otherTitle}>{r.title}</span>
                <span className={styles.otherArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
