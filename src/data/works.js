// All project content. One template (pages/WorkDetail.jsx) renders every entry.
// `lines`: display title, one array item per line; a segment is a string or [text, className].
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
        paragraphs: ['The initiative was framed as a deliberate move to test operational robustness, strengthen supply-chain agility, and align the business for long-term international value creation. The U.S. expansion sought to:'],
        list: { style: 'numbered', items: [
          'Diversify revenue streams and reduce reliance on the domestic market.',
          'Enhance global brand visibility and position GlobeWest as an emerging international design authority.',
          'Validate the scalability of its trade-first model in a highly competitive, design-led economy.',
          'Build a replicable framework for subsequent global expansions across similar lifestyle-driven markets.',
        ] },
      },
      {
        label: 'The work',
        heading: 'A framework for entry, and the plan to execute it.',
        paragraphs: [
          'Phase 01 delivered a Strategic Market Entry Framework for the U.S. It assesses the opportunity size and structure, evaluates macro and regulatory conditions, validates priority metros, and recommends a channel strategy and high-level rollout logic.',
          'Part 2 converted those findings into an executable Launch & Implementation Plan, setting out the workstreams, sequencing, governance controls and staged investment approach required to open a trade presence in Los Angeles, with Board control maintained through explicit decision gates and measurable proof points.',
        ],
        block: { type: 'tiles', items: [
          'Executive Summary', 'Introduction', 'Background', 'USA Market Context', 'Competitive Landscape',
          'Macroeconomic Factors', 'Duties & Tariffs', 'Compliance, Standards & Regulations', 'Importing & Logistics',
          'Market Validation', 'Channel Strategy Evaluation', 'Launch & Implementation Plan', 'Conclusion',
        ] },
      },
      {
        label: 'Deliverables',
        heading: 'Clarity on where, how and when.',
        list: { style: 'arrows', items: [
          'U.S. market context and strategic analysis',
          'Regional market validation, with Los Angeles as the entry point',
          'Channel strategy evaluation and commercial framework',
          'Business case and financial modelling assumptions',
          'Execution roadmap with milestone plan',
          'Third-party partnership and operational recommendations',
        ] },
      },
      { quote: { text: 'The Australian contemporary, indoor–outdoor system brand for the trade.', cite: 'The recommended U.S. positioning' } },
      {
        label: 'Rollout logic',
        heading: 'Four metros. One coherent spine.',
        paragraphs: ['Rather than a diffuse national push, the framework recommends entering through a small number of highly aligned cities, sequenced so that capital deployment stays tied to clear, measurable proof points.'],
        block: { type: 'route', items: [
          { name: 'Los Angeles', text: 'Brand and trade anchor' },
          { name: 'Dallas', text: 'Inland design and logistics hub' },
          { name: 'Miami', text: 'Coastal-luxury and East Coast extension' },
          { name: 'Austin', text: 'Inland growth and innovation market' },
        ] },
      },
      {
        label: 'Governance',
        heading: 'Investment linked to evidence, not optimism.',
        paragraphs: ['The launch is managed as a coordinated program, not a single showroom opening. Each step-change in spend is released through a decision gate, supported by an evidence pack.'],
        list: { style: 'numbered', items: [
          ['Gate 0', 'Confirm the Los Angeles pathway and approve mobilisation.'],
          ['Gate 1', 'Approve lease execution and fitout commitment.'],
          ['Gate 2', 'Approve opening (“Ready-to-Trade”).'],
          ['Gate 3', 'Approve scale actions on demonstrated adoption and stable service.'],
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
        paragraphs: [
          'Hundreds of AI tools can now write captions, blog posts, subject lines and ad copy. Each produces content in isolation. None of them know what the others are saying, and none have access to your brand guidelines, your tone of voice or what you posted yesterday.',
          'AI gave everyone a content engine. Nobody got a quality control system. Nobody got a market intelligence system. Nobody got a way to know what is actually working.',
        ],
      },
      { quote: { text: 'AI made content creation easy. Nobody made marketing intelligent.', cite: 'The gap MCOS is built to close' } },
      {
        label: 'The system',
        heading: 'At its core, MCOS is a monitor.',
        paragraphs: [
          'It watches everything: your brand, your channels, your competitors, and your results. Because it is watching your brand everywhere, it can catch inconsistencies before they go live. Because it is watching your competitors, it can tell you where you stand and recommend how to respond.',
          'One system that enforces message consistency, monitors the competitive landscape, and connects marketing to revenue, all running as a continuous loop.',
        ],
        block: { type: 'loop', items: ['Listen', 'Create', 'Check', 'Publish', 'Measure', 'Learn'] },
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
        paragraphs: ['Architects are trained to think about how people move through space, how light enters a room, how a building meets the ground. Then most of their time goes on doing the same thing over and over: arranging rooms, checking dimensions, confirming that windows, plumbing and hallways meet code. Not designing. Arranging. Checking. Fixing. Rearranging.'],
        block: { type: 'trio', items: [
          { title: 'Creative time is lost', text: 'The repetitive work of testing layouts and checking compliance crowds out the design thinking architects were trained for.' },
          { title: 'Architecture cannot scale', text: 'To design more homes, a firm has one option: hire more architects. Output is bottlenecked by human time.' },
          { title: 'Homebuyers have almost no say', text: 'Pick from a handful of pre-designed layouts, or commission a custom design that costs months and tens of thousands of dollars.' },
        ] },
      },
      {
        label: 'The insight',
        heading: 'Architecture is a system of building blocks.',
        paragraphs: [
          'Every home, no matter how custom or complex, is made up of the same fundamental components: kitchens, bedrooms, bathrooms, living rooms, garages, hallways, staircases. These components have rules. A kitchen needs plumbing. A bedroom needs an egress window. A bathroom cannot open directly into a kitchen.',
          'Today, architects carry all of these rules in their heads and apply them manually, every time. When they get it wrong, it costs weeks of revisions.',
        ],
      },
      { quote: { text: 'AI made it easy to generate a picture of a floor plan. Not one that can be built.', cite: 'Why rules come first' } },
      {
        label: 'The system',
        heading: 'Rules first. AI second.',
        paragraphs: [
          'Every room component (a packet) is a pre-designed, pre-validated building block that already knows its own rules. When packets are assembled into a floor plan, the system validates every connection in real time.',
          'On top of that rule system, AI generates options. Every one is already validated. Every one is buildable.',
        ],
        list: { style: 'arrows', items: [
          'Packets: room components that know their own size, adjacency and code requirements',
          'Real-time validation of every connection as a plan is assembled',
          'AI-generated layout options, validated before they are shown',
          'Production-ready output for BIM workflows, including Revit',
        ] },
      },
    ],
    gallery: [{ img: 'fluted-chrome', layout: 'g-wide', alt: 'Chrome and glass fins catching light in a repeating rhythm' }],
  },
]

export const getWork = (slug) => works.find((w) => w.slug === slug)
