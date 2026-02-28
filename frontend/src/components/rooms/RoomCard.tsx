import { Link } from '@/i18n/routing'
import type { Room } from '@/types'
import { formatCurrency } from '@/lib/utils'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function RoomCard({ room }: { room: Room }) {
  return (
    <Link href={`/rooms/${room.id}`} className="group block overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={room.images?.[0] || 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070'}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Amenities badges on hover */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex flex-wrap gap-2">
            {room.amenities?.slice(0, 3).map((amenity, i) => (
              <span
                key={i}
                className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 backdrop-blur-sm"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="font-serif text-2xl font-semibold transition-colors group-hover:text-primary-600">
            {room.name}
          </h3>
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(4)].map((_, i) => (
              <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        <p className="mb-4 line-clamp-2 text-gray-600">{room.description}</p>

        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {room.capacity}
            </span>
            {room.size && (
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                {room.size}m²
              </span>
            )}
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary-600">
              {formatCurrency(room.price)}
            </div>
            <div className="text-xs text-gray-500">per night</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
