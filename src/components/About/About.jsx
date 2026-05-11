import useInView from '../../hooks/useInView'
import styles from './About.module.css'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className={styles.about}>
      <div className="container" ref={ref}>
        <div className={styles.layout}>

          {/* Visual */}
          <div className={`${styles.visual} ${inView ? styles.visible : ''}`}>
            <div className={styles.frame}>
              <div className={styles.frameBg} />
              <div className={styles.glyph}>P</div>
              <div className={styles.ring} />
              <span className={`${styles.corner} ${styles.tl}`} />
              <span className={`${styles.corner} ${styles.tr}`} />
              <span className={`${styles.corner} ${styles.bl}`} />
              <span className={`${styles.corner} ${styles.br}`} />
            </div>
            <div className={styles.tag}>
              <span>Strategic Connector</span>
              <span className={styles.tagDot}>·</span>
              <span>East Africa</span>
            </div>
          </div>

          {/* Copy */}
          <div className={`${styles.copy} ${inView ? styles.visible : ''}`}>
            <div className="section-label">Philosophy</div>
            <h2 className="section-heading">
              Access is not<br />given. It is built.
            </h2>
            <p className={styles.bodyPrimary}>
              At the intersection of capital, relationships, and opportunity lives a rare kind of operator — one who understands not just what deals look like, but how they move.
            </p>
            <p className={styles.bodySecondary}>
              Operating across East Africa and international markets, this practice is built on discretion, precision, and a network cultivated over more than a decade of high-level engagement. Whether facilitating investment, structuring partnerships, or opening doors that remain closed to most — the work is quiet, intentional, and consistently effective.
            </p>
            <ul className={styles.pillars}>
              {['Strategic Discretion', 'Network Depth', 'Cross-Border Intelligence'].map(p => (
                <li key={p} className={styles.pillar}>
                  <span className={styles.dash}>—</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
