# End Glory Hotel - Frontend

Next.js 14 tabanlı modern otel web sitesi.

## ⚠️ İlk Kurulum

**ÖNEMLİ:** Projeyi çalıştırmadan önce bağımlılıkları yükleyin:

```bash
npm install
```

Bu komut tüm TypeScript hatalarını çözecektir.

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Environment dosyası oluştur
cp .env.local.example .env.local

# Development server'ı başlat
npm run dev
```

http://localhost:3000 adresinde çalışacaktır.

## Build

```bash
# Production build
npm run build

# Production server
npm start
```

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Production server
npm run lint     # ESLint kontrolü
npm run format   # Prettier formatla
```

## Özellikler

- ✅ Next.js 14 App Router
- ✅ TypeScript
- ✅ TailwindCSS
- ✅ next-intl (TR/EN)
- ✅ Framer Motion
- ✅ React Hook Form + Zod
- ✅ SEO optimized

## Sayfalar

- Ana Sayfa (/)
- Odalar (/rooms)
- Oda Detay (/rooms/[id])
- Rezervasyon (/booking)
- Hizmetler (/services)
- Restoran & Bar (/restaurant)
- Toplantı & Etkinlik (/meetings)
- Galeri (/gallery)
- Konum (/location)
- İletişim (/contact)
- Hakkımızda (/about)
- SSS (/faq)
- Politikalar (/policies)

## Dizin Yapısı

```
src/
├── app/              # Next.js App Router
│   ├── [locale]/    # Çok dilli sayfalar
│   ├── layout.tsx   # Root layout
│   └── globals.css  # Global styles
├── components/       # React bileşenleri
│   ├── layout/      # Header, Footer
│   ├── home/        # Ana sayfa bileşenleri
│   └── rooms/       # Oda bileşenleri
├── lib/             # Utilities
│   ├── api.ts       # Axios client
│   └── utils.ts     # Helper functions
├── types/           # TypeScript types
├── messages/        # i18n çevirileri
├── i18n/            # i18n config
└── middleware.ts    # Next.js middleware
```

## Environment Variables

`.env.local` dosyası:
```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```

## Sorun Giderme

### "Cannot find module" Hatası

```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 Kullanımda

```bash
# Farklı port kullan
PORT=3001 npm run dev
```

### Build Hatası

```bash
rm -rf .next
npm run build
```

## Daha Fazla Bilgi

- [Ana README](../README.md)
- [Kurulum Rehberi](../INSTALLATION.md)
- [Sorun Giderme](../TROUBLESHOOTING.md)
