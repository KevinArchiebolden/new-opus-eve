// Shared motion language: slow-out "expo" curves — confident, never bouncy.
export const EASE = [0.22, 1, 0.36, 1]
export const EASE_IN_OUT = [0.76, 0, 0.24, 1]

export const viewportOnce = { once: true, margin: '0px 0px -12% 0px' }

/* Intro timing: the hero waits for the preloader on the first visit only. */
export function introDelay() {
  if (typeof window === 'undefined') return 1.7
  if (window.__oeIntroDone || document.documentElement.classList.contains('intro-seen')) return 0.15
  return 1.7
}
