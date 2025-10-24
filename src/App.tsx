import React from 'react'
import { Router } from './router/router'
import Home from './pages/Home'
import Categories from './pages/Categories'
import CategoryRecipes from './pages/CategoryRecipes'
import RecipeDetail from './pages/RecipeDetail'
import ContactForm from './pages/ContactForm'
import Header from './components/Header'
import Footer from './components/Footer'

const routes = [
  { path: '/', component: Home },
  { path: '/categorias', component: Categories },
  { path: '/categoria/:categoria', component: CategoryRecipes },
  { path: '/receita/:id', component: RecipeDetail },
  { path: '/contato', component: ContactForm }
]

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      <Header />
      <main className="flex-1 container mx-auto p-4">
        <Router routes={routes} />
      </main>
      <Footer />
    </div>
  )
}
export default App
