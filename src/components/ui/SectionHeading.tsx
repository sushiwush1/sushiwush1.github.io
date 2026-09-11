import type { ElementType } from 'react'
import { RichText } from './RichText'
import styles from './SectionHeading.module.css'

export interface SectionHeadingProps {
  title: string
  /** Intro paragraph; `**text**` segments render with medium weight. */
  intro?: string
  as?: ElementType
  className?: string
}

/** Centered H2 title with an optional large intro paragraph below it. */
export function SectionHeading({ title, intro, as: Tag = 'h2', className }: SectionHeadingProps) {
  return (
    <div className={[styles.heading, className].filter(Boolean).join(' ')}>
      <Tag className={styles.title}>{title}</Tag>
      {intro ? (
        <p className={styles.intro}>
          <RichText text={intro} />
        </p>
      ) : null}
    </div>
  )
}
