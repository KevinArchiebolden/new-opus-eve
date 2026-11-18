// Answer-first content blocks (AEO / GEO). All text is server-rendered, so crawlers and
// answer engines read it without running JavaScript.
import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { EASE, viewportOnce } from '../lib/motion'
import { AUDIT_INCLUDES, CAPABILITIES, CLIENTS, COST_DRIVERS, ENGAGEMENT, FAQS } from '../data/site'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } }
const child = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } } }
const inView = { initial: 'hidden', whileInView: 'show', viewport: viewportOnce, variants: container }

/* Detailed services — each capability with the specific services it covers. */
export function ServicesDetail({ headingLevel = 3 }) {
  const H = `h${headingLevel}`
  return (
    <motion.div className="services-detail" {...inView}>
      {CAPABILITIES.map((c, i) => (
        <motion.article key={c.slug} id={c.slug} className="service" variants={child}>
          <span className="num">{String(i + 1).padStart(2, '0')}</span>
          <H className="display display--md service__title">{c.name}</H>
          <p className="service__summary">{c.summary}</p>
          <ul className="arrows">{c.services.map((s) => <li key={s}>{s}</li>)}</ul>
        </motion.article>
      ))}
    </motion.div>
  )
}

/* Client systems work. */
export function ClientList() {
  return (
    <motion.ul className="client-list" {...inView}>
      {CLIENTS.map((c) => (
        <motion.li key={c.name} variants={child}>
          <span className="client-list__name">{c.slug ? <Link to={`/work/${c.slug}`}>{c.name}</Link> : c.name}</span>
          <span className="client-list__sector">{c.sector}</span>
          <span className="client-list__work">{c.work}</span>
        </motion.li>
      ))}
    </motion.ul>
  )
}

/* Engagement model + cost drivers + audit contents (structure only, no figures). */
export function Engagement() {
  return (
    <div className="engagement">
      <motion.ol className="engagement__phases" {...inView}>
        {ENGAGEMENT.map((p, i) => (
          <motion.li key={p.phase} variants={child}>
            <span className="num">Phase {i + 1} · {p.step}</span>
            <h3 className="display display--md">{p.phase}</h3>
            <p>{p.text}</p>
          </motion.li>
        ))}
      </motion.ol>
      <div className="engagement__cols">
        <Reveal>
          <h3 className="eyebrow eyebrow--caps">What an operations &amp; tech stack audit includes</h3>
          <ul className="arrows">{AUDIT_INCLUDES.map((s) => <li key={s}>{s}</li>)}</ul>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="eyebrow eyebrow--caps">What shapes the cost</h3>
          <ul className="arrows">{COST_DRIVERS.map((s) => <li key={s}>{s}</li>)}</ul>
          <p className="body-copy engagement__note">Every engagement is scoped before it starts, so timelines and deliverables are agreed up front.</p>
        </Reveal>
      </div>
    </div>
  )
}

/* FAQ — native <details> so answers are always in the HTML and keyboard accessible. */
export function Faq({ items = FAQS, start = 0, openFirst = false }) {
  return (
    <motion.div className="faq" {...inView}>
      {items.map((f, i) => (
        <motion.details key={f.q} variants={child} open={openFirst && i === 0}>
          <summary>
            <span className="num">{String(start + i + 1).padStart(2, '0')}</span>
            <h3 className="faq__q">{f.q}</h3>
            <span className="faq__icon" aria-hidden="true" />
          </summary>
          <div className="faq__a"><p>{f.a}</p></div>
        </motion.details>
      ))}
    </motion.div>
  )
}
