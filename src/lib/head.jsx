import { createContext, useContext, useEffect } from 'react'

// Minimal head manager: during prerender the values are collected into the
// context object; in the browser they are applied to document.head.
export const HeadContext = createContext(null)

function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el) }
  el.setAttribute('content', value)
}

export function Seo({ title, description, image, jsonLd }) {
  const ctx = useContext(HeadContext)
  if (ctx) Object.assign(ctx, { title, description, image, jsonLd })

  useEffect(() => {
    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
  }, [title, description])

  return null
}
