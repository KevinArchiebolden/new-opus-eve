// Static prerender: renders every route to real HTML (SEO + fast first paint),
// then the client hydrates. Also writes sitemap.xml and robots.txt.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'

const DOMAIN = 'https://opuseve.com'
const template = readFileSync('dist/index.html', 'utf8')
const { render, routes, works, site } = await import(pathToFileURL('dist-server/entry-server.js').href)

const esc = (s = '') => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function headTags(h, path) {
  const url = DOMAIN + (path === '/' ? '/' : path + '/')
  const img = h.image ? `${DOMAIN}/assets/img/${h.image}` : ''
  return [
    `<title>${esc(h.title)}</title>`,
    `<meta name="description" content="${esc(h.description)}">`,
    `<link rel="canonical" href="${url}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="Opus Eve">`,
    `<meta property="og:title" content="${esc(h.title)}">`,
    `<meta property="og:description" content="${esc(h.description)}">`,
    `<meta property="og:url" content="${url}">`,
    img && `<meta property="og:image" content="${img}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    h.jsonLd && `<script type="application/ld+json">${JSON.stringify(h.jsonLd)}</script>`,
  ].filter(Boolean).join('\n    ')
}

const all = [...routes, '/404']
for (const path of all) {
  const { html, head } = render(path)
  let page = template.replace('<!--app-head-->', headTags(head, path === '/404' ? '/' : path)).replace('<!--app-html-->', html)
  if (path === '/404') page = page.replace('<head>', '<head>\n    <meta name="robots" content="noindex">')
  const out = path === '/' ? 'dist/index.html' : path === '/404' ? 'dist/404.html' : join('dist', path, 'index.html')
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, page)
  console.log('prerendered', path)
}

const today = new Date().toISOString().slice(0, 10)
writeFileSync('dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes.map((r) => `  <url><loc>${DOMAIN}${r === '/' ? '/' : r + '/'}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
  `\n</urlset>\n`)
// robots.txt — everything public; AI search/answer crawlers explicitly welcome (GEO).
const AI_BOTS = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot', 'CCBot']
writeFileSync('dist/robots.txt',
  `User-agent: *\nAllow: /\n\n` +
  AI_BOTS.map((b) => `User-agent: ${b}\nAllow: /\n`).join('\n') +
  `\nSitemap: ${DOMAIN}/sitemap.xml\n`)

// llms.txt — concise, factual Markdown summary for LLM crawlers (llmstxt.org convention).
const u = (p) => `${DOMAIN}${p === '/' ? '/' : p + '/'}`
const llms = [
  '# Opus Eve',
  '',
  `> ${site.DEFINITION}`,
  '',
  `Opus Eve (also written Opus-Eve) is a member of the Oscurro Group and supports clients across ${site.REGIONS.join(', ')}. Contact: ${site.EMAIL}.`,
  '',
  '## Services',
  ...site.CAPABILITIES.flatMap((c) => [`### ${c.name}`, c.summary, ...c.services.map((s) => `- ${s}`), '']),
  '## Clients and client systems',
  ...site.CLIENTS.map((c) => `- **${c.name}**${c.sector ? ` (${c.sector})` : ''}: ${c.work}`),
  '',
  '## How engagements work',
  ...site.ENGAGEMENT.map((p, i) => `${i + 1}. **${p.phase}**: ${p.text}`),
  '',
  'Cost depends on:',
  ...site.COST_DRIVERS.map((s) => `- ${s}`),
  '',
  '## Case studies',
  ...works.map((w) => `- [${w.title}](${u(`/work/${w.slug}`)}): ${w.summary}`),
  '',
  '## Frequently asked questions',
  ...site.FAQS.flatMap((f) => [`### ${f.q}`, f.a, '']),
  '## Pages',
  `- [Home](${u('/')})`,
  `- [Work](${u('/work')}): case studies and client systems`,
  `- [About](${u('/about')}): who Opus Eve is, services in detail, engagement model, regions`,
  `- [FAQ](${u('/faq')}): answers about Opus Eve, engagements and scaling operations`,
  `- [Contact](${u('/contact')}): ${site.EMAIL}`,
  '',
].join('\n')
writeFileSync('dist/llms.txt', llms)
rmSync('dist-server', { recursive: true, force: true })
console.log('sitemap.xml, robots.txt written')
