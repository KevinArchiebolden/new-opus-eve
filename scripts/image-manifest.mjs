// Builds src/data/images.json from public/assets/img/<name>-<width>.jpg
// so <Img name="..."> can emit srcset + intrinsic width/height without a runtime lookup.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const dir = 'public/assets/img'
const manifest = {}

function jpegSize(buf) {
  let i = 2
  while (i < buf.length) {
    if (buf[i] !== 0xff) { i++; continue }
    const marker = buf[i + 1]
    const len = buf.readUInt16BE(i + 2)
    // SOF0..SOF15 except DHT(C4), JPG(C8), DAC(CC)
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) }
    }
    i += 2 + len
  }
  throw new Error('No SOF marker')
}

for (const file of readdirSync(dir)) {
  const m = file.match(/^(.+)-(\d+)\.jpg$/)
  if (!m) continue
  const { w, h } = jpegSize(readFileSync(join(dir, file)))
  ;(manifest[m[1]] ||= []).push({ file, w, h })
}
for (const k of Object.keys(manifest)) manifest[k].sort((a, b) => a.w - b.w)

writeFileSync('src/data/images.json', JSON.stringify(manifest, null, 2))
console.log(`images.json: ${Object.keys(manifest).length} images`)
