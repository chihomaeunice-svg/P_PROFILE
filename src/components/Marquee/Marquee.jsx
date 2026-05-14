import styles from './Marquee.module.css'

const items = [
  'East Africa', 'Strategic Partnerships', 'Real Estate',
  'Investment Networking', 'International Trade', 'Project Facilitation',
  'Corporate Connections', 'Global Reach', 'Trusted Access',
]

export default function Marquee() {
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.sep}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
