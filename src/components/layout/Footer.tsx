import { Link } from 'react-router'
import type { NavLink } from '../../content/types'
import styles from './Footer.module.css'

export interface FooterProps {
  copyright: string
  links: NavLink[]
}

/** Dark bottom row: thin rule, copyright left, links right. */
export function Footer({ copyright, links }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <hr className={styles.rule} />
        <div className={styles.row}>
          <p>{copyright}</p>
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
