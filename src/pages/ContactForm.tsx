import React from 'react'
import { useForm } from 'react-hook-form'

type FormData = { nome: string; email: string; mensagem: string }

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    alert(`Mensagem enviada por ${data.nome}!`)
    reset()
  }

  return (
    <section className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contato</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <label>Nome</label>
        <input {...register('nome', { required: 'Campo obrigatório' })} className="border p-2 rounded" />
        {errors.nome && <span className="text-red-500 text-sm">{errors.nome.message}</span>}

        <label>Email</label>
        <input
          {...register('email', {
            required: 'Campo obrigatório',
            pattern: { value: /\S+@\S+\.\S+/, message: 'Email inválido' }
          })}
          className="border p-2 rounded"
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

        <label>Mensagem</label>
        <textarea
          {...register('mensagem', {
            required: 'Campo obrigatório',
            minLength: { value: 10, message: 'Mínimo 10 caracteres' }
          })}
          className="border p-2 rounded"
        />
        {errors.mensagem && <span className="text-red-500 text-sm">{errors.mensagem.message}</span>}

        <button type="submit" className="bg-amber-500 text-white py-2 rounded mt-2 hover:bg-amber-600">
          Enviar
        </button>
      </form>
    </section>
  )
}
export default ContactForm
