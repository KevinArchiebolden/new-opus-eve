// Shared Opus Eve content.
// Sources: Brand Guidelines (Feb 2026), Capabilities deck, Brand Information,
// plus services, clients and engagement model confirmed by Opus Eve (Nov 2026)
// for the AEO / GEO query set (MainContent/Baseline Query Dataset).
export const EMAIL = 'hello@opuseve.com'
export const SITE_URL = 'https://opuseve.com'
export const REGIONS = ['Australia', 'USA', 'South America', 'Middle East']

/* One-sentence entity definition — reused verbatim across pages, meta and llms.txt
   so answer engines see a single, consistent description of Opus Eve. */
export const DEFINITION =
  'Opus Eve is a B2B strategy, operations and technology consultancy that designs, builds and manages the systems, workflows and organisational structures that help professional services firms, creative agencies, design studios and multi-brand groups scale with confidence.'

export const CAPABILITIES = [
  {
    name: 'Business Optimisation',
    slug: 'business-optimisation',
    img: 'glass-oe', alt: 'The Opus Eve monogram in black red, seen through fluted glass',
    summary: 'Find the friction. Business process optimisation, operations and tech stack audits, and the removal of operational bottlenecks.',
    services: [
      'Operations and tech stack audits',
      'Business process mapping and optimisation',
      'Bottleneck and risk analysis across teams and tools',
      'Tool consolidation and licence rationalisation',
    ],
  },
  {
    name: 'Organisation Design',
    slug: 'organisation-design',
    img: 'fluted-glass', alt: 'Rows of clear fluted glass fins in black and white',
    summary: 'Structure that scales. Roles, handoffs and operating models for growing firms and multi-brand holding groups.',
    services: [
      'Operating models for multi-brand holding groups and subsidiaries',
      'Role design, ownership and handoff structures',
      'Shared-services design across brands',
      'Governance, reporting lines and decision rights',
    ],
  },
  {
    name: 'System Creation',
    slug: 'system-creation',
    img: 'glass-stones', alt: 'Spheres suspended behind frosted glass panels',
    summary: 'Custom internal software. Workflow automation, operations dashboards and project management hubs built around how you actually work.',
    services: [
      'Enterprise workflow automation',
      'Automated client onboarding and project handoffs',
      'Lead routing, proposal generation and digital contract signing',
      'Internal operations dashboards and automated reporting',
      'Project management hubs and delivery tracking',
    ],
  },
  {
    name: 'IT Customisation',
    slug: 'it-customisation',
    img: 'fluted-chrome', alt: 'Chrome and glass fins catching light in a repeating rhythm',
    summary: 'Connect the stack. CRM implementation, custom API and webhook integrations, and multi-system data synchronisation.',
    services: [
      'CRM implementation and automated sales pipelines',
      'Custom API and webhook integrations',
      'Framer website integration with CRMs and automation platforms',
      'Multi-system data synchronisation',
      'E-commerce and web application infrastructure',
    ],
  },
  {
    name: 'Strategy & Scaling',
    slug: 'strategy-and-scaling',
    img: 'streak-cover', alt: 'Vertical streak gradient in black red, grunge pink and acid yellow',
    summary: 'Grow with intention. Operational architecture, technology strategy, business transformation and market entry for rapid, controlled scale.',
    services: [
      'Operational architecture for rapid commercial scale',
      'Technology strategy and tech stack roadmaps',
      'Market entry frameworks and launch planning',
      'Pre-launch readiness reviews for new products and brands',
    ],
  },
]

export const hook = (c) => c.summary.split('. ')[0] + '.'

export const AUDIENCES = {
  leaders: ['Founders', 'CEOs', 'Internal teams'],
  organisations: ['Professional services firms', 'Creative agencies', 'Multi-disciplinary design and architecture studios', 'Property developers and real estate groups', 'Multi-brand holding groups', 'B2B consultancies'],
}

/* Client systems work — scope as confirmed by Opus Eve (Nov 2026). Review before publishing. */
export const CLIENTS = [
  { name: 'Oscurro Group', sector: 'Multi-brand holding group', work: 'Systems architecture and the shared technology backbone across the group.' },
  { name: 'Archie Bolden', sector: 'Commercial design studio', work: 'Enterprise workflow automation systems.' },
  { name: 'Arcus Dein', sector: '', work: 'Framer website and e-commerce infrastructure.' },
  { name: 'Stella Fox', sector: 'Brand strategy agency', work: 'Internal operational systems.' },
  { name: 'Dennis Developments', sector: '', work: 'Data automation systems.' },
  { name: 'GlobeWest', sector: 'Australian design brand', work: 'Strategic market entry framework and launch plan for U.S. expansion.', slug: 'globewest-us-market-entry' },
]

