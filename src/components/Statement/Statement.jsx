import useInView from '../../hooks/useInView'
import styles from './Statement.module.css'

export default function Statement() {
  const [ref, inView] = useInView()

  return (
    <section id="statement" className={styles.statement}>
      <div ref={ref} className={`${styles.wrap} ${inView ? styles.visible : ''}`}>
        <div className={styles.rule} />
        <blockquote className={styles.quote}>
          "My unmatched perspicacity coupled with my sheer indefatigability makes me a feared opponent in any realm of human endeavour."
        </blockquote>
        <div className={styles.attr}>— Peter Mushi</div>
        <div className={styles.rule} />
      </div>
    </section>
  )
}
