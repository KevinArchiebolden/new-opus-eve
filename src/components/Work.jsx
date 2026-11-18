import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { Img, imgUrl } from './Img'
import { ParallaxImg, Reveal, SplitWords } from './Reveal'
import { EASE, viewportOnce } from '../lib/motion'

/* Title rendered from structured `lines` (no animation — used inside cards/rows). */
export function TitleLines({ lines }) {
  return lines.map((line, i) => (
    <span key={i} className="title-line">
      {(typeof line === 'string' ? [line] : line).map((s, j) => (typeof s === 'string' ? <span key={j}>{s}</span> : <span key={j} className={s[1]}>{s[0]}</span>))}
    </span>
  ))
}

/* Report-cover composition (Black Red panel + streak gradient). */
export function DocCover({ cover, eager }) {
  return (
    <div className="doc-cover" role="img" aria-label={`Report cover: ${cover.title}`}>
      <div className="doc-cover__panel">
        <span className="doc-cover__by">{cover.by}</span>
        <p className="doc-cover__title">{cover.title}</p>
        <span className="doc-cover__date">{cover.date}</span>
      </div>
      <div className="doc-cover__image"><Img name={cover.img} alt={cover.alt} sizes="(min-width: 700px) 45vw, 100vw" eager={eager} /></div>
    </div>
  )
}

function CardMedia({ work, sizes }) {
  if (work.card.type === 'document') {
    return (
      <motion.div className="media media--grade" style={{ aspectRatio: work.card.ratio }}
        initial={{ clipPath: 'inset(100% 0% 0% 0%)' }} whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        viewport={viewportOnce} transition={{ duration: 1.4, ease: EASE }}>
        <div className="media__zoom"><DocCover cover={work.cover} /></div>
      </motion.div>
    )
  }
  return <ParallaxImg name={work.card.img} alt={work.card.alt} sizes={sizes} ratio={work.card.ratio} grade amount={8} />
}

export function WorkCard({ work, i }) {
  return (
    <Reveal className="work-card" delay={i * 0.06}>
      <Link to={`/work/${work.slug}`} data-cursor="View">
        <span className="work-card__idx">{work.index}</span>
        <CardMedia work={work} sizes="(min-width: 900px) 58vw, 100vw" />
        <div className="work-card__meta"><span>{work.client}</span><span>{work.type} · {work.year}</span></div>
        <h3 className="display work-card__title"><TitleLines lines={work.lines} /></h3>
        <p className="work-card__summary">{work.summary}</p>
      </Link>
    </Reveal>
  )
}

export function WorkRow({ work }) {
  return (
    <li className="work-row">
      <Link className="work-row__media" to={`/work/${work.slug}`} tabIndex={-1} aria-hidden="true" data-cursor="View">
        <CardMedia work={work} sizes="(min-width: 900px) 55vw, 100vw" />
      </Link>
      <Reveal className="work-row__body" delay={0.1}>
        <div className="work-row__idx">{work.index}</div>
        <h2 className="display work-row__title"><Link to={`/work/${work.slug}`}><TitleLines lines={work.lines} /></Link></h2>
        <p className="work-row__summary">{work.summary}</p>
        <dl className="meta-list">
          <dt>Client</dt><dd>{work.client}</dd>
          <dt>Discipline</dt><dd>{work.type}</dd>
          <dt>Year</dt><dd>{work.year}</dd>
          {work.status && <><dt>Status</dt><dd>{work.status}</dd></>}
        </dl>
        <p className="work-row__cta"><Link className="link-arrow" to={`/work/${work.slug}`}>View project</Link></p>
      </Reveal>
    </li>
  )
}

/* ---- project section blocks ---------------------------------------------- */
const TILE_IMGS = ['gradient-ochre', 'gradient-rose', 'gradient-dusk', 'streak-cover', 'glow-pink', 'pulse-poster']
const TILE_POS = ['30% 20%', '70% 60%', '50% 85%', '15% 50%', '75% 30%', '45% 55%']

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } }
const child = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } } }

export function Block({ block }) {
  const anim = { initial: 'hidden', whileInView: 'show', viewport: viewportOnce, variants: container }
  switch (block.type) {
    case 'tiles':
      return (
        <motion.ol className="tiles" aria-label="Report chapters" {...anim}>
          {block.items.map((t, k) => (
            <motion.li className="tile" key={t} variants={child}>
              <span className="tile__bg" aria-hidden="true" style={{ backgroundImage: `url(${imgUrl(TILE_IMGS[k % 6])})`, backgroundPosition: TILE_POS[k % 6] }} />
              <span className="tile__num">{k + 1}</span><span className="tile__name">{t}</span>
            </motion.li>
          ))}
        </motion.ol>
      )
    case 'route':
      return (
        <motion.ol className="route" {...anim}>
          {block.items.map((r) => <motion.li key={r.name} variants={child}><strong>{r.name}</strong><span>{r.text}</span></motion.li>)}
        </motion.ol>
      )
    case 'loop':
      return (
        <motion.ol className="loop" aria-label="The MCOS loop" {...anim}>
          {block.items.map((t, k) => <motion.li key={t} variants={child}><span className="num">{String(k + 1).padStart(2, '0')}</span><strong>{t}</strong></motion.li>)}
        </motion.ol>
      )
    case 'trio':
      return (
        <motion.div className="trio" {...anim}>
          {block.items.map((t) => <motion.div key={t.title} variants={child}><h4>{t.title}</h4><p>{t.text}</p></motion.div>)}
        </motion.div>
      )
    default:
      return null
  }
}

export function List({ list }) {
  const anim = { initial: 'hidden', whileInView: 'show', viewport: viewportOnce, variants: container }
  if (list.style === 'numbered') {
    return (
      <motion.ol className="numbered" {...anim}>
        {list.items.map((it, k) => (
          <motion.li key={k} variants={child}>
            <span>{Array.isArray(it) ? <><strong>{it[0]}</strong>{it[1]}</> : it}</span>
          </motion.li>
        ))}
      </motion.ol>
    )
  }
  return <motion.ul className="arrows" {...anim}>{list.items.map((it) => <motion.li key={it} variants={child}>{it}</motion.li>)}</motion.ul>
}

/* A project chapter: sticky label + content rendered in data order. */
export function Chapter({ section, n }) {
  return (
    <div className="wrap">
      <section className="chapter">
        <div className="chapter__label">
          <Reveal as="span" className="num">{String(n).padStart(2, '0')}</Reveal>
          <Reveal as="h2" delay={0.05}>{section.label}</Reveal>
        </div>
        <div className="chapter__body">
          {Object.keys(section).map((key) => {
            const v = section[key]
            if (key === 'heading') return <SplitWords key={key} text={v} className="display display--lg" />
            if (key === 'paragraphs') return v.map((p, i) => <Reveal as="p" key={`p${i}`} className="body-copy" delay={0.05 * i}>{p}</Reveal>)
            if (key === 'list') return <List key={key} list={v} />
            if (key === 'block') return <Block key={key} block={v} />
            return null
          })}
        </div>
      </section>
    </div>
  )
}
