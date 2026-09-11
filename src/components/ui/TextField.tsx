import { useId } from 'react'
import type { InputHTMLAttributes } from 'react'
import styles from './TextField.module.css'

export interface TextFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'id' | 'className'
> {
  label: string
  error?: string
  className?: string
}

/** Underline-style text input with a visible label above it. */
export function TextField({ label, error, className, ...inputProps }: TextFieldProps) {
  const id = useId()
  const errorId = `${id}-error`

  return (
    <div className={[styles.field, className].filter(Boolean).join(' ')}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        className={styles.input}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...inputProps}
      />
      {error ? (
        <p id={errorId} className={styles.error}>
          {error}
        </p>
      ) : null}
    </div>
  )
}
