import { useEffect } from 'react'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { CurvedArrow, Sparkle, Squiggle, Star } from '../components/doodles/Doodles'
import { notFound } from '../content/contact'
import { usePageMeta } from '../hooks/usePageMeta'
import styles from './NotFoundPage.module.css'

/** Sets a temporary noindex robots meta tag while this page is mounted. */
function useNoIndex(): void {
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.setAttribute('name', 'robots')
    meta.setAttribute('content', 'noindex')
    document.head.appendChild(meta)

    return () => {
      document.head.removeChild(meta)
    }
  }, [])
}

/** Catch-all 404 page: purple band, a short apology and a way back home. */
export function NotFoundPage() {
  usePageMeta('Page not found', notFound.intro)
  useNoIndex()

  return (
    <section className={styles.band}>
      <div className={`container ${styles.inner}`}>
        <span className={`${styles.doodle} ${styles.doodleStar}`} aria-hidden="true">
          <Star />
        </span>
        <span className={`${styles.doodle} ${styles.doodleSparkle}`} aria-hidden="true">
          <Sparkle />
        </span>
        <span className={`${styles.doodle} ${styles.doodleSquiggle}`} aria-hidden="true">
          <Squiggle />
        </span>
        <span className={`${styles.doodle} ${styles.doodleArrow}`} aria-hidden="true">
          <CurvedArrow />
        </span>

        <Reveal as="h1" className={styles.heading}>
          {notFound.heading}
        </Reveal>
        <Reveal as="p" delayMs={80} className={styles.intro}>
          {notFound.intro}
        </Reveal>
        <Reveal delayMs={160} className={styles.action}>
          <Button to="/">{notFound.button}</Button>
        </Reveal>
      </div>
    </section>
  )
}
