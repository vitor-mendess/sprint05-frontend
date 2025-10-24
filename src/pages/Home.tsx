import { useContext, useState } from 'react'
import { RecipesContext } from '../context/RecipesContext'
import RecipeCard from '../components/RecipeCard'

const Home = () => {
  const { receitas, loading } = useContext(RecipesContext)
  const [busca, setBusca] = useState('')

  if (loading) return <div>Carregando receitas...</div>

  const filtradas = receitas.filter((r) =>
    r.nome.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Sabores do Front 🍽️</h1>

      <input
        type="text"
        placeholder="Pesquisar receitas..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="border rounded-lg p-2 mb-6 w-full md:w-1/2"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtradas.map((r) => (
          <RecipeCard key={r.id} receita={r} />
        ))}
      </div>

      {filtradas.length === 0 && (
        <p className="text-gray-600 mt-4">Nenhuma receita encontrada.</p>
      )}
    </section>
  )
}

export default Home
