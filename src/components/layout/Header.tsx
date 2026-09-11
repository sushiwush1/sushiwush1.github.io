import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import type { NavLink, SocialLink } from '../../content/types'
import { SocialIcon } from './SocialIcon'
import styles from './Header.module.css'

export interface HeaderProps {
  logo: string
  links: NavLink[]
  socials: SocialLink[]
}

function isLinkActive(to: string, pathname: string, hash: string): boolean {
  const [path, linkHash] = to.split('#')
  const normalizedPath = path === '' ? '/' : path
  const pathMatches =
    normalizedPath === '/'
      ? pathname === '/'
      : pathname === normalizedPath || pathname.startsWith(`${normalizedPath}/`)
  if (!pathMatches) return false
  if (linkHash) return hash === `#${linkHash}`
  return true
}

/** Pill nav bar: sticky after scroll, with a phone hamburger menu panel. */
export function Header({ logo, links, socials }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const panelRef = useRef<HTMLDivElement | null>(null)
  const toggleRef = useRef<HTMLButtonElement | null>(null)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const panel = panelRef.current
    const focusables = panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
    focusables?.[0]?.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
        return
      }

      if (event.key !== 'Tab' || !focusables || focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <div className={styles.stickyZone}>
      <div className={styles.spacer} aria-hidden="true" />
      <div className={styles.container}>
        <nav className={styles.nav} aria-label="Primary">
          <Link to="/" className={styles.logo}>
            {logo}
          </Link>

          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={
                    isLinkActive(link.to, location.pathname, location.hash)
                      ? `${styles.link} ${styles.linkActive}`
                      : styles.link
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.socials}>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={styles.socialButton}
              >
                <SocialIcon name={social.icon} className={styles.socialIcon} />
              </a>
            ))}
          </div>

          <button
            ref={toggleRef}
            type="button"
            className={styles.hamburger}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </nav>
      </div>

      <button
        type="button"
        className={menuOpen ? `${styles.overlay} ${styles.open}` : styles.overlay}
        aria-label="Close menu"
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeMenu}
      />
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!menuOpen}
        className={menuOpen ? `${styles.menuPanel} ${styles.open}` : styles.menuPanel}
      >
        <div className={styles.menuHeader}>
          <span className={styles.logo}>{logo}</span>
          <button
            type="button"
            className={styles.menuClose}
            aria-label="Close menu"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <ul className={styles.menuLinks}>
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
                className={
                  isLinkActive(link.to, location.pathname, location.hash)
                    ? `${styles.menuLink} ${styles.menuLinkActive}`
                    : styles.menuLink
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.menuSocials}>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              tabIndex={menuOpen ? 0 : -1}
              className={styles.socialButton}
            >
              <SocialIcon name={social.icon} className={styles.socialIcon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
