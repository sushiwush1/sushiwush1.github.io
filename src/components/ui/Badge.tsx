import type { ReactNode } from 'react'
import { accentVar, type Accent } from './accent'
import styles from './Badge.module.css'

export interface BadgeProps {
  children: ReactNode
  accent?: Accent
  /** Optional decorative icon rendered before the text. */
  icon?: ReactNode
  className?: string
}

/** Pill label used inline for meta text, or tilted as a hero sticker. */
export function Badge({ children, accent = 'purple', icon, className }: BadgeProps) {
  const style = { '--fill': accentVar(accent) } as React.CSSProperties
  return (
    <span className={[styles.badge, className].filter(Boolean).join(' ')} style={style}>
      {icon ? (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      ) : null}
      {children}
    </span>
  )
}
