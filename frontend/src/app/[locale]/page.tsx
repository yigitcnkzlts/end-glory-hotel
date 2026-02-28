import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Hero from '@/components/home/Hero'
import FeaturedRooms from '@/components/home/FeaturedRooms'
import Services from '@/components/home/Services'
import Experience from '@/components/home/Experience'
import SpecialOffers from '@/components/home/SpecialOffers'
import Testimonials from '@/components/home/Testimonials'
import VideoSection from '@/components/home/VideoSection'
import Awards from '@/components/home/Awards'
import LocationPreview from '@/components/home/LocationPreview'
import InstagramFeed from '@/components/home/InstagramFeed'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'home.hero' })

  return {
    title: t('title'),
    description: t('subtitle'),
    openGraph: {
      title: t('title'),
      description: t('subtitle'),
      type: 'website',
      locale: locale,
    },
  }
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <FeaturedRooms />
      <Experience />
      <Services />
      <SpecialOffers />
      <VideoSection />
      <Testimonials />
      <LocationPreview />
      <InstagramFeed />
    </>
  )
}
