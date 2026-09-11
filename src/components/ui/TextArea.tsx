import { useId } from 'react'
import type { TextareaHTMLAttributes } from 'react'
import styles from './TextField.module.css'

export interface TextAreaProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'id' | 'className'
> {
  label: string
  error?: string
  className?: string
}

/** Underline-style textarea with a visible label above it. */
export function TextArea({ label, error, className, rows = 5, ...textareaProps }: TextAreaProps) {
  const id = useId()
  const errorId = `${id}-error`

  return (
    <div className={[styles.field, className].filter(Boolean).join(' ')}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        className={styles.input}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...textareaProps}
      />
      {error ? (
        <p id={errorId} className={styles.error}>
          {error}
        </p>
      ) : null}
    </div>
  )
}
