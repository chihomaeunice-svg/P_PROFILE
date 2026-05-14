import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './PageTransition.module.css'

export default function PageTransition({ children }) {
  const location   = useLocation()
  const [phase, setPhase] = useState('idle') // idle | enter | exit
  const prevKey = useRef(location.key)

  useEffect(() => {
    if (prevKey.current === location.key) return
    prevKey.current = location.key

    setPhase('enter')
    const t1 = setTimeout(() => setPhase('exit'), 350)
    const t2 = setTimeout(() => setPhase('idle'), 700)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [location])

  // Scroll to top on route change
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])

  return (
    <>
      <div className={`${styles.overlay} ${styles[phase]}`} />
      {children}
    </>
  )
}
