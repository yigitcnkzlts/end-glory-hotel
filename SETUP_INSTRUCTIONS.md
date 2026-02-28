# 🚀 Kurulum Talimatları

## ⚠️ ÖNEMLİ: İlk Kurulum Adımları

Projeyi çalıştırmadan önce bu adımları takip edin:

### 1. Frontend Bağımlılıklarını Yükleyin

```bash
cd frontend
npm install
```

Bu komut tüm gerekli npm paketlerini yükleyecek ve TypeScript hatalarını çözecektir.

### 2. Backend Bağımlılıklarını Yükleyin

```bash
cd backend
mvn clean install
```

### 3. Veritabanını Hazırlayın

```bash
# PostgreSQL'e bağlanın
psql -U postgres

# Veritabanı oluşturun
CREATE DATABASE hotel_db;

# Çıkış
\q
```

### 4. Environment Dosyalarını Oluşturun

**Backend:**
```bash
cd backend
cp .env.example .env
```

**Frontend:**
```bash
cd frontend
cp .env.local.example .env.local
```

## 🎯 Hızlı Başlangıç

### Option 1: Docker ile (En Kolay)

```bash
docker-compose up -d
```

### Option 2: Manuel Çalıştırma

**Terminal 1 - Backend:**
```bash
cd backend
mvn spring-boot:run
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

## ✅ Kurulum Kontrolü

1. Frontend: http://localhost:3000
2. Backend: http://localhost:8080
3. Swagger: http://localhost:8080/swagger-ui.html

## 🐛 Yaygın Hatalar ve Çözümleri

### "Cannot find module 'next-intl'" Hatası

**Çözüm:**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### "Port 3000 already in use" Hatası

**Windows:**
```powershell
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Linux/Mac:**
```bash
lsof -i :3000
kill -9 <PID>
```

### PostgreSQL Bağlantı Hatası

1. PostgreSQL servisinin çalıştığını kontrol edin
2. `.env` dosyasındaki bağlantı bilgilerini kontrol edin
3. Veritabanının oluşturulduğunu kontrol edin:
```bash
psql -U postgres -l
```

### Maven Build Hatası

```bash
cd backend
mvn clean
mvn dependency:purge-local-repository
mvn clean install
```

## 📝 Sonraki Adımlar

1. ✅ Bağımlılıkları yükleyin (`npm install`)
2. ✅ Veritabanını oluşturun
3. ✅ Environment dosyalarını ayarlayın
4. ✅ Uygulamayı çalıştırın
5. 📖 [QUICKSTART.md](QUICKSTART.md) dosyasını okuyun

## 💡 İpuçları

- İlk çalıştırmada Flyway otomatik olarak tabloları oluşturacak
- Örnek veriler otomatik olarak eklenecek (3 oda)
- Hot reload aktif, değişiklikler otomatik yansıyacak
- TypeScript hataları `npm install` sonrası kaybolacak

## 🆘 Yardım

Sorun yaşıyorsanız:
1. [INSTALLATION.md](INSTALLATION.md) - Detaylı kurulum rehberi
2. [TROUBLESHOOTING.md](TROUBLESHOOTING.md) - Sorun giderme
3. GitHub Issues - Yeni issue açın
