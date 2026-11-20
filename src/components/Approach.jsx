import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Img } from './Img'
import { Reveal, SplitLines } from './Reveal'
import { RuleHead } from './Layout'
import { STEPS } from '../data/site'

const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

/* "How we work": horizontal pinned scroll on desktop; stacked on small screens. */
export function Approach({ num }) {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [desktop, setDesktop] = useState(false)
  const [dist, setDist] = useState(0)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, (p) => -p * dist)
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  // 1) decide the mode, 2) once the horizontal layout is applied, measure the travel distance
  useIsoLayoutEffect(() => {
    const mq = window.matchMedia('(min-width: 1000px) and (prefers-reduced-motion: no-preference)')
    const update = () => setDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  useIsoLayoutEffect(() => {
    if (!desktop) { setDist(0); return }
    const measure = () => trackRef.current && setDist(Math.max(0, trackRef.current.scrollWidth - window.innerWidth))
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [desktop])

  const pinned = desktop
  return (
    <section ref={sectionRef} id="how-we-work" className={`approach${pinned ? ' approach--pinned' : ''}`} aria-labelledby="approach-title"
      style={pinned ? { height: `calc(100vh + ${dist}px)` } : undefined}>
      <div className="approach__sticky">
        <div className="approach__bg" aria-hidden="true"><Img name="gradient-dusk" sizes="100vw" /></div>
        <div className="wrap approach__head"><RuleHead label="How we work" num={num} /></div>
        <motion.div className="approach__track" ref={trackRef} style={pinned ? { x } : undefined}>
          <div className="approach__intro">
            <SplitLines id="approach-title" className="display display--xl" lines={['Pulse', [['before', 'outline']], 'polish']} />
            <Reveal as="p" className="lead" delay={0.1}>It’s the pulse that fuels all creation and innovation, the critical first step that drives a business or brand forward.</Reveal>
          </div>
          {STEPS.map((s, i) => (
            <Reveal className="step" key={s.title} delay={pinned ? 0 : i * 0.08}>
              <div className="step__num">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="display display--md step__title">{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </motion.div>
        {pinned && <motion.div className="approach__progress" style={{ scaleX: progress }} aria-hidden="true" />}
      </div>
    </section>
  )
}
