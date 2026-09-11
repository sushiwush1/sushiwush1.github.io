import { accentVar, type Accent } from './accent'
import styles from './SkillBar.module.css'

export interface SkillBarProps {
  label: string
  /** Right-aligned text value, e.g. "Daily" or "5 years". */
  value: string
  /** Fill level from 0 to 100. */
  level: number
  accent?: Accent
  className?: string
}

/** Labeled skill row with a bordered track and an accent fill, exposed as a meter. */
export function SkillBar({ label, value, level, accent = 'blue', className }: SkillBarProps) {
  const clamped = Math.min(100, Math.max(0, level))

  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      <div className={styles.row}>
        <span>{label}</span>
        <span className={styles.value}>{value}</span>
      </div>
      <div
        className={styles.track}
        role="meter"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={clamped}
        aria-valuetext={value}
      >
        <div
          className={styles.fill}
          style={{ width: `${clamped}%`, '--fill': accentVar(accent) } as React.CSSProperties}
        />
      </div>
    </div>
  )
}
