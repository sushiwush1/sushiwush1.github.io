import { useEffect } from 'react'

const SITE_NAME = 'Kanishka Yadav'
const DESCRIPTION_SELECTOR = 'meta[name="description"]'

/** Sets document.title and the meta description for the current page. */
export function usePageMeta(title: string, description: string): void {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`

    const meta = document.querySelector(DESCRIPTION_SELECTOR)
    const previousDescription = meta?.getAttribute('content') ?? ''
    meta?.setAttribute('content', description)

    return () => {
      document.title = previousTitle
      meta?.setAttribute('content', previousDescription)
    }
  }, [title, description])
}
