import { doodleMap } from '../../components/doodles'
import { InfoCard } from '../../components/ui/InfoCard'
import { useReveal } from '../../hooks/useReveal'
import { infoCards } from '../../content/home'
import styles from './InfoCardsSection.module.css'

/**
 * Three info cards overlapping the bottom edge of the hero's purple band.
 * The outer two start shifted toward the middle and rotated, then settle
 * into place on first scroll into view.
 */
export function InfoCardsSection() {
  const { ref, revealed } = useReveal<HTMLDivElement>()

  return (
    <div className={styles.wrap}>
      <div className="container">
        <div
          ref={ref}
          className={[styles.row, revealed ? styles.revealed : ''].filter(Boolean).join(' ')}
        >
          {infoCards.map((card, index) => {
            const Doodle = doodleMap[card.doodle]
            return (
              <InfoCard
                headingLevel="h2"
                key={card.title}
                doodle={<Doodle />}
                title={card.title}
                text={card.text}
                linkLabel={`Go to ${card.title}`}
                to={card.to}
                accent={card.accent}
                className={index !== 1 ? styles.outer : undefined}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
