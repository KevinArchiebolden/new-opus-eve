// All project content. One template (pages/WorkDetail.jsx) renders every entry.
// `lines`: display title, one array item per line; a segment is a string or [text, className].
// Each project has one chapter (label, heading, a three-column `trio` summarizing the project).
// Sections render in order; supported keys: heading, paragraphs, list, block, quote.

export const works = [
  {
    slug: 'globewest-us-market-entry',
    index: '01',
    title: 'GlobeWest U.S. Market Entry',
    lines: ['GlobeWest', [['U.S. Market', 'outline'], ' Entry']],
    client: 'GlobeWest',
    type: 'Strategy & Scaling',
    year: '2025–2026',
    scope: 'Strategic market entry framework · Launch & implementation plan',
    summary: "A strategic market entry framework for an Australian design brand's expansion into the United States, from market context to a gated launch plan.",
    description: "Opus Eve developed a Strategic Market Entry Framework and Launch & Implementation Plan for GlobeWest's expansion into the United States.",
    card: { type: 'document', img: 'gradient-ochre', ratio: '4 / 3', alt: 'Streak gradient in grunge pink and ochre from the GlobeWest report design system' },
    cover: { type: 'document', img: 'gradient-ochre', by: 'By Opus Eve', title: 'Strategic Market Entry Framework for GlobeWest’s USA Expansion', date: 'January 2026', alt: 'Streak gradient panel from the report cover' },
    intro: 'GlobeWest is a leading Australian design brand with a 20-year track record and a trade-first business model. The company set out to enter the United States to diversify revenue, build global brand visibility and prove that its model can scale in the world’s largest premium furniture market.',
    sections: [
      {
        label: 'The project',
        heading: 'Clarity on where, how and when to enter.',
        block: { type: 'trio', items: [
          { title: 'The brief', text: 'Diversify revenue beyond Australia, establish GlobeWest as an international design authority and prove its trade-first model can scale in a competitive, design-led market, creating a framework that future expansions can repeat.' },
          { title: 'The work', text: 'A market entry framework covering opportunity size, competitors, regulation, duties and logistics. Priority metros were validated, with Los Angeles as the entry point, and backed by a channel strategy, business case and a sequenced launch and implementation plan.' },
          { title: 'Rollout & governance', text: 'A focused rollout from Los Angeles to Dallas, Miami and Austin. Every step-change in spend passes a Board decision gate backed by an evidence pack, so capital follows demonstrated adoption and stable service, not optimism.' },
        ] },
      },
    ],
  },
  {
    slug: 'marketing-campaign-operating-system',
    index: '02',
    title: 'MCOS: Marketing Campaign Operating System',
    lines: ['Marketing', 'Campaign', [['Operating', 'outline'], ' System']],
    client: 'Opus Eve',
    type: 'System Creation',
    year: '2026',
    scope: 'Product concept · System design',
    status: 'In development',
    summary: 'One system that keeps a brand’s message consistent, watches the market, and connects marketing to revenue.',
    description: 'MCOS, the Marketing Campaign Operating System by Opus Eve: one platform that enforces message consistency, monitors the competitive landscape and connects marketing to outcomes.',
    card: { img: 'glass-stones', ratio: '16 / 10', alt: 'Spheres suspended behind frosted glass panels with the word Conceptual' },
    cover: { type: 'image', img: 'glass-stones', alt: 'Rendered spheres behind frosted glass panels, spelling Conceptual' },
    intro: 'Strip away the jargon and the tools, and marketing comes down to one thing: a message. What you stand for, what you offer, why someone should care. MCOS is the system built to protect it.',
    sections: [
      {
        label: 'The project',
        heading: 'One system to protect the message.',
        block: { type: 'trio', items: [
          { title: 'The problem', text: 'The message drifts from channel to channel, businesses can’t see where they stand against competitors, and nobody can say which marketing led to which sale. These are three symptoms of the same missing system.' },
          { title: 'The gap', text: 'AI tools now produce content faster than ever, but in isolation: no brand guidelines, no memory of what went out yesterday, and no quality control, market intelligence or way to know what is working.' },
          { title: 'The system', text: 'MCOS monitors the brand across every channel to catch inconsistencies before they go live, reads competitors to show where you stand, and links activity to revenue, in a continuous loop: listen, create, check, publish, measure, learn.' },
        ] },
      },
    ],
  },
  {
    slug: 'ai-architecture-platform',
    index: '03',
    title: 'AI-Powered Architecture Platform',
    lines: ['AI-Powered', [['Architecture', 'outline']], 'Platform'],
    client: 'Opus Eve',
    type: 'System Creation',
    year: '2026',
    scope: 'Product concept · System design',
    status: 'In development',
    summary: 'From requirements to validated, buildable floor plans. In hours, not months.',
    description: 'An AI-powered architecture platform by Opus Eve: rule-validated room components and AI-generated layouts that take requirements to buildable floor plans in hours, not months.',
    card: { img: 'fluted-glass', ratio: '16 / 10', alt: 'Rows of clear fluted glass fins in black and white' },
    cover: { type: 'image', img: 'fluted-glass', alt: 'Fluted glass fins forming a rhythmic architectural wall' },
    intro: 'Software made it faster to draw the lines, not to figure out where the lines should go. This platform turns floor plan design from a slow, manual, expensive process into something fast, scalable and reliable.',
    sections: [
      {
        label: 'The project',
        heading: 'Rules first. AI second.',
        block: { type: 'trio', items: [
          { title: 'The problem', text: 'Architects spend most of their time arranging rooms and checking code compliance, not designing. Firms can only grow by hiring, and homebuyers choose between a few stock layouts or a custom design that takes months and costs tens of thousands.' },
          { title: 'The insight', text: 'Every home is built from the same components, from kitchens and bedrooms to hallways and stairs, and each one has rules. Today those rules live in architects’ heads and are applied by hand, so mistakes cost weeks of revisions.' },
          { title: 'The system', text: 'Pre-validated room components, called packets, that know their own size, adjacency and code requirements. Every connection is checked in real time, and AI generates layouts on top of the rules, so each option is buildable and ready for BIM workflows, including Revit.' },
        ] },
      },
    ],
  },
]

export const getWork = (slug) => works.find((w) => w.slug === slug)
