// All project content. One template (pages/WorkDetail.jsx) renders every entry.
// `lines`: display title, one array item per line; a segment is a string or [text, className].
// Each chapter follows one pattern: label, heading, a three-column `trio` block and an optional one-line close.
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
        label: 'The brief',
        heading: 'Not geographic growth for its own sake.',
        block: { type: 'trio', items: [
          { title: 'Diversify revenue', text: 'Reduce reliance on the domestic market by building a second engine of growth in the world’s largest premium furniture market.' },
          { title: 'Build global visibility', text: 'Position GlobeWest as an emerging international design authority, not just a successful Australian brand.' },
          { title: 'Prove the model scales', text: 'Validate the trade-first model in a competitive, design-led economy and create a replicable framework for future expansions.' },
        ] },
        paragraphs: ['The move was framed as a deliberate test of operational robustness, supply-chain agility and long-term international value creation.'],
      },
      {
        label: 'The work',
        heading: 'A framework for entry, and the plan to execute it.',
        block: { type: 'trio', items: [
          { title: 'Market entry framework', text: 'Opportunity size, competitive landscape, macroeconomic and regulatory conditions, duties, compliance and logistics, distilled into one clear view of the U.S. market.' },
          { title: 'Validation and channels', text: 'Priority metros validated, with Los Angeles as the entry point, plus a recommended channel strategy, commercial framework and business case.' },
          { title: 'Launch and implementation plan', text: 'The workstreams, sequencing, governance controls and staged investment needed to open a trade presence in Los Angeles.' },
        ] },
        paragraphs: ['The result: clarity on where, how and when to enter.'],
      },
      { quote: { text: 'The Australian contemporary, indoor–outdoor system brand for the trade.', cite: 'The recommended U.S. positioning' } },
      {
        label: 'Rollout and governance',
        heading: 'Four metros. Investment linked to evidence.',
        block: { type: 'trio', items: [
          { title: 'A focused rollout', text: 'Rather than a diffuse national push, entry starts in Los Angeles as the brand and trade anchor, then extends to Dallas, Miami and Austin.' },
          { title: 'Gated investment', text: 'Every step-change in spend is released through a Board decision gate, from mobilization to lease, opening and scale.' },
          { title: 'Proof before scale', text: 'Each gate is backed by an evidence pack, so capital stays tied to demonstrated adoption and stable service, not optimism.' },
        ] },
      },
    ],
    gallery: [
      { img: 'streak-cover', layout: 'g-left', alt: 'Vertical streak gradient in black red, grunge pink and acid yellow', caption: 'Report design language, with streak gradients built from the Opus Eve palette.' },
      { img: 'gradient-rose', layout: 'g-right', alt: 'Soft vertical gradient in grunge pink and black red' },
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
        label: 'The problem',
        heading: 'Marketing has three problems nobody has solved.',
        block: { type: 'trio', items: [
          { title: 'The message is inconsistent', text: 'Your website says it one way. Your Instagram says it slightly differently. Your newsletter uses different language again. Once the message drifts, it keeps drifting, because there is nothing in place to catch it.' },
          { title: 'You don’t know where you stand', text: 'Competitors are publishing, shifting their messaging, pushing into new topics. Most businesses have no systematic way of knowing where they stand relative to what everyone else is saying.' },
          { title: 'You don’t know what is working', text: 'Ask which piece of marketing led to which sale, and nobody can tell you. The data lives in separate dashboards that don’t talk to each other, so every conclusion is a guess.' },
        ] },
        paragraphs: ['These are not three separate problems. They are three symptoms of the same missing system.'],
      },
      {
        label: 'The gap',
        heading: 'More content, faster, with less consistency than ever.',
        block: { type: 'trio', items: [
          { title: 'Content in isolation', text: 'Hundreds of AI tools now write captions, blog posts, subject lines and ad copy. None of them know what the others are saying.' },
          { title: 'No brand context', text: 'None have access to your brand guidelines, your tone of voice or what you posted yesterday.' },
          { title: 'No intelligence layer', text: 'AI gave everyone a content engine. Nobody got quality control, market intelligence or a way to know what is actually working.' },
        ] },
      },
      { quote: { text: 'AI made content creation easy. Nobody made marketing intelligent.', cite: 'The gap MCOS is built to close' } },
      {
        label: 'The system',
        heading: 'At its core, MCOS is a monitor.',
        block: { type: 'trio', items: [
          { title: 'Enforces consistency', text: 'It watches your brand across every channel and catches inconsistencies before they go live.' },
          { title: 'Reads the market', text: 'It watches your competitors, shows where you stand and recommends how to respond.' },
          { title: 'Connects to revenue', text: 'It watches your results and links marketing activity to the outcomes it drives.' },
        ] },
        paragraphs: ['One system, running as a continuous loop: listen, create, check, publish, measure, learn.'],
      },
    ],
    gallery: [
      { img: 'glow-red', layout: 'g-left', alt: 'A red glow emerging from a scratched dark surface' },
      { img: 'glass-oe', layout: 'g-right', alt: 'The Opus Eve monogram seen through fluted glass' },
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
        label: 'The problem',
        heading: 'Designing a home is still done by hand.',
        block: { type: 'trio', items: [
          { title: 'Creative time is lost', text: 'Architects spend most of their time arranging rooms, checking dimensions and confirming code compliance, not designing.' },
          { title: 'Architecture cannot scale', text: 'To design more homes, a firm has one option: hire more architects. Output is bottlenecked by human time.' },
          { title: 'Homebuyers have almost no say', text: 'Pick from a handful of pre-designed layouts, or commission a custom design that costs months and tens of thousands of dollars.' },
        ] },
      },
      {
        label: 'The insight',
        heading: 'Architecture is a system of building blocks.',
        block: { type: 'trio', items: [
          { title: 'The same components', text: 'Every home, however custom, is made of the same parts: kitchens, bedrooms, bathrooms, living rooms, garages, hallways and staircases.' },
          { title: 'Every component has rules', text: 'A kitchen needs plumbing. A bedroom needs an egress window. A bathroom cannot open directly into a kitchen.' },
          { title: 'The rules live in people’s heads', text: 'Architects apply them manually, every time. When they get it wrong, it costs weeks of revisions.' },
        ] },
      },
      { quote: { text: 'AI made it easy to generate a picture of a floor plan. Not one that can be built.', cite: 'Why rules come first' } },
      {
        label: 'The system',
        heading: 'Rules first. AI second.',
        block: { type: 'trio', items: [
          { title: 'Packets', text: 'Pre-designed, pre-validated room components that already know their own size, adjacency and code requirements.' },
          { title: 'Real-time validation', text: 'Every connection is checked as packets are assembled into a floor plan.' },
          { title: 'AI-generated layouts', text: 'AI generates options on top of the rule system, so every one is buildable and ready for BIM workflows, including Revit.' },
        ] },
      },
    ],
    gallery: [{ img: 'fluted-chrome', layout: 'g-wide', alt: 'Chrome and glass fins catching light in a repeating rhythm' }],
  },
]

export const getWork = (slug) => works.find((w) => w.slug === slug)
