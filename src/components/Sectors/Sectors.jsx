import { Link } from 'react-router-dom'
import useInView from '../../hooks/useInView'
import styles from './Sectors.module.css'

const sectors = [
  {
    num: '01', path: '/real-estate',
    title: ['Real Estate', 'Opportunities'],
    body: 'Premium land, commercial developments, and high-value property investments across strategic East African markets.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none">
        <rect x="4" y="18" width="36" height="22" rx="0.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M12 18V10H32V18" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="17" y="28" width="10" height="12" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M4 18H40" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    num: '02', path: '/investment',
    title: ['Investment', 'Networking'],
    body: 'Connecting capital with verified, curated opportunities across infrastructure, technology, and emerging sectors.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="18" stroke="currentColor" strokeWidth="1.4"/>
        <ellipse cx="22" cy="22" rx="8" ry="18" stroke="currentColor" strokeWidth="1.4"/>
        <line x1="4" y1="22" x2="40" y2="22" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M7 14c4 3 9 4.5 15 4.5S33 17 37 14" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M7 30c4-3 9-4.5 15-4.5S33 27 37 30" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    num: '03', path: '/trade',
    title: ['International', 'Trade'],
    body: 'Cross-border trade relationships, market entry strategies, and bilateral commercial engagements across continents.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none">
        <path d="M8 22H36" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/>
        <path d="M28 14L36 22L28 30" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/>
        <circle cx="12" cy="22" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="32" cy="22" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    num: '04', path: '/facilitation',
    title: ['Project', 'Facilitation'],
    body: 'End-to-end coordination of complex multi-stakeholder projects from concept through to execution and delivery.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none">
        <rect x="4" y="12" width="16" height="20" rx="0.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="24" y="12" width="16" height="20" rx="0.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M20 22H24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M20 17H24M20 27H24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 2"/>
      </svg>
    ),
  },
  {
    num: '05', path: '/corporate',
    title: ['Corporate', 'Connections'],
    body: 'Direct access to C-suite executives, board-level decision makers, and institutional partners across sectors and borders.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="13" r="6" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="9" cy="33" r="4.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="35" cy="33" r="4.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M15 20L10 28.5M29 20L34 28.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M17 19H27" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Sectors() {
  const [ref, inView] = useInView()

  return (
    <section id="sectors" className={styles.sectors}>
      <div className="container">
        <div className={`${styles.header} ${inView ? styles.visible : ''}`} ref={ref}>
          <div className="section-label">Areas of Operation</div>
          <h2 className="section-heading">Strategic Sectors</h2>
        </div>
        <div className={styles.grid}>
          {sectors.map((s, i) => <SectorCard key={s.num} sector={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}

function SectorCard({ sector, index }) {
  const [ref, inView] = useInView()

  return (
    <Link
      to={sector.path}
      ref={ref}
      className={`${styles.card} ${inView ? styles.cardVisible : ''}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className={styles.cardNum}>{sector.num}</div>
      <div className={styles.cardIcon}>{sector.icon}</div>
      <h3 className={styles.cardTitle}>
        {sector.title[0]}<br />{sector.title[1]}
      </h3>
      <p className={styles.cardBody}>{sector.body}</p>
      <div className={styles.cardFooter}>
        <span className={styles.cardCta}>Explore Sector →</span>
      </div>
      <div className={styles.cardBar} />
    </Link>
  )
}
