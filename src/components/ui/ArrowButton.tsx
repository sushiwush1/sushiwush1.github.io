import { Link } from 'react-router'
import { accentHoverVar, accentVar, type Accent } from './accent'
import styles from './ArrowButton.module.css'

export interface ArrowButtonProps {
  /** Accessible label, since the control shows only an icon. */
  label: string
  accent?: Accent
  to?: string
  href?: string
  onClick?: () => void
  className?: string
}

/** Small pill button with a thin arrow icon, used as a card's call to action. */
export function ArrowButton({
  label,
  accent = 'blue',
  to,
  href,
  onClick,
  className,
}: ArrowButtonProps) {
  const style = {
    '--fill': accentVar(accent),
    '--fill-hover': accentHoverVar(accent),
  } as React.CSSProperties

  const content = (
    <svg
      className={styles.icon}
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
  )

  const classes = [styles.arrowButton, className].filter(Boolean).join(' ')

  if (to) {
    return (
      <Link to={to} aria-label={label} className={classes} style={style}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} aria-label={label} className={classes} style={style}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" aria-label={label} onClick={onClick} className={classes} style={style}>
      {content}
    </button>
  )
}
