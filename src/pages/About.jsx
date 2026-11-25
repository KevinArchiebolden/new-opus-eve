import { motion } from 'framer-motion'
import { Seo } from '../lib/head'
import { EASE, viewportOnce } from '../lib/motion'
import { Img } from '../components/Img'
import { ParallaxImg, Reveal, SplitLines } from '../components/Reveal'
import { ScrollWords } from '../components/Effects'
import { NextSteps, RuleHead } from '../components/Layout'
import { Engagement, ServicesDetail } from '../components/Answers'
import { Approach } from '../components/Approach'
import { PRINCIPLES, REGIONS, TRAITS } from '../data/site'
import { breadcrumbs, graph, organization, webPage, website } from '../lib/schema'

/* About = who Opus Eve is, what it believes, what it does in detail, how it engages, where it works.
   Primary home for: brand story, the mark, philosophy, detailed services, character, how we work, engagement model, regions. */
export default function About() {
  return (
    <main id="main">
      <Seo
        title="About Opus Eve | Services, Philosophy & How Engagements Work"
        description="Who Opus Eve is and how it works: a strategy, operations and technology firm delivering operations and tech stack audits, organizational design, workflow automation, CRM and API integrations and custom internal systems. Member of the Oscurro Group."
        image="ember-1024.jpg"
        jsonLd={graph(organization(), website(), webPage({ path: '/about', type: 'AboutPage', title: 'About Opus Eve', description: 'Who Opus Eve is, its services, philosophy and engagement model.' }), breadcrumbs([['Home', '/'], ['About', '/about']]))}
      />

      <section className="page-hero">
        <div className="wrap">
          <RuleHead label="About" num="02" />
          <div className="about-hero__grid">
            <SplitLines as="h1" animate delay={0.45} className="display display--xxl about-hero__title"
              lines={['Before the work', 'takes shape,', [['there is energy.', 'outline']]]} />
            <div className="about-hero__media">
              <ParallaxImg name="ember" alt="A glowing ember breaking through cracked dark earth" sizes="(min-width: 900px) 25vw, 66vw" eager ratio="1" amount={8} />
              <Reveal as="p" className="caption" delay={0.3}>The pulse beneath the surface.</Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="wrap narrative">
          <ScrollWords className="narrative__text" segments={[
            ['Before the structure, there is instinct. Before the business, there is Opus Eve, the concept stage, the creative unknown, the essential beginning.', ''],
            ['We explore the unrefined, the bold, the ideas not yet tamed. Because every great brand starts with chaos, and we turn that into power.', 'accent-pink-soft'],
          ]} />
        </div>
      </section>

      {/* 01 — who we are */}
      <section className="section section--flush-top" aria-labelledby="essence-title">
        <div className="wrap">
          <RuleHead label="Who we are" num="01" />
          <div className="grid">
            <SplitLines id="essence-title" className="display display--xl essence__title" lines={['Complexity', [['into clarity', 'outline']]]} />
            <div className="essence__copy">
              <Reveal as="p" className="lead">Opus Eve is a strategy, operations and technology firm. We design, build, and manage the systems, strategies, and structures that help organizations scale with confidence and operate with purpose.</Reveal>
              <Reveal as="p" className="body-copy" delay={0.08}>From growth strategy to organizational design to enterprise technology, we transform complexity into clarity, and then we execute.</Reveal>
            </div>
          </div>
        </div>
      </section>

     
      {/* 03 — services in detail (primary home; Home links here per capability) */}
      <section id="services" className="section approach approach--static" aria-labelledby="services-title">
        <div className="approach__bg" aria-hidden="true"><Img name="streak-cover" sizes="100vw" /></div>
        <div className="wrap">
          <RuleHead label="What we do" num="03" />
          <div className="grid section-head">
            <SplitLines id="services-title" className="display display--xl" lines={['Why', 'Opus Eve']} />
            <Reveal as="p" className="body-copy section-head__aside">We align people, platforms, and processes for lasting impact. We design systems that scale, strategies that endure, and operations that perform under pressure.</Reveal>
          </div>
          <ServicesDetail />
        </div>
      </section>

      {/* 04 — character */}
      <section className="section" aria-labelledby="traits-title">
        <div className="wrap">
          <RuleHead label="How we show up" num="04" />
          <SplitLines id="traits-title" className="display display--xl section-title" lines={['We are']} />
          <ul className="traits">
            {TRAITS.map((t, i) => <Reveal as="li" key={t.name} delay={i * 0.06}><strong>{t.name}</strong><span>{t.text}</span></Reveal>)}
          </ul>
        </div>
      </section>

      {/* 05 — how we work (the rhythm behind every engagement; moved from Home) */}
      <Approach num="05" />

      {/* 06 — engagement model */}
      <section id="engagement" className="section" aria-labelledby="engage-title">
        <div className="wrap">
          <RuleHead label="How engagements work" num="06" />
          <div className="grid section-head">
            <SplitLines id="engage-title" className="display display--xl" lines={['Audit.', 'Architect.', [['Ignite.', 'outline']]]} />
            <Reveal as="p" className="body-copy section-head__aside">Every engagement follows the same rhythm, from an operations and tech stack audit to systems that run inside your business.</Reveal>
          </div>
          <Engagement />
        </div>
      </section>

      {/* 07 — regions */}
      <section className="section section--flush-top" aria-labelledby="where-title">
        <div className="wrap">
          <RuleHead label="Where we work" num="07" />
          <div className="grid section-head">
            <SplitLines id="where-title" className="display display--xl" lines={['Four regions.', [['One rhythm.', 'outline']]]} />
            <Reveal as="p" className="body-copy section-head__aside">Opus Eve is a member of the Oscurro Group, supporting founders, CEOs and internal teams across four regions.</Reveal>
          </div>
          <ul className="regions">
            {REGIONS.map((r, i) => <Reveal as="li" key={r} delay={i * 0.08}>{r}</Reveal>)}
          </ul>
        </div>
      </section>

      <NextSteps />
    </main>
  )
}
