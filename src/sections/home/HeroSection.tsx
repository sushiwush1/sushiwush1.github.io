import { doodleMap } from '../../components/doodles'
import { PhotoFrame } from '../../components/ui/PhotoFrame'
import { RichText } from '../../components/ui/RichText'
import { Sticker, type StickerPosition } from '../../components/ui/Sticker'
import { hero, stickers } from '../../content/home'
import type { Sticker as StickerContent } from '../../content/types'
import styles from './HeroSection.module.css'

const STICKER_POSITIONS: Record<StickerContent['position'], StickerPosition> = {
  'top-left': { top: '9%', left: '3%' },
  'top-right': { top: '11%', right: '4%' },
  'mid-left': { top: '58%', left: '4%' },
  'mid-right': { top: '60%', right: '5%' },
}

/**
 * Keeps each doodle stacked above its badge instead of the default inline
 * position (immediately after the badge in flow), which pushed right-side
 * doodles past the badge's own right edge and off the viewport at 1300 to
 * 1920px wide.
 */
const DOODLE_POSITION: StickerPosition = { bottom: '54px', left: '6px' }

/**
 * Purple hero band: the h1 carries greeting, a small inline photo, name and
 * the rest of the headline in one continuous reading order, followed by the
 * intro paragraph. Four tilted stickers float around it, hidden on phone,
 * where a larger standalone photo sits above the (greeting-less) headline.
 */
export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={[styles.container, 'container'].join(' ')}>
        <PhotoFrame
          alt=""
          variant="circle"
          size={128}
          loading="eager"
          fetchPriority="high"
          className={styles.mobilePhoto}
        />
        <h1 className={styles.headline}>
          <span className={styles.line1}>
            <span className={styles.greeting}>{hero.greeting} </span>
            <PhotoFrame
              alt=""
              variant="circle"
              size={72}
              loading="eager"
              fetchPriority="high"
              className={styles.inlinePhoto}
            />
            <span> {hero.headlineName}</span>
          </span>
          <span className={styles.line2}>{hero.headlineRest}</span>
        </h1>
        <p className={styles.intro}>
          <RichText text={hero.intro} />
        </p>
      </div>
      {stickers.map((sticker) => {
        const Doodle = doodleMap[sticker.doodle]
        return (
          <Sticker
            key={sticker.label}
            accent={sticker.accent}
            doodle={<Doodle />}
            doodlePosition={DOODLE_POSITION}
            rotateDeg={sticker.rotate}
            position={STICKER_POSITIONS[sticker.position]}
            className={styles.sticker}
          >
            {sticker.label}
          </Sticker>
        )
      })}
    </section>
  )
}
