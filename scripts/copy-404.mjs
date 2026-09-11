// Copies dist/index.html to dist/404.html so deep links resolve on GitHub Pages.
import { copyFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const distDir = path.join(rootDir, 'dist')

await copyFile(path.join(distDir, 'index.html'), path.join(distDir, '404.html'))
console.log('Copied dist/index.html to dist/404.html')
