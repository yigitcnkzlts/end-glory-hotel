import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const locales = ['tr', 'en']

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  )
}
