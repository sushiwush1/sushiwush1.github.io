import { CurvedArrow, SpeechBubble } from '../doodles/Doodles'
import { Button } from '../ui/Button'
import { CircleBadge } from '../ui/CircleBadge'
import { Reveal } from '../ui/Reveal'
import type { Accent } from '../ui/accent'
import styles from './FooterCta.module.css'

export interface FooterCtaProps {
  heading: string
  intro: string
  buttonLabel: string
  buttonTo: string
  note: string
  circleBadgeText: string
  circleBadgeAccent?: Accent
}

/** Dark band with the closing call to action and a rotating circle badge. */
export function FooterCta({
  heading,
  intro,
  buttonLabel,
  buttonTo,
  note,
  circleBadgeText,
  circleBadgeAccent = 'yellow',
}: FooterCtaProps) {
  return (
    <section className={styles.band}>
      <div className={styles.badgeSlot}>
        <CircleBadge text={circleBadgeText} accent={circleBadgeAccent} />
      </div>

      <Reveal as="div" className={styles.inner}>
        <SpeechBubble className={styles.bubbleIcon} />
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.intro}>{intro}</p>
        <div className={styles.actionRow}>
          <Button to={buttonTo} variant="default">
            {buttonLabel}
          </Button>
          <span className={styles.arrow} aria-hidden="true">
            <CurvedArrow />
          </span>
          <span className={styles.note}>{note}</span>
        </div>
      </Reveal>
    </section>
  )
}
