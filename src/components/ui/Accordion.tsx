import { useId, useState } from 'react'
import styles from './Accordion.module.css'

export interface AccordionItem {
  question: string
  answer: string
}

export interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

/** FAQ rows that expand independently, each a native button with aria-expanded. */
export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const baseId = useId()

  return (
    <div className={[styles.list, className].filter(Boolean).join(' ')}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `${baseId}-panel-${index}`
        const triggerId = `${baseId}-trigger-${index}`

        return (
          <div key={item.question} className={[styles.row, isOpen ? styles.open : ''].join(' ')}>
            <h3>
              <button
                type="button"
                id={triggerId}
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span className={styles.plus} aria-hidden="true" />
              </button>
            </h3>
            <div className={styles.collapse}>
              <div className={styles.collapseInner}>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={styles.answer}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
