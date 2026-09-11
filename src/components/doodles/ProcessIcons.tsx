import type { SVGProps } from 'react'

/**
 * Simple line icons sized to sit inside ProcessCard's 72px circular badge.
 * Decorative: stroke currentColor, round caps and joins, aria-hidden.
 */

function base(props: SVGProps<SVGSVGElement>) {
  return {
    viewBox: '0 0 32 32',
    fill: 'none',
    'aria-hidden': true as const,
    focusable: false as const,
    width: '32',
    height: '32',
    ...props,
  }
}

/** An ear with a sound wave, for listening to feedback honestly. */
export function Listen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path
        d="M13 8a7 7 0 0 1 7 7c0 3-2 4-2 7a3 3 0 0 1-6 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M21 12c1.3 1.1 2 2.6 2 4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M24 9c2 1.8 3 4 3 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

/** A layout with grouped blocks, for organizing information clearly. */
export function Screen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="6" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 13h20M12 13v11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

/** Two linked pins, for coordinating and following through between people. */
export function Coordinate(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle cx="10" cy="11" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="22" cy="21" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13 13.5l6 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

/** A checkmark inside a loop, for seeing details through to the end. */
export function FollowThrough(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path
        d="M8 16a8 8 0 1 1 2.5 5.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7 12v5h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 17l2.5 2.5L20 14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
