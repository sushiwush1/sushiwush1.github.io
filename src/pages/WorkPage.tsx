import { PortfolioCard } from '../components/ui/PortfolioCard'
import { Reveal } from '../components/ui/Reveal'
import { RichText } from '../components/ui/RichText'
import { work, workPage } from '../content/work'
import { usePageMeta } from '../hooks/usePageMeta'
import { WorkMedia } from '../sections/work/WorkMedia'
import styles from './WorkPage.module.css'

/** Work list page: purple header band above every case study as a PortfolioCard. */
export function WorkPage() {
  usePageMeta(workPage.heading, workPage.intro.replace(/\*\*/g, ''))

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Reveal as="h1" className={styles.heading}>
            {workPage.heading}
          </Reveal>
          <Reveal as="p" className={styles.intro} delayMs={80}>
            <RichText text={workPage.intro} />
          </Reveal>
        </div>
      </section>
      <section className={styles.listSection}>
        <div className="container">
          <ul className={styles.list}>
            {work.map((item, index) => (
              <li key={item.slug}>
                <Reveal delayMs={index * 80}>
                  <PortfolioCard
                    headingLevel="h2"
                    title={item.title}
                    meta={item.tags}
                    summary={item.summary}
                    buttonLabel={workPage.labels.button}
                    to={`/work/${item.slug}`}
                    accent={item.accent}
                    media={<WorkMedia item={item} />}
                  />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
