import { Seo } from '../lib/head'
import { Reveal, SplitLines } from '../components/Reveal'
import { NextSteps, RuleHead } from '../components/Layout'
import { WorkRow } from '../components/Work'
import { works } from '../data/works'
import { ClientList } from '../components/Answers'
import { breadcrumbs, clientWork, graph, organization, webPage, website } from '../lib/schema'

export default function Work() {
  return (
    <main id="main">
      <Seo
        title="Work | Opus Eve Case Studies & Client Systems"
        description="Opus Eve case studies and client systems: workflow automation, systems architecture, Framer and e-commerce infrastructure, data automation, operating platforms and market entry strategy."
        image="gradient-ochre-1125.jpg"
        jsonLd={graph(organization(), website(), webPage({ path: '/work', type: 'CollectionPage', title: 'Opus Eve work', description: 'Case studies and client systems by Opus Eve.' }), clientWork(), breadcrumbs([['Home', '/'], ['Work', '/work']]))}
      />
      <section className="page-hero">
        <div className="wrap">
          <RuleHead label="Work" num="01" />
          <div className="page-hero__title-wrap">
            <SplitLines as="h1" animate delay={0.45} className="display display--xxl page-hero__title" lines={['Selected', [['work', 'outline']]]} />
            <Reveal as="sup" className="page-hero__count" delay={0.9}>({String(works.length).padStart(2, '0')})</Reveal>
          </div>
          <Reveal className="page-hero__row" delay={0.6}>
            <p className="lead">Systems, strategies, and structures that power progress, designed behind the scenes, built to perform.</p>
            <p className="page-hero__aside">Client engagements and Opus Eve ventures, 2025–2026.</p>
          </Reveal>
        </div>
      </section>
      <section className="section section--flush-top">
        <div className="wrap">
          <ol className="work-list">{works.map((w) => <WorkRow key={w.slug} work={w} />)}</ol>
        </div>
      </section>
      <section className="section section--flush-top" aria-labelledby="clients-title">
        <div className="wrap">
          <RuleHead label="Client systems" num="02" />
          <div className="grid section-head">
            <SplitLines id="clients-title" className="display display--xl" lines={['Systems we', [['have built', 'outline']]]} />
            <Reveal as="p" className="body-copy section-head__aside">Workflow automation, integrations and operational infrastructure designed and built by Opus Eve.</Reveal>
          </div>
          <ClientList />
        </div>
      </section>
      <NextSteps />
    </main>
  )
}
