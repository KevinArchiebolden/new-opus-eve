import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { Mark, Wordmark } from './Logo'
import { Img } from './Img'
import { Magnetic, ScrollWords } from './Effects'
import { Reveal } from './Reveal'
import { EMAIL, REGIONS } from '../data/site'
import { EASE, EASE_IN_OUT } from '../lib/motion'
import { lockScroll } from '../lib/smooth-scroll'

const NAV = [
  { to: '/work', label: 'Work', idx: '01' },
  { to: '/about', label: 'About', idx: '02' },
  { to: '/faq', label: 'FAQ', idx: '03' },
  { to: '/contact', label: 'Contact', idx: '04' },
]

export function Header() {
  const [solid, setSolid] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const { pathname } = useLocation()

  useEffect(() => scrollY.on('change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setSolid(y > 24)
    setHidden(y > prev && y > 320)
  }), [scrollY])

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => { lockScroll(open) }, [open])
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <motion.header
        className={`site-header${solid || open ? ' is-solid' : ''}`}
        animate={{ y: hidden && !open ? '-100%' : '0%' }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <div className="site-header__inner">
          <Magnetic strength={0.25}>
            <Link className="site-header__brand" to="/" aria-label="Opus Eve home"><Mark /></Link>
          </Magnetic>
          <nav className="site-nav" aria-label="Primary">
            <ul>
              {NAV.map((n) => (
                <li key={n.to}>
                  <NavLink to={n.to} className={({ isActive }) => (isActive || (n.to === '/work' && pathname.startsWith('/work')) ? 'is-active' : undefined)}>
                    <span className="site-nav__idx">{n.idx}</span>
                    <span className="roll" data-text={n.label}><span>{n.label}</span></span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <button className={`menu-toggle${open ? ' is-open' : ''}`} type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}>
            <span className="menu-toggle__label">{open ? 'Close' : 'Menu'}</span>
            <span className="menu-toggle__bars" aria-hidden="true"><span /><span /></span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu" id="mobile-menu"
            initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: 0.7, ease: EASE_IN_OUT }}
          >
            <div className="mobile-menu__bg" aria-hidden="true"><Img name="gradient-dusk" sizes="100vw" /></div>
            <nav aria-label="Mobile">
              <motion.ul initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } } }}>
                {[{ to: '/', label: 'Home', idx: '00' }, ...NAV].map((n) => (
                  <li key={n.to}>
                    <span className="line-mask">
                      <motion.span className="line-inner" variants={{ hidden: { y: '110%' }, show: { y: '0%', transition: { duration: 0.9, ease: EASE } } }}>
                        <Link to={n.to}><span>{n.idx}</span>{n.label}</Link>
                      </motion.span>
                    </span>
                  </li>
                ))}
              </motion.ul>
            </nav>
            <motion.div className="mobile-menu__foot" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.6 } }}>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <span>{REGIONS.join(' · ')}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export function RuleHead({ label, num }) {
  return (
    <motion.div
      className="rule-head"
      initial={{ '--rule': 0 }}
      whileInView={{ '--rule': 1 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 1.4, ease: EASE }}
    >
      <Reveal as="span" y={14} className="rule-head__label">{label}</Reveal>
      <Reveal as="span" y={14} delay={0.1} className="rule-head__num">{num}</Reveal>
    </motion.div>
  )
}

export function Statement() {
  return (
    <section className="statement" aria-labelledby="statement-title">
      <div className="statement__bg" aria-hidden="true"><Img name="glow-pink" sizes="100vw" /></div>
      <div className="wrap">
        <ScrollWords
          as="h2" id="statement-title" className="display display--xxl statement__text"
          segments={[['We stay out of the spotlight,', ''], ['so you can stay in it.', 'outline']]}
        />
        <Reveal className="statement__foot">
          <Magnetic><Link className="btn" to="/contact" data-cursor="Talk">Start a conversation</Link></Magnetic>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer__top">
          <Reveal y={60}>
            <Link className="site-footer__logo" to="/" aria-label="Opus Eve home"><Mark /><Wordmark /></Link>
          </Reveal>
          <Reveal as="p" delay={0.1} className="site-footer__tagline">Before the brand.<br />Beyond the norm.</Reveal>
        </div>
        <div className="site-footer__grid">
          <div>
            <h2 className="eyebrow">Contact</h2>
            <a className="site-footer__email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
          <div>
            <h2 className="eyebrow">Regions</h2>
            <ul className="plain">{REGIONS.map((r) => <li key={r}>{r}</li>)}</ul>
          </div>
          <div>
            <h2 className="eyebrow">Index</h2>
            <ul className="plain">
              <li><Link to="/">Home</Link></li>
              {NAV.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}
            </ul>
          </div>
        </div>
        <div className="site-footer__base">
          <span>&copy; {new Date().getFullYear()} Opus Eve</span>
          <span>A member of the Oscurro Group</span>
        </div>
      </div>
    </footer>
  )
}

/* End-of-page navigation: where to go next. Replaces repeating the statement band. */
export function NextSteps({ exclude }) {
  const links = [
    { to: '/faq', label: 'Questions', title: 'Read the FAQ' },
    { to: '/contact', label: 'Next step', title: 'Start a conversation' },
  ].filter((l) => l.to !== exclude)
  return (
    <section className="next-steps" aria-label="Next steps">
      <div className="wrap next-steps__grid">
        {links.map((l, i) => (
          <Reveal key={l.to} delay={i * 0.08}>
            <Link className="next-steps__link" to={l.to} data-cursor="Go">
              <span className="eyebrow">{l.label}</span>
              <span className="display display--lg">{l.title}<span className="next-steps__arrow" aria-hidden="true">→</span></span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}