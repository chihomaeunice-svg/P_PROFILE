import useInView from '../../hooks/useInView'
import styles from './Values.module.css'

const values = [
  {
    roman: 'I',
    title: 'Discretion',
    body: 'What happens within serious networks stays within them. Every engagement is handled with the confidentiality it deserves.',
  },
  {
    roman: 'II',
    title: 'Precision',
    body: 'Time is the scarcest resource. Every introduction, every meeting, every opportunity is selected with intention and accuracy.',
  },
  {
    roman: 'III',
    title: 'Credibility',
    body: 'In high-level business, reputation is currency. Everything here is built on verifiable track record and mutual trust.',
  },
]

export default function Values() {
  const [ref, inView] = useInView()

  return (
    <section id="values" className={styles.values}>
      <div className="container">
        <div className={styles.row} ref={ref}>
          {values.map((v, i) => (
            <div key={v.roman} className={styles.block}>
              {i > 0 && <div className={styles.divider} />}
              <article
                className={`${styles.item} ${inView ? styles.visible : ''}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={styles.roman}>{v.roman}</div>
                <h3 className={styles.title}>{v.title}</h3>
                <p className={styles.body}>{v.body}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
