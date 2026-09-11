import { accentVar, type Accent } from './accent'
import styles from './FactPill.module.css'

export interface FactPillProps {
  /** Big outlined number or figure, e.g. "98%" or "15". */
  value: string
  label: string
  accent?: Accent
  className?: string
}

/** Outlined big number pill used in the "numbers" stat row. */
export function FactPill({ value, label, accent = 'purple', className }: FactPillProps) {
  const style = {
    '--glyph-fill': accentVar(accent),
  } as React.CSSProperties

  return (
    <div className={[styles.pill, className].filter(Boolean).join(' ')}>
      <span className={styles.number} style={style}>
        {value}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  )
}
