'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Services() {
  const t = useTranslations('home')

  const services = [
    {
      icon: '🏊',
      title: 'Infinity Pool',
      description: 'Rooftop infinity pool with stunning panoramic views',
      image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=2070',
    },
    {
      icon: '🍽️',
      title: 'Fine Dining',
      description: 'Michelin-starred restaurant with international cuisine',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070',
    },
    {
      icon: '💆',
      title: 'Luxury Spa',
      description: 'World-class spa treatments and wellness programs',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070',
    },
    {
      icon: '🏋️',
      title: 'Fitness Center',
      description: 'State-of-the-art gym with personal trainers',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070',
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-serif text-4xl font-bold md:text-5xl">{t('services')}</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Indulge in our premium amenities designed for your ultimate comfort
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <div className="mb-4 text-6xl">{service.icon}</div>
                  <h3 className="mb-3 font-serif text-2xl font-bold">{service.title}</h3>
                  <p className="text-sm text-gray-200">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
