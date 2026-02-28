# 🎯 BURADAN BAŞLAYIN

## Hoş Geldiniz! 👋

End Glory Hotel projesine hoş geldiniz. Bu dosya size projeyi çalıştırmak için gereken adımları gösterecek.

## ⚠️ ÖNEMLİ: TypeScript Hataları

Şu anda TypeScript hataları görüyorsanız **PANIK YAPMAYIN!** Bu normaldir.

**Çözüm:** `npm install` yapın. Detaylar için: [TYPESCRIPT_ERRORS.md](TYPESCRIPT_ERRORS.md)

## ⚡ Hızlı Başlangıç (3 Adım)

### 1️⃣ Bağımlılıkları Yükleyin

```bash
# Kök dizinden (önerilen)
npm run install:all

# Veya manuel
cd frontend && npm install
cd backend && mvn clean install
```

### 2️⃣ Veritabanını Hazırlayın

```bash
# PostgreSQL'e bağlanın
psql -U postgres

# Veritabanı oluşturun
CREATE DATABASE hotel_db;
\q
```

### 3️⃣ Çalıştırın

**Docker ile (Önerilen):**
```bash
npm run docker:up
```

**Manuel (Kök dizinden):**
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend (yeni terminal)
npm run dev:backend
```

**Manuel (Klasörlere girerek):**
```bash
# Terminal 1 - Frontend
cd frontend
npm run dev

# Terminal 2 - Backend
cd backend
mvn spring-boot:run
```

## ✅ Kontrol Edin

- Frontend: http://localhost:3000
- Backend: http://localhost:8080
- Swagger: http://localhost:8080/swagger-ui.html

## 📖 Detaylı Dokümantasyon

| Dosya | Açıklama |
|-------|----------|
| [SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md) | Adım adım kurulum |
| [INSTALLATION.md](INSTALLATION.md) | Detaylı kurulum rehberi |
| [QUICKSTART.md](QUICKSTART.md) | Hızlı başlangıç |
| [TROUBLESHOOTING.md](TROUBLESHOOTING.md) | Sorun giderme |
| [README.md](README.md) | Ana dokümantasyon |

## 🐛 Sorun mu Yaşıyorsunuz?

### "Cannot find module" Hatası

```bash
cd frontend
npm install
```

### Port Çakışması

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -i :3000
kill -9 <PID>
```

### PostgreSQL Bağlantı Hatası

1. PostgreSQL servisinin çalıştığını kontrol edin
2. Veritabanının oluşturulduğunu kontrol edin: `psql -U postgres -l`

## 💡 İpuçları

- ✅ İlk çalıştırmada örnek veriler otomatik eklenir
- ✅ Hot reload aktif, değişiklikler otomatik yansır
- ✅ TypeScript hataları `npm install` sonrası kaybolur
- ✅ Swagger UI ile API'yi test edebilirsiniz

## 🆘 Yardım

Sorun yaşıyorsanız:
1. [TROUBLESHOOTING.md](TROUBLESHOOTING.md) dosyasına bakın
2. GitHub Issues'da arayın
3. Yeni issue açın

## 🚀 Sonraki Adımlar

1. ✅ Projeyi çalıştırın
2. 📖 [README.md](README.md) dosyasını okuyun
3. 🎨 Tasarımı özelleştirin
4. 🔧 Özellikleri geliştirin
5. 🚀 Production'a deploy edin

---

**Başarılar! 🎉**
