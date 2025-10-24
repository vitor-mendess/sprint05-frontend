import { createContext, useState, useEffect, ReactNode } from 'react'
import { Receita } from '../types/receita'


type RecipesContextType = {
  receitas: Receita[]
  loading: boolean
}

export const RecipesContext = createContext<RecipesContextType>({
  receitas: [],
  loading: true,
})

export const RecipesProvider = ({ children }: { children: ReactNode }) => {
  const [receitas, setReceitas] = useState<Receita[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/data/receitas.json')
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao carregar receitas.json')
        return res.json()
      })
      .then((data: Receita[]) => {
        setReceitas(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Erro:', err)
        setLoading(false)
      })
  }, [])

  return (
    <RecipesContext.Provider value={{ receitas, loading }}>
      {children}
    </RecipesContext.Provider>
  )
}
