import { useEffect, useRef, useState, type RefObject } from 'react'

export function useInView<T extends HTMLElement>(): { ref: RefObject<T | null>; inView: boolean } {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}
