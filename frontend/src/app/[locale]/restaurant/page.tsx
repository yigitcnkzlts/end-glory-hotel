'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Link } from '@/i18n/routing'

export default function RestaurantPage() {
  const menuCategories = [
    {
      name: 'Breakfast',
      time: '07:00 - 10:30',
      description: 'International buffet with fresh pastries, fruits, and hot dishes',
      image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2070',
    },
    {
      name: 'Lunch',
      time: '12:00 - 15:00',
      description: 'À la carte menu featuring Mediterranean and international cuisine',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080',
    },
    {
      name: 'Dinner',
      time: '18:00 - 22:30',
      description: 'Fine dining experience with chef\'s special tasting menu',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074',
    },
  ]

  const specialties = [
    { name: 'Wagyu Beef Steak', price: '$85', icon: '🥩' },
    { name: 'Fresh Lobster', price: '$95', icon: '🦞' },
    { name: 'Truffle Risotto', price: '$45', icon: '🍚' },
    { name: 'Chef\'s Tasting Menu', price: '$120', icon: '👨‍🍳' },
  ]

  const bars = [
    {
      name: 'Rooftop Bar',
      description: 'Signature cocktails with panoramic city views',
      hours: '17:00 - 02:00',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074',
    },
    {
      name: 'Lobby Lounge',
      description: 'Afternoon tea and premium spirits',
      hours: '10:00 - 23:00',
      image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=2074',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
          alt="Restaurant"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="container-custom relative z-10 flex h-full items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="mb-4 font-serif text-6xl font-bold">Restaurant & Bar</h1>
            <p className="text-xl text-gray-200">
              Michelin-starred dining experience featuring world-class cuisine and exceptional service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dining Times */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 font-serif text-4xl font-bold">Dining Hours</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Experience culinary excellence throughout the day
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {menuCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="mb-1 font-serif text-3xl font-bold">{category.name}</h3>
                    <p className="text-sm text-gray-200">{category.time}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 font-serif text-4xl font-bold">Chef's Specialties</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Signature dishes crafted by our award-winning culinary team
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {specialties.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="rounded-2xl bg-white p-8 text-center shadow-lg transition-all hover:shadow-xl"
              >
                <div className="mb-4 text-6xl">{item.icon}</div>
                <h3 className="mb-2 font-serif text-xl font-bold">{item.name}</h3>
                <p className="text-2xl font-bold text-primary-600">{item.price}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <a
              href="/menu.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-8 py-3 font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Full Menu (PDF)
            </a>
          </motion.div>
        </div>
      </section>

      {/* Bars */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 font-serif text-4xl font-bold">Bars & Lounges</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Unwind with premium cocktails and spirits in our elegant settings
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {bars.map((bar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={bar.image}
                    alt={bar.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="mb-2 font-serif text-3xl font-bold">{bar.name}</h3>
                  <p className="mb-4 text-gray-600">{bar.description}</p>
                  <div className="flex items-center gap-2 text-primary-600">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">{bar.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-16">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 font-serif text-4xl font-bold">Reserve Your Table</h2>
            <p className="mb-8 text-lg text-primary-100">
              Experience unforgettable dining. Book your table today.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary-600 transition-all hover:bg-gray-100 hover:shadow-lg"
            >
              Make a Reservation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
