import type { ElementType, ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'
import styles from './Reveal.module.css'

export interface RevealProps {
  children: ReactNode
  /** Element type to render, defaults to 'div'. */
  as?: ElementType
  /** Delay in milliseconds before the reveal animation starts, for staggering. */
  delayMs?: number
  className?: string
}

/** Fades and slides content up into view the first time it enters the viewport. */
export function Reveal({ children, as: Tag = 'div', delayMs = 0, className }: RevealProps) {
  const { ref, revealed } = useReveal<HTMLElement>()

  return (
    <Tag
      ref={ref}
      className={[styles.reveal, revealed ? styles.revealed : '', className]
        .filter(Boolean)
        .join(' ')}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
