import { useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { Seo } from '../lib/head'
import { EASE } from '../lib/motion'
import { Img } from '../components/Img'
import { Reveal, SplitLines } from '../components/Reveal'
import { Magnetic } from '../components/Effects'
import { RuleHead } from '../components/Layout'
import { CAPABILITIES, EMAIL } from '../data/site'
import { breadcrumbs, graph, organization, webPage, website } from '../lib/schema'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', topic: '', message: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // Static site: compose the enquiry in the visitor's email app.
  const submit = (e) => {
    e.preventDefault()
    const subject = `Enquiry${form.topic ? `: ${form.topic}` : ''}${form.company ? ` · ${form.company}` : ''}`
    const body = `${form.message}\n\n${form.name}${form.company ? `, ${form.company}` : ''}\n${form.email}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <main id="main" className="contact">
      <Seo
        title="Contact Opus Eve | Start an Operations or Systems Engagement"
        description="Contact Opus Eve about an operations and tech stack audit, workflow automation, CRM and API integration, or custom internal systems. hello@opuseve.com (Australia, USA, South America, Middle East)."
        image="glow-red-1600.jpg"
        jsonLd={graph(organization(), website(), webPage({ path: '/contact', type: 'ContactPage', title: 'Contact Opus Eve', description: 'Contact Opus Eve: hello@opuseve.com' }), breadcrumbs([['Home', '/'], ['Contact', '/contact']]))}
      />
      <motion.div className="contact__bg" aria-hidden="true" initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2, ease: EASE }}>
        <Img name="glow-red" sizes="100vw" eager />
      </motion.div>

      <section className="page-hero">
        <div className="wrap">
          <RuleHead label="Contact" num="04" />
          <SplitLines as="h1" animate delay={0.45} className="display display--xxl page-hero__title" lines={['Let’s optimise', ['the ', ['future', 'outline']]]} />
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="wrap contact__grid">
          <div className="contact__info">
            <Reveal as="p" className="eyebrow" delay={0.6}>General enquiries</Reveal>
            <Reveal delay={0.7}><a className="contact__email" href={`mailto:${EMAIL}`} data-cursor="Write">{EMAIL}</a></Reveal>
            <Reveal className="contact__block" delay={0.8}>
              <p className="eyebrow">Partnership</p>
              <p className="body-copy">Whether you’re setting up, scaling up, or cleaning up, Opus Eve is your strategic operations partner.</p>
            </Reveal>
            <Reveal className="contact__block" delay={0.85}>
              <p className="eyebrow">Before you write</p>
              <p className="body-copy">Audits, timelines and how engagements are priced are covered in the FAQ.</p>
              <p style={{ marginTop: '1rem' }}><Link className="link-arrow" to="/faq#working-with-us">Read the FAQ</Link></p>
            </Reveal>
          </div>

          <Reveal className="contact__form" delay={0.75} y={60}>
            <form className="form" onSubmit={submit} aria-label="Compose an enquiry">
              <div className="field"><label htmlFor="f-name">Name</label><input id="f-name" autoComplete="name" required value={form.name} onChange={set('name')} /></div>
              <div className="field"><label htmlFor="f-company">Company</label><input id="f-company" autoComplete="organization" value={form.company} onChange={set('company')} /></div>
              <div className="field"><label htmlFor="f-email">Email</label><input id="f-email" type="email" autoComplete="email" required value={form.email} onChange={set('email')} /></div>
              <div className="field">
                <label htmlFor="f-topic">Area of interest</label>
                <select id="f-topic" value={form.topic} onChange={set('topic')}>
                  <option value="">Select</option>
                  {CAPABILITIES.map((c) => <option key={c.name}>{c.name}</option>)}
                  <option>Something else</option>
                </select>
              </div>
              <div className="field form__full"><label htmlFor="f-message">Message</label><textarea id="f-message" required value={form.message} onChange={set('message')} data-lenis-prevent /></div>
              <Magnetic><button className="btn" type="submit">Compose email</button></Magnetic>
              <p className="form__note">Opens your email app with your message addressed to {EMAIL}.</p>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
