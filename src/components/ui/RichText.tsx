import { Fragment } from 'react'

export interface RichTextProps {
  /** Plain string where `**text**` segments render as medium-weight emphasis. */
  text: string
  className?: string
}

const EMPHASIS_PATTERN = /\*\*(.+?)\*\*/g

/** Renders a string, turning `**text**` into a medium-weight emphasis span. */
export function RichText({ text, className }: RichTextProps) {
  const parts: ReactNodeChunk[] = []
  let lastIndex = 0

  for (const match of text.matchAll(EMPHASIS_PATTERN)) {
    const start = match.index ?? 0
    if (start > lastIndex) {
      parts.push({ kind: 'text', value: text.slice(lastIndex, start) })
    }
    parts.push({ kind: 'emphasis', value: match[1] })
    lastIndex = start + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push({ kind: 'text', value: text.slice(lastIndex) })
  }

  return (
    <span className={className}>
      {parts.map((part, index) => (
        <Fragment key={index}>
          {part.kind === 'emphasis' ? (
            <span style={{ fontWeight: 'var(--fw-medium)' }}>{part.value}</span>
          ) : (
            part.value
          )}
        </Fragment>
      ))}
    </span>
  )
}

interface ReactNodeChunk {
  kind: 'text' | 'emphasis'
  value: string
}
