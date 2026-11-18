import images from '../data/images.json'

// Responsive image from the optimised set in /public/assets/img (see scripts/image-manifest.mjs).
export function Img({ name, alt = '', sizes = '100vw', eager = false, className, style }) {
  const variants = images[name]
  if (!variants) throw new Error(`Unknown image: ${name}`)
  const big = variants[variants.length - 1]
  return (
    <img
      src={`/assets/img/${big.file}`}
      srcSet={variants.map((v) => `/assets/img/${v.file} ${v.w}w`).join(', ')}
      sizes={sizes}
      width={big.w}
      height={big.h}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
      className={className}
      style={style}
    />
  )
}

export const imgUrl = (name, idx = 0) => `/assets/img/${images[name][Math.min(idx, images[name].length - 1)].file}`
