import type { ReactNode } from 'react'
import { Button } from './Button'
import { accentVar, type Accent } from './accent'
import styles from './PortfolioCard.module.css'

export interface PortfolioCardProps {
  title: string
  /** Uppercase meta label, e.g. category tags. */
  meta: string
  summary: string
  buttonLabel: string
  to: string
  accent?: Accent
  /** Arbitrary media, illustration, or preview rendered on the accent panel. */
  media: ReactNode
  className?: string
}

/** Case study row: text column plus a media panel on an accent fill. */
export function PortfolioCard({
  title,
  meta,
  summary,
  buttonLabel,
  to,
  accent = 'purple',
  media,
  className,
}: PortfolioCardProps) {
  return (
    <article className={[styles.card, className].filter(Boolean).join(' ')}>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.meta}>{meta}</p>
        <p className={styles.summary}>{summary}</p>
        <Button to={to}>{buttonLabel}</Button>
      </div>
      <div className={styles.media} style={{ '--fill': accentVar(accent) } as React.CSSProperties}>
        {media}
      </div>
    </article>
  )
}
