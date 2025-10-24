import React, { useContext } from 'react'
import { RecipesContext } from '../context/RecipesContext'
import RecipeCard from '../components/RecipeCard'

const CategoryRecipes: React.FC<{ params?: Record<string, string> }> = ({ params }) => {
  const { receitas, loading } = useContext(RecipesContext)
  if (loading) return <div>Carregando...</div>

  const categoria = params?.categoria || ''
  const filtradas = receitas.filter((r) => r.categoria === categoria)

  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Categoria: {categoria}</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {filtradas.length > 0 ? (
          filtradas.map((r) => <RecipeCard key={r.id} receita={r} />)
        ) : (
          <p>Nenhuma receita encontrada nesta categoria.</p>
        )}
      </div>
    </section>
  )
}
export default CategoryRecipes
