'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import api from '@/lib/api'
import type { Room } from '@/types'
import RoomCard from '@/components/rooms/RoomCard'
import RoomFilters from '@/components/rooms/RoomFilters'

export default function RoomsPage() {
  const t = useTranslations('nav')
  const [rooms, setRooms] = useState<Room[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({})

  useEffect(() => {
    setLoading(true)
    api
      .get('/rooms', { params: filters })
      .then((res) => {
        setRooms(res.data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [filters])

  return (
    <div className="container-custom py-16">
      <h1 className="mb-8 font-serif text-4xl font-bold">{t('rooms')}</h1>
      <div className="grid gap-8 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <RoomFilters onFilterChange={setFilters} />
        </aside>
        <div className="lg:col-span-3">
          {loading ? (
            <div className="text-center">Yükleniyor...</div>
          ) : rooms.length === 0 ? (
            <div className="text-center text-gray-600">Oda bulunamadı.</div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {rooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
