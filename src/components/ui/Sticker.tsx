import type { CSSProperties, ReactNode } from 'react'
import { Badge } from './Badge'
import type { Accent } from './accent'
import styles from './Sticker.module.css'

export interface StickerPosition {
  top?: string
  bottom?: string
  left?: string
  right?: string
}

export interface StickerProps {
  children: ReactNode
  accent?: Accent
  /** Decorative doodle rendered near the badge, hidden from assistive tech. */
  doodle?: ReactNode
  /** Where the doodle sits relative to the badge. */
  doodlePosition?: StickerPosition
  rotateDeg?: number
  position: StickerPosition
  className?: string
}

/** A tilted Badge with a small doodle, absolutely positioned as a hero decoration. */
export function Sticker({
  children,
  accent = 'blue',
  doodle,
  doodlePosition,
  rotateDeg = -6,
  position,
  className,
}: StickerProps) {
  const style = {
    ...position,
    '--rotate': `${rotateDeg}deg`,
  } as CSSProperties

  return (
    <span className={[styles.sticker, className].filter(Boolean).join(' ')} style={style}>
      <Badge accent={accent}>{children}</Badge>
      {doodle ? (
        <span className={styles.doodle} style={doodlePosition} aria-hidden="true">
          {doodle}
        </span>
      ) : null}
    </span>
  )
}
