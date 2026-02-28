'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  const values = [
    {
      icon: '🏆',
      title: 'Excellence',
      description: 'Committed to delivering exceptional service and unforgettable experiences',
    },
    {
      icon: '💎',
      title: 'Luxury',
      description: 'Premium amenities and world-class facilities for discerning guests',
    },
    {
      icon: '🌿',
      title: 'Sustainability',
      description: 'Eco-friendly practices and responsible tourism initiatives',
    },
    {
      icon: '🤝',
      title: 'Hospitality',
      description: 'Warm, personalized service that makes every guest feel at home',
    },
  ]

  const milestones = [
    { year: '2015', event: 'Hotel Opening' },
    { year: '2017', event: 'Michelin Star Award' },
    { year: '2019', event: 'Spa Excellence Award' },
    { year: '2021', event: 'Sustainability Certification' },
    { year: '2023', event: '4-Star Luxury Rating' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070"
          alt="About Us"
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
            <h1 className="mb-4 font-serif text-6xl font-bold">About Us</h1>
            <p className="text-xl text-gray-200">
              Where luxury meets exceptional hospitality
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 font-serif text-4xl font-bold">Our Story</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                <p>
                  End Glory Hotel was founded with a vision to create an unparalleled luxury experience 
                  that combines world-class amenities with warm, personalized hospitality.
                </p>
                <p>
                  Since opening our doors, we have been dedicated to exceeding the expectations of our 
                  distinguished guests, offering them a sanctuary of comfort and elegance in the heart 
                  of the city.
                </p>
                <p>
                  Our commitment to excellence has earned us numerous accolades, including a Michelin 
                  star for our restaurant and recognition as one of the finest luxury hotels in the region.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075"
                  alt="Hotel Lobby"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 rounded-2xl bg-primary-600 p-8 text-white shadow-xl">
                <div className="text-5xl font-bold">8+</div>
                <div className="text-sm uppercase tracking-wider">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 font-serif text-4xl font-bold">Our Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="rounded-2xl bg-white p-8 text-center shadow-lg transition-all hover:shadow-xl"
              >
                <div className="mb-4 text-6xl">{value.icon}</div>
                <h3 className="mb-3 font-serif text-2xl font-bold">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 font-serif text-4xl font-bold">Our Journey</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Milestones that define our commitment to excellence
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary-200" />
            
            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center gap-8 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block rounded-2xl bg-white p-6 shadow-lg">
                      <div className="mb-2 text-3xl font-bold text-primary-600">{milestone.year}</div>
                      <div className="text-lg font-semibold text-gray-900">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="relative z-10 h-4 w-4 rounded-full bg-primary-600 ring-4 ring-white" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-20 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="mb-6 font-serif text-4xl font-bold">Our Vision</h2>
            <p className="text-xl leading-relaxed text-primary-100">
              To be recognized as the premier luxury hotel destination, setting new standards in 
              hospitality excellence while maintaining our commitment to sustainability and creating 
              unforgettable experiences for every guest who walks through our doors.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
