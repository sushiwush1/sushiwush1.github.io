import type { ReactNode } from 'react'
import { ArrowButton } from './ArrowButton'
import type { Accent } from './accent'
import styles from './InfoCard.module.css'

export interface InfoCardProps {
  doodle: ReactNode
  title: string
  text: string
  linkLabel: string
  to?: string
  href?: string
  accent?: Accent
  headingLevel?: 'h2' | 'h3'
  className?: string
}

/** One of the three cards presented under the hero, each linking further into the site. */
export function InfoCard({
  doodle,
  title,
  text,
  linkLabel,
  to,
  href,
  accent = 'blue',
  headingLevel = 'h3',
  className,
}: InfoCardProps) {
  const Heading = headingLevel
  return (
    <div className={[styles.card, className].filter(Boolean).join(' ')}>
      <span className={styles.doodle} aria-hidden="true">
        {doodle}
      </span>
      <Heading className={styles.title}>{title}</Heading>
      <p className={styles.text}>{text}</p>
      <ArrowButton label={linkLabel} accent={accent} to={to} href={href} />
    </div>
  )
}
