import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { Seo } from '../lib/head'
import { EASE, introDelay } from '../lib/motion'
import { Img } from '../components/Img'
import { Reveal, SplitLines } from '../components/Reveal'
import { Marquee, Magnetic } from '../components/Effects'
import { RuleHead, Statement } from '../components/Layout'
import { CAPABILITIES, AUDIENCES, DEFINITION, hook } from '../data/site'
import { graph, organization, website, webPage } from '../lib/schema'

function Hero() {
  const ref = useRef(null)
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [delay] = useState(introDelay)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18])
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-35%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  // The loop only loads on larger screens without data-saver / reduced motion.
  useEffect(() => {
    const v = videoRef.current
    const conn = navigator.connection || {}
    if (!v || conn.saveData || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.matchMedia('(min-width: 700px)').matches) return
    v.src = '/assets/video/pulse-loop.mp4'
    v.play().catch(() => {})
  }, [])

  return (
    <section className="hero" ref={ref} aria-labelledby="hero-title">
      <motion.div className="hero__bg" style={{ scale: bgScale, y: bgY }}>
        <Img name="pulse-poster" sizes="100vw" eager />
        <video ref={videoRef} className={playing ? 'is-playing' : undefined} muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1} onPlaying={() => setPlaying(true)} />
      </motion.div>
      <div className="wrap hero__content">
        <motion.div style={{ y: titleY, opacity: fade }}>
          <SplitLines
            as="h1" id="hero-title" animate delay={delay} stagger={0.12}
            className="display display--mega hero__title"
            lines={['The pulse', [['of progress', 'outline line--indent']]]}
          />
        </motion.div>
        <motion.div className="hero__row" style={{ opacity: fade }}
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: EASE, delay: delay + 0.35 }}>
          <div className="hero__intro">
            <p className="lead"><strong>Opus Eve is where momentum begins.</strong> We design the systems, strategies, and structures that power progress.</p>
          </div>
          <div className="hero__actions">
            <Magnetic><Link className="link-arrow" to="/work">Selected work</Link></Magnetic>
            <Magnetic><Link className="link-arrow" to="/contact">Start a conversation</Link></Magnetic>
          </div>
        </motion.div>
      </div>
      <motion.div className="wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: delay + 0.6 }}>
        <div className="hero__bar">
          <span>Optimization · Efficiency · Growth</span>
          <svg className="pulse-line" viewBox="0 0 320 28" aria-hidden="true"><path d="M0 14H118l8-9 9 19 8-10h14l7-14 9 28 8-14h139" /></svg>
          <span>Strategy · Operations · Technology</span>
        </div>
      </motion.div>
    </section>
  )
}

