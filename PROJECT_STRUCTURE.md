# Project Structure

## 📁 Dizin Yapısı

```
end-glory-hotel/
├── frontend/                          # Next.js Frontend
│   ├── public/                        # Statik dosyalar
│   │   ├── robots.txt                 # SEO robots
│   │   └── manifest.json              # PWA manifest
│   ├── src/
│   │   ├── app/                       # Next.js App Router
│   │   │   ├── [locale]/             # Çok dilli sayfalar
│   │   │   │   ├── page.tsx          # Ana sayfa
│   │   │   │   ├── rooms/            # Odalar
│   │   │   │   ├── booking/          # Rezervasyon
│   │   │   │   ├── contact/          # İletişim
│   │   │   │   ├── services/         # Hizmetler
│   │   │   │   ├── restaurant/       # Restoran
│   │   │   │   ├── meetings/         # Toplantı
│   │   │   │   ├── gallery/          # Galeri
│   │   │   │   ├── location/         # Konum
│   │   │   │   ├── about/            # Hakkımızda
│   │   │   │   ├── faq/              # SSS
│   │   │   │   ├── policies/         # Politikalar
│   │   │   │   └── layout.tsx        # Locale layout
│   │   │   ├── layout.tsx            # Root layout
│   │   │   ├── globals.css           # Global styles
│   │   │   ├── robots.ts             # Dynamic robots
│   │   │   └── sitemap.ts            # Dynamic sitemap
│   │   ├── components/               # React bileşenleri
│   │   │   ├── layout/
│   │   │   │   ├── Header.tsx        # Navbar
│   │   │   │   └── Footer.tsx        # Footer
│   │   │   ├── home/
│   │   │   │   ├── Hero.tsx          # Hero section
│   │   │   │   ├── FeaturedRooms.tsx # Öne çıkan odalar
│   │   │   │   ├── Services.tsx      # Hizmetler
│   │   │   │   ├── Testimonials.tsx  # Yorumlar
│   │   │   │   └── LocationPreview.tsx # Konum önizleme
│   │   │   └── rooms/
│   │   │       ├── RoomCard.tsx      # Oda kartı
│   │   │       └── RoomFilters.tsx   # Filtreler
│   │   ├── lib/                      # Utilities
│   │   │   ├── api.ts                # Axios client
│   │   │   └── utils.ts              # Helper functions
│   │   ├── types/                    # TypeScript types
│   │   │   └── index.ts              # Type definitions
│   │   ├── messages/                 # i18n çevirileri
│   │   │   ├── tr.json               # Türkçe
│   │   │   └── en.json               # İngilizce
│   │   ├── i18n/
│   │   │   └── routing.ts            # i18n routing config
│   │   ├── i18n.ts                   # i18n setup
│   │   └── middleware.ts             # Next.js middleware
│   ├── .eslintrc.json                # ESLint config
│   ├── .prettierrc                   # Prettier config
│   ├── next.config.js                # Next.js config
│   ├── tailwind.config.ts            # Tailwind config
│   ├── tsconfig.json                 # TypeScript config
│   ├── package.json                  # Dependencies
│   ├── Dockerfile                    # Docker image
│   └── README.md                     # Frontend docs
│
├── backend/                          # Spring Boot Backend
│   ├── src/main/
│   │   ├── java/com/endglory/hotel/
│   │   │   ├── config/               # Konfigürasyonlar
│   │   │   │   ├── SecurityConfig.java
│   │   │   │   └── OpenApiConfig.java
│   │   │   ├── controller/           # REST Controllers
│   │   │   │   ├── RoomController.java
│   │   │   │   ├── BookingController.java
│   │   │   │   └── ContactController.java
│   │   │   ├── service/              # Business logic
│   │   │   │   ├── RoomService.java
│   │   │   │   ├── BookingService.java
│   │   │   │   ├── ContactService.java
│   │   │   │   └── EmailService.java
│   │   │   ├── repository/           # Data access
│   │   │   │   ├── RoomRepository.java
│   │   │   │   ├── BookingRepository.java
│   │   │   │   └── ContactMessageRepository.java
│   │   │   ├── model/                # JPA entities
│   │   │   │   ├── Room.java
│   │   │   │   ├── Booking.java
│   │   │   │   └── ContactMessage.java
│   │   │   ├── dto/                  # Data transfer objects
│   │   │   │   ├── BookingRequest.java
│   │   │   │   └── ContactRequest.java
│   │   │   └── HotelApplication.java # Main class
│   │   └── resources/
│   │       ├── application.yml       # App config
│   │       └── db/migration/         # Flyway migrations
│   │           ├── V1__Initial_schema.sql
│   │           └── V2__Sample_data.sql
│   ├── pom.xml                       # Maven dependencies
│   ├── Dockerfile                    # Docker image
│   ├── .gitignore                    # Git ignore
│   ├── .env.example                  # Environment template
│   └── README.md                     # Backend docs
│
├── nginx/                            # Nginx config
│   └── nginx.conf                    # Reverse proxy
│
├── .github/                          # GitHub Actions
│   └── workflows/
│       └── deploy.yml                # CI/CD pipeline
│
├── docker-compose.yml                # Multi-container setup
├── .gitignore                        # Global git ignore
├── README.md                         # Main documentation
├── QUICKSTART.md                     # Quick start guide
├── DEPLOYMENT.md                     # Deployment guide
├── CONTRIBUTING.md                   # Contributing guide
├── PROJECT_STRUCTURE.md              # This file
└── LICENSE                           # MIT License
```

