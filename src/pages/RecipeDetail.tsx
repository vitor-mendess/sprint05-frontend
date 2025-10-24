import React, { useContext } from 'react'
import { RecipesContext } from '../context/RecipesContext'

const RecipeDetail: React.FC<{ params?: Record<string, string> }> = ({ params }) => {
  const { receitas, loading } = useContext(RecipesContext)
  if (loading) return <div>Carregando...</div>

  const id = Number(params?.id)
  const receita = receitas.find((r) => r.id === id)
  if (!receita) return <div>Receita não encontrada</div>

  return (
    <article className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{receita.nome}</h1>
      <img src={receita.imagem} alt={receita.nome} className="w-full rounded mb-4" />
      <p className="mb-4 text-gray-600">{receita.categoria}</p>
      <h2 className="text-xl font-semibold mb-2">Ingredientes</h2>
      <ul className="list-disc ml-6 mb-4">
        {receita.ingredientes.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Modo de preparo</h2>
      <p className="mb-4">{receita.modoPreparo}</p>
      <p><strong>Tempo:</strong> {receita.tempo}</p>
    </article>
  )
}
export default RecipeDetail
