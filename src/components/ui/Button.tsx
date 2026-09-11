import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'
import styles from './Button.module.css'

export type ButtonVariant = 'default' | 'dark'

interface ButtonBaseProps {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
}

interface ButtonAsLink extends ButtonBaseProps {
  to: string
  href?: never
  type?: never
  onClick?: never
  disabled?: never
}

interface ButtonAsExternal extends ButtonBaseProps {
  href: string
  to?: never
  type?: never
  onClick?: never
  disabled?: never
  target?: string
  rel?: string
}

interface ButtonAsButton extends ButtonBaseProps {
  to?: never
  href?: never
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
  disabled?: boolean
}

export type ButtonProps = ButtonAsLink | ButtonAsExternal | ButtonAsButton

/**
 * Renders as a router Link when given `to`, an external anchor when given
 * `href`, or a native button otherwise. Shares one visual style.
 */
export function Button(props: ButtonProps) {
  const { children, variant = 'default', className } = props
  const classes = [styles.button, variant === 'dark' ? styles.dark : '', className]
    .filter(Boolean)
    .join(' ')

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    const linkProps = props as ButtonAsExternal
    const isExternal = /^https?:\/\//.test(linkProps.href) || linkProps.href.startsWith('mailto:')
    return (
      <a
        href={linkProps.href}
        className={classes}
        target={linkProps.target ?? (isExternal ? '_blank' : undefined)}
        rel={linkProps.rel ?? (isExternal ? 'noopener noreferrer' : undefined)}
      >
        {children}
      </a>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button
      type={buttonProps.type ?? 'button'}
      onClick={buttonProps.onClick}
      disabled={buttonProps.disabled}
      className={classes}
    >
      {children}
    </button>
  )
}