## 🎯 Modül Açıklamaları

### Frontend Modülleri

**Pages (Sayfalar):**
- `[locale]/page.tsx` - Ana sayfa (Hero, Rooms, Services, Testimonials)
- `rooms/` - Oda listesi ve detay sayfaları
- `booking/` - Rezervasyon formu
- `contact/` - İletişim formu
- `services/` - Hizmetler listesi
- `restaurant/` - Restoran bilgileri
- `meetings/` - Toplantı salonları
- `gallery/` - Fotoğraf galerisi
- `location/` - Konum ve ulaşım
- `about/` - Hakkımızda
- `faq/` - Sık sorulan sorular
- `policies/` - KVKK, gizlilik, iptal politikaları

**Components:**
- `layout/` - Header, Footer
- `home/` - Ana sayfa bileşenleri
- `rooms/` - Oda kartları ve filtreler

**Libraries:**
- `api.ts` - Axios HTTP client
- `utils.ts` - Yardımcı fonksiyonlar
- `routing.ts` - i18n routing

### Backend Modülleri

**Controllers:**
- `RoomController` - Oda CRUD işlemleri
- `BookingController` - Rezervasyon yönetimi
- `ContactController` - İletişim formu

**Services:**
- `RoomService` - Oda business logic
- `BookingService` - Rezervasyon logic
- `EmailService` - Email bildirimleri

**Repositories:**
- JPA repositories (CRUD + custom queries)

**Models:**
- `Room` - Oda entity
- `Booking` - Rezervasyon entity
- `ContactMessage` - İletişim mesajı entity

## 🔧 Konfigürasyon Dosyaları

- `next.config.js` - Next.js ayarları
- `tailwind.config.ts` - Tailwind CSS
- `tsconfig.json` - TypeScript
- `application.yml` - Spring Boot
- `pom.xml` - Maven dependencies
- `docker-compose.yml` - Multi-container setup

## 📦 Önemli Paketler

### Frontend
- Next.js 14 - React framework
- TypeScript - Type safety
- TailwindCSS - Styling
- next-intl - i18n
- Framer Motion - Animations
- React Hook Form - Forms
- Zod - Validation
- Axios - HTTP client

### Backend
- Spring Boot 3.2 - Framework
- Spring Security - Authentication
- JPA/Hibernate - ORM
- PostgreSQL - Database
- Flyway - Migrations
- Swagger - API docs
- Lombok - Boilerplate reduction
