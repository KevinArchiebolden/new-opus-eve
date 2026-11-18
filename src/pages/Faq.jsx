import { Link } from 'react-router'
import { Seo } from '../lib/head'
import { lenisStore } from '../lib/smooth-scroll'
import { Reveal, SplitLines } from '../components/Reveal'
import { NextSteps, RuleHead } from '../components/Layout'
import { Faq as FaqList } from '../components/Answers'
import { FAQ_GROUPS, FAQS } from '../data/site'
import { breadcrumbs, faqPage, graph, organization, webPage, website } from '../lib/schema'

export default function Faq() {
  let offset = 0
  const groups = FAQ_GROUPS.map((g) => {
    const items = FAQS.filter((f) => f.group === g.id)
    const start = offset
    offset += items.length
    return { ...g, items, start }
  })

  return (
    <main id="main">
      <Seo
        title="FAQ | Opus Eve: Operations Audits, Workflow Automation & Systems Integration"
        description="Answers about Opus Eve and how to build operations that scale: tech stack audits, engagement cost and timelines, client onboarding automation, Framer and CRM integration, multi-brand systems and proposal automation."
        image="glow-pink-1920.jpg"
        jsonLd={graph(
          organization(), website(),
          webPage({ path: '/faq', title: 'Opus Eve | Frequently asked questions', description: 'Questions and answers about Opus Eve and building operations that scale.' }),
          faqPage('/faq', FAQS),
          breadcrumbs([['Home', '/'], ['FAQ', '/faq']]),
        )}
      />

      <section className="page-hero">
        <div className="wrap">
          <RuleHead label="FAQ" num="03" />
          <SplitLines as="h1" animate delay={0.45} className="display display--xxl page-hero__title" lines={['Questions,', [['answered.', 'outline']]]} />
          <Reveal className="page-hero__row" delay={0.6}>
            <p className="lead">Straight answers on what Opus Eve does, how engagements work, and how to build operations that scale.</p>
            <nav className="faq-index" aria-label="FAQ topics">
              {groups.map((g) => (
                <a key={g.id} href={`#${g.id}`} onClick={(e) => { if (!lenisStore.lenis) return; e.preventDefault(); lenisStore.lenis.scrollTo(`#${g.id}`, { offset: -110, duration: 1.2 }) }}><span className="num">{String(g.start + 1).padStart(2, '0')}</span>{g.title}</a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      {groups.map((g, i) => (
        <section key={g.id} id={g.id} className="section section--flush-top faq-group" aria-labelledby={`${g.id}-title`}>
          <div className="wrap">
            <div className="faq-group__grid">
              <div className="faq-group__label">
                <Reveal as="span" className="num">{String(i + 1).padStart(2, '0')}</Reveal>
                <Reveal as="h2" id={`${g.id}-title`} className="display display--md" delay={0.05}>{g.title}</Reveal>
                {g.id === 'working-with-us' && (
                  <Reveal as="p" className="body-copy" delay={0.1}>The full engagement model is on the <Link className="inline-link" to="/about#engagement">About</Link> page.</Reveal>
                )}
                {g.id === 'about-opus-eve' && (
                  <Reveal as="p" className="body-copy" delay={0.1}>Case studies and client systems are on the <Link className="inline-link" to="/work">Work</Link> page.</Reveal>
                )}
              </div>
              <FaqList items={g.items} start={g.start} openFirst={i === 0} />
            </div>
          </div>
        </section>
      ))}

      <NextSteps exclude="/faq" />
    </main>
  )
}
