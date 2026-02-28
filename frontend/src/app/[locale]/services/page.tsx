'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ServicesPage() {
  const services = [
    {
      title: 'Infinity Pool',
      description: 'Rooftop infinity pool with breathtaking panoramic city views. Open year-round with heated water and poolside bar service.',
      icon: '🏊',
      image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=2070',
      features: ['Heated Pool', 'Poolside Bar', 'Cabanas', 'Towel Service'],
    },
    {
      title: 'Spa & Wellness',
      description: 'World-class spa offering rejuvenating treatments, massages, and holistic wellness programs by expert therapists.',
      icon: '💆',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070',
      features: ['Massage Therapy', 'Facial Treatments', 'Sauna & Steam', 'Aromatherapy'],
    },
    {
      title: 'Fitness Center',
      description: 'State-of-the-art 24/7 fitness center with modern equipment, personal trainers, and group fitness classes.',
      icon: '🏋️',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070',
      features: ['24/7 Access', 'Personal Trainers', 'Yoga Classes', 'Modern Equipment'],
    },
    {
      title: 'Fine Dining',
      description: 'Michelin-starred restaurant featuring international cuisine and locally sourced ingredients prepared by award-winning chefs.',
      icon: '🍽️',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070',
      features: ['Michelin Star', 'Wine Cellar', 'Private Dining', 'Chef\'s Table'],
    },
    {
      title: 'Business Center',
      description: 'Fully equipped business center with meeting rooms, high-speed internet, and professional support services.',
      icon: '💼',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
      features: ['Meeting Rooms', 'High-Speed WiFi', 'Printing Services', 'Video Conferencing'],
    },
    {
      title: 'Concierge Service',
      description: '24/7 premium concierge service to assist with reservations, tours, transportation, and special requests.',
      icon: '🎩',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075',
      features: ['24/7 Available', 'Tour Booking', 'Transportation', 'Event Planning'],
    },
    {
      title: 'Valet Parking',
      description: 'Complimentary valet parking service with secure underground parking and electric vehicle charging stations.',
      icon: '🚗',
      image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2074',
      features: ['Valet Service', 'Secure Parking', 'EV Charging', 'Car Wash'],
    },
    {
      title: 'Kids Club',
      description: 'Supervised kids club with fun activities, games, and entertainment for children aged 4-12 years.',
      icon: '🎨',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2086',
      features: ['Supervised Care', 'Activities', 'Play Area', 'Educational Games'],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 font-serif text-5xl font-bold">Our Services</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Experience world-class amenities and services designed for your ultimate comfort and convenience
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-6xl">{service.icon}</div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 font-serif text-2xl font-bold">{service.title}</h3>
                <p className="mb-4 text-gray-600 leading-relaxed">{service.description}</p>

                <div className="border-t pt-4">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 p-12 text-center text-white shadow-2xl"
        >
          <h2 className="mb-4 font-serif text-3xl font-bold">Need Something Special?</h2>
          <p className="mb-8 text-lg text-primary-100">
            Our concierge team is available 24/7 to assist with any special requests or arrangements
          </p>
          <a
            href="/contact"
            className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary-600 transition-all hover:bg-gray-100 hover:shadow-lg"
          >
            Contact Concierge
          </a>
        </motion.div>
      </div>
    </div>
  )
}
