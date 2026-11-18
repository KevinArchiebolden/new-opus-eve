import { Link } from 'react-router'
import { Seo } from '../lib/head'
import { SplitLines, Reveal } from '../components/Reveal'

export default function NotFound() {
  return (
    <main id="main" className="page-hero not-found">
      <Seo title="Page not found | Opus Eve" description="This page doesn’t exist. Return to Opus Eve." />
      <div className="wrap">
        <SplitLines as="h1" animate delay={0.4} className="display display--xxl" lines={['Not yet', [['shaped.', 'outline']]]} />
        <Reveal as="p" className="lead" delay={0.7} style={{ margin: '2rem 0 2.5rem' }}>This page doesn’t exist, but every great thing starts somewhere.</Reveal>
        <Reveal delay={0.8}><Link className="btn" to="/">Back to home</Link></Reveal>
      </div>
    </main>
  )
}
