'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Link } from '@/i18n/routing'

export default function SpecialOffers() {
  const t = useTranslations('home.offers')

  const offers = [
    {
      title: t('earlyBird.title'),
      discount: t('earlyBird.discount'),
      description: t('earlyBird.desc'),
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
      validUntil: t('earlyBird.valid'),
      badge: 'Limited Time',
    },
    {
      title: t('romantic.title'),
      discount: t('romantic.discount'),
      description: t('romantic.desc'),
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070',
      validUntil: t('romantic.valid'),
      badge: 'Popular',
    },
    {
      title: t('extended.title'),
      discount: t('extended.discount'),
      description: t('extended.desc'),
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070',
      validUntil: t('extended.valid'),
      badge: 'Best Value',
    },
  ]

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-block rounded-full bg-primary-100 px-6 py-2 text-sm font-semibold text-primary-700">
            🎁 {t('badge')}
          </div>
          <h2 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            {t('title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {t('desc')}
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {offers.map((offer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:shadow-2xl"
            >
              {/* Badge */}
              <div className="absolute right-4 top-4 z-10 rounded-full bg-red-500 px-4 py-1 text-xs font-bold text-white shadow-lg">
                {offer.badge}
              </div>

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Discount Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="rounded-xl bg-white px-6 py-3 shadow-lg">
                    <div className="text-3xl font-bold text-primary-600">
                      {offer.discount}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 font-serif text-2xl font-bold text-gray-900">
                  {offer.title}
                </h3>
                <p className="mb-4 text-gray-600 leading-relaxed">
                  {offer.description}
                </p>
                <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {offer.validUntil}
                </div>
                <Link
                  href="/booking"
                  className="block w-full rounded-lg bg-primary-600 py-3 text-center font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 overflow-hidden rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 p-8 text-center text-white shadow-2xl md:p-12"
        >
          <h3 className="mb-4 font-serif text-3xl font-bold">
            {t('cta.title')}
          </h3>
          <p className="mb-8 text-lg text-primary-100">
            {t('cta.desc')}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary-600 transition-all hover:bg-gray-100 hover:shadow-lg"
            >
              {t('cta.contact')}
            </Link>
            <a
              href="tel:+905551234567"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-transparent px-8 py-3 font-semibold text-white transition-all hover:bg-white hover:text-primary-600"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t('cta.call')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
