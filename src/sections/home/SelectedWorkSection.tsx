import { Button } from '../../components/ui/Button'
import { PortfolioCard } from '../../components/ui/PortfolioCard'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { selectedWork } from '../../content/home'
import { work, workPage } from '../../content/work'
import { WorkMedia } from '../work/WorkMedia'
import styles from './SelectedWorkSection.module.css'

/** A vertical list of case-study cards for the first few work items, then a link to the full archive. */
export function SelectedWorkSection() {
  const featured = work.slice(0, selectedWork.featuredCount)

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading title={selectedWork.heading} intro={selectedWork.intro} />
        <div className={styles.list}>
          {featured.map((item) => (
            <PortfolioCard
              key={item.slug}
              title={item.title}
              meta={item.tags}
              summary={item.summary}
              buttonLabel={workPage.labels.button}
              to={`/work/${item.slug}`}
              accent={item.accent}
              media={<WorkMedia item={item} />}
            />
          ))}
        </div>
        <div className={styles.more}>
          <p className={styles.moreLabel}>{selectedWork.moreLabel}</p>
          <Button to="/work">{selectedWork.moreButton}</Button>
        </div>
      </div>
    </section>
  )
}
