import React from 'react'

const Header = () => (
  <header className="bg-amber-500 text-white p-4 shadow-md">
    <nav className="container mx-auto flex justify-between">
      <a href="#/" className="font-bold text-xl">Sabores do Front</a>
      <div className="flex gap-4">
        <a href="#/" className="hover:underline">Início</a>
        <a href="#/categorias" className="hover:underline">Categorias</a>
        <a href="#/contato" className="hover:underline">Contato</a>
      </div>
    </nav>
  </header>
)
export default Header
