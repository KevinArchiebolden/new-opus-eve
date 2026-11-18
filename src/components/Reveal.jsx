import { Fragment, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { EASE, viewportOnce } from '../lib/motion'
import { Img } from './Img'

/* Fade + rise into view. */
export function Reveal({ as = 'div', delay = 0, y = 36, className, style, children, ...rest }) {
  const M = motion[as]
  return (
    <M
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 1.1, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </M>
  )
}

/* Stagger container: children using `variants={item}` animate in sequence. */
export const stagger = (gap = 0.08, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
})
export const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
}

/* Normalises a line into [text, className] segments. */
const segs = (line) => (typeof line === 'string' ? [[line, '']] : line.map((s) => (typeof s === 'string' ? [s, ''] : s)))

/* Masked line-by-line reveal for display type. lines: string | [text, className][] */
export function SplitLines({ lines, as = 'h2', className, delay = 0, stagger: gap = 0.09, animate, id }) {
  const M = motion[as]
  const trigger = animate ? { animate: 'show' } : { whileInView: 'show', viewport: viewportOnce }
  return (
    <M className={className} id={id} initial="hidden" {...trigger}
       variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}>
      {lines.map((line, i) => (
        <span className="line-mask" key={i}>
          <motion.span
            className="line-inner"
            variants={{ hidden: { y: '115%', rotate: 2 }, show: { y: '0%', rotate: 0, transition: { duration: 1.15, ease: EASE } } }}
          >
            {segs(line).map(([t, c], j) => (c ? <span key={j} className={c}>{t}</span> : <span key={j}>{t}</span>))}
          </motion.span>
        </span>
      ))}
    </M>
  )
}

/* Masked word-by-word reveal for running headings. */
export function SplitWords({ text, as = 'h3', className, delay = 0 }) {
  const M = motion[as]
  const words = text.split(' ')
  return (
    <M className={className} initial="hidden" whileInView="show" viewport={viewportOnce}
       variants={{ hidden: {}, show: { transition: { staggerChildren: 0.035, delayChildren: delay } } }}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="word-mask">
            <motion.span className="word-inner" variants={{ hidden: { y: '110%' }, show: { y: '0%', transition: { duration: 0.9, ease: EASE } } }}>
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </M>
  )
}

/* Image that wipes in (clip-path) and drifts with scroll (parallax). */
export function ParallaxImg({ name, alt, sizes, ratio, amount = 10, eager, className = '', grade = false, reveal = true }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`])
  return (
    <motion.div
      ref={ref}
      className={`media media--parallax ${grade ? 'media--grade' : ''} ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
      initial={reveal ? { clipPath: 'inset(100% 0% 0% 0%)' } : false}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={viewportOnce}
      transition={{ duration: 1.4, ease: EASE }}
    >
      <motion.div className="media__inner" style={{ y, '--pad': `${amount + 2}%` }}>
        <Img name={name} alt={alt} sizes={sizes} eager={eager} />
      </motion.div>
    </motion.div>
  )
}
