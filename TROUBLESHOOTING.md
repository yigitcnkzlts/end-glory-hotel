# 🔧 Sorun Giderme Rehberi

## TypeScript Hataları

### "Cannot find module" Hataları

**Sebep:** npm paketleri henüz yüklenmemiş.

**Çözüm:**
```bash
cd frontend
npm install
```

### "Type error" Hataları

**Çözüm:**
```bash
# TypeScript cache'i temizle
rm -rf .next
rm -rf node_modules/.cache

# Yeniden build et
npm run build
```

## Frontend Hataları

### Port 3000 Kullanımda

**Windows:**
```powershell
# Port'u kullanan process'i bul
netstat -ano | findstr :3000

# Process'i sonlandır
taskkill /PID <PID> /F
```

**Linux/Mac:**
```bash
# Port'u kullanan process'i bul
lsof -i :3000

# Process'i sonlandır
kill -9 <PID>

# Veya farklı port kullan
PORT=3001 npm run dev
```

### "Module not found" Hatası

```bash
# node_modules'ü temizle
rm -rf node_modules package-lock.json

# Cache'i temizle
npm cache clean --force

# Yeniden yükle
npm install
```

### Build Hatası

```bash
# .next klasörünü sil
rm -rf .next

# Yeniden build et
npm run build
```

## Backend Hataları

### Port 8080 Kullanımda

**Windows:**
```powershell
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

**Linux/Mac:**
```bash
lsof -i :8080
kill -9 <PID>
```

### PostgreSQL Bağlantı Hatası

**1. PostgreSQL Çalışıyor mu?**

**Windows:**
```powershell
sc query postgresql-x64-15
```

**Linux:**
```bash
sudo systemctl status postgresql
```

**Mac:**
```bash
brew services list
```

**2. Bağlantı Bilgileri Doğru mu?**

`.env` dosyasını kontrol edin:
```env
DB_USERNAME=postgres
DB_PASSWORD=your_password
```

Test edin:
```bash
psql -U postgres -h localhost -p 5432 -d hotel_db
```

**3. Veritabanı Var mı?**

```bash
psql -U postgres -l
```

Yoksa oluşturun:
```bash
psql -U postgres
CREATE DATABASE hotel_db;
\q
```

### Flyway Migration Hatası

**Hata: "Validate failed"**

```bash
# Migration'ları sıfırla (DİKKAT: Tüm veriyi siler!)
mvn flyway:clean

# Yeniden çalıştır
mvn flyway:migrate
```

**Hata: "Checksum mismatch"**

```bash
# Migration dosyasını düzeltin veya repair edin
mvn flyway:repair
```

### Maven Build Hatası

```bash
# Cache'i temizle
mvn clean

# Bağımlılıkları yeniden yükle
mvn dependency:purge-local-repository

# Tekrar build et
mvn clean install -U
```

### "Could not find or load main class" Hatası

```bash
# Target klasörünü temizle
mvn clean

# Yeniden compile et
mvn compile

# Çalıştır
mvn spring-boot:run
```

## Docker Hataları

### "Port already allocated" Hatası

```bash
# Çalışan container'ları durdur
docker-compose down

# Port'u kullanan container'ı bul
docker ps

# Container'ı durdur
docker stop <container_id>
```

### "Cannot connect to Docker daemon" Hatası

**Windows:**
- Docker Desktop'ın çalıştığından emin olun

**Linux:**
```bash
sudo systemctl start docker
sudo systemctl enable docker
```

**Mac:**
- Docker Desktop'ı başlatın

### Volume Hatası

```bash
# Volume'leri temizle
docker-compose down -v

# Yeniden başlat
docker-compose up -d
```

### Image Build Hatası

```bash
# Cache'siz build et
docker-compose build --no-cache

# Yeniden başlat
docker-compose up -d
```

## Database Hataları

### "Too many connections" Hatası

```bash
# PostgreSQL'e bağlan
psql -U postgres

# Aktif bağlantıları kontrol et
SELECT * FROM pg_stat_activity;

# Bağlantıları sonlandır
SELECT pg_terminate_backend(pid) 
FROM pg_stat_activity 
WHERE datname = 'hotel_db' AND pid <> pg_backend_pid();
```

### "Permission denied" Hatası

```bash
# PostgreSQL kullanıcısına yetki ver
psql -U postgres
GRANT ALL PRIVILEGES ON DATABASE hotel_db TO postgres;
\q
```

### Backup/Restore Hataları

**Backup:**
```bash
pg_dump -U postgres hotel_db > backup.sql
```

**Restore:**
```bash
# Önce veritabanını temizle
psql -U postgres -d hotel_db -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;"

# Restore et
psql -U postgres -d hotel_db < backup.sql
```

## Email Hataları

### "Authentication failed" Hatası

**Gmail için:**
1. 2-Step Verification aktif olmalı
2. App Password oluşturun: https://myaccount.google.com/apppasswords
3. `.env` dosyasına ekleyin:
```env
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
```

### "Connection timeout" Hatası

Firewall'u kontrol edin:
```bash
# Port 587'nin açık olduğunu kontrol et
telnet smtp.gmail.com 587
```

## Performance Sorunları

### Frontend Yavaş

```bash
# Production build kullanın
npm run build
npm start

# Development mode yerine
npm run dev
```

### Backend Yavaş

```bash
# JVM heap size'ı artırın
export MAVEN_OPTS="-Xmx2048m"
mvn spring-boot:run
```

### Database Yavaş

```sql
-- Index'leri kontrol edin
SELECT * FROM pg_indexes WHERE tablename = 'bookings';

-- Eksik index ekleyin
CREATE INDEX idx_bookings_room_dates ON bookings(room_id, check_in, check_out);
```

## Genel Sorunlar

### "ENOSPC: System limit" Hatası

**Linux:**
```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

### "CORS" Hatası

Backend `SecurityConfig.java` dosyasını kontrol edin:
```java
configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
```

### "404 Not Found" API Hatası

1. Backend'in çalıştığını kontrol edin: http://localhost:8080
2. API URL'ini kontrol edin: `.env.local` dosyasında
3. Endpoint'i kontrol edin: http://localhost:8080/swagger-ui.html

## Hala Sorun mu Var?

1. **Logları kontrol edin:**
   - Frontend: Terminal çıktısı
   - Backend: `logs/` klasörü
   - Docker: `docker-compose logs -f`

2. **Temiz kurulum yapın:**
```bash
# Frontend
cd frontend
rm -rf node_modules .next package-lock.json
npm install

# Backend
cd backend
mvn clean install

# Docker
docker-compose down -v
docker-compose up -d --build
```

3. **GitHub Issues'da arayın veya yeni issue açın**

4. **Dokümantasyonu kontrol edin:**
   - [INSTALLATION.md](INSTALLATION.md)
   - [QUICKSTART.md](QUICKSTART.md)
   - [README.md](README.md)
