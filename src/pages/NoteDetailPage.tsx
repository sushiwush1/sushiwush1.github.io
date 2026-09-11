import type { CSSProperties } from 'react'
import { Link, useParams } from 'react-router'
import { doodleMap } from '../components/doodles'
import { accentSoftVar } from '../components/ui/accent'
import { Reveal } from '../components/ui/Reveal'
import { notFound } from '../content/contact'
import { notes, notesPage } from '../content/notes'
import { usePageMeta } from '../hooks/usePageMeta'
import { NoteCard } from '../sections/notes/NoteCard'
import { NotFoundPage } from './NotFoundPage'
import styles from './NoteDetailPage.module.css'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})

/** Note article: title, date and reading time, a doodle panel, then the body. */
export function NoteDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const note = notes.find((candidate) => candidate.slug === slug)

  // Matches what NotFoundPage itself sets, since it also renders below and
  // calls usePageMeta: keeping both calls in sync avoids one effect
  // clobbering the other's title with a different string.
  usePageMeta(note ? note.title : 'Page not found', note ? note.excerpt : notFound.intro)

  if (!note) {
    return <NotFoundPage />
  }

  const Doodle = doodleMap[note.doodle]
  const formattedDate = dateFormatter.format(new Date(`${note.date}T00:00:00`))
  const otherNotes = notes.filter((candidate) => candidate.slug !== note.slug)

  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <Link to="/notes" className={styles.back}>
            <svg
              className={styles.backIcon}
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
            {notesPage.back}
          </Link>
          <article className={styles.article}>
            <Reveal as="h1" className={styles.title}>
              {note.title}
            </Reveal>
            <Reveal as="p" className={styles.meta} delayMs={80}>
              <time dateTime={note.date}>{formattedDate}</time>
              {' · '}
              {note.readingTime}
            </Reveal>
            <Reveal delayMs={120}>
              <div
                className={styles.doodlePanel}
                style={{ '--fill': accentSoftVar(note.accent) } as CSSProperties}
                aria-hidden="true"
              >
                <Doodle className={styles.doodle} />
              </div>
            </Reveal>
            <div className={styles.body}>
              {note.body.map((paragraph, index) => (
                <Reveal as="p" key={paragraph} delayMs={index * 60}>
                  {paragraph}
                </Reveal>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className={styles.moreSection}>
        <div className="container">
          <h2 className={styles.moreHeading}>{notesPage.moreHeading}</h2>
          <ul className={styles.moreGrid}>
            {otherNotes.map((otherNote, index) => (
              <li key={otherNote.slug}>
                <Reveal delayMs={index * 80}>
                  <NoteCard note={otherNote} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
