import { useEffect, useState } from 'react'

/**
 * Minimal hash router. Hash routing (#/projects/x) is deliberate: it works
 * on static hosts like GitHub Pages without any server rewrite rules, both
 * on the custom domain and the *.github.io sub-path.
 *
 * Plain anchors (#experience, #top) still behave as in-page section links
 * on the home page.
 */

export type Route =
  | { page: 'home'; anchor?: string }
  | { page: 'project'; id: string }
  | { page: 'experience'; id: string }

export function parseHash(hash: string): Route {
  const h = hash.replace(/^#/, '')
  if (h.startsWith('/')) {
    const [collection, id] = h.slice(1).split('/')
    if (collection === 'projects' && id) return { page: 'project', id }
    if (collection === 'experience' && id) return { page: 'experience', id }
    return { page: 'home' }
  }
  return { page: 'home', anchor: h || undefined }
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash))

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash(window.location.hash))
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return route
}

export const projectPath = (id: string) => `#/projects/${id}`
export const experiencePath = (id: string) => `#/experience/${id}`
