import type { CSSProperties } from 'react'
import { doodleMap } from '../../components/doodles'
import { CapabilityTag } from '../../components/ui/CapabilityTag'
import { CircleBadge } from '../../components/ui/CircleBadge'
import { PhotoFrame } from '../../components/ui/PhotoFrame'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { accentVar } from '../../components/ui/accent'
import { about } from '../../content/about'
import { footer, site } from '../../content/site'
import styles from './AboutSection.module.css'

/**
 * Two-column bio: large blob photo with an overlapping circle badge on the
 * left, greeting, heading, paragraphs and tool groups on the right. Below,
 * a centered capability tag list, then a row of "outside of work" cards.
 */
export function AboutSection() {
  return (
    <section id={about.anchorId} className={styles.section}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.photoCol}>
            <div className={styles.photoWrap}>
              <PhotoFrame
                alt={site.photoAlt}
                variant="blob"
                accent="yellow"
                size={480}
                className={styles.photo}
              />
              <CircleBadge text={footer.circleBadgeText} accent="blue" className={styles.badge} />
            </div>
          </div>
          <div className={styles.textCol}>
            <h2 className={styles.heading}>
              <span className={styles.greeting}>{about.greeting}</span> {about.heading}
            </h2>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
            <h3 className={styles.toolsHeading}>{about.toolsHeading}</h3>
            <div className={styles.toolGroups}>
              {about.toolGroups.map((group) => (
                <div
                  key={group.title}
                  className={styles.toolGroup}
                  style={{ '--fill': accentVar(group.accent) } as CSSProperties}
                >
                  <p className={styles.toolGroupHeader}>{group.title}</p>
                  <ul className={styles.toolList}>
                    {group.tools.map((tool) => (
                      <li key={tool} className={styles.toolPill}>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.capabilities}>
          <SectionHeading title={about.capabilitiesHeading} intro={about.capabilitiesIntro} />
          <div className={styles.capabilityTags}>
            {about.capabilities.map((capability) => {
              const Doodle = doodleMap[capability.doodle]
              return (
                <CapabilityTag
                  key={capability.label}
                  label={capability.label}
                  icon={<Doodle />}
                  accent={capability.accent}
                />
              )
            })}
          </div>
        </div>

        <div className={styles.outside}>
          <h3 className={styles.outsideHeading}>{about.outsideHeading}</h3>
          <div className={styles.outsideGrid}>
            {about.outside.map((item) => {
              const Doodle = doodleMap[item.doodle]
              return (
                <div
                  key={item.title}
                  className={styles.outsideCard}
                  style={{ '--fill': accentVar(item.accent) } as CSSProperties}
                >
                  <span className={styles.outsideDoodle} aria-hidden="true">
                    <Doodle />
                  </span>
                  <h4 className={styles.outsideTitle}>{item.title}</h4>
                  <p className={styles.outsideText}>{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
