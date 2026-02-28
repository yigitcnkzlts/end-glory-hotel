'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'restaurant', label: 'Restaurant & Bar' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'events', label: 'Events & Meetings' },
  ]

  const images = [
    { id: 1, category: 'rooms', url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070', title: 'Deluxe Suite' },
    { id: 2, category: 'rooms', url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070', title: 'Presidential Suite' },
    { id: 3, category: 'rooms', url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074', title: 'Executive Room' },
    { id: 4, category: 'restaurant', url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070', title: 'Fine Dining' },
    { id: 5, category: 'restaurant', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070', title: 'Restaurant Interior' },
    { id: 6, category: 'restaurant', url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074', title: 'Bar Lounge' },
    { id: 7, category: 'facilities', url: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=2070', title: 'Infinity Pool' },
    { id: 8, category: 'facilities', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070', title: 'Luxury Spa' },
    { id: 9, category: 'facilities', url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070', title: 'Fitness Center' },
    { id: 10, category: 'events', url: 'https://images.unsplash.com/photo-1519167758481-83f29da8c2b0?q=80&w=2098', title: 'Conference Hall' },
    { id: 11, category: 'events', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069', title: 'Wedding Venue' },
    { id: 12, category: 'events', url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062', title: 'Banquet Hall' },
    { id: 13, category: 'rooms', url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070', title: 'Luxury Bedroom' },
    { id: 14, category: 'facilities', url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075', title: 'Hotel Lobby' },
    { id: 15, category: 'restaurant', url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074', title: 'Rooftop Dining' },
    { id: 16, category: 'facilities', url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070', title: 'Hotel Exterior' },
  ]

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 font-serif text-5xl font-bold">Photo Gallery</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore our luxurious spaces and world-class amenities
          </p>
        </motion.div>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full px-6 py-3 font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 shadow-md hover:bg-gray-50'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, idx) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-2xl"
                onClick={() => setSelectedImage(image.id)}
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <h3 className="font-serif text-xl font-semibold">{image.title}</h3>
                  <p className="text-sm text-gray-200">Click to view</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-h-[90vh] max-w-6xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images.find(img => img.id === selectedImage)?.url || ''}
                  alt={images.find(img => img.id === selectedImage)?.title || ''}
                  width={1200}
                  height={800}
                  className="rounded-lg object-contain"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -right-4 -top-4 rounded-full bg-white p-2 shadow-lg transition-transform hover:scale-110"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
