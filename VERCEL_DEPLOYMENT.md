# Vercel'e Deployment Rehberi

## 📋 Gereksinimler

- GitHub hesabı
- Vercel hesabı (GitHub ile giriş yapabilirsiniz)
- Git yüklü olmalı

---

## 🚀 Adım 1: GitHub'a Yükleme

### 1.1 GitHub'da Yeni Repository Oluşturun

1. https://github.com adresine gidin
2. Sağ üstteki **"+"** butonuna tıklayın
3. **"New repository"** seçin
4. Repository adı: `end-glory-hotel`
5. **Public** veya **Private** seçin
6. **"Create repository"** butonuna tıklayın

### 1.2 Projeyi GitHub'a Push Edin

Terminal'de proje klasöründe şu komutları çalıştırın:

```bash
# Git başlat (eğer başlatılmamışsa)
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit: End Glory Hotel"

# GitHub repository'nizi bağlayın (YOUR-USERNAME yerine kendi kullanıcı adınızı yazın)
git remote add origin https://github.com/YOUR-USERNAME/end-glory-hotel.git

# Ana branch'i main olarak ayarla
git branch -M main

# GitHub'a push et
git push -u origin main
```

**NOT:** Eğer GitHub'a ilk kez push ediyorsanız, kullanıcı adı ve şifre (veya personal access token) isteyecektir.

---

## 🌐 Adım 2: Vercel'e Deploy

### 2.1 Vercel Hesabı Oluşturun

1. https://vercel.com adresine gidin
2. **"Sign Up"** butonuna tıklayın
3. **"Continue with GitHub"** seçin
4. GitHub hesabınızla giriş yapın

### 2.2 Projeyi Import Edin

1. Vercel dashboard'da **"Add New..."** butonuna tıklayın
2. **"Project"** seçin
3. GitHub repository'leriniz listelenecek
4. **"end-glory-hotel"** repository'sini bulun
5. **"Import"** butonuna tıklayın

### 2.3 Proje Ayarlarını Yapın

#### Framework Preset
- **Framework Preset:** Next.js (otomatik algılanacak)

#### Root Directory
- **Root Directory:** `frontend` (ÖNEMLİ!)
- "Edit" butonuna tıklayın ve `frontend` yazın

#### Build Settings
Otomatik olarak şunlar ayarlanacak:
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

#### Environment Variables (Çevre Değişkenleri)

Şu değişkenleri ekleyin:

```
NEXT_PUBLIC_API_URL=https://your-backend-url.com/api
```

**NOT:** Backend'i henüz deploy etmediyseniz, şimdilik boş bırakabilirsiniz.

### 2.4 Deploy Edin

1. **"Deploy"** butonuna tıklayın
2. Vercel projeyi build edecek (2-3 dakika sürer)
3. Build tamamlandığında siteniz yayında olacak!

---

## 🎉 Adım 3: Siteniz Yayında!

Deploy tamamlandığında Vercel size bir URL verecek:
- **Production URL:** `https://end-glory-hotel.vercel.app`
- **Custom Domain:** İsterseniz kendi domain'inizi bağlayabilirsiniz

---

## 🔧 Adım 4: Backend'i Deploy Etme (Opsiyonel)

Backend'i deploy etmek için birkaç seçenek var:

### Seçenek 1: Railway (Önerilen)

1. https://railway.app adresine gidin
2. GitHub ile giriş yapın
3. **"New Project"** → **"Deploy from GitHub repo"**
4. `end-glory-hotel` repository'sini seçin
5. **Root Directory:** `backend` seçin
6. Environment variables ekleyin:
   ```
   SPRING_DATASOURCE_URL=postgresql://...
   SPRING_DATASOURCE_USERNAME=...
   SPRING_DATASOURCE_PASSWORD=...
   JWT_SECRET=your-secret-key
   ```
7. PostgreSQL database ekleyin (Railway'den)
8. Deploy edin

### Seçenek 2: Heroku

1. https://heroku.com adresine gidin
2. Yeni app oluşturun
3. PostgreSQL addon ekleyin
4. GitHub'dan deploy edin

### Seçenek 3: AWS / DigitalOcean

Daha gelişmiş kullanıcılar için Docker ile deploy edebilirsiniz.

---

## 🔄 Otomatik Deployment

Artık her GitHub'a push ettiğinizde Vercel otomatik olarak yeni versiyonu deploy edecek!

```bash
# Değişiklik yaptıktan sonra
git add .
git commit -m "Update: yeni özellik eklendi"
git push

# Vercel otomatik olarak deploy edecek!
```

---

## 🌍 Custom Domain Bağlama

1. Vercel dashboard'da projenize gidin
2. **"Settings"** → **"Domains"**
3. Domain adınızı girin (örn: `endgloryhotel.com`)
4. DNS ayarlarını yapın (Vercel size talimatları verecek)
5. SSL sertifikası otomatik olarak oluşturulacak

---

## 📊 Vercel'de Monitoring

Vercel size şunları sağlar:
- **Analytics:** Ziyaretçi istatistikleri
- **Logs:** Hata logları
- **Performance:** Sayfa yükleme süreleri
- **Preview Deployments:** Her branch için otomatik preview

---

## ⚠️ Önemli Notlar

### Frontend Environment Variables

Frontend'de kullanılan tüm environment variable'lar `NEXT_PUBLIC_` ile başlamalı:

```env
NEXT_PUBLIC_API_URL=https://api.endgloryhotel.com
```

### Build Hatası Alırsanız

1. **Root Directory'yi kontrol edin:** `frontend` olmalı
2. **Node version'ı kontrol edin:** Vercel Settings → General → Node.js Version
3. **Build logs'u inceleyin:** Hangi hatayı verdiğini görün

### Database Bağlantısı

Backend deploy ettikten sonra:
1. Backend URL'ini alın
2. Vercel'de Environment Variables'a ekleyin
3. Redeploy edin

---

## 🎯 Hızlı Başlangıç Komutları

```bash
# 1. GitHub'a push
git add .
git commit -m "Ready for deployment"
git push origin main

# 2. Vercel CLI ile deploy (alternatif)
npm i -g vercel
cd frontend
vercel

# 3. Production'a deploy
vercel --prod
```

---

## 📞 Yardım

Sorun yaşarsanız:
- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- GitHub Issues: Repository'nizde issue açın

---

## ✅ Checklist

Deploy öncesi kontrol listesi:

- [ ] Tüm environment variables ayarlandı
- [ ] `.env` dosyaları `.gitignore`'da
- [ ] Build local'de çalışıyor (`npm run build`)
- [ ] Tüm sayfalar hatasız açılıyor
- [ ] Görseller yükleniyor (Unsplash domain'i next.config.js'de)
- [ ] API endpoint'leri doğru
- [ ] Database bağlantısı hazır

---

**Başarılar! 🚀**

Siteniz birkaç dakika içinde yayında olacak!
