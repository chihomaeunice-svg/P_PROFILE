import useInView from '../../hooks/useInView'
import styles from './Network.module.css'

const audience = [
  'Private Investors & Family Offices',
  'International Developers',
  'Corporate Decision-Makers',
  'Real Estate Buyers & Syndicates',
  'Government & Institutional Partners',
  'International Business Partners',
]

export default function Network() {
  const [ref, inView] = useInView()

  return (
    <section id="network" className={styles.network}>
      <NetworkBg />
      <div className="container">
        <div className={`${styles.content} ${inView ? styles.visible : ''}`} ref={ref}>
          <div className="section-label">The Network</div>
          <h2 className="section-heading">Who This Is For</h2>
          <p className={styles.intro}>
            The most significant opportunities in emerging markets are not found on open platforms. They exist within trusted networks built on verified credibility and mutual discretion.
          </p>
          <ul className={styles.grid}>
            {audience.map((item, i) => (
              <li
                key={item}
                className={`${styles.item} ${inView ? styles.itemVisible : ''}`}
                style={{ transitionDelay: `${200 + i * 80}ms` }}
              >
                <span className={styles.dot} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function NetworkBg() {
  return (
    <div className={styles.bg}>
      <svg className={styles.bgSvg} viewBox="0 0 900 550" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.35"/>
            <stop offset="100%" stopColor="#c9a84c" stopOpacity="0"/>
          </radialGradient>
        </defs>
        {/* Concentric rings */}
        {[220, 155, 90, 40].map((r, i) => (
          <circle key={r} cx="450" cy="275" r={r}
            stroke="#c9a84c" strokeWidth="0.5" fill="none"
            opacity={0.08 + i * 0.03}
          />
        ))}
        {/* Spoke nodes */}
        {[
          [260, 175], [640, 175], [190, 330],
          [710, 330], [450, 490], [450, 60],
        ].map(([x, y], i) => (
          <g key={i}>
            <line x1="450" y1="275" x2={x} y2={y}
              stroke="#c9a84c" strokeWidth="0.5" opacity="0.15"/>
            <circle cx={x} cy={y} r="3.5" fill="#c9a84c" opacity="0.3"/>
          </g>
        ))}
        {/* Centre node */}
        <circle cx="450" cy="275" r="5" fill="url(#nodeGlow)"/>
        <circle cx="450" cy="275" r="2.5" fill="#c9a84c" opacity="0.6"/>
      </svg>
    </div>
  )
}
