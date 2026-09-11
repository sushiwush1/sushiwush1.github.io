import { useId } from 'react'
import type { ImgHTMLAttributes } from 'react'
import { accentVar, type Accent } from './accent'
import styles from './PhotoFrame.module.css'

export type PhotoFrameVariant = 'circle' | 'blob'

export interface PhotoFrameProps {
  alt: string
  variant: PhotoFrameVariant
  accent?: Accent
  /** Frame size in pixels: diameter for circle, max-width for blob. */
  size?: number
  loading?: 'lazy' | 'eager'
  /** Passed through to the img element, for marking the hero photo high priority. */
  fetchPriority?: ImgHTMLAttributes<HTMLImageElement>['fetchPriority']
  className?: string
}

const BASE = '/images/headshot'
/** Organic blob outline, drawn in a 200x200 box. */
const BLOB_PATH =
  'M100 12c34 0 66 14 76 46 9 29-4 57-26 76-24 21-54 32-84 22-30-10-54-36-58-68-4-33 14-62 44-72 15-5 32-4 48-4Z'

function srcSet(ext: 'webp' | 'jpg') {
  return `${BASE}-420.${ext} 420w, ${BASE}-840.${ext} 840w`
}

/** The headshot rendered either as a small inline circle or a large wavy blob. */
export function PhotoFrame({
  alt,
  variant,
  accent = 'yellow',
  size,
  loading = 'lazy',
  fetchPriority,
  className,
}: PhotoFrameProps) {
  const clipId = useId()

  if (variant === 'circle') {
    const diameter = size ?? 80
    return (
      <span
        className={[styles.circleWrap, className].filter(Boolean).join(' ')}
        style={{ '--size': `${diameter}px` } as React.CSSProperties}
      >
        <picture>
          <source type="image/webp" srcSet={srcSet('webp')} sizes={`${diameter}px`} />
          <img
            src={`${BASE}-420.jpg`}
            srcSet={srcSet('jpg')}
            sizes={`${diameter}px`}
            width={420}
            height={420}
            alt={alt}
            loading={loading}
            fetchPriority={fetchPriority}
            className={styles.circleImg}
          />
        </picture>
      </span>
    )
  }

  const maxWidth = size ?? 560

  return (
    <div
      className={[styles.blobWrap, className].filter(Boolean).join(' ')}
      style={
        {
          '--fill': accentVar(accent),
          '--size': `${maxWidth}px`,
          clipPath: `url(#${clipId})`,
        } as React.CSSProperties
      }
    >
      <picture>
        <source type="image/webp" srcSet={srcSet('webp')} sizes={`${maxWidth}px`} />
        <img
          src={`${BASE}-840.jpg`}
          srcSet={srcSet('jpg')}
          sizes={`${maxWidth}px`}
          width={840}
          height={840}
          alt={alt}
          loading={loading}
          fetchPriority={fetchPriority}
          className={styles.blobImg}
        />
      </picture>
      <svg className={styles.blobSvg} viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d={BLOB_PATH} transform="scale(0.005)" />
          </clipPath>
        </defs>
        <path d={BLOB_PATH} className={styles.blobOutline} />
      </svg>
    </div>
  )
}
