import { useEffect, useRef, useState } from 'react'
import styles from './CustomCursor.module.css'

export default function CustomCursor() {
  const dotRef  = useRef(null)
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const onMove = e => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
      if (!visible) setVisible(true)
    }

    const onDown  = () => setClicking(true)
    const onUp    = () => setClicking(false)
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    const checkHover = e => {
      const el = e.target.closest('a, button, [data-cursor="hover"]')
      setHovering(!!el)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousemove', checkHover)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousemove', checkHover)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [visible])

  return (
    <div
      ref={dotRef}
      className={`${styles.dot} ${visible ? styles.visible : ''} ${clicking ? styles.clicking : ''} ${hovering ? styles.hovering : ''}`}
    />
  )
}