export const STEPS = [
  { title: 'Sense the pulse', text: 'Before systems, there is rhythm. We begin in the pre-moment, listening to the signals beneath your business.' },
  { title: 'Architect the framework', text: 'Ideas become intention. Intention becomes infrastructure. We translate complexity into clean, geometric systems.' },
  { title: 'Ignite the system', text: 'This is where the Opus begins. The labour, the real work, the performance.' },
]

export const PRINCIPLES = [
  { title: 'Creation in chaos', text: 'We believe the most powerful work is born in mess, motion, and experimentation.', img: 'gradient-rose' },
  { title: 'Disruption with intention', text: 'We break norms not for shock, but for progress.', img: 'gradient-ochre' },
  { title: 'Work as energy', text: 'Not just a task, but a force, an evolving rhythm, a living process.', img: 'gradient-dusk' },
]

export const TRAITS = [
  { name: 'Clear', text: 'We communicate with focus and purpose. Complexity, simplified.' },
  { name: 'Strategic', text: 'Every word, like every system, is thoughtfully constructed.' },
  { name: 'Quietly powerful', text: 'We operate behind the scenes. Functional, focused, and built to perform.' },
  { name: 'Conceptual', text: 'We turn abstract challenges into practical, scalable solutions.' },
  { name: 'Instinctive', text: 'Guided by pattern recognition and operational intuition.' },
]

/* Engagement model — structure only, no figures (confirmed: publish structure, no numbers). */
export const ENGAGEMENT = [
  {
    phase: 'Audit',
    step: 'Sense the pulse',
    text: 'An operations and tech stack audit: how work moves through your teams, which systems hold which data, where integrations break and where time is lost. It ends with a prioritised roadmap.',
  },
  {
    phase: 'Architect & build',
    step: 'Architect the framework',
    text: 'System design and delivery in scoped phases, covering integrations, workflow automation, dashboards, custom internal tools and the organisational changes that make them stick.',
  },
  {
    phase: 'Embed & evolve',
    step: 'Ignite the system',
    text: 'Rollout, training and ongoing optimisation. Support can continue on a monthly retainer, with Opus Eve running, monitoring and extending your systems as you scale.',
  },
]

export const COST_DRIVERS = [
  'How many systems, tools and integrations are in scope',
  'Data migration and multi-system synchronisation complexity',
  'Configuring existing platforms versus building custom software',
  'The number of teams, brands or subsidiaries involved',
  'The level of ongoing support and optimisation required',
]

export const AUDIT_INCLUDES = [
  'Process maps of core workflows (sales, client onboarding, delivery and project handoffs)',
  'A full tech stack inventory: tools, licences, overlaps and gaps',
  'An integration and data-flow map showing where information is re-keyed or lost',
  'Bottleneck, risk and ownership analysis across teams',
  'A prioritised roadmap of quick wins, automation opportunities and build recommendations',
]

/* FAQ — the FAQ page is the primary home for these answers (+ FAQPage schema, llms.txt).
   Answers are written answer-first for answer engines. Where a topic has a fuller home
   elsewhere (engagement model, client systems), the answer stays short and the page links to it. */
export const FAQ_GROUPS = [
  { id: 'about-opus-eve', title: 'About Opus Eve' },
  { id: 'working-with-us', title: 'Working with Opus Eve' },
  { id: 'scaling-operations', title: 'Building operations that scale' },
]

