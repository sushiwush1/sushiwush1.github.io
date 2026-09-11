import type { CSSProperties } from 'react'
import { Link } from 'react-router'
import { doodleMap } from '../../components/doodles'
import { accentSoftVar } from '../../components/ui/accent'
import type { NoteItem } from '../../content/types'
import styles from './NoteCard.module.css'

export interface NoteCardProps {
  note: NoteItem
  headingLevel?: 'h2' | 'h3'
}

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})

/** Note preview card: accent doodle panel, date and reading time, title, excerpt. */
export function NoteCard({ note, headingLevel = 'h3' }: NoteCardProps) {
  const Heading = headingLevel
  const Doodle = doodleMap[note.doodle]
  const style = { '--fill': accentSoftVar(note.accent) } as CSSProperties
  const formattedDate = dateFormatter.format(new Date(`${note.date}T00:00:00`))

  return (
    <Link to={`/notes/${note.slug}`} className={styles.card}>
      <span className={styles.media} style={style} aria-hidden="true">
        <Doodle className={styles.doodle} />
      </span>
      <div className={styles.body}>
        <p className={styles.meta}>
          <time dateTime={note.date}>{formattedDate}</time>
          {' · '}
          {note.readingTime}
        </p>
        <Heading className={styles.title}>{note.title}</Heading>
        <p className={styles.excerpt}>{note.excerpt}</p>
        <svg
          className={styles.arrow}
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M4 10h12M11 5l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  )
}
