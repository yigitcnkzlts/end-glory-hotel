# 📝 Komut Referansı

## Kök Dizinden Çalıştırılabilir Komutlar

Proje kök dizininde (`end-glory-hotel/`) çalıştırılabilir komutlar:

### Kurulum

```bash
# Tüm bağımlılıkları yükle (frontend + backend)
npm run install:all
```

### Development

```bash
# Frontend'i başlat
npm run dev
# veya
npm run dev:frontend

# Backend'i başlat
npm run dev:backend
```

### Build

```bash
# Frontend build
npm run build
# veya
npm run build:frontend

# Backend build
npm run build:backend
```

### Docker

```bash
# Tüm servisleri başlat
npm run docker:up

# Servisleri durdur
npm run docker:down

# Logları izle
npm run docker:logs
```

## Frontend Komutları

Frontend klasöründe (`frontend/`) çalıştırılabilir komutlar:

```bash
cd frontend

# Bağımlılıkları yükle
npm install

# Development server
npm run dev

# Production build
npm run build

# Production server
npm start

# Lint kontrolü
npm run lint

# Prettier formatla
npm run format
```

## Backend Komutları

Backend klasöründe (`backend/`) çalıştırılabilir komutlar:

```bash
cd backend

# Bağımlılıkları yükle
mvn clean install

# Development server
mvn spring-boot:run

# Build (JAR oluştur)
mvn clean package

# Test çalıştır
mvn test

# Flyway migration
mvn flyway:migrate

# Flyway temizle (DİKKAT: Tüm veriyi siler!)
mvn flyway:clean
```

## Docker Komutları

```bash
# Tüm servisleri başlat
docker-compose up -d

# Servisleri durdur
docker-compose down

# Servisleri durdur ve volume'leri sil
docker-compose down -v

# Logları izle
docker-compose logs -f

# Belirli bir servisin logunu izle
docker-compose logs -f frontend
docker-compose logs -f backend

# Servisleri yeniden başlat
docker-compose restart

# Cache'siz build et
docker-compose build --no-cache

# Container'ları listele
docker-compose ps
```

## Database Komutları

```bash
# PostgreSQL'e bağlan
psql -U postgres

# Veritabanı oluştur
psql -U postgres -c "CREATE DATABASE hotel_db;"

# Veritabanını listele
psql -U postgres -l

# Backup al
pg_dump -U postgres hotel_db > backup.sql

# Restore et
psql -U postgres -d hotel_db < backup.sql

# Docker'daki PostgreSQL'e bağlan
docker exec -it hotel-db psql -U postgres -d hotel_db
```

## Git Komutları

```bash
# Değişiklikleri kontrol et
git status

# Tüm değişiklikleri ekle
git add .

# Commit yap
git commit -m "feat: yeni özellik eklendi"

# Push yap
git push origin main

# Branch oluştur
git checkout -b feature/yeni-ozellik

# Branch'leri listele
git branch

# Branch değiştir
git checkout main
```

## Temizlik Komutları

### Frontend Temizliği

```bash
cd frontend

# node_modules'ü sil
rm -rf node_modules

# .next klasörünü sil
rm -rf .next

# package-lock.json'u sil
rm package-lock.json

# Cache'i temizle
npm cache clean --force

# Yeniden yükle
npm install
```

### Backend Temizliği

```bash
cd backend

# target klasörünü sil
mvn clean

# Bağımlılık cache'ini temizle
mvn dependency:purge-local-repository

# Yeniden build et
mvn clean install
```

### Docker Temizliği

```bash
# Tüm container'ları durdur
docker-compose down

# Volume'leri de sil
docker-compose down -v

# Kullanılmayan image'leri sil
docker image prune -a

# Kullanılmayan volume'leri sil
docker volume prune

# Tüm Docker cache'ini temizle
docker system prune -a
```

## Sorun Giderme Komutları

### Port Kontrolü

**Windows:**
```powershell
# Port 3000'i kontrol et
netstat -ano | findstr :3000

# Process'i sonlandır
taskkill /PID <PID> /F
```

**Linux/Mac:**
```bash
# Port 3000'i kontrol et
lsof -i :3000

# Process'i sonlandır
kill -9 <PID>
```

### Servis Kontrolü

**Windows:**
```powershell
# PostgreSQL servisini kontrol et
sc query postgresql-x64-15

# Servisi başlat
net start postgresql-x64-15
```

**Linux:**
```bash
# PostgreSQL servisini kontrol et
sudo systemctl status postgresql

# Servisi başlat
sudo systemctl start postgresql
```

**Mac:**
```bash
# PostgreSQL servisini kontrol et
brew services list

# Servisi başlat
brew services start postgresql
```

## Hızlı Referans

| Komut | Açıklama |
|-------|----------|
| `npm run install:all` | Tüm bağımlılıkları yükle |
| `npm run dev` | Frontend'i başlat |
| `npm run dev:backend` | Backend'i başlat |
| `npm run docker:up` | Docker ile başlat |
| `npm run docker:down` | Docker'ı durdur |
| `cd frontend && npm run dev` | Frontend'i başlat (klasöre girerek) |
| `cd backend && mvn spring-boot:run` | Backend'i başlat (klasöre girerek) |

## Önerilen Çalışma Akışı

### İlk Kurulum
```bash
# 1. Bağımlılıkları yükle
npm run install:all

# 2. Veritabanını oluştur
psql -U postgres -c "CREATE DATABASE hotel_db;"

# 3. Docker ile başlat
npm run docker:up
```

### Günlük Geliştirme
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run dev:backend
```

### Production Build
```bash
# Build et
npm run build
npm run build:backend

# Docker ile deploy et
npm run docker:up
```

## Daha Fazla Bilgi

- [README.md](README.md) - Ana dokümantasyon
- [QUICKSTART.md](QUICKSTART.md) - Hızlı başlangıç
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) - Sorun giderme
