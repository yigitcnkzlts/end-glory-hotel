# Quick Start Guide

## 🚀 Hızlı Başlangıç

### 1. Gereksinimler
- Node.js 20+
- Java 17+
- PostgreSQL 15+ (veya Docker)

### 2. Kurulum

#### Option A: Docker ile (Önerilen)
```bash
# Tüm servisleri başlat
docker-compose up -d

# Tarayıcıda aç
# Frontend: http://localhost:3000
# Backend API: http://localhost:8080
# Swagger: http://localhost:8080/swagger-ui.html
```

#### Option B: Manuel Kurulum

**Backend:**
```bash
cd backend

# PostgreSQL veritabanı oluştur
createdb hotel_db

# Environment dosyası oluştur
cp .env.example .env

# Uygulamayı çalıştır
mvn spring-boot:run
```

**Frontend:**
```bash
cd frontend

# Bağımlılıkları yükle
npm install

# Environment dosyası oluştur
cp .env.local.example .env.local

# Development server'ı başlat
npm run dev
```

### 3. İlk Kullanım

1. Frontend'e git: http://localhost:3000
2. Dil seçimi yap (TR/EN)
3. Odaları incele
4. Test rezervasyonu yap

### 4. API Testi

Swagger UI ile API'yi test et:
http://localhost:8080/swagger-ui.html

Örnek API çağrıları:
```bash
# Tüm odaları listele
curl http://localhost:8080/api/rooms

# Oda detayı
curl http://localhost:8080/api/rooms/1

# Rezervasyon oluştur
curl -X POST http://localhost:8080/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "roomId": 1,
    "checkIn": "2024-12-01",
    "checkOut": "2024-12-05",
    "guests": 2,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "+905551234567"
  }'
```

### 5. Varsayılan Veriler

Uygulama başladığında otomatik olarak örnek odalar eklenir:
- Deluxe Room (1500 TRY/gece)
- Suite Room (2500 TRY/gece)
- Standard Room (1000 TRY/gece)

### 6. Sorun Giderme

**Port çakışması:**
```bash
# Kullanılan portları kontrol et
lsof -i :3000
lsof -i :8080
```

**Database bağlantı hatası:**
```bash
# PostgreSQL'in çalıştığını kontrol et
pg_isready

# Docker ile PostgreSQL başlat
docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres:15
```

**Frontend build hatası:**
```bash
# node_modules'ü temizle ve yeniden yükle
rm -rf node_modules package-lock.json
npm install
```

### 7. Geliştirme İpuçları

- Hot reload aktif, değişiklikler otomatik yansır
- Backend değişikliklerinde Spring Boot DevTools otomatik restart yapar
- Frontend'de Tailwind CSS değişiklikleri anında görünür
- ESLint ve Prettier otomatik format için yapılandırılmış

### 8. Production Build

```bash
# Frontend
cd frontend
npm run build
npm start

# Backend
cd backend
mvn clean package
java -jar target/hotel-backend-1.0.0.jar
```

## 📚 Daha Fazla Bilgi

- [README.md](README.md) - Detaylı proje dokümantasyonu
- [DEPLOYMENT.md](DEPLOYMENT.md) - Production deployment rehberi
- [CONTRIBUTING.md](CONTRIBUTING.md) - Katkıda bulunma rehberi
