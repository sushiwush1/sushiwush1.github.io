import { processIconMap } from '../../components/doodles'
import { Button } from '../../components/ui/Button'
import { ProcessCard } from '../../components/ui/ProcessCard'
import { RichText } from '../../components/ui/RichText'
import { process } from '../../content/home'
import styles from './ProcessSection.module.css'

/**
 * Purple band: sticky heading and intro on the left, the four numbered
 * process cards stacked on the right. Single column below desktop.
 */
export function ProcessSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.intro}>
            <h2 className={styles.heading}>{process.heading}</h2>
            <p className={styles.text}>
              <RichText text={process.intro} />
            </p>
            <Button to="/#about">{process.button}</Button>
          </div>
          <div className={styles.cards}>
            {process.steps.map((step, index) => {
              const Icon = processIconMap[step.icon]
              return (
                <ProcessCard
                  key={step.title}
                  icon={<Icon />}
                  number={`(${String(index + 1).padStart(2, '0')})`}
                  title={step.title}
                  text={step.text}
                  accent={step.accent}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
