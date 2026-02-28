'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Link } from '@/i18n/routing'

export default function MeetingsPage() {
  const venues = [
    {
      name: 'Grand Ballroom',
      capacity: '200 people',
      size: '300 m²',
      description: 'Elegant ballroom perfect for large conferences, weddings, and gala events',
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c2b0?q=80&w=2098',
      features: ['Theater Setup', 'Banquet Setup', 'Stage', 'Sound System'],
    },
    {
      name: 'Executive Boardroom',
      capacity: '20 people',
      size: '60 m²',
      description: 'Intimate boardroom for executive meetings and presentations',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
      features: ['Conference Table', 'Video Conferencing', 'Whiteboard', 'Premium Seating'],
    },
    {
      name: 'Meeting Room A',
      capacity: '50 people',
      size: '80 m²',
      description: 'Versatile space for workshops, seminars, and team meetings',
      image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070',
      features: ['Flexible Layout', 'Projector', 'WiFi', 'Natural Light'],
    },
    {
      name: 'Meeting Room B',
      capacity: '30 people',
      size: '50 m²',
      description: 'Modern meeting space with state-of-the-art technology',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012',
      features: ['Smart Board', 'Video Wall', 'Breakout Area', 'Coffee Station'],
    },
  ]

  const services = [
    { icon: '📽️', title: 'AV Equipment', description: 'Latest projection and sound systems' },
    { icon: '☕', title: 'Catering', description: 'Customized menu options' },
    { icon: '📶', title: 'High-Speed WiFi', description: 'Dedicated business internet' },
    { icon: '🎤', title: 'Technical Support', description: '24/7 on-site assistance' },
    { icon: '🖨️', title: 'Business Services', description: 'Printing and copying' },
    { icon: '🚗', title: 'Valet Parking', description: 'Complimentary for attendees' },
  ]

  const layouts = [
    { name: 'Theater', capacity: '200', icon: '🎭' },
    { name: 'Classroom', capacity: '120', icon: '📚' },
    { name: 'Banquet', capacity: '150', icon: '🍽️' },
    { name: 'U-Shape', capacity: '40', icon: '🔄' },
    { name: 'Boardroom', capacity: '30', icon: '💼' },
    { name: 'Cocktail', capacity: '250', icon: '🍸' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069"
          alt="Meetings & Events"
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
            <h1 className="mb-4 font-serif text-6xl font-bold">Meetings & Events</h1>
            <p className="text-xl text-gray-200">
              Professional venues and exceptional service for unforgettable events
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 font-serif text-4xl font-bold">Our Venues</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Flexible spaces designed to accommodate events of all sizes
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {venues.map((venue, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="mb-1 font-serif text-3xl font-bold">{venue.name}</h3>
                    <div className="flex gap-4 text-sm">
                      <span>👥 {venue.capacity}</span>
                      <span>📐 {venue.size}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-gray-600">{venue.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {venue.features.map((feature, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 font-serif text-4xl font-bold">Event Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Everything you need for a successful event
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="rounded-2xl bg-white p-6 text-center shadow-lg transition-all hover:shadow-xl"
              >
                <div className="mb-4 text-5xl">{service.icon}</div>
                <h3 className="mb-2 font-serif text-xl font-bold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 font-serif text-4xl font-bold">Room Layouts</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Flexible configurations to suit your event needs
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {layouts.map((layout, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.6 }}
                className="rounded-2xl bg-white p-6 text-center shadow-lg"
              >
                <div className="mb-3 text-4xl">{layout.icon}</div>
                <h3 className="mb-1 font-semibold">{layout.name}</h3>
                <p className="text-sm text-gray-600">Up to {layout.capacity}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center text-white"
          >
            <h2 className="mb-4 font-serif text-4xl font-bold">Plan Your Event</h2>
            <p className="mb-8 text-lg text-primary-100">
              Our dedicated events team is ready to help you create an unforgettable experience. 
              Contact us for a customized proposal and venue tour.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary-600 transition-all hover:bg-gray-100 hover:shadow-lg"
              >
                Request Proposal
              </Link>
              <a
                href="tel:+902125550123"
                className="inline-block rounded-lg border-2 border-white bg-transparent px-8 py-3 font-semibold text-white transition-all hover:bg-white hover:text-primary-600"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