function Essence() {
  return (
    <section className="section" aria-labelledby="essence-title">
      <div className="wrap">
        <RuleHead label="Brand essence" num="01" />
        <div className="grid">
          <SplitLines id="essence-title" className="display display--xl essence__title" lines={['The', 'unseen', [['force', 'accent-pink']]]} />
          <div className="essence__copy">
            <Reveal as="p" className="lead">{DEFINITION}</Reveal>
            <Reveal as="p" className="body-copy" delay={0.08}>Just as the heartbeat signals life before thought, Opus Eve pulses beneath the surface of every business. We are the unseen force, the architecture behind alignment, innovation, and long-term performance.</Reveal>
            <Reveal delay={0.2} style={{ marginTop: '2.25rem' }}><Link className="link-arrow" to="/about">About Opus Eve</Link></Reveal>
          </div>
        </div>

        <motion.div className="definition" initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10%' }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
          {[
            ['term', 'Opus', <><em>Latin</em> for work. Structure, effort, the foundation of all things made.</>],
            ['op', '+'],
            ['term', 'Eve', <><em>Before</em>. The beginning, in preparation. Mystery, potential.</>],
            ['op', '='],
            ['result', 'The raw spark before creation', 'The beginning of work. Work in preparation. A conceptual space where experimentation becomes action.'],
          ].map(([kind, a, b], i) => (
            <motion.div key={i} className={kind === 'op' ? 'definition__op' : `definition__${kind}`} aria-hidden={kind === 'op' || undefined}
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } } }}>
              {kind === 'op' ? a : <><span className="display">{a}</span><p>{b}</p></>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Capabilities() {
  const [active, setActive] = useState(null)
  const shown = active ?? 0
  const cap = CAPABILITIES[shown]
  return (
    <section className="section section--flush-top" aria-labelledby="cap-title">
      {/* <Marquee items={CAPABILITIES.map((c) => c.name)} /> */}
      <div className="wrap">
        <RuleHead label="What we do" num="02" />
        <div className="grid">
          <SplitLines id="cap-title" className="display display--xl capabilities__head" lines={['Behind', [['the scenes', 'outline']]]} />
          <Reveal className="capabilities__aside" delay={0.1}><p className="body-copy">We work behind the scenes to ensure your business moves with intention, clarity, and control.</p><Link className="link-arrow" to="/about#services" style={{ marginTop: '1.5rem' }}>All services</Link></Reveal>
          <ol className="capabilities__list" onPointerLeave={() => setActive(null)}>
            {CAPABILITIES.map((c, i) => (
              <Reveal as="li" key={c.name} delay={i * 0.06} className={`cap-item${active === i ? ' is-active' : ''}`}
                onPointerEnter={() => setActive(i)} onFocus={() => setActive(i)} onBlur={() => setActive(null)}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <span className="cap-item__text"><Link className="cap-item__title cap-item__link" to={`/about#${c.slug}`}>{c.name}</Link><span className="cap-item__desc">{hook(c)}</span></span>
                <span className="cap-item__arrow" aria-hidden="true">→</span>
              </Reveal>
            ))}
          </ol>
          <div className="capabilities__media">
            <motion.div className="media" initial={{ clipPath: 'inset(100% 0 0 0)' }} whileInView={{ clipPath: 'inset(0% 0 0 0)' }} viewport={{ once: true }} transition={{ duration: 1.3, ease: EASE }}>
              <AnimatePresence initial={false}>
                <motion.div key={cap.img} className="media__swap"
                  initial={{ opacity: 0, scale: 1.12 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: EASE }}>
                  <Img name={cap.img} alt={cap.alt} sizes="(min-width: 900px) 25vw, 1px" />
                </motion.div>
              </AnimatePresence>
            </motion.div>
            <p className="caption"><span className="accent-acid">{String(shown + 1).padStart(2, '0')}</span> / {cap.name}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Audience() {
  return (
    <section className="section section--flush-top" aria-labelledby="aud-title">
      <div className="wrap">
        <RuleHead label="Who we support" num="03" />
        <div className="grid">
          <SplitLines id="aud-title" className="display display--xl audience__title" lines={['Setting up.', 'Scaling up.', [['Cleaning up.', 'accent-pink']]]} />
          <div className="audience__cols">
            {[['Leaders', AUDIENCES.leaders], ['Organizations', AUDIENCES.organizations]].map(([h, items], c) => (
              <div key={h}>
                <Reveal as="h3" className="eyebrow">{h}</Reveal>
                <ul className="tag-list">{items.map((t, i) => <Reveal as="li" key={t} delay={c * 0.1 + i * 0.05}>{t}</Reveal>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main id="main">
      <Seo
        title="Opus Eve | Operations, Systems & Workflow Automation Consultancy"
        description="Opus Eve is a strategy, operations and technology consultancy: business process optimization, organizational design, workflow automation, CRM and API integration, and custom internal systems for scaling firms across Australia and the USA."
        image="pulse-poster-1920.jpg"
        jsonLd={graph(organization(), website(), webPage({ path: '/', title: 'Opus Eve | Operations, Systems & Workflow Automation Consultancy', description: DEFINITION }))}
      />
      <Hero />
      <Essence />
      <Capabilities />
      <Audience />
      <Statement />
    </main>
  )
}
