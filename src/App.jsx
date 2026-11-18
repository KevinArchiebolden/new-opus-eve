import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { SmoothScroll, scrollToTop, lenisStore } from './lib/smooth-scroll'
import { Preloader, ScrollProgress, Cursor, PageTransition } from './components/Effects'
import { Header, Footer } from './components/Layout'
import Home from './pages/Home'
import Work from './pages/Work'
import WorkDetail from './pages/WorkDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import NotFound from './pages/NotFound'

const page = (el) => <PageTransition>{el}<Footer /></PageTransition>

/* Deep links (/about#system-creation): scroll once the route transition has settled. */
function useHashScroll(location) {
  useEffect(() => {
    if (!location.hash) return
    const t = setTimeout(() => {
      const el = document.getElementById(decodeURIComponent(location.hash.slice(1)))
      if (!el) return
      if (lenisStore.lenis) lenisStore.lenis.scrollTo(el, { offset: -110, duration: 1.4 })
      else el.scrollIntoView({ block: 'start' })
    }, 1150)
    return () => clearTimeout(t)
  }, [location.pathname, location.hash])
}

export default function App() {
  const location = useLocation()
  useHashScroll(location)
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <a className="skip-link" href="#main">Skip to content</a>
        <Preloader />
        <ScrollProgress />
        <Header />
        <AnimatePresence mode="wait" initial={false} onExitComplete={scrollToTop}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={page(<Home />)} />
            <Route path="/work" element={page(<Work />)} />
            <Route path="/work/:slug" element={page(<WorkDetail />)} />
            <Route path="/about" element={page(<About />)} />
            <Route path="/faq" element={page(<Faq />)} />
            <Route path="/contact" element={page(<Contact />)} />
            <Route path="*" element={page(<NotFound />)} />
          </Routes>
        </AnimatePresence>
        <Cursor />
        <div className="grain" aria-hidden="true" />
      </SmoothScroll>
    </MotionConfig>
  )
}
