import { useEffect, useRef, useState } from 'react'

function shouldRevealImmediately(): boolean {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return prefersReducedMotion || typeof IntersectionObserver === 'undefined'
}

/**
 * Tracks whether an element has entered the viewport, for a one-shot
 * fade-up reveal animation. Resolves to true immediately when the user
 * prefers reduced motion or when IntersectionObserver is unavailable, and
 * never re-fires once revealed.
 */
export function useReveal<T extends HTMLElement>(): {
  ref: React.RefObject<T | null>
  revealed: boolean
} {
  const ref = useRef<T | null>(null)
  const [revealed, setRevealed] = useState(shouldRevealImmediately)

  useEffect(() => {
    if (revealed) return

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true)
            observer.disconnect()
          }
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [revealed])

  return { ref, revealed }
}
