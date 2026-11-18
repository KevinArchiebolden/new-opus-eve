import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { HeadContext } from './lib/head'
import { works } from './data/works'
export { works }
export * as site from './data/site'

export const routes = ['/', '/work', '/about', '/faq', '/contact', ...works.map((w) => `/work/${w.slug}`)]

export function render(url) {
  const head = {}
  const html = renderToString(
    <HeadContext.Provider value={head}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HeadContext.Provider>,
  )
  return { html, head }
}
