// Schema.org JSON-LD builders. Every page emits one @graph that references the same
// Organization node by @id, so search and answer engines resolve a single Opus Eve entity.
import { SITE_URL, EMAIL, DEFINITION, CAPABILITIES, CLIENTS, FAQS } from '../data/site'

const ORG_ID = `${SITE_URL}/#organization`
const SITE_ID = `${SITE_URL}/#website`
const url = (path) => `${SITE_URL}${path === '/' ? '/' : `${path}/`}`

export const organization = () => ({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'Opus Eve',
  alternateName: ['Opus-Eve', 'OpusEve', 'OPUS EVE'],
  url: `${SITE_URL}/`,
  email: EMAIL,
  logo: `${SITE_URL}/assets/img/favicon.svg`,
  description: DEFINITION,
  slogan: 'Before the brand. Beyond the norm.',
  areaServed: ['Australia', 'United States', 'South America', 'Middle East'],
  parentOrganization: { '@type': 'Organization', name: 'Oscurro Group' },
  knowsAbout: [
    'Business process optimization', 'Operations audits', 'Tech stack audits', 'Organizational design',
    'Enterprise workflow automation', 'Systems integration', 'CRM implementation', 'API integration',
    'Webhook integration', 'Framer website integration', 'Multi-system data synchronization',
    'Operations dashboards', 'Automated reporting', 'Client onboarding automation', 'Proposal and contract automation',
    'Lead routing', 'Custom internal software', 'Operational architecture', 'Technology strategy', 'Market entry strategy',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Opus Eve services',
    itemListElement: CAPABILITIES.map((c) => ({
      '@type': 'OfferCatalog',
      name: c.name,
      description: c.summary,
      itemListElement: c.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s, serviceType: c.name, provider: { '@id': ORG_ID } },
      })),
    })),
  },
})

export const website = () => ({
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: `${SITE_URL}/`,
  name: 'Opus Eve',
  publisher: { '@id': ORG_ID },
})

export const webPage = ({ path, title, description, type = 'WebPage' }) => ({
  '@type': type,
  '@id': `${url(path)}#webpage`,
  url: url(path),
  name: title,
  description,
  isPartOf: { '@id': SITE_ID },
  about: { '@id': ORG_ID },
})

export const breadcrumbs = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: url(path) })),
})

export const faqPage = (path, faqs = FAQS) => ({
  '@type': 'FAQPage',
  '@id': `${url(path)}#faq`,
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
})

export const clientWork = () => CLIENTS.filter((c) => !c.slug).map((c) => ({
  '@type': 'CreativeWork',
  name: `${c.work.replace(/\.$/, '')} | ${c.name}`,
  description: `${c.work} Designed and built by Opus Eve${c.sector ? ` for ${c.name}, a ${c.sector.toLowerCase()}` : ` for ${c.name}`}.`,
  creator: { '@id': ORG_ID },
  about: { '@type': 'Organization', name: c.name },
}))

export const project = (work) => ({
  '@type': 'Article',
  '@id': `${url(`/work/${work.slug}`)}#article`,
  headline: work.title,
  description: work.description,
  author: { '@id': ORG_ID },
  publisher: { '@id': ORG_ID },
  mainEntityOfPage: url(`/work/${work.slug}`),
  about: work.client !== 'Opus Eve' ? { '@type': 'Organization', name: work.client } : { '@id': ORG_ID },
  keywords: [work.type, ...work.scope.split(' · ')].join(', '),
  image: `${SITE_URL}/assets/img/${work.ogImage || ''}`,
})

export const graph = (...nodes) => ({ '@context': 'https://schema.org', '@graph': nodes.flat().filter(Boolean) })
