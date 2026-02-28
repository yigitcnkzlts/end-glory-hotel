'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Experience() {
  const t = useTranslations('home.experience')

  const experiences = [
    {
      title: t('culinary.title'),
      description: t('culinary.desc'),
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070',
      icon: '👨‍🍳',
    },
    {
      title: t('wellness.title'),
      description: t('wellness.desc'),
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070',
      icon: '🧘',
    },
    {
      title: t('pool.title'),
      description: t('pool.desc'),
      image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=2070',
      icon: '🏊',
    },
  ]

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            {t('title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {t('desc')}
          </p>
        </motion.div>

        <div className="space-y-24">
          {experiences.map((experience, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${
                idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl"
                >
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Floating Icon */}
                  <div className="absolute left-8 top-8 rounded-2xl bg-white p-4 shadow-xl">
                    <span className="text-4xl">{experience.icon}</span>
                  </div>
                </motion.div>

                {/* Decorative Element */}
                <div className={`absolute -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 ${
                  idx % 2 === 0 ? '-right-8 -top-8' : '-left-8 -top-8'
                }`} />
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-center ${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="mb-4 inline-block rounded-full bg-primary-100 px-6 py-2">
                    <span className="text-2xl">{experience.icon}</span>
                  </div>
                  <h3 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
                    {experience.title}
                  </h3>
                  <p className="mb-8 text-lg leading-relaxed text-gray-600">
                    {experience.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    {[t('features.quality'), t('features.staff'), t('features.service')].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100">
                          <svg className="h-4 w-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
