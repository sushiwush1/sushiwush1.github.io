import { FactPill } from '../../components/ui/FactPill'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { numbers } from '../../content/home'
import styles from './NumbersSection.module.css'

/** Centered stat row, sitting directly under the process cards on the same purple band. */
export function NumbersSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading title={numbers.heading} intro={numbers.intro} />
        <div className={styles.pills}>
          {numbers.facts.map((fact) => (
            <FactPill key={fact.label} value={fact.value} label={fact.label} accent={fact.accent} />
          ))}
        </div>
      </div>
    </section>
  )
}
