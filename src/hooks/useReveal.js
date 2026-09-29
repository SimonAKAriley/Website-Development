import { useEffect, useRef, useState } from 'react'

/**
 * Adds a one-shot "revealed" state when the element scrolls into view.
 * Falls back to immediately-visible when IntersectionObserver is missing
 * or the user prefers reduced motion (CSS also neutralizes transitions).
 */
export default function useReveal(options = {}) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setRevealed(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true)
            observer.disconnect()
            break
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options },
    )
    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, revealed]
}
