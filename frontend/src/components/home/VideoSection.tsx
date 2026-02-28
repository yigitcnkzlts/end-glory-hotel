'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export default function VideoSection() {
  const t = useTranslations('home.video')
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="relative overflow-hidden bg-gray-900 py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">
            {t('title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            {t('desc')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="group relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
            {/* Video Thumbnail */}
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070"
              alt="Hotel Video"
              fill
              className="object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 transition-all group-hover:bg-black/30" />

            {/* Play Button */}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
              aria-label="Play video"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-2xl transition-all hover:scale-110 hover:bg-white md:h-24 md:w-24">
                <svg className="ml-1 h-10 w-10 text-primary-600 md:h-12 md:w-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </button>

            {/* Video Stats */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4 text-white">
              <div className="rounded-lg bg-black/50 px-4 py-2 backdrop-blur-sm">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs text-gray-300">Luxury Rooms</div>
              </div>
              <div className="rounded-lg bg-black/50 px-4 py-2 backdrop-blur-sm">
                <div className="text-2xl font-bold">4★</div>
                <div className="text-xs text-gray-300">Rating</div>
              </div>
              <div className="rounded-lg bg-black/50 px-4 py-2 backdrop-blur-sm">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs text-gray-300">Service</div>
              </div>
            </div>
          </div>

          {/* Video Modal */}
          {isPlaying && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
              onClick={() => setIsPlaying(false)}
            >
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20"
                aria-label="Close video"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative aspect-video w-full max-w-5xl">
                <iframe
                  className="h-full w-full rounded-lg"
                  src="https://www.youtube.com/embed/WbZN2WvcKgY?autoplay=1"
                  title="End Glory Hotel Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {[
            { icon: '🏊', title: 'Rooftop Pool', description: 'Infinity pool with city views' },
            { icon: '🍽️', title: 'Fine Dining', description: 'Michelin-starred restaurant' },
            { icon: '💆', title: 'Luxury Spa', description: 'World-class treatments' },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white/5 p-6 text-center backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <div className="mb-4 text-5xl">{feature.icon}</div>
              <h3 className="mb-2 font-serif text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
