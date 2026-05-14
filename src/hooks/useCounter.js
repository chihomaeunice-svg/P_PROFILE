import { useEffect, useRef, useState } from 'react'

export default function useCounter(target, duration = 1800, inView = false) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    if (typeof target !== 'number') return
    started.current = true

    const start = performance.now()
    const step  = ts => {
      const progress = Math.min((ts - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3) // ease-out-cubic
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration])

  return count
}
