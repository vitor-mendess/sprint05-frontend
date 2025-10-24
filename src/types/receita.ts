// src/types/receita.ts
export interface Receita {
  id: number
  categoria: string
  nome: string
  ingredientes: string[]
  modoPreparo: string
  tempo: string
  imagem?: string
}



