import { SectionHeading } from '../../components/ui/SectionHeading'
import { testimonials, testimonialsSection } from '../../content/home'
import styles from './TestimonialsSection.module.css'

/**
 * Kind words from people Kanishka has worked with. Renders nothing when
 * there are no testimonials yet, which is the current, intentional state.
 */
export function TestimonialsSection() {
  if (testimonials.length === 0) {
    return null
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading title={testimonialsSection.heading} intro={testimonialsSection.intro} />
        <ul className={styles.grid}>
          {testimonials.map((testimonial) => (
            <li key={testimonial.name} className={styles.card}>
              <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>
              <p className={styles.name}>{testimonial.name}</p>
              <p className={styles.role}>{testimonial.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
