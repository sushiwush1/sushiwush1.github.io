import type { CSSProperties } from 'react'
import { doodleMap } from '../../components/doodles'
import { accentSoftVar } from '../../components/ui/accent'
import type { WorkItem } from '../../content/types'
import styles from './WorkMedia.module.css'

export interface WorkMediaProps {
  item: WorkItem
  size?: 'card' | 'hero'
}

const DOODLE_POSITION_CLASSES = [styles.doodleOne, styles.doodleTwo, styles.doodleThree]
const LINE_WIDTHS = ['82%', '58%', '40%']

/**
 * Decorative media panel standing in for a screenshot: a soft accent
 * background holding a tilted white "document" card (tags label plus a
 * few line bars) with the item's doodles scattered around it. There are
 * no real screenshots of this work, so the panel never pretends to be one.
 */
export function WorkMedia({ item, size = 'card' }: WorkMediaProps) {
  const style = { '--fill': accentSoftVar(item.accent) } as CSSProperties
  const doodles = item.doodles.slice(0, 3)

  return (
    <div
      className={[styles.panel, size === 'hero' ? styles.hero : ''].filter(Boolean).join(' ')}
      style={style}
      aria-hidden="true"
    >
      {doodles.map((name, index) => {
        const Doodle = doodleMap[name]
        return (
          <span key={name} className={[styles.doodle, DOODLE_POSITION_CLASSES[index]].join(' ')}>
            <Doodle />
          </span>
        )
      })}
      <div className={styles.document}>
        <p className={styles.label}>{item.tags}</p>
        <div className={styles.lines}>
          {LINE_WIDTHS.map((width, index) => (
            <span key={index} className={styles.line} style={{ width }} />
          ))}
        </div>
      </div>
    </div>
  )
}
