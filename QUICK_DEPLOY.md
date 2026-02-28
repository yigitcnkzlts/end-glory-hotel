# 🚀 Hızlı Deploy Rehberi

## 1️⃣ GitHub'a Yükle (5 dakika)

### Terminal'de şu komutları çalıştırın:

```bash
# Git başlat
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit: End Glory Hotel"

# GitHub'da yeni repository oluşturun: https://github.com/new
# Repository adı: end-glory-hotel

# Bağlantıyı ekleyin (YOUR-USERNAME yerine kendi kullanıcı adınızı yazın)
git remote add origin https://github.com/YOUR-USERNAME/end-glory-hotel.git

# Push edin
git branch -M main
git push -u origin main
```

---

## 2️⃣ Vercel'e Deploy (3 dakika)

### Adımlar:

1. **Vercel'e gidin:** https://vercel.com
2. **GitHub ile giriş yapın**
3. **"Add New Project"** butonuna tıklayın
4. **"end-glory-hotel"** repository'sini seçin
5. **"Import"** butonuna tıklayın

### ⚙️ Ayarlar:

- **Framework Preset:** Next.js ✅ (otomatik)
- **Root Directory:** `frontend` ⚠️ (MUTLAKA DEĞİŞTİRİN!)
- **Build Command:** `npm run build` ✅ (otomatik)
- **Output Directory:** `.next` ✅ (otomatik)

### 🔐 Environment Variables (Opsiyonel):

```
NEXT_PUBLIC_API_URL=https://your-backend-url.com/api
```

6. **"Deploy"** butonuna tıklayın
7. **2-3 dakika bekleyin** ☕
8. **Siteniz yayında!** 🎉

---

## 3️⃣ Sitenizi Görüntüleyin

Deploy tamamlandığında Vercel size bir URL verecek:

```
https://end-glory-hotel.vercel.app
```

veya

```
https://end-glory-hotel-your-username.vercel.app
```

---

## 🔄 Güncelleme Yapmak

Değişiklik yaptıktan sonra:

```bash
git add .
git commit -m "Güncelleme: yeni özellik"
git push
```

Vercel otomatik olarak yeni versiyonu deploy edecek! ⚡

---

## ⚠️ Önemli: Root Directory

Vercel'de **MUTLAKA** Root Directory'yi `frontend` olarak ayarlayın!

1. Import ekranında **"Edit"** butonuna tıklayın
2. Root Directory'ye `frontend` yazın
3. **"Continue"** butonuna tıklayın

---

## 🎯 Sorun Giderme

### Build hatası alıyorsanız:

1. **Root Directory `frontend` mi?** Kontrol edin!
2. **Local'de build çalışıyor mu?** Test edin:
   ```bash
   cd frontend
   npm run build
   ```
3. **Environment variables doğru mu?** Vercel Settings'den kontrol edin

### GitHub'a push edilmiyor:

```bash
# GitHub credentials ayarlayın
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Personal Access Token kullanın (şifre yerine)
# GitHub → Settings → Developer settings → Personal access tokens
```

---

## 📱 Mobil Test

Deploy sonrası mutlaka mobil cihazlarda test edin:
- Chrome DevTools (F12 → Toggle device toolbar)
- Gerçek telefon/tablet
- Farklı tarayıcılar (Chrome, Safari, Firefox)

---

## 🌍 Custom Domain (Opsiyonel)

Kendi domain'inizi bağlamak için:

1. Vercel Dashboard → Settings → Domains
2. Domain adınızı girin (örn: `endgloryhotel.com`)
3. DNS ayarlarını yapın (Vercel talimat verecek)
4. SSL otomatik aktif olacak 🔒

---

## ✅ Başarılı Deploy Kontrol Listesi

- [ ] GitHub'a push edildi
- [ ] Vercel'de import edildi
- [ ] Root Directory `frontend` olarak ayarlandı
- [ ] Build başarılı
- [ ] Site açılıyor
- [ ] Tüm sayfalar çalışıyor
- [ ] Görseller yükleniyor
- [ ] Dil değiştirme çalışıyor (TR/EN)
- [ ] Mobil responsive

---

**Tebrikler! Siteniz artık canlı! 🎊**

Vercel URL'inizi paylaşabilirsiniz:
`https://end-glory-hotel.vercel.app`
