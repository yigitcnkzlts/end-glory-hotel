'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Testimonials() {
  const t = useTranslations('home')

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Business Executive',
      rating: 5,
      comment: 'Absolutely stunning hotel! The service was impeccable and the rooms were luxurious. Will definitely return.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
      location: 'New York, USA',
    },
    {
      name: 'Michael Chen',
      role: 'Travel Blogger',
      rating: 5,
      comment: 'One of the best hotels I have stayed at. The attention to detail and premium amenities exceeded all expectations.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
      location: 'Singapore',
    },
    {
      name: 'Emma Williams',
      role: 'Fashion Designer',
      rating: 5,
      comment: 'A perfect blend of luxury and comfort. The spa services were divine and the staff was incredibly attentive.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200',
      location: 'London, UK',
    },
    {
      name: 'David Martinez',
      role: 'Entrepreneur',
      rating: 5,
      comment: 'Exceptional experience from check-in to check-out. The rooftop pool and fine dining restaurant are must-tries!',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200',
      location: 'Madrid, Spain',
    },
  ]

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-serif text-4xl font-bold md:text-5xl">{t('testimonials')}</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Hear what our distinguished guests have to say about their experience
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="h-full rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                {/* Rating Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Comment */}
                <p className="mb-6 text-gray-700 italic leading-relaxed">"{item.comment}"</p>

                {/* Author */}
                <div className="flex items-center gap-4 border-t pt-6">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.role}</p>
                    <p className="text-xs text-gray-500">{item.location}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          color: #0284c7;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #0284c7;
        }
      `}</style>
    </section>
  )
}
