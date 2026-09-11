import { Button } from '../../components/ui/Button'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { notesSection } from '../../content/home'
import { notes } from '../../content/notes'
import { NoteCard } from '../notes/NoteCard'
import styles from './NotesTeaserSection.module.css'

/** Heading and intro, then a grid of note preview cards, then a link to all notes. */
export function NotesTeaserSection() {
  const featured = notes.slice(0, 3)

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading title={notesSection.heading} intro={notesSection.intro} />
        <div className={styles.grid}>
          {featured.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
        <div className={styles.more}>
          <Button to="/notes">{notesSection.button}</Button>
        </div>
      </div>
    </section>
  )
}
