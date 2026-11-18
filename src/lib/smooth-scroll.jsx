import { useEffect } from 'react'
import Lenis from 'lenis'

// Single Lenis instance driving the native scroll position (so framer-motion's
// useScroll keeps working). Disabled for users who prefer reduced motion.
export const lenisStore = { lenis: null }

export function SmoothScroll({ children }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95,
    })
    lenisStore.lenis = lenis
    let raf
    const loop = (time) => { lenis.raf(time); raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); lenis.destroy(); lenisStore.lenis = null }
  }, [])
  return children
}

export function scrollToTop() {
  if (lenisStore.lenis) lenisStore.lenis.scrollTo(0, { immediate: true, force: true })
  window.scrollTo(0, 0)
}

export function lockScroll(locked) {
  if (lenisStore.lenis) locked ? lenisStore.lenis.stop() : lenisStore.lenis.start()
  document.documentElement.style.overflow = locked ? 'hidden' : ''
}
