import { ExperienceCard } from '../../components/ui/ExperienceCard'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { education, experience } from '../../content/experience'
import { experienceSection } from '../../content/home'
import styles from './ExperienceSection.module.css'

/** Work history and education, both rendered as ExperienceCards in a two-column grid. */
export function ExperienceSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading title={experienceSection.heading} intro={experienceSection.intro} />
        <div className={styles.grid}>
          {experience.map((item) => (
            <ExperienceCard
              key={item.id}
              dates={item.dates}
              accent={item.accent}
              title={item.title}
              organization={item.organization}
              place={item.place}
              bullets={item.bullets}
            />
          ))}
          {education.map((item) => (
            <ExperienceCard
              key={item.id}
              dates={item.dates}
              accent={item.accent}
              title={item.degree}
              organization={item.school}
              place={item.place}
              bullets={item.details}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
