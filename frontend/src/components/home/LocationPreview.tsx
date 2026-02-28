'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LocationPreview() {
  const t = useTranslations('home')

  const highlights = [
    { icon: '✈️', text: '15 min to Airport' },
    { icon: '🏛️', text: 'City Center Location' },
    { icon: '🛍️', text: 'Shopping District' },
    { icon: '🎭', text: 'Cultural Attractions' },
  ]

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-serif text-4xl font-bold md:text-5xl">{t('location')}</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Perfectly situated in the heart of the city with easy access to all major attractions
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2088"
                alt="Hotel Location"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="mb-2 font-serif text-3xl font-bold">Prime Location</h3>
              <p className="text-gray-200">Experience the best of the city from our doorstep</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-6 font-serif text-3xl font-bold">Central Location</h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              Located in the heart of the city, our hotel offers unparalleled access to business districts, 
              shopping centers, cultural landmarks, and entertainment venues. Experience the perfect blend 
              of convenience and luxury.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-md"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span className="font-medium text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <Link 
              href="/location" 
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary-600 px-8 py-3 font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg"
            >
              View Detailed Location
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
