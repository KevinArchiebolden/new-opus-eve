import { useEffect, useRef, useState } from 'react'
import {
  motion, useScroll, useSpring, useTransform, useVelocity, useMotionValue,
  useAnimationFrame, useReducedMotion, wrap,
} from 'framer-motion'
import { MARK_POLYGONS } from './Logo'
import { EASE, EASE_IN_OUT } from '../lib/motion'

/* ---------------------------------------------------------------------------
   Preloader — the OE mark draws itself, the pulse line beats, then the curtain
   lifts. Pure CSS timing so it can never block the page; shown once per session. */
export function Preloader() {
  useEffect(() => {
    try { sessionStorage.setItem('oe-intro', '1') } catch { /* private mode */ }
    const t = setTimeout(() => { window.__oeIntroDone = true }, 1800)
    return () => clearTimeout(t)
  }, [])
  return (
    <div className="preloader" aria-hidden="true">
      <div className="preloader__inner">
        <svg className="preloader__mark" viewBox="86 86 350 180">
          {MARK_POLYGONS.map((p, i) => <polygon key={i} points={p} pathLength="1" />)}
        </svg>
        <svg className="preloader__pulse" viewBox="0 0 320 28"><path d="M0 14H118l8-9 9 19 8-10h14l7-14 9 28 8-14h139" pathLength="1" /></svg>
        <span className="preloader__label">Where momentum begins</span>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------------------
   Scroll progress hairline (acid yellow). */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
}

/* ---------------------------------------------------------------------------
   Custom cursor — fine pointers only. Grows over interactive elements and shows a
   label for elements with data-cursor="…". The native cursor stays visible. */
export function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [state, setState] = useState({ hover: false, label: '' })
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 600, damping: 45, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 600, damping: 45, mass: 0.4 })

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setEnabled(true)
    const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
    const over = (e) => {
      const el = e.target.closest('a, button, select, [data-cursor]')
      setState({ hover: !!el, label: el?.dataset.cursor || '' })
    }
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerover', over, { passive: true })
    return () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerover', over) }
  }, [x, y])

  if (!enabled) return null
  return (
    <motion.div className={`cursor${state.hover ? ' is-hover' : ''}${state.label ? ' has-label' : ''}`} style={{ x: sx, y: sy }} aria-hidden="true">
      <span className="cursor__dot"><span className="cursor__label">{state.label}</span></span>
    </motion.div>
  )
}

/* ---------------------------------------------------------------------------
   Magnetic — children lean toward the pointer. */
export function Magnetic({ children, strength = 0.3, className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.6 })
  const onMove = (e) => {
    if (e.pointerType !== 'mouse') return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const reset = () => { x.set(0); y.set(0) }
  return (
    <motion.span ref={ref} className={`magnetic ${className}`} style={{ x: sx, y: sy }} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </motion.span>
  )
}

/* ---------------------------------------------------------------------------
   Marquee — infinite band whose speed and skew respond to scroll velocity. */
export function Marquee({ items, baseVelocity = -0.8 }) {
  const reduce = useReducedMotion()
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const velocity = useVelocity(scrollY)
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 })
  const factor = useTransform(smooth, [0, 1000], [0, 2], { clamp: false })
  const skewX = useTransform(smooth, [-2500, 0, 2500], [7, 0, -7])
  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`)
  const dir = useRef(1)

  useAnimationFrame((_, delta) => {
    if (reduce) return
    let move = dir.current * baseVelocity * (delta / 1000)
    if (factor.get() < 0) dir.current = -1
    else if (factor.get() > 0) dir.current = 1
    move += dir.current * move * factor.get()
    baseX.set(baseX.get() + move)
  })

  const group = (k) => (
    <span className="marquee__group" key={k} aria-hidden={k > 0 || undefined}>
      {items.map((t, i) => (
        <span className="marquee__item" key={i}>{t}<span className="marquee__sep" /></span>
      ))}
    </span>
  )
  return (
    <div className="marquee">
      <motion.div className="marquee__track" style={{ x, skewX }}>
        {[0, 1, 2, 3].map(group)}
      </motion.div>
    </div>
  )
}

/* ---------------------------------------------------------------------------
   ScrollWords — words light up one by one as the passage scrolls through view. */
function Word({ progress, range, children, className }) {
  const opacity = useTransform(progress, range, [0.14, 1])
  return <motion.span className={className} style={{ opacity }}>{children} </motion.span>
}
export function ScrollWords({ segments, as = 'p', className, id }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 88%', 'end 50%'] })
  const words = segments.flatMap(([t, c]) => t.split(' ').map((w) => [w, c]))
  const Tag = as
  return (
    <Tag ref={ref} className={className} id={id}>
      {words.map(([w, c], i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} className={c}>{w}</Word>
      ))}
    </Tag>
  )
}

/* ---------------------------------------------------------------------------
   Page wrapper — Black Red curtain sweeps up between routes. */
export function PageTransition({ children }) {
  return (
    <>
      <motion.div
        className="page"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE, delay: 0.35 } }}
        exit={{ opacity: 0, y: -30, transition: { duration: 0.45, ease: EASE_IN_OUT } }}
      >
        {children}
      </motion.div>
      <motion.div className="curtain" aria-hidden="true"
        style={{ originY: 0 }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, transition: { duration: 0.75, ease: EASE_IN_OUT, delay: 0.1 } }}
        exit={{ scaleY: 0 }}
      />
      <motion.div className="curtain curtain--out" aria-hidden="true"
        style={{ originY: 1 }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1, transition: { duration: 0.6, ease: EASE_IN_OUT } }}
      />
    </>
  )
}
