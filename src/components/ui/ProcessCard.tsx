import type { ReactNode } from 'react'
import { accentVar, type Accent } from './accent'
import styles from './ProcessCard.module.css'

export interface ProcessCardProps {
  icon: ReactNode
  /** Step number label, e.g. "(01)". */
  number: string
  title: string
  text: string
  accent?: Accent
  className?: string
}

/** One step of the process section: pastel card with a circular icon and step number. */
export function ProcessCard({
  icon,
  number,
  title,
  text,
  accent = 'powder',
  className,
}: ProcessCardProps) {
  return (
    <div
      className={[styles.card, className].filter(Boolean).join(' ')}
      style={{ '--fill': accentVar(accent) } as React.CSSProperties}
    >
      <div className={styles.top}>
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
        <span className={styles.number}>{number}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  )
}
