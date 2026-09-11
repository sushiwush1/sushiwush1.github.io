// Generates public/og-image.png (1200x630) and public/apple-touch-icon.png (180x180) with sharp.
// Run with: node scripts/og-image.mjs
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const headshotPath = path.join(rootDir, 'public', 'images', 'headshot-840.jpg')
const faviconPath = path.join(rootDir, 'public', 'favicon.svg')
const outDir = path.join(rootDir, 'public')

const WIDTH = 1200
const HEIGHT = 630
const CIRCLE_R = 130
const CIRCLE_CX = 230
const CIRCLE_CY = HEIGHT / 2

const FONT_STACK =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'

function backgroundSvg() {
  return `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#E3E3FF" />

  <!-- doodle: sparkle, top right -->
  <path
    d="M1040 90c4 24 12 32 36 36-24 4-32 12-36 36-4-24-12-32-36-36 24-4 32-12 36-36Z"
    fill="#FFE7A9"
    stroke="#1D1D1D"
    stroke-width="2.5"
    stroke-linejoin="round"
  />
  <path
    d="M1120 160c2.5 12 6.5 16 18 18-11.5 2-15.5 6-18 18-2.5-12-6.5-16-18-18 11.5-2 15.5-6 18-18Z"
    fill="none"
    stroke="#1D1D1D"
    stroke-width="2"
    stroke-linejoin="round"
  />

  <!-- doodle: rainbow arc, bottom left -->
  <path d="M60 560a70 70 0 0 1 140 0" fill="none" stroke="#1D1D1D" stroke-width="3" stroke-linecap="round" />
  <path d="M85 560a45 45 0 0 1 90 0" fill="none" stroke="#FFE3FB" stroke-width="6" stroke-linecap="round" />
  <path d="M110 560a20 20 0 0 1 40 0" fill="none" stroke="#DBF5F0" stroke-width="6" stroke-linecap="round" />

  <!-- doodle: curved arrow under name -->
  <path
    d="M470 470c60 6 110 24 130 66"
    fill="none"
    stroke="#1D1D1D"
    stroke-width="2.5"
    stroke-linecap="round"
  />
  <path
    d="M572 512l30 24-34 8"
    fill="none"
    stroke="#1D1D1D"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  <circle
    cx="${CIRCLE_CX}"
    cy="${CIRCLE_CY}"
    r="${CIRCLE_R + 6}"
    fill="none"
    stroke="#1D1D1D"
    stroke-width="2"
  />

  <text
    x="430"
    y="290"
    font-family='${FONT_STACK}'
    font-size="64"
    fill="#1D1D1D"
  >Kanishka Yadav</text>
  <text
    x="430"
    y="345"
    font-family='${FONT_STACK}'
    font-size="32"
    fill="#1D1D1D"
  >HR and People Operations</text>
</svg>`
}

function circleMaskSvg(size) {
  return `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff" />
  </svg>`
}

async function buildOgImage() {
  if (!existsSync(headshotPath)) {
    throw new Error(`Headshot not found: ${headshotPath}`)
  }

  const diameter = CIRCLE_R * 2
  const maskBuffer = Buffer.from(circleMaskSvg(diameter))

  const circularHeadshot = await sharp(headshotPath)
    .resize(diameter, diameter, { fit: 'cover' })
    .composite([{ input: maskBuffer, blend: 'dest-in' }])
    .png()
    .toBuffer()

  const background = Buffer.from(backgroundSvg())

  await sharp(background)
    .composite([
      {
        input: circularHeadshot,
        left: CIRCLE_CX - CIRCLE_R,
        top: CIRCLE_CY - CIRCLE_R,
      },
    ])
    .png()
    .toFile(path.join(outDir, 'og-image.png'))

  console.log('Wrote public/og-image.png')
}

async function buildAppleTouchIcon() {
  if (!existsSync(faviconPath)) {
    throw new Error(`Favicon not found: ${faviconPath}`)
  }

  await sharp(faviconPath).resize(180, 180).png().toFile(path.join(outDir, 'apple-touch-icon.png'))

  console.log('Wrote public/apple-touch-icon.png')
}

async function main() {
  await buildOgImage()
  await buildAppleTouchIcon()
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
