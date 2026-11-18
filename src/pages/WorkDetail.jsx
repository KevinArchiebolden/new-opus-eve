import { useRef } from 'react'
import { Link, useParams } from 'react-router'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Seo } from '../lib/head'
import { EASE } from '../lib/motion'
import { Img } from '../components/Img'
import { ParallaxImg, Reveal, SplitLines } from '../components/Reveal'
import { ScrollWords } from '../components/Effects'
import { Chapter, DocCover, TitleLines } from '../components/Work'
import { works, getWork } from '../data/works'
import images from '../data/images.json'
import NotFound from './NotFound'
import { breadcrumbs, graph, organization, project, website } from '../lib/schema'

const BANDS = ['gradient-dusk', 'glow-pink', 'streak-cover']
const GALLERY_SIZES = { 'g-wide': '100vw', 'g-left': '(min-width: 800px) 58vw, 100vw', 'g-right': '(min-width: 800px) 33vw, 100vw' }

function Cover({ work }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 1.02])
  return (
    <motion.div ref={ref} className="wrap project-cover" style={{ scale }}
      initial={{ clipPath: 'inset(18% 6% 0% 6%)', opacity: 0 }} animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
      transition={{ duration: 1.4, ease: EASE, delay: 0.7 }}>
      {work.cover.type === 'document'
        ? <DocCover cover={work.cover} eager />
        : <ParallaxImg name={work.cover.img} alt={work.cover.alt} sizes="100vw" eager grade reveal={false} amount={8} className="project-cover__media" />}
    </motion.div>
  )
}

function Quote({ quote, band }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  return (
    <section ref={ref} className="pull pull--band">
      <motion.div className="pull__bg" aria-hidden="true" style={{ y }}><Img name={band} sizes="100vw" /></motion.div>
      <div className="wrap">
        <blockquote>
          <ScrollWords as="p" segments={[[quote.text, '']]} />
          <Reveal as="cite">{quote.cite}</Reveal>
        </blockquote>
      </div>
    </section>
  )
}

export default function WorkDetail() {
  const { slug } = useParams()
  const work = getWork(slug)
  if (!work) return <NotFound />
  const i = works.indexOf(work)
  const next = works[(i + 1) % works.length]
  const og = images[work.card.img].at(-1).file
  let n = 0

  return (
    <main id="main">
      <Seo title={`${work.title} | Opus Eve Case Study`} description={work.description} image={og}
        jsonLd={graph(organization(), website(), project({ ...work, ogImage: og }), breadcrumbs([['Home', '/'], ['Work', '/work'], [work.title, `/work/${work.slug}`]]))} />
      <section className="project-hero">
        <div className="wrap">
          <Reveal as="nav" className="project-hero__crumb" aria-label="Breadcrumb" delay={0.4}>
            <Link to="/work">Work</Link><span aria-hidden="true">/</span><span>{work.index}</span>
          </Reveal>
          <SplitLines as="h1" animate delay={0.45} className="display display--xxl project-hero__title" lines={work.lines} />
          <Reveal className="project-hero__grid" delay={0.75}>
            <p className="lead">{work.intro}</p>
            <dl className="project-meta">
              <div><dt>Client</dt><dd>{work.client}</dd></div>
              <div><dt>Year</dt><dd>{work.year}</dd></div>
              <div><dt>Discipline</dt><dd>{work.type}</dd></div>
              <div><dt>Scope</dt><dd>{work.scope}{work.status && <><br />{work.status}</>}</dd></div>
            </dl>
          </Reveal>
        </div>
      </section>

      <Cover work={work} />

      {work.sections.map((s, k) =>
        s.quote && !s.label
          ? <Quote key={k} quote={s.quote} band={BANDS[i % BANDS.length]} />
          : <Chapter key={k} section={s} n={++n} />,
      )}

      {work.gallery?.length > 0 && (
        <div className="wrap">
          <div className="gallery">
            {work.gallery.map((g) => (
              <figure key={g.img} className={g.layout}>
                <ParallaxImg name={g.img} alt={g.alt} sizes={GALLERY_SIZES[g.layout]} amount={10} />
                {g.caption && <Reveal as="figcaption" className="caption">{g.caption}</Reveal>}
              </figure>
            ))}
          </div>
        </div>
      )}

      <Link className="next" to={`/work/${next.slug}`} data-cursor="Next">
        <div className="next__bg" aria-hidden="true">
          {next.card.type === 'document' ? <Img name={next.card.img} sizes="100vw" /> : <Img name={next.card.img} sizes="100vw" />}
        </div>
        <div className="wrap">
          <div className="next__label"><span>Next project</span><span className="num">{next.index}</span></div>
          <p className="display display--xl next__title"><TitleLines lines={next.lines} /></p>
        </div>
      </Link>
    </main>
  )
}
