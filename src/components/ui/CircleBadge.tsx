import { useId } from 'react'
import { Envelope } from '../doodles/Doodles'
import { accentVar, type Accent } from './accent'
import styles from './CircleBadge.module.css'

export interface CircleBadgeProps {
  /** Text repeated around the circle, e.g. "OPEN TO HR ROLES · OPEN TO HR ROLES · ". */
  text: string
  accent?: Accent
  className?: string
}

/** Slowly rotating circular text around an envelope icon. Decorative. */
export function CircleBadge({ text, accent = 'yellow', className }: CircleBadgeProps) {
  const pathId = useId()

  return (
    <div
      className={[styles.wrapper, className].filter(Boolean).join(' ')}
      style={{ '--fill': accentVar(accent) } as React.CSSProperties}
      aria-hidden="true"
    >
      <div className={styles.circle}>
        <svg viewBox="0 0 130 130" className={styles.spin}>
          <path id={pathId} d="M65,65 m-48,0 a48,48 0 1,1 96,0 a48,48 0 1,1 -96,0" fill="none" />
          <text className={styles.text}>
            <textPath href={`#${pathId}`}>{text}</textPath>
          </text>
        </svg>
      </div>
      <div className={styles.iconWrap}>
        <Envelope className={styles.icon} />
      </div>
    </div>
  )
}
