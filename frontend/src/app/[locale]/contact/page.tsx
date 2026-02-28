'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import api from '@/lib/api'

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Phone is required'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message is required'),
})

type ContactForm = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [success, setSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactForm) => {
    try {
      await api.post('/contact', data)
      setSuccess(true)
      reset()
      setTimeout(() => setSuccess(false), 5000)
    } catch (error) {
      console.error('Contact form failed:', error)
    }
  }

  return (
    <div className="container-custom py-16">
      <h1 className="mb-8 font-serif text-4xl font-bold">İletişim</h1>
      
      {success && (
        <div className="mb-6 rounded-lg bg-green-100 p-4 text-green-800">
          Mesajınız başarıyla gönderildi!
        </div>
      )}

      <div className="grid gap-12 lg:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="mb-2 block font-medium">Ad Soyad</label>
            <input
              type="text"
              {...register('name')}
              className="w-full rounded-lg border p-3"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>

          <div>
            <label className="mb-2 block font-medium">Email</label>
            <input
              type="email"
              {...register('email')}
              className="w-full rounded-lg border p-3"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div>
            <label className="mb-2 block font-medium">Telefon</label>
            <input
              type="tel"
              {...register('phone')}
              className="w-full rounded-lg border p-3"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="mb-2 block font-medium">Konu</label>
            <input
              type="text"
              {...register('subject')}
              className="w-full rounded-lg border p-3"
            />
            {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
          </div>

          <div>
            <label className="mb-2 block font-medium">Mesaj</label>
            <textarea
              {...register('message')}
              rows={5}
              className="w-full rounded-lg border p-3"
            />
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
          </div>

          <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
            {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
          </button>
        </form>

        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-xl font-semibold">Adres</h3>
            <p className="text-gray-600">[Otel Adresi]</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold">Telefon</h3>
            <p className="text-gray-600">+90 XXX XXX XX XX</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold">Email</h3>
            <p className="text-gray-600">info@endgloryhotel.com</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold">WhatsApp</h3>
            <a href="https://wa.me/90XXXXXXXXXX" className="text-primary-600 hover:underline">
              Mesaj Gönder
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
