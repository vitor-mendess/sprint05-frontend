import { Receita as ReceitaType } from '../types/receita'

type Props = { receita: ReceitaType }

const RecipeCard: React.FC<Props> = ({ receita }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-200">
      <img
        src={receita.imagem}
        alt={receita.nome}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-amber-700 mb-1">{receita.nome}</h2>
        <p className="text-gray-500 text-sm mb-2">{receita.categoria}</p>
        <p className="text-gray-600 line-clamp-2 mb-3">
          {receita.modoPreparo}
        </p>
        <a
          href={`#/receita/${receita.id}`}
          className="inline-block bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600"
        >
          Ver detalhes
        </a>
      </div>
    </div>
  )
}

export default RecipeCard



