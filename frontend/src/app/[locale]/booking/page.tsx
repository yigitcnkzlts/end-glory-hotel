'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import api from '@/lib/api'

const bookingSchema = z.object({
  roomId: z.number().min(1),
  checkIn: z.string().min(1, 'Check-in date is required'),
  checkOut: z.string().min(1, 'Check-out date is required'),
  guests: z.number().min(1),
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Phone is required'),
  specialRequests: z.string().optional(),
})

type BookingForm = z.infer<typeof bookingSchema>

export default function BookingPage() {
  const t = useTranslations('booking')
  const [success, setSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
  })

  const onSubmit = async (data: BookingForm) => {
    try {
      await api.post('/bookings', data)
      setSuccess(true)
    } catch (error) {
      console.error('Booking failed:', error)
    }
  }

  if (success) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="mb-4 font-serif text-4xl font-bold text-green-600">{t('success')}</h1>
        <p>Rezervasyon detayları email adresinize gönderildi.</p>
      </div>
    )
  }

  return (
    <div className="container-custom py-16">
      <h1 className="mb-8 font-serif text-4xl font-bold">{t('title')}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-2xl space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-medium">{t('checkIn')}</label>
            <input
              type="date"
              {...register('checkIn')}
              className="w-full rounded-lg border p-3"
            />
            {errors.checkIn && <p className="mt-1 text-sm text-red-600">{errors.checkIn.message}</p>}
          </div>
          <div>
            <label className="mb-2 block font-medium">{t('checkOut')}</label>
            <input
              type="date"
              {...register('checkOut')}
              className="w-full rounded-lg border p-3"
            />
            {errors.checkOut && <p className="mt-1 text-sm text-red-600">{errors.checkOut.message}</p>}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-medium">Ad</label>
            <input
              type="text"
              {...register('firstName')}
              className="w-full rounded-lg border p-3"
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
          </div>
          <div>
            <label className="mb-2 block font-medium">Soyad</label>
            <input
              type="text"
              {...register('lastName')}
              className="w-full rounded-lg border p-3"
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
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
        </div>

        <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
          {isSubmitting ? 'Gönderiliyor...' : t('submit')}
        </button>
      </form>
    </div>
  )
}
