# 🏨 End Glory Hotel - Premium 4-Star Hotel Website

Modern, lüks ve tam özellikli otel web sitesi. Next.js 14 + Spring Boot ile geliştirildi.

## ✨ Özellikler

### Frontend
- ⚡ Next.js 14 (App Router)
- 🎨 TailwindCSS + Framer Motion
- 🌍 TR/EN Dil Desteği (next-intl)
- 📱 Tam Responsive Design
- 🔍 SEO Optimize
- ♿ Accessibility Compliant

### Backend
- 🚀 Spring Boot 3.x
- 🗄️ PostgreSQL Database
- 🔐 JWT Authentication
- 📧 Email Service
- 📚 Swagger/OpenAPI Documentation
- 🐳 Docker Ready

## 📄 Sayfalar (13 Sayfa)

1. **Ana Sayfa** - Hero, Awards, Rooms, Experience, Services, Offers, Video, Testimonials, Location, Instagram
2. **Odalar** - Oda listesi ve filtreleme
3. **Oda Detay** - Her oda için detaylı sayfa
4. **Rezervasyon** - Online rezervasyon formu
5. **Galeri** - 16 görsel, kategori filtreleri, lightbox
6. **Hizmetler** - 8 hizmet detaylı
7. **Restoran & Bar** - Menü, şef özel yemekleri
8. **Toplantı & Etkinlik** - 4 salon, 6 hizmet, 6 düzen
9. **Konum** - İnteraktif harita, ulaşım
10. **İletişim** - Form, harita, bilgiler
11. **Hakkımızda** - Hikaye, değerler, timeline
12. **SSS** - Sık sorulan sorular
13. **Politikalar** - Otel politikaları

## 🚀 Hızlı Başlangıç

### Frontend

```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev
```

http://localhost:3000 adresinde çalışacaktır.

### Backend

```bash
cd backend
# PostgreSQL'i başlat (Docker ile)
docker run -d -p 5432:5432 -e POSTGRES_DB=hotel -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres postgres:15

# Backend'i çalıştır
./mvnw spring-boot:run
```

http://localhost:8080 adresinde çalışacaktır.

### Docker ile Tüm Stack

```bash
docker-compose up -d
```

- Frontend: http://localhost:3000
- Backend: http://localhost:8080
- Swagger: http://localhost:8080/swagger-ui.html

## 📚 Dokümantasyon

- **DEMO_GUIDE.md** - Detaylı demo sunum rehberi
- **COMPARISON_REPORT.md** - Mevcut site vs yeni proje karşılaştırması
- **VERCEL_DEPLOYMENT_GUIDE.md** - Vercel deployment rehberi

## 🛠️ Teknolojiler

### Frontend
- Next.js 14
- TypeScript
- TailwindCSS
- Framer Motion
- next-intl
- React Hook Form + Zod
- Axios
- Swiper.js

### Backend
- Spring Boot 3.x
- Spring Security + JWT
- Spring Data JPA
- PostgreSQL
- Flyway Migration
- JavaMail
- Swagger/OpenAPI

### DevOps
- Docker + Docker Compose
- GitHub Actions
- Nginx (Reverse Proxy)
- Vercel (Frontend)

## 📊 Proje İstatistikleri

```
📄 Sayfa: 13
🎨 Animasyon: 50+
🌍 Dil: 2 (TR/EN)
📱 Responsive: ✅
🔍 SEO: ✅
⚡ Hız: <3s
💾 Backend: ✅
🗄️ Database: ✅
🔐 Auth: ✅
📧 Email: ✅
🐳 Docker: ✅

Kod Satırı: 15,000+
Component: 50+
API Endpoint: 10+
```

## 🎯 Öne Çıkan Özellikler

- ✅ Full-screen hero section
- ✅ 50+ smooth animasyon
- ✅ Online rezervasyon sistemi
- ✅ TR/EN dil değiştirme
- ✅ Instagram feed entegrasyonu
- ✅ Video tanıtım modal
- ✅ Müşteri yorumları slider
- ✅ İnteraktif harita
- ✅ Lightbox galeri
- ✅ Form validation
- ✅ Email notifications
- ✅ JWT authentication
- ✅ Swagger API documentation

## 📱 Responsive Design

- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🔐 Güvenlik

- JWT Authentication
- Password encryption (BCrypt)
- CORS configuration
- SQL injection prevention
- XSS protection

## 📧 İletişim

- Email: info@endgloryhotel.com
- Phone: +90 555 123 45 67
- Website: https://endglory.com.tr

## 📝 Lisans

MIT License

---

**Geliştirici:** [Your Name]
**Tarih:** 2024
**Versiyon:** 1.0.0