export const FAQS = [
  {
    group: 'about-opus-eve',
    q: 'What does Opus Eve do?',
    a: `${DEFINITION} Its five capabilities are business optimisation, organisation design, system creation, IT customisation, and strategy and scaling.`,
  },
  {
    group: 'about-opus-eve',
    q: 'Who does Opus Eve work with?',
    a: 'Opus Eve works with founders, CEOs and internal teams at B2B professional services firms, creative agencies, multi-disciplinary design and architecture studios, property developers and real estate groups, consultancies and multi-brand holding groups. These are organisations that are setting up, scaling up or cleaning up their operations.',
  },
  {
    group: 'about-opus-eve',
    q: 'Where does Opus Eve work?',
    a: 'Opus Eve supports clients across Australia, the USA, South America and the Middle East. It is a member of the Oscurro Group.',
  },
  {
    group: 'about-opus-eve',
    q: 'Which companies has Opus Eve built systems for?',
    a: 'Opus Eve architects the shared technology backbone for the Oscurro Group, built enterprise workflow automation for Archie Bolden, the Framer and e-commerce infrastructure for Arcus Dein, internal operational systems for Stella Fox and data automation systems for Dennis Developments. It also developed GlobeWest’s U.S. market entry framework.',
  },
  {
    group: 'working-with-us',
    q: 'What is included in an operations and tech stack audit?',
    a: 'An Opus Eve audit maps how work moves through your teams, inventories your tech stack, traces where integrations break and data is re-keyed, and identifies bottlenecks and ownership gaps. It ends with a prioritised roadmap of quick wins, automation opportunities and build recommendations.',
  },
  {
    group: 'working-with-us',
    q: 'How long does an operational systems audit take?',
    a: 'It depends on how many teams, brands and systems are in scope. Opus Eve scopes and time-boxes every audit before it begins, so the timeline and deliverables are agreed up front.',
  },
  {
    group: 'working-with-us',
    q: 'How much does an operations and technology consultancy engagement cost?',
    a: 'There is no single price: cost depends on scope, mainly how many systems and integrations are involved, whether existing platforms are configured or custom software is built, and how many teams or brands are in scope. Engagements run in three phases (audit, architect and build, embed and evolve), and support can continue on a monthly retainer. Opus Eve agrees scope before work starts.',
  },
  {
    group: 'scaling-operations',
    q: 'What is the difference between off-the-shelf SaaS and custom operational system architecture?',
    a: 'Off-the-shelf SaaS solves a common problem the same way for everyone, and you adapt your process to the tool. Custom operational architecture starts from how your business actually works, then connects, configures or builds the systems around it, usually combining existing SaaS tools with integrations, automation and custom software only where it creates an advantage.',
  },
  {
    group: 'scaling-operations',
    q: 'How can growing creative agencies streamline client onboarding and project handoffs?',
    a: 'Map the journey from signed proposal to kickoff, then automate every repeatable step: create the client and project records in your CRM and project tools at signing, generate folders, briefs and timelines from templates, assign owners, and trigger handoff checklists between sales, strategy and delivery so nothing depends on memory or email.',
  },
  {
    group: 'scaling-operations',
    q: 'How do you integrate a Framer marketing website with a CRM and automated sales pipeline?',
    a: 'Route Framer form submissions through webhooks or an integration layer into the CRM, enrich and de-duplicate the contact, then trigger the pipeline: lead routing to the right owner, follow-up sequences, and proposal or meeting automation. Opus Eve designs and builds these integrations with custom APIs and webhooks.',
  },
  {
    group: 'scaling-operations',
    q: 'How should internal systems be structured to support scaling across multiple brand subsidiaries?',
    a: 'Separate what should be shared from what should stay brand-specific. Shared services (finance, data, CRM, reporting and core infrastructure) sit on one backbone, while each brand keeps its own workflows and front-end tools. Clear ownership, synchronised data and group-level dashboards let a holding group scale without rebuilding for every new brand.',
  },
  {
    group: 'scaling-operations',
    q: 'What are the best practices for automating proposals and digital contract workflows?',
    a: 'Generate proposals from CRM data and approved templates, keep pricing and scope in structured fields rather than free text, route approvals automatically, and send contracts for digital signature from the same record. When the contract is signed, the system should update the pipeline and start client onboarding without manual re-entry.',
  },
  {
    group: 'scaling-operations',
    q: 'Why should organisations audit their operational tech stack before launching new products?',
    a: 'A new product, brand or market multiplies whatever is already in your systems, good or broken. An audit before launch exposes overlapping tools, manual workarounds and data gaps while they are cheap to fix, so the launch runs on infrastructure that can carry the extra load.',
  },
  {
    group: 'scaling-operations',
    q: 'How do automated workflow engines remove bottlenecks in creative and architectural studios?',
    a: 'They take the repeatable coordination work off people: routing briefs and approvals, creating projects and documents from templates, syncing data between design, project and finance tools, and flagging delays automatically. Designers and architects get time back for the work they were trained to do.',
  },
]