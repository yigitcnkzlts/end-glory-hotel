# Installation Guide

## Sistem Gereksinimleri

### Yazılım Gereksinimleri
- **Node.js**: 20.x veya üzeri
- **Java**: 17 veya üzeri (JDK)
- **Maven**: 3.9.x veya üzeri
- **PostgreSQL**: 15.x veya üzeri
- **Docker**: 24.x veya üzeri (opsiyonel)
- **Docker Compose**: 2.x veya üzeri (opsiyonel)
- **Git**: 2.x veya üzeri

### Donanım Gereksinimleri
- **RAM**: Minimum 4GB (8GB önerilir)
- **Disk**: Minimum 2GB boş alan
- **İşlemci**: 2 core veya üzeri

## Kurulum Adımları

### 1. Projeyi Klonlayın

```bash
git clone https://github.com/your-username/end-glory-hotel.git
cd end-glory-hotel
```

### 2. Backend Kurulumu

#### PostgreSQL Veritabanı Oluşturma

**Windows (PowerShell):**
```powershell
# PostgreSQL'e bağlan
psql -U postgres

# Veritabanı oluştur
CREATE DATABASE hotel_db;

# Çıkış
\q
```

**Linux/Mac:**
```bash
# PostgreSQL'e bağlan
sudo -u postgres psql

# Veritabanı oluştur
CREATE DATABASE hotel_db;

# Çıkış
\q
```

#### Environment Dosyası Oluşturma

```bash
cd backend
cp .env.example .env
```

`.env` dosyasını düzenleyin:
```env
DB_USERNAME=postgres
DB_PASSWORD=your_password
JWT_SECRET=your-secret-key-min-32-characters-long
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
```

#### Backend'i Çalıştırma

**Maven ile:**
```bash
# Bağımlılıkları yükle ve çalıştır
mvn clean install
mvn spring-boot:run
```

**JAR ile:**
```bash
# Build
mvn clean package

# Çalıştır
java -jar target/hotel-backend-1.0.0.jar
```

Backend şu adreste çalışacak: http://localhost:8080

Swagger UI: http://localhost:8080/swagger-ui.html

### 3. Frontend Kurulumu

#### Environment Dosyası Oluşturma

```bash
cd frontend
cp .env.local.example .env.local
```

`.env.local` dosyasını kontrol edin:
```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```

#### Bağımlılıkları Yükleme

```bash
# npm ile
npm install

# veya yarn ile
yarn install

# veya pnpm ile
pnpm install
```

#### Frontend'i Çalıştırma

```bash
# Development mode
npm run dev

# veya
yarn dev

# veya
pnpm dev
```

Frontend şu adreste çalışacak: http://localhost:3000

### 4. Docker ile Kurulum (Alternatif)

Tüm servisleri Docker ile çalıştırmak için:

```bash
# Tüm servisleri başlat
docker-compose up -d

# Logları izle
docker-compose logs -f

# Servisleri durdur
docker-compose down
```

Servisler:
- Frontend: http://localhost:3000
- Backend: http://localhost:8080
- PostgreSQL: localhost:5432
- Nginx: http://localhost

## Kurulum Sonrası Kontroller

### 1. Backend Kontrolü

```bash
# Health check
curl http://localhost:8080/actuator/health

# Odaları listele
curl http://localhost:8080/api/rooms
```

### 2. Frontend Kontrolü

Tarayıcıda http://localhost:3000 adresini açın ve:
- Ana sayfa yükleniyor mu?
- Dil değiştirme çalışıyor mu?
- Odalar sayfası açılıyor mu?

### 3. Database Kontrolü

```bash
# PostgreSQL'e bağlan
psql -U postgres -d hotel_db

# Tabloları listele
\dt

# Örnek veriyi kontrol et
SELECT * FROM rooms;

# Çıkış
\q
```

## Sorun Giderme

### Port Çakışması

**Windows:**
```powershell
# Port 3000'i kullanan process'i bul
netstat -ano | findstr :3000

# Process'i sonlandır (PID ile)
taskkill /PID <PID> /F
```

**Linux/Mac:**
```bash
# Port 3000'i kullanan process'i bul
lsof -i :3000

# Process'i sonlandır
kill -9 <PID>
```

### PostgreSQL Bağlantı Hatası

1. PostgreSQL servisinin çalıştığını kontrol edin:
```bash
# Windows
sc query postgresql-x64-15

# Linux
sudo systemctl status postgresql

# Mac
brew services list
```

2. Bağlantı bilgilerini kontrol edin:
```bash
psql -U postgres -h localhost -p 5432
```

### Maven Build Hatası

```bash
# Maven cache'i temizle
mvn clean

# Bağımlılıkları yeniden yükle
mvn dependency:purge-local-repository

# Tekrar build et
mvn clean install
```

### npm Install Hatası

```bash
# Cache'i temizle
npm cache clean --force

# node_modules'ü sil
rm -rf node_modules package-lock.json

# Yeniden yükle
npm install
```

### Flyway Migration Hatası

```bash
# Migration'ları sıfırla
mvn flyway:clean

# Yeniden çalıştır
mvn flyway:migrate
```

## Email Konfigürasyonu

Gmail kullanıyorsanız:

1. Google hesabınızda "2-Step Verification" aktif olmalı
2. "App Password" oluşturun: https://myaccount.google.com/apppasswords
3. Oluşturulan şifreyi `.env` dosyasına ekleyin

## Geliştirme Araçları

### Önerilen IDE'ler

**Frontend:**
- Visual Studio Code
  - Extensions: ESLint, Prettier, Tailwind CSS IntelliSense

**Backend:**
- IntelliJ IDEA
- Eclipse
- Visual Studio Code (Java Extension Pack ile)

### Önerilen Browser Extensions

- React Developer Tools
- Redux DevTools (gelecekte kullanım için)
- JSON Viewer

## Sonraki Adımlar

1. [QUICKSTART.md](QUICKSTART.md) - Hızlı başlangıç rehberi
2. [CONTRIBUTING.md](CONTRIBUTING.md) - Geliştirme rehberi
3. [DEPLOYMENT.md](DEPLOYMENT.md) - Production deployment

## Yardım

Sorun yaşıyorsanız:
1. GitHub Issues'da arayın
2. Yeni issue açın
3. Dokümantasyonu kontrol edin
