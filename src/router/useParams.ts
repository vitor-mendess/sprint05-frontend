import { useState, useEffect } from 'react'

export const useParams = () => {
  const [path, setPath] = useState(window.location.hash.replace('#', '') || '/')
  useEffect(() => {
    const onHash = () => setPath(window.location.hash.replace('#', '') || '/')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return { path }
}

