'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Link } from '@/i18n/routing'
import api from '@/lib/api'
import type { Room } from '@/types'
import { formatCurrency } from '@/lib/utils'

export default function RoomDetailPage() {
  const params = useParams()
  const [room, setRoom] = useState<Room | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get(`/rooms/${params.id}`)
      .then((res) => {
        setRoom(res.data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [params.id])

  if (loading) {
    return <div className="container-custom py-16">Yükleniyor...</div>
  }

  if (!room) {
    return <div className="container-custom py-16">Oda bulunamadı.</div>
  }

  return (
    <div className="container-custom py-16">
      <div className="mb-8">
        <div className="aspect-video rounded-lg bg-gray-200" />
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="mb-4 font-serif text-4xl font-bold">{room.name}</h1>
          <p className="mb-6 text-gray-700">{room.description}</p>

          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-600">Kapasite</p>
              <p className="text-xl font-semibold">{room.capacity} kişi</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-600">Alan</p>
              <p className="text-xl font-semibold">{room.size} m²</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-600">Yatak</p>
              <p className="text-xl font-semibold">{room.bedType}</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-600">Fiyat</p>
              <p className="text-xl font-semibold">{formatCurrency(room.price)}</p>
            </div>
          </div>

          <h2 className="mb-4 text-2xl font-semibold">Olanaklar</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {room.amenities?.map((amenity, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-lg bg-gray-50 p-6">
            <p className="mb-4 text-3xl font-bold text-primary-600">
              {formatCurrency(room.price)}
              <span className="text-base font-normal text-gray-600"> / gece</span>
            </p>
            <Link href="/booking" className="btn-primary w-full text-center">
              Rezervasyon Yap
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Ücretsiz iptal: Giriş tarihinden 48 saat öncesine kadar
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
