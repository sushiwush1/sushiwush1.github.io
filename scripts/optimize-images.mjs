// Generates optimized headshot variants from assets-src/headshot.png.
// Run with: npm run optimize-images
import { existsSync } from 'node:fs'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const sourcePath = path.join(rootDir, 'assets-src', 'headshot.png')
const outDir = path.join(rootDir, 'public', 'images')

const sizes = [420, 840]
const quality = 82

async function main() {
  if (!existsSync(sourcePath)) {
    throw new Error(`Source image not found: ${sourcePath}`)
  }

  await mkdir(outDir, { recursive: true })

  for (const size of sizes) {
    const resized = sharp(sourcePath)
      .flatten({ background: '#ffffff' })
      .resize(size, size, { fit: 'cover' })

    const webpPath = path.join(outDir, `headshot-${size}.webp`)
    await resized.clone().webp({ quality }).toFile(webpPath)

    const jpgPath = path.join(outDir, `headshot-${size}.jpg`)
    await resized.clone().jpeg({ quality }).toFile(jpgPath)

    console.log(`Wrote ${path.relative(rootDir, webpPath)} and ${path.relative(rootDir, jpgPath)}`)
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
