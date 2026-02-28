'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Awards() {
  const t = useTranslations('home.awards')

  const awards = [
    {
      year: '2023',
      title: 'Best Luxury Hotel',
      organization: 'World Travel Awards',
      icon: '🏆',
    },
    {
      year: '2023',
      title: 'Michelin Star',
      organization: 'Michelin Guide',
      icon: '⭐',
    },
    {
      year: '2022',
      title: 'Excellence Award',
      organization: 'TripAdvisor',
      icon: '🎖️',
    },
    {
      year: '2022',
      title: 'Green Hotel',
      organization: 'Eco Tourism',
      icon: '🌿',
    },
  ]

  const stats = [
    { number: '500+', label: t('stats.rooms'), icon: '🛏️' },
    { number: '98%', label: t('stats.satisfaction'), icon: '😊' },
    { number: '50+', label: t('stats.countries'), icon: '🌍' },
    { number: '24/7', label: t('stats.concierge'), icon: '🎩' },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group text-center"
              >
                <div className="mb-4 text-6xl">{stat.icon}</div>
                <div className="mb-2 font-serif text-5xl font-bold text-white transition-all group-hover:scale-110">
                  {stat.number}
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">
            {t('title')}
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg text-gray-400">
            {t('desc')}
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {awards.map((award, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-sm transition-all hover:from-white/15 hover:to-white/10 hover:shadow-2xl"
              >
                <div className="absolute right-4 top-4 text-6xl opacity-10 transition-all group-hover:scale-125 group-hover:opacity-20">
                  {award.icon}
                </div>
                <div className="relative">
                  <div className="mb-4 text-5xl">{award.icon}</div>
                  <div className="mb-2 text-sm font-semibold text-primary-400">
                    {award.year}
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-bold text-white">
                    {award.title}
                  </h3>
                  <p className="text-sm text-gray-400">{award.organization}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
