import { Reveal } from '../components/ui/Reveal'
import { RichText } from '../components/ui/RichText'
import { notes, notesPage } from '../content/notes'
import { usePageMeta } from '../hooks/usePageMeta'
import { NoteCard } from '../sections/notes/NoteCard'
import styles from './NotesPage.module.css'

/** Notes list page: purple header band above a responsive grid of NoteCards. */
export function NotesPage() {
  usePageMeta(notesPage.heading, notesPage.intro.replace(/\*\*/g, ''))

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Reveal as="h1" className={styles.heading}>
            {notesPage.heading}
          </Reveal>
          <Reveal as="p" className={styles.intro} delayMs={80}>
            <RichText text={notesPage.intro} />
          </Reveal>
        </div>
      </section>
      <section className={styles.listSection}>
        <div className="container">
          <ul className={styles.grid}>
            {notes.map((note, index) => (
              <li key={note.slug}>
                <Reveal delayMs={index * 80}>
                  <NoteCard note={note} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
