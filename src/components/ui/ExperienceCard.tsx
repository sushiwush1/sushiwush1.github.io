import { accentVar, type Accent } from './accent'
import styles from './ExperienceCard.module.css'

export interface ExperienceCardProps {
  dates: string
  accent?: Accent
  title: string
  organization: string
  place: string
  bullets: string[]
  className?: string
}

/** A role or degree: pastel date badge, white card, title, organization and bullets. */
export function ExperienceCard({
  dates,
  accent = 'lime',
  title,
  organization,
  place,
  bullets,
  className,
}: ExperienceCardProps) {
  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      <span
        className={styles.dateBadge}
        style={{ '--fill': accentVar(accent) } as React.CSSProperties}
      >
        {dates}
      </span>
      <div className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.meta}>
          {organization}, {place}
        </p>
        <ul className={styles.bullets}>
          {bullets.map((bullet) => (
            <li key={bullet} className={styles.bullet}>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
