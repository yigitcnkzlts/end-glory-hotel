# 🚀 Vercel Deployment Rehberi - End Glory Hotel

## ✅ Hazırlık Durumu
- ✅ GitHub'a push edildi: https://github.com/yigitcnkzlts/end-glory-hotel.git
- ✅ Frontend Next.js projesi hazır
- ✅ Vercel konfigürasyonu mevcut

---

## 📋 Adım Adım Vercel Deployment

### 1️⃣ Vercel Hesabı Oluştur
1. https://vercel.com adresine git
2. **"Sign Up"** butonuna tıkla
3. **"Continue with GitHub"** seçeneğini seç
4. GitHub hesabınla giriş yap ve Vercel'e izin ver

### 2️⃣ Projeyi Import Et
1. Vercel dashboard'unda **"Add New..."** → **"Project"** tıkla
2. GitHub repository listesinde **"end-glory-hotel"** projesini bul
3. **"Import"** butonuna tıkla

### 3️⃣ ⚠️ ÖNEMLİ: Root Directory Ayarı
**BU ADIM ÇOK ÖNEMLİ! Aksi halde deployment başarısız olur.**

1. Import ekranında **"Root Directory"** bölümünde **"Edit"** butonuna tıkla
2. Dropdown'dan **"frontend"** seçeneğini seç (veya manuel olarak `frontend` yaz)
3. ✅ Root Directory: `frontend` olmalı
4. Framework Preset otomatik **"Next.js"** olarak algılanacak

### 4️⃣ Framework ve Build Ayarları
Vercel otomatik algılayacak, kontrol et:
- **Framework Preset**: Next.js ✅
- **Root Directory**: `frontend` ✅
- **Build Command**: `npm run build` (otomatik)
- **Output Directory**: `.next` (otomatik)
- **Install Command**: `npm install` (otomatik)

**Not**: Root Directory doğru ayarlandıysa diğer ayarlar otomatik gelir!

### 5️⃣ Environment Variables (Opsiyonel)
Şimdilik gerekli değil, ama backend bağlandığında:
- **Key**: `NEXT_PUBLIC_API_URL`
- **Value**: Backend URL'iniz (örn: `https://api.endgloryhotel.com`)

### 6️⃣ Deploy Et!
1. **"Deploy"** butonuna tıkla
2. ⏳ Build süreci 2-3 dakika sürer
3. ✅ Başarılı olursa yeşil tik göreceksin

---

## 🎉 Deployment Sonrası

### Siteniz Yayında!
- Vercel otomatik bir URL verecek: `https://end-glory-hotel-xxx.vercel.app`
- Bu URL'yi tarayıcıda aç ve siteyi test et

### Custom Domain Bağlama (İsteğe Bağlı)
1. Vercel dashboard → Project Settings → Domains
2. Kendi domain'inizi ekleyin (örn: `endgloryhotel.com`)
3. DNS ayarlarını Vercel'in verdiği gibi yapın

---

## 🔧 Yaygın Sorunlar ve Çözümleri

### ❌ Build Hatası: "No package.json found"
**Çözüm**: Root Directory'yi `frontend` olarak ayarlamayı unutmuşsunuz!
1. Project Settings → General → Root Directory
2. `frontend` yazın ve kaydedin
3. Deployments → En son deployment → "Redeploy"

### ❌ Build Hatası: "Module not found"
**Çözüm**: Dependencies eksik olabilir
1. `frontend/package.json` dosyasını kontrol et
2. Vercel'de "Redeploy" yap

### ❌ Sayfa 404 Hatası
**Çözüm**: Next.js routing sorunu
- Ana sayfa: `/tr` veya `/en` ile başlamalı
- Vercel otomatik `/tr` yönlendirmesi yapmalı

### ❌ Resimler Yüklenmiyor
**Çözüm**: Unsplash domain'i zaten ekli, sorun olmamalı
- `next.config.js` dosyasında `images.unsplash.com` var

---

## 🔄 Otomatik Deployment

### Her Git Push'ta Otomatik Deploy
Vercel otomatik olarak:
- ✅ `main` branch'e her push'ta yeni deployment yapar
- ✅ Preview URL'ler oluşturur
- ✅ Production'a otomatik yayınlar

### Yeni Değişiklik Yapmak İçin:
```bash
# Kod değişikliği yap
git add .
git commit -m "Yeni özellik eklendi"
git push origin main

# Vercel otomatik deploy edecek!
```

---

## 📊 Deployment Durumu Kontrol

### Vercel Dashboard'da:
1. **Deployments** sekmesine git
2. En son deployment'ı gör
3. **"Building"** → **"Ready"** durumunu takip et
4. Logları kontrol et

### Build Loglarını İnceleme:
- Deployment'a tıkla
- **"Building"** aşamasında logları gör
- Hata varsa burada görünür

---

## 🎯 Sonraki Adımlar

### 1. Frontend Deploy Edildi ✅
- Site yayında ve çalışıyor
- TR/EN dil değiştirme çalışıyor
- Tüm sayfalar erişilebilir

### 2. Backend Deployment (Gelecekte)
Backend'i deploy etmek için:
- **Railway.app** (Önerilen - Kolay PostgreSQL)
- **Heroku** (Alternatif)
- **AWS/DigitalOcean** (Gelişmiş)

### 3. Domain Bağlama
- Kendi domain'inizi alın
- Vercel'de domain ayarlarını yapın
- SSL otomatik gelir

---

## 💡 İpuçları

1. **Preview Deployments**: Her branch için ayrı preview URL
2. **Analytics**: Vercel Analytics ile ziyaretçi takibi
3. **Performance**: Vercel Edge Network ile hızlı yükleme
4. **SSL**: Otomatik HTTPS sertifikası

---

## 📞 Yardım

Deployment sırasında sorun yaşarsan:
1. Vercel build loglarını kontrol et
2. Root Directory'nin `frontend` olduğundan emin ol
3. GitHub repository'nin public olduğundan emin ol

**Başarılar! 🎉**
