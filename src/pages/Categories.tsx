import React, { useContext } from 'react'
import { RecipesContext } from '../context/RecipesContext'

const Categories = () => {
  const { receitas } = useContext(RecipesContext)
  const categorias = Array.from(new Set(receitas.map((r) => r.categoria)))

  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Categorias</h1>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categorias.map((cat) => (
          <li key={cat}>
            <a
              href={`#/categoria/${cat}`}
              className="block bg-amber-100 p-4 rounded hover:bg-amber-200 text-center"
            >
              {cat}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default Categories
