# End Glory Hotel - Full Stack Web Application

Modern, SEO-friendly, multilingual (TR/EN) hotel website with booking system.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![Java](https://img.shields.io/badge/Java-17-orange)

## ⚠️ ÖNEMLİ: İlk Kurulum

**Projeyi çalıştırmadan önce mutlaka bağımlılıkları yükleyin:**

```bash
# Kök dizinden (önerilen)
npm run install:all

# Veya manuel
cd frontend && npm install
cd backend && mvn clean install
```

Bu adım TypeScript hatalarını çözecek ve projeyi çalıştırılabilir hale getirecektir.

**TypeScript hataları mı görüyorsunuz?** → [TYPESCRIPT_ERRORS.md](TYPESCRIPT_ERRORS.md)

📖 Detaylı kurulum için: [SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md)

## ✨ Özellikler

### Frontend
- ✅ Next.js 14 App Router
- ✅ TypeScript ile tip güvenliği
- ✅ TailwindCSS ile modern tasarım
- ✅ Çok dilli (TR/EN) next-intl ile
- ✅ Framer Motion animasyonlar
- ✅ Swiper.js slider
- ✅ React Hook Form + Zod validasyon
- ✅ SEO optimized (meta tags, sitemap, schema markup)
- ✅ Responsive design
- ✅ WebP image optimization
- ✅ Lazy loading

### Backend
- ✅ Spring Boot 3.2
- ✅ Spring Security + JWT
- ✅ JPA/Hibernate ORM
- ✅ PostgreSQL database
- ✅ Flyway migrations
- ✅ Swagger/OpenAPI documentation
- ✅ Email notifications
- ✅ RESTful API
- ✅ Input validation
- ✅ CORS configuration

### DevOps
- ✅ Docker & Docker Compose
- ✅ Nginx reverse proxy
- ✅ GitHub Actions CI/CD
- ✅ Production-ready Dockerfiles

## 🚀 Quick Start

### İlk Kurulum (Sadece Bir Kez)

```bash
# Tüm bağımlılıkları yükle
npm run install:all
```

### Docker ile (Önerilen)
```bash
npm run docker:up
```

### Manuel Çalıştırma

**Tek komutla (kök dizinden):**
```bash
# Frontend'i başlat
npm run dev

# Veya backend'i başlat
npm run dev:backend
```

**Klasörlere girerek:**
```bash
# Terminal 1 - Frontend
cd frontend
npm install
npm run dev

# Terminal 2 - Backend
cd backend
mvn spring-boot:run
```

Servisler:
- Frontend: http://localhost:3000
- Backend: http://localhost:8080
- Swagger: http://localhost:8080/swagger-ui.html

Detaylı kurulum için: [QUICKSTART.md](QUICKSTART.md)

## 📚 Dokümantasyon

| Dosya | Açıklama |
|-------|----------|
| **[START_HERE.md](START_HERE.md)** | 🎯 **İLK ÖNCE BURAYI OKUYUN** |
| [TYPESCRIPT_ERRORS.md](TYPESCRIPT_ERRORS.md) | ⚠️ TypeScript hataları hakkında |
| [SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md) | Adım adım kurulum |
| [INSTALLATION.md](INSTALLATION.md) | Detaylı kurulum rehberi |
| [QUICKSTART.md](QUICKSTART.md) | Hızlı başlangıç |
| [TROUBLESHOOTING.md](TROUBLESHOOTING.md) | Sorun giderme |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Production deployment |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Katkıda bulunma |
| [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) | Proje yapısı |
| [SUMMARY.md](SUMMARY.md) | Proje özeti |

## 🏗️ Proje Yapısı

```
end-glory-hotel/
├── frontend/          # Next.js application
├── backend/           # Spring Boot application
├── nginx/             # Nginx configuration
└── .github/           # CI/CD workflows
```

Detaylı yapı için: [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)

## 🎯 Sayfalar

- **Ana Sayfa** - Hero, öne çıkan odalar, hizmetler, yorumlar
- **Odalar** - Oda listesi, filtreleme, detay sayfası
- **Rezervasyon** - Tarih seçimi, form, email bildirimi
- **Hizmetler** - Havuz, spa, fitness, restoran
- **Restoran & Bar** - Menü, çalışma saatleri
- **Toplantı & Etkinlik** - Salon bilgileri, teklif formu
- **Galeri** - Kategori bazlı fotoğraflar
- **Konum** - Harita, ulaşım bilgileri
- **İletişim** - Form, telefon, email, WhatsApp
- **Hakkımızda** - Otel hikayesi, değerler
- **SSS** - Sık sorulan sorular
- **Politikalar** - KVKK, gizlilik, iptal koşulları

## 🔌 API Endpoints

### Rooms
- `GET /api/rooms` - Tüm odaları listele
- `GET /api/rooms/{id}` - Oda detayı
- `GET /api/rooms?featured=true` - Öne çıkan odalar
- `GET /api/rooms?minPrice=1000&maxPrice=2000` - Fiyat filtresi

### Bookings
- `POST /api/bookings` - Rezervasyon oluştur
- `GET /api/bookings/{id}` - Rezervasyon detayı

### Contact
- `POST /api/contact` - İletişim formu gönder

API dokümantasyonu: http://localhost:8080/swagger-ui.html

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.2 | React framework |
| TypeScript | 5.3 | Type safety |
| TailwindCSS | 3.4 | Styling |
| next-intl | 3.11 | Internationalization |
| Framer Motion | 11.0 | Animations |
| React Hook Form | 7.51 | Form handling |
| Zod | 3.22 | Validation |
| Axios | 1.6 | HTTP client |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| Spring Boot | 3.2 | Framework |
| Java | 17 | Language |
| PostgreSQL | 15 | Database |
| Flyway | - | Migrations |
| Spring Security | - | Authentication |
| JWT | 0.12 | Tokens |
| Swagger | 2.3 | API docs |
| Lombok | - | Boilerplate |

## 🔐 Environment Variables

### Backend (.env)
```env
DB_USERNAME=postgres
DB_PASSWORD=postgres
JWT_SECRET=your-secret-key
MAIL_HOST=smtp.gmail.com
MAIL_USERNAME=your-email
MAIL_PASSWORD=your-password
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```

## 🧪 Testing

### Frontend
```bash
npm run lint
npm run format
```

### Backend
```bash
mvn test
mvn verify
```

## 📦 Build & Deploy

### Development
```bash
# Frontend
npm run dev

# Backend
mvn spring-boot:run
```

### Production
```bash
# Docker
docker-compose up -d

# Manual
npm run build && npm start
mvn clean package && java -jar target/*.jar
```

Detaylı deployment: [DEPLOYMENT.md](DEPLOYMENT.md)

## 🤝 Contributing

Katkıda bulunmak için [CONTRIBUTING.md](CONTRIBUTING.md) dosyasını okuyun.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

End Glory Hotel Development Team

## 📞 İletişim

- Website: https://endgloryhotel.com
- Email: info@endgloryhotel.com
- Phone: +90 XXX XXX XX XX

---

Made with ❤️ by End Glory Hotel Team
