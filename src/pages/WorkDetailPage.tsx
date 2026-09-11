import type { CSSProperties } from 'react'
import { Link, useParams } from 'react-router'
import { Button } from '../components/ui/Button'
import { accentVar } from '../components/ui/accent'
import { Reveal } from '../components/ui/Reveal'
import { notFound } from '../content/contact'
import { work, workPage } from '../content/work'
import { usePageMeta } from '../hooks/usePageMeta'
import { WorkMedia } from '../sections/work/WorkMedia'
import { NotFoundPage } from './NotFoundPage'
import styles from './WorkDetailPage.module.css'

/** Case study detail: situation, what I did (numbered steps) and what came of it. */
export function WorkDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const item = work.find((candidate) => candidate.slug === slug)

  // Matches what NotFoundPage itself sets, since it also renders below and
  // calls usePageMeta: keeping both calls in sync avoids one effect
  // clobbering the other's title with a different string.
  usePageMeta(item ? item.title : 'Page not found', item ? item.summary : notFound.intro)

  if (!item) {
    return <NotFoundPage />
  }

  const currentIndex = work.indexOf(item)
  const related = [work[(currentIndex + 1) % work.length], work[(currentIndex + 2) % work.length]]

  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <Link to="/work" className={styles.back}>
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
            {workPage.labels.back}
          </Link>
          <Reveal as="h1" className={styles.title}>
            {item.title}
          </Reveal>
          <Reveal as="p" className={styles.summary} delayMs={80}>
            {item.summary}
          </Reveal>
        </div>
      </section>

      <section className={styles.mediaSection}>
        <div className="container">
          <Reveal>
            <WorkMedia item={item} size="hero" />
          </Reveal>
        </div>
      </section>

      <section className={styles.detailsSection}>
        <div className="container">
          <div className={styles.detailsGrid}>
            <Reveal as="dl" className={styles.metaList}>
              <div className={styles.metaRow}>
                <dt>{workPage.labels.where}</dt>
                <dd>{item.where}</dd>
              </div>
              <div className={styles.metaRow}>
                <dt>{workPage.labels.role}</dt>
                <dd>{item.role}</dd>
              </div>
              <div className={styles.metaRow}>
                <dt>{workPage.labels.when}</dt>
                <dd>{item.when}</dd>
              </div>
            </Reveal>
            <Reveal delayMs={80} className={styles.context}>
              <h2 className={styles.contextHeading}>{workPage.labels.context}</h2>
              {item.context.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.stepsSection}>
        <div className="container">
          <Reveal className={styles.stepsPanel}>
            <h2 className={styles.stepsHeading}>{workPage.labels.steps}</h2>
            <div className={styles.stepsGrid}>
              {item.steps.map((step, index) => (
                <div key={step.title} className={styles.step}>
                  <span
                    className={styles.stepNumber}
                    style={
                      {
                        '--stroke': `color-mix(in srgb, ${accentVar(item.accent)} 55%, var(--color-dark) 45%)`,
                      } as CSSProperties
                    }
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.outcomeSection}>
        <div className="container">
          <Reveal className={styles.outcome}>
            <h2 className={styles.outcomeHeading}>{workPage.labels.outcome}</h2>
            {item.outcome.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <div className="container">
          <Reveal as="h2" className={styles.relatedHeading}>
            {workPage.relatedHeading}
          </Reveal>
          <div className={styles.relatedGrid}>
            {related.map((relatedItem, index) => (
              <Reveal key={relatedItem.slug} delayMs={index * 80}>
                <Link to={`/work/${relatedItem.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedMedia}>
                    <WorkMedia item={relatedItem} />
                  </div>
                  <p className={styles.relatedMeta}>{relatedItem.tags}</p>
                  <h3 className={styles.relatedTitle}>{relatedItem.title}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
          <Button to="/work">{workPage.relatedButton}</Button>
        </div>
      </section>
    </>
  )
}
