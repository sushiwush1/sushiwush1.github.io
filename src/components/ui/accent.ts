export type Accent = 'purple' | 'blue' | 'pink' | 'yellow' | 'green' | 'lime' | 'powder' | 'red'

export const accents: Accent[] = [
  'purple',
  'blue',
  'pink',
  'yellow',
  'green',
  'lime',
  'powder',
  'red',
]

/** CSS custom property name for an accent's base fill. */
export function accentVar(accent: Accent): string {
  return `var(--color-${accent})`
}

/** CSS custom property name for an accent's hover fill. */
export function accentHoverVar(accent: Accent): string {
  return `var(--color-${accent}-hover)`
}

/** CSS custom property name for an accent's soft (large panel) fill. */
export function accentSoftVar(accent: Accent): string {
  return `var(--color-${accent}-soft)`
}
