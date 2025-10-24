import React, { useEffect, useState } from 'react'

type RouteComp = React.FC<{ params?: Record<string, string> }>
export type Route = { path: string; component: RouteComp }

const matchPath = (pattern: string, pathname: string) => {
  const patternParts = pattern.split('/').filter(Boolean)
  const pathParts = pathname.split('/').filter(Boolean)
  if (patternParts.length !== pathParts.length) return null
  const params: Record<string, string> = {}
  for (let i = 0; i < patternParts.length; i++) {
    const p = patternParts[i]
    if (p.startsWith(':')) params[p.slice(1)] = decodeURIComponent(pathParts[i])
    else if (p !== pathParts[i]) return null
  }
  return params
}

export const Router = ({ routes }: { routes: Route[] }) => {
  const [hash, setHash] = useState(window.location.hash.replace('#', '') || '/')

  useEffect(() => {
    const onHash = () => setHash(window.location.hash.replace('#', '') || '/')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  for (const r of routes) {
    const params = matchPath(r.path, hash)
    if (params) {
      const Comp = r.component
      return <Comp params={params} />
    }
  }
  return <div className="text-center mt-8">Página não encontrada</div>
}

