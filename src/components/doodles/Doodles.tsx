import type { SVGProps } from 'react'

/**
 * Original, hand-drawn-style line doodles. Each is decorative: stroke
 * currentColor at roughly 1.5px with round caps and joins, small pastel
 * fill accents, and aria-hidden since they never carry meaning on their own.
 */

function base(props: SVGProps<SVGSVGElement>) {
  return {
    viewBox: '0 0 48 48',
    fill: 'none',
    'aria-hidden': true as const,
    focusable: false as const,
    width: '100%',
    height: '100%',
    ...props,
  }
}

export function Sparkle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path
        d="M22 6c1 6 3 8 9 9-6 1-8 3-9 9-1-6-3-8-9-9 6-1 8-3 9-9Z"
        fill="var(--color-yellow)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M37 26c.6 3 1.6 4 4.5 4.5-2.9.5-3.9 1.5-4.5 4.5-.6-3-1.6-4-4.5-4.5 2.9-.5 3.9-1.5 4.5-4.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Star(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path
        d="m24 8 4.2 10.2L39 20l-8 7.3L33.2 38 24 32.4 14.8 38 17 27.3 9 20l10.8-1.8L24 8Z"
        fill="var(--color-lime)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Clipboard(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect
        x="12"
        y="9"
        width="24"
        height="32"
        rx="3"
        fill="var(--color-blue)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="18"
        y="6"
        width="12"
        height="6"
        rx="2"
        fill="#fff"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M17 20h14M17 27h14M17 34h9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Handshake(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path
        d="M6 20l8-6 6 4M42 20l-8-6-6 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 18l7 6a3 3 0 0 0 4-4l-5-5M34 18l-7 6a3 3 0 0 1-4-4l5-5"
        fill="var(--color-green)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SpeechBubble(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path
        d="M8 12a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H21l-7 6v-6h-2a4 4 0 0 1-4-4V12Z"
        fill="var(--color-pink)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="17" cy="19" r="1.4" fill="currentColor" />
      <circle cx="24" cy="19" r="1.4" fill="currentColor" />
      <circle cx="31" cy="19" r="1.4" fill="currentColor" />
    </svg>
  )
}

export function PaperPlane(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path
        d="M6 24 40 9 26 42l-5-13-6-2 20-15-17 12Z"
        fill="var(--color-blue)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 30c4 1 6 3 7 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

export function Lightbulb(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path
        d="M24 8a12 12 0 0 0-7 21.8c1.4 1 2 2.4 2 4.2v.5h10v-.5c0-1.8.6-3.2 2-4.2A12 12 0 0 0 24 8Z"
        fill="var(--color-yellow)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M20 39h8M21 43h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function Calendar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect
        x="7"
        y="11"
        width="34"
        height="30"
        rx="3"
        fill="var(--color-purple)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7 19h34M15 7v8M33 7v8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="16" cy="27" r="1.6" fill="currentColor" />
      <circle cx="24" cy="27" r="1.6" fill="currentColor" />
      <circle cx="32" cy="27" r="1.6" fill="currentColor" />
      <circle cx="16" cy="34" r="1.6" fill="currentColor" />
    </svg>
  )
}

export function Heart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path
        d="M24 40S8 29.5 8 18.5C8 12.7 12.5 9 17 9c3 0 5.6 1.6 7 4.2C25.4 10.6 28 9 31 9c4.5 0 9 3.7 9 9.5C40 29.5 24 40 24 40Z"
        fill="var(--color-red)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Envelope(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect
        x="6"
        y="12"
        width="36"
        height="26"
        rx="3"
        fill="var(--color-powder)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7 14l17 13L41 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PeopleGroup(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle
        cx="17"
        cy="16"
        r="6"
        fill="var(--color-blue)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="32"
        cy="18"
        r="5"
        fill="var(--color-green)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6 40c1-8 5.5-12 11-12s10 4 11 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M25 40c1-6 4.5-9.5 9-9.5s8 3.5 9 9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Magnifier(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle
        cx="20"
        cy="20"
        r="11"
        fill="var(--color-lime)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M28 28l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function Target(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle
        cx="24"
        cy="24"
        r="16"
        fill="var(--color-powder)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="24" cy="24" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
    </svg>
  )
}

export function CoffeeCup(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path
        d="M12 18h18v13a9 9 0 0 1-9 9v0a9 9 0 0 1-9-9V18Z"
        fill="var(--color-powder)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M30 21h3a4.5 4.5 0 0 1 0 9h-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 12c0-2 2-2 2-4M22 12c0-2 2-2 2-4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Squiggle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path
        d="M4 30c5-8 9 8 14 0s9-8 14 0 9 8 12 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CurvedArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)} viewBox="0 0 60 40">
      <path
        d="M4 8c14 0 30 4 34 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M30 24l8 6.5-9 2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function Rainbow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path
        d="M6 38a18 18 0 0 1 36 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 38a12 12 0 0 1 24 0"
        fill="none"
        stroke="var(--color-pink)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M18 38a6 6 0 0 1 12 0"
        fill="none"
        stroke="var(--color-yellow)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle
        cx="8"
        cy="38"
        r="2.5"
        fill="var(--color-blue)"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle
        cx="40"
        cy="38"
        r="2.5"
        fill="var(--color-blue)"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  )
}

export function BookOpen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path
        d="M24 14c-3-3-9-4-14-3v22c5-1 11 0 14 3 3-3 9-4 14-3V11c-5-1-11 0-14 3Z"
        fill="var(--color-green)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M24 14v22" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function Trophy(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path
        d="M16 9h16v10a8 8 0 0 1-16 0V9Z"
        fill="var(--color-yellow)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16 12h-5v3a6 6 0 0 0 5 6M32 12h5v3a6 6 0 0 1-5 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M24 27v6M18 40h12M20 33h8l1 4H19l1-4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Compass(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle
        cx="24"
        cy="24"
        r="16"
        fill="var(--color-blue)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M29 18l-4 9-9 4 4-9 9-4Z"
        fill="#fff"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  )
}
