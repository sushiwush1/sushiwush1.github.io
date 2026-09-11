import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { Accordion } from '../components/ui/Accordion'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { RichText } from '../components/ui/RichText'
import { SectionHeading } from '../components/ui/SectionHeading'
import { TextArea } from '../components/ui/TextArea'
import { TextField } from '../components/ui/TextField'
import { PaperPlane, Rainbow, doodleMap } from '../components/doodles'
import { contactPage } from '../content/contact'
import { site } from '../content/site'
import type { DoodleName } from '../content/types'
import { usePageMeta } from '../hooks/usePageMeta'
import styles from './ContactPage.module.css'

interface ContactRow {
  label: string
  value: string
  icon: DoodleName
  href?: string
}

interface FormValues {
  name: string
  email: string
  company: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Inline validation copy: not present in src/content/contact.ts, added here
// as the minimal text needed for accessible error messages. See report.
const ERROR_TEXT = {
  name: 'Enter your name.',
  email: 'Enter a valid email address.',
  message: 'Enter a message.',
}

const rows = contactPage.rows as ContactRow[]

const initialValues: FormValues = { name: '', email: '', company: '', message: '' }

/** Contact page: header band, get-in-touch card with a mailto form, and an FAQ accordion. */
export function ContactPage() {
  usePageMeta('Contact', contactPage.intro)

  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const formRef = useRef<HTMLFormElement>(null)
  const pendingFocusRef = useRef(false)

  useEffect(() => {
    if (!pendingFocusRef.current) return
    pendingFocusRef.current = false
    const invalid = formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')
    invalid?.focus()
  })

  function handleChange(field: keyof FormValues) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const nextValue = event.target.value
      setValues((prev) => ({ ...prev, [field]: nextValue }))
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const name = values.name.trim()
    const email = values.email.trim()
    const company = values.company.trim()
    const message = values.message.trim()

    const nextErrors: FormErrors = {}
    if (!name) nextErrors.name = ERROR_TEXT.name
    if (!email || !EMAIL_PATTERN.test(email)) nextErrors.email = ERROR_TEXT.email
    if (!message) nextErrors.message = ERROR_TEXT.message

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      pendingFocusRef.current = true
      return
    }

    const subject = company
      ? `${contactPage.form.subjectPrefix} ${name} at ${company}`
      : `${contactPage.form.subjectPrefix} ${name}`

    const bodyLines = [message, '', name, email]
    if (company) bodyLines.push(company)

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`

    window.location.href = mailto
  }

  return (
    <>
      <section className={styles.band}>
        <span className={`${styles.doodle} ${styles.doodleLeft}`} aria-hidden="true">
          <Rainbow />
        </span>
        <span className={`${styles.doodle} ${styles.doodleRight}`} aria-hidden="true">
          <PaperPlane />
        </span>
        <div className={`container ${styles.bandInner}`}>
          <Reveal as="h1" className={styles.heading}>
            {contactPage.heading}
          </Reveal>
          <Reveal as="p" delayMs={80} className={styles.intro}>
            <RichText text={contactPage.intro} />
          </Reveal>
        </div>
      </section>

      <section className={styles.cardSection}>
        <div className="container">
          <Reveal className={styles.card}>
            <div className={styles.cardText}>
              <h2 className={styles.cardHeading}>{contactPage.cardHeading}</h2>
              <p className={styles.cardIntro}>
                <RichText text={contactPage.cardIntro} />
              </p>
              <ul className={styles.rows}>
                {rows.map((row) => {
                  const Icon = doodleMap[row.icon]
                  const isExternal = row.href ? /^https?:\/\//.test(row.href) : false

                  return (
                    <li key={row.label} className={styles.row}>
                      <span className={styles.rowIcon} aria-hidden="true">
                        <Icon />
                      </span>
                      <span className={styles.rowText}>
                        <span className={styles.rowLabel}>{row.label}</span>
                        {row.href ? (
                          <a
                            className={styles.rowValue}
                            href={row.href}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                          >
                            {row.value}
                            {isExternal ? (
                              <span className={styles.visuallyHidden}> (opens in a new tab)</span>
                            ) : null}
                          </a>
                        ) : (
                          <span className={styles.rowValue}>{row.value}</span>
                        )}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <form className={styles.form} onSubmit={handleSubmit} ref={formRef} noValidate>
              <TextField
                label={contactPage.form.nameLabel}
                placeholder={contactPage.form.namePlaceholder}
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={handleChange('name')}
                error={errors.name}
                required
              />
              <TextField
                label={contactPage.form.emailLabel}
                placeholder={contactPage.form.emailPlaceholder}
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange('email')}
                error={errors.email}
                required
              />
              <TextField
                label={contactPage.form.companyLabel}
                placeholder={contactPage.form.companyPlaceholder}
                name="company"
                autoComplete="organization"
                value={values.company}
                onChange={handleChange('company')}
              />
              <TextArea
                label={contactPage.form.messageLabel}
                placeholder={contactPage.form.messagePlaceholder}
                name="message"
                value={values.message}
                onChange={handleChange('message')}
                error={errors.message}
                className={styles.messageField}
                required
              />
              <Button type="submit" className={styles.submitButton}>
                {contactPage.form.submit}
              </Button>
              <p className={styles.formNote}>{contactPage.form.note}</p>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title={contactPage.faqHeading} intro={contactPage.faqIntro} />
          <Reveal delayMs={120} className={styles.faqWrap}>
            <Accordion items={contactPage.faq} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
