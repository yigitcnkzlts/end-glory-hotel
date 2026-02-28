'use client'

import { useState } from 'react'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Check-in ve check-out saatleri nedir?',
      answer: 'Check-in 14:00, check-out 12:00 saatlerindedir.',
    },
    {
      question: 'Ücretsiz otopark var mı?',
      answer: 'Evet, misafirlerimiz için ücretsiz kapalı otopark hizmeti sunuyoruz.',
    },
    {
      question: 'Evcil hayvan kabul ediliyor mu?',
      answer: 'Küçük boy evcil hayvanlar için özel odalarımız mevcuttur. Rezervasyon sırasında belirtmeniz gerekmektedir.',
    },
    {
      question: 'WiFi ücretsiz mi?',
      answer: 'Evet, tüm otel genelinde ücretsiz yüksek hızlı WiFi hizmeti sunulmaktadır.',
    },
    {
      question: 'Havalimanı transferi var mı?',
      answer: 'Ücretli havalimanı transfer hizmeti sunuyoruz. Rezervasyon sırasında talep edebilirsiniz.',
    },
  ]

  return (
    <div className="container-custom py-16">
      <h1 className="mb-8 font-serif text-4xl font-bold">Sık Sorulan Sorular</h1>

      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="rounded-lg border bg-white">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <span className="font-semibold">{faq.question}</span>
              <span className="text-2xl">{openIndex === idx ? '−' : '+'}</span>
            </button>
            {openIndex === idx && (
              <div className="border-t px-6 py-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
