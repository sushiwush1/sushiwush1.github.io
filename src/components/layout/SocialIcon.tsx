import type { SVGProps } from 'react'

export type SocialIconName = 'linkedin' | 'email'

/** Small original line icons for the header/footer social buttons. */
export function SocialIcon({ name, ...props }: { name: SocialIconName } & SVGProps<SVGSVGElement>) {
  if (name === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...props}>
        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8 10.5v6M8 7.75v.01M12 16.5v-3.7c0-1.4 1-2.3 2.3-2.3 1.3 0 2.2.9 2.2 2.3v3.7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
