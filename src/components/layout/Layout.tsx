import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router'
import type { NavLink, SocialLink } from '../../content/types'
import { Footer } from './Footer'
import { FooterCta } from './FooterCta'
import { Header } from './Header'
import styles from './Layout.module.css'

export interface FooterData {
  ctaHeading: string
  ctaIntro: string
  ctaButton: string
  ctaNote: string
  circleBadgeText: string
  copyright: string
  links: NavLink[]
}

export interface LayoutProps {
  logo: string
  links: NavLink[]
  socials: SocialLink[]
  footer: FooterData
}

/** Page shell: skip link, sticky header, routed content, closing CTA, footer. */
export function Layout({ logo, links, socials, footer }: LayoutProps) {
  const location = useLocation()
  const mainRef = useRef<HTMLElement | null>(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (location.hash) {
      const id = location.hash.slice(1)
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
        return
      }
    }

    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'auto' })
    mainRef.current?.focus()
  }, [location.pathname, location.hash])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Header logo={logo} links={links} socials={socials} />

      <main id="main" tabIndex={-1} ref={mainRef} className={styles.main}>
        <div key={location.pathname} className={styles.pageEnter}>
          <Outlet />
        </div>
      </main>

      <FooterCta
        heading={footer.ctaHeading}
        intro={footer.ctaIntro}
        buttonLabel={footer.ctaButton}
        buttonTo="/contact"
        note={footer.ctaNote}
        circleBadgeText={footer.circleBadgeText}
      />

      <Footer copyright={footer.copyright} links={footer.links} />
    </>
  )
}
