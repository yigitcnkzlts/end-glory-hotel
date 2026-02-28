'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LocationPage() {
  const transportation = [
    { icon: '✈️', name: 'Airport', distance: '15 km', time: '20 minutes' },
    { icon: '🚌', name: 'Bus Terminal', distance: '5 km', time: '10 minutes' },
    { icon: '🚂', name: 'Train Station', distance: '3 km', time: '8 minutes' },
    { icon: '🚕', name: 'Taxi Stand', distance: '100 m', time: '1 minute' },
  ]

  const nearbyPlaces = [
    { icon: '🏛️', name: 'National Museum', distance: '2 km', image: 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3b7?q=80&w=2070' },
    { icon: '🏖️', name: 'Beach', distance: '5 km', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073' },
    { icon: '🛍️', name: 'Shopping Mall', distance: '1 km', image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070' },
    { icon: '🏥', name: 'Hospital', distance: '3 km', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053' },
    { icon: '🍽️', name: 'Restaurant District', distance: '500 m', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070' },
    { icon: '🎭', name: 'Theater', distance: '1.5 km', image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=2071' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2088"
          alt="Location"
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
            <h1 className="mb-4 font-serif text-6xl font-bold">Our Location</h1>
            <p className="text-xl text-gray-200">
              Perfectly positioned in the heart of the city
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div className="aspect-video bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093703!2d144.9537353153167!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                />
              </div>
            </div>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <h2 className="mb-6 font-serif text-3xl font-bold">Address</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p className="flex items-start gap-3">
                  <svg className="mt-1 h-6 w-6 flex-shrink-0 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                    123 Luxury Avenue<br />
                    Downtown District<br />
                    City Center, 12345<br />
                    Turkey
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+90 (212) 555-0123</span>
                </p>
                <p className="flex items-center gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@endgloryhotel.com</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <h2 className="mb-6 font-serif text-3xl font-bold">Transportation</h2>
              <div className="space-y-4">
                {transportation.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <div className="font-semibold text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-600">{item.distance}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-primary-600">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nearby Places */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 font-serif text-4xl font-bold">Nearby Attractions</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Explore the best of the city from our prime location
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {nearbyPlaces.map((place, idx) => (
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
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="mb-2 text-4xl">{place.icon}</div>
                    <h3 className="mb-1 font-serif text-2xl font-bold">{place.name}</h3>
                    <p className="text-sm text-gray-200">{place.distance} away</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
