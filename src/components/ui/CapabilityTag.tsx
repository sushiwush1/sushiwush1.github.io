import type { ReactNode } from 'react'
import type { Accent } from './accent'
import styles from './CapabilityTag.module.css'

export interface CapabilityTagProps {
  label: string
  icon: ReactNode
  /** Reserved for future accent theming; the icon stroke stays full-contrast dark. */
  accent?: Accent
  className?: string
}

/** Pill with a small outline icon and label, used in capability rows. */
export function CapabilityTag({ label, icon, className }: CapabilityTagProps) {
  return (
    <span className={[styles.tag, className].filter(Boolean).join(' ')}>
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
      {label}
    </span>
  )
}
