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
  headingLevel?: 'h2' | 'h3'
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
  headingLevel = 'h3',
  className,
}: PortfolioCardProps) {
  const Heading = headingLevel
  return (
    <article className={[styles.card, className].filter(Boolean).join(' ')}>
      <div className={styles.text}>
        <Heading className={styles.title}>{title}</Heading>
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
