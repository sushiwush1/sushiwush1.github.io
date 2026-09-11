import { useEffect } from 'react'

const SITE_NAME = 'Kanishka Yadav'
const ORIGIN = 'https://sushiwush1.github.io'

function setContent(selector: string, value: string) {
  document.querySelector(selector)?.setAttribute('content', value)
}

/** Keeps the title, description, canonical link and social tags in sync with the current route. */
export function usePageMeta(title: string, description: string): void {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
    const path = window.location.pathname.replace(/\/?$/, '/')
    const canonical = `${ORIGIN}${path}`

    document.title = fullTitle
    setContent('meta[name="description"]', description)
    setContent('meta[property="og:title"]', fullTitle)
    setContent('meta[property="og:description"]', description)
    setContent('meta[property="og:url"]', canonical)
    setContent('meta[name="twitter:title"]', fullTitle)
    setContent('meta[name="twitter:description"]', description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonical)
  }, [title, description])
}
