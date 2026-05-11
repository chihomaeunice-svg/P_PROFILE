import useInView from '../../hooks/useInView'
import styles from './Statement.module.css'

export default function Statement() {
  const [ref, inView] = useInView()

  return (
    <section id="statement" className={styles.statement}>
      <div ref={ref} className={`${styles.wrap} ${inView ? styles.visible : ''}`}>
        <div className={styles.rule} />
        <blockquote className={styles.quote}>
          "Serious opportunities demand serious representation. Every connection made here carries the weight of trust, the precision of strategy, and the clarity of purpose."
        </blockquote>
        <div className={styles.rule} />
      </div>
    </section>
  )
}
