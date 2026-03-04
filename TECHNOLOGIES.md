# 🚀 End Glory Hotel - Kullanılan Teknolojiler

Bu projede kullanılan tüm teknolojiler ve detaylı açıklamaları.

---

## 📱 FRONTEND TEKNOLOJİLERİ

### 1. Next.js 14.2.35
**Ne İşe Yarar:** Modern React framework, server-side rendering ve static site generation

**Neden Kullandık:**
- ⚡ Çok hızlı sayfa yükleme
- 🔍 SEO dostu (Google'da üst sıralarda çıkma)
- 📱 Otomatik code splitting (her sayfa ayrı yüklenir)
- 🖼️ Image optimization (görseller otomatik optimize)
- 🌐 Server Components (sunucu tarafında render)

**Özellikler:**
```
- App Router (modern routing sistemi)
- Server Components (performans)
- Dynamic Routes ([locale], [id])
- Middleware (dil yönlendirme)
- API Routes (backend entegrasyonu)
```

---

### 2. React 18.3.0
**Ne İşe Yarar:** Kullanıcı arayüzü oluşturmak için JavaScript kütüphanesi

**Neden Kullandık:**
- 🔄 Component-based (tekrar kullanılabilir parçalar)
- ⚡ Virtual DOM (hızlı güncelleme)
- 🎣 Hooks (useState, useEffect, useContext)
- 🔧 Kolay state management

**Kullandığımız Hooks:**
```typescript
- useState: State yönetimi
- useEffect: Side effects (API çağrıları)
- useContext: Global state
- useRef: DOM referansları
- useTranslations: Çeviri sistemi
```

---

### 3. TypeScript 5.3.0
**Ne İşe Yarar:** JavaScript'e tip güvenliği ekler

**Neden Kullandık:**
- 🛡️ Hata önleme (compile time'da hata yakalar)
- 📝 Otomatik tamamlama (IDE desteği)
- 🔍 Kod okunabilirliği
- 🐛 Daha az bug

**Örnek Kullanım:**
```typescript
interface Room {
  id: number
  name: string
  price: number
  type: 'suite' | 'deluxe' | 'standard'
}

const room: Room = {
  id: 1,
  name: "Deluxe Suite",
  price: 299,
  type: "suite"
}
```

---

### 4. TailwindCSS 3.4.0
**Ne İşe Yarar:** Utility-first CSS framework

**Neden Kullandık:**
- ⚡ Çok hızlı styling
- 📱 Responsive design kolay
- 🎨 Consistent design system
- 📦 Küçük bundle size (kullanılmayan CSS'ler silinir)

**Örnek Kullanım:**
```html
<div className="flex items-center justify-center h-screen bg-gray-900">
  <h1 className="text-4xl font-bold text-white">Welcome</h1>
</div>
```

**Responsive:**
```html
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <!-- Mobil: 1 sütun, Tablet: 2 sütun, Desktop: 4 sütun -->
</div>
```

---

### 5. Framer Motion 11.0.0
**Ne İşe Yarar:** React için profesyonel animasyon kütüphanesi

**Neden Kullandık:**
- ✨ Smooth animasyonlar
- 🎭 Scroll-triggered animations
- 🎬 Page transitions
- 🎨 Hover effects

**Kullandığımız Animasyonlar:**
```typescript
// Fade In
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>

// Slide Up
<motion.div
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
>

// Scroll Animation
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>

// Stagger (sıralı animasyon)
<motion.div
  variants={container}
  initial="hidden"
  animate="show"
>
  {items.map((item) => (
    <motion.div variants={item} />
  ))}
</motion.div>
```

**Toplam 50+ animasyon kullandık!**

---

### 6. next-intl 3.11.0
**Ne İşe Yarar:** Next.js için çok dilli (i18n) sistem

**Neden Kullandık:**
- 🌍 TR/EN dil desteği
- 🔄 Kolay dil değiştirme
- 📝 2000+ kelime çeviri
- 🔗 SEO-friendly URLs (/tr/, /en/)

**Kullanım:**
```typescript
// Component içinde
const t = useTranslations('home.hero')

<h1>{t('title')}</h1>
// TR: "End Glory Hotel'e Hoş Geldiniz"
// EN: "Welcome to End Glory Hotel"
```

**Çeviri Dosyaları:**
```json
// messages/tr.json
{
  "home": {
    "hero": {
      "title": "End Glory Hotel'e Hoş Geldiniz",
      "subtitle": "Konfor ve lüksün buluştuğu eşsiz deneyim"
    }
  }
}

// messages/en.json
{
  "home": {
    "hero": {
      "title": "Welcome to End Glory Hotel",
      "subtitle": "An exceptional experience where comfort meets luxury"
    }
  }
}
```

---

### 7. React Hook Form 7.51.0 + Zod 3.22.0
**Ne İşe Yarar:** Form yönetimi ve validasyon

**Neden Kullandık:**
- ✅ Kolay form yönetimi
- 🛡️ Güçlü validasyon
- ⚡ Performanslı (re-render az)
- 📝 Type-safe (TypeScript ile)

**Örnek Kullanım:**
```typescript
// Zod schema
const bookingSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalı"),
  email: z.string().email("Geçerli email giriniz"),
  phone: z.string().min(10, "Telefon 10 haneli olmalı"),
  checkIn: z.date(),
  checkOut: z.date(),
  guests: z.number().min(1).max(10)
})

// Form kullanımı
const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(bookingSchema)
})

const onSubmit = (data) => {
  // API'ye gönder
  axios.post('/api/bookings', data)
}
```

---

### 8. Axios 1.6.0
**Ne İşe Yarar:** HTTP istekleri için kütüphane

**Neden Kullandık:**
- 🌐 Backend API'ye bağlanma
- 🔄 Promise-based (async/await)
- 🛡️ Interceptors (token ekleme)
- ❌ Error handling

**Kullanım:**
```typescript
// API client
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// GET request
const rooms = await api.get('/api/rooms')

// POST request
const booking = await api.post('/api/bookings', {
  roomId: 1,
  checkIn: '2024-03-15',
  checkOut: '2024-03-20'
})
```

---

### 9. Swiper.js 11.0.0
**Ne İşe Yarar:** Touch-friendly slider/carousel

**Neden Kullandık:**
- 📱 Mobil dostu (swipe gesture)
- 🎨 Özelleştirilebilir
- ⚡ Performanslı
- 🔄 Auto-play

**Kullanım:**
```typescript
<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
>
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
</Swiper>
```

**Kullandığımız Yerler:**
- Testimonials (müşteri yorumları)
- Room gallery (oda galerisi)
- Instagram feed

---

### 10. clsx + tailwind-merge
**Ne İşe Yarar:** Conditional CSS class yönetimi

**Neden Kullandık:**
- 🎨 Dynamic class names
- 🔄 Conditional styling
- 🧹 Tailwind class conflicts çözme

**Kullanım:**
```typescript
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const cn = (...inputs) => twMerge(clsx(inputs))

// Kullanım
<button
  className={cn(
    "px-4 py-2 rounded",
    isActive && "bg-blue-500 text-white",
    isDisabled && "opacity-50 cursor-not-allowed"
  )}
>
```

---

## 🔧 BACKEND TEKNOLOJİLERİ

### 1. Spring Boot 3.x
**Ne İşe Yarar:** Java için enterprise-level framework

**Neden Kullandık:**
- 🚀 Hızlı geliştirme
- 🏢 Enterprise-ready
- 🔐 Güvenlik (Spring Security)
- 📚 Geniş ekosistem

**Modüller:**
```
- Spring Web: RESTful API
- Spring Data JPA: Database ORM
- Spring Security: Authentication
- Spring Mail: Email gönderme
- Spring Validation: Input validation
```

**Örnek Controller:**
```java
@RestController
@RequestMapping("/api/rooms")
public class RoomController {
    
    @GetMapping
    public List<Room> getAllRooms() {
        return roomService.findAll();
    }
    
    @GetMapping("/{id}")
    public Room getRoomById(@PathVariable Long id) {
        return roomService.findById(id);
    }
    
    @PostMapping
    public Room createRoom(@RequestBody @Valid RoomRequest request) {
        return roomService.create(request);
    }
}
```

---

### 2. PostgreSQL 15
**Ne İşe Yarar:** Güçlü relational database

**Neden Kullandık:**
- 💪 Güvenilir ve stabil
- 🔍 Complex queries
- 🔐 ACID compliance
- 📊 JSON support

**Database Schema:**
```sql
-- Rooms table
CREATE TABLE rooms (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    description TEXT,
    amenities TEXT[],
    created_at TIMESTAMP DEFAULT NOW()
);

-- Bookings table
CREATE TABLE bookings (
    id BIGSERIAL PRIMARY KEY,
    room_id BIGINT REFERENCES rooms(id),
    guest_name VARCHAR(255) NOT NULL,
    guest_email VARCHAR(255) NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    guests INTEGER NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT NOW()
);

-- Contact messages table
CREATE TABLE contact_messages (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
```

---

### 3. Spring Data JPA + Hibernate
**Ne İşe Yarar:** Object-Relational Mapping (ORM)

**Neden Kullandık:**
- 🔄 SQL yazmadan database işlemleri
- 🎯 Type-safe queries
- 🔗 Relationship management
- 📦 Lazy/Eager loading

**Örnek Entity:**
```java
@Entity
@Table(name = "rooms")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false)
    private String type;
    
    @Column(nullable = false)
    private BigDecimal price;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @OneToMany(mappedBy = "room")
    private List<Booking> bookings;
}
```

**Repository:**
```java
public interface RoomRepository extends JpaRepository<Room, Long> {
    List<Room> findByType(String type);
    List<Room> findByPriceLessThan(BigDecimal price);
    
    @Query("SELECT r FROM Room r WHERE r.price BETWEEN :min AND :max")
    List<Room> findByPriceRange(@Param("min") BigDecimal min, 
                                @Param("max") BigDecimal max);
}
```

---

### 4. Spring Security + JWT
**Ne İşe Yarar:** Authentication ve Authorization

**Neden Kullandık:**
- 🔐 Güvenli authentication
- 🎫 Token-based (stateless)
- 🛡️ Password encryption (BCrypt)
- 🚪 Role-based access control

**JWT Flow:**
```
1. User login → Username + Password
2. Backend verify → BCrypt check
3. Generate JWT token → Sign with secret
4. Return token → Client stores
5. Future requests → Header: Authorization: Bearer <token>
6. Backend verify token → Allow/Deny
```

**Örnek:**
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) {
        http
            .csrf().disable()
            .authorizeHttpRequests()
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            .and()
            .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        
        return http.build();
    }
}
```

---

### 5. Flyway Migration
**Ne İşe Yarar:** Database version control

**Neden Kullandık:**
- 📝 Database değişikliklerini takip
- 🔄 Otomatik migration
- 🔙 Rollback desteği
- 👥 Team collaboration

**Migration Dosyaları:**
```sql
-- V1__Initial_schema.sql
CREATE TABLE rooms (...);
CREATE TABLE bookings (...);

-- V2__Sample_data.sql
INSERT INTO rooms (name, type, price) VALUES
('Deluxe Suite', 'suite', 299.00),
('Executive Room', 'deluxe', 199.00);
```

---

### 6. JavaMail (Email Service)
**Ne İşe Yarar:** Email gönderme

**Neden Kullandık:**
- 📧 Rezervasyon onayı
- 📬 İletişim formu bildirimleri
- 🎨 HTML email templates

**Örnek:**
```java
@Service
public class EmailService {
    
    @Autowired
    private JavaMailSender mailSender;
    
    public void sendBookingConfirmation(Booking booking) {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        
        helper.setTo(booking.getGuestEmail());
        helper.setSubject("Rezervasyon Onayı - End Glory Hotel");
        helper.setText(buildEmailTemplate(booking), true);
        
        mailSender.send(message);
    }
}
```

---

### 7. Swagger/OpenAPI 3.0
**Ne İşe Yarar:** API documentation

**Neden Kullandık:**
- 📚 Otomatik API dokümantasyonu
- 🧪 API test arayüzü
- 📝 Request/Response örnekleri
- 👥 Frontend-Backend iletişimi kolaylaştırır

**Swagger UI:** http://localhost:8080/swagger-ui.html

---

## 🐳 DEVOPS TEKNOLOJİLERİ

### 1. Docker
**Ne İşe Yarar:** Containerization (uygulamayı paketleme)

**Neden Kullandık:**
- 📦 Portable (her yerde çalışır)
- 🔄 Consistent environment
- 🚀 Kolay deployment
- 🧪 Izole test ortamı

**Dockerfile (Frontend):**
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
CMD ["npm", "start"]
```

---

### 2. Docker Compose
**Ne İşe Yarar:** Multi-container orchestration

**Neden Kullandık:**
- 🎯 Tüm servisleri tek komutla başlat
- 🔗 Container'lar arası network
- 📝 Kolay konfigürasyon

**docker-compose.yml:**
```yaml
services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://backend:8080
  
  backend:
    build: ./backend
    ports:
      - "8080:8080"
    environment:
      - DATABASE_URL=postgresql://db:5432/hotel
    depends_on:
      - db
  
  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=hotel
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
    volumes:
      - postgres_data:/var/lib/postgresql/data
  
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - frontend
      - backend
```

**Tek komutla başlat:**
```bash
docker-compose up -d
```

---

### 3. GitHub Actions (CI/CD)
**Ne İşe Yarar:** Otomatik build ve deployment

**Neden Kullandık:**
- 🤖 Otomatik test
- 🔨 Otomatik build
- 🚀 Otomatik deployment
- ✅ Code quality check

**Workflow:**
```yaml
name: CI - Build Check

on:
  push:
    branches: [ main ]

jobs:
  build-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        working-directory: ./frontend
        run: npm ci
      
      - name: Build
        working-directory: ./frontend
        run: npm run build
      
      - name: Lint
        working-directory: ./frontend
        run: npm run lint
```

---

### 4. Vercel
**Ne İşe Yarar:** Frontend hosting (serverless)

**Neden Kullandık:**
- ⚡ Çok hızlı (Edge Network)
- 🌍 Global CDN
- 🔒 Otomatik SSL
- 🚀 Kolay deployment
- 📊 Analytics

**Özellikler:**
```
- Git push → Otomatik deploy
- Preview URLs (her branch için)
- Environment variables
- Custom domains
- Image optimization
- Edge functions
```

---

### 5. Nginx
**Ne İşe Yarar:** Web server ve reverse proxy

**Neden Kullandık:**
- 🔀 Reverse proxy (frontend + backend)
- ⚖️ Load balancing
- 🗜️ Gzip compression
- 📦 Static file serving
- 🔒 SSL termination

**nginx.conf:**
```nginx
server {
    listen 80;
    
    # Frontend
    location / {
        proxy_pass http://frontend:3000;
    }
    
    # Backend API
    location /api {
        proxy_pass http://backend:8080;
    }
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;
}
```

---

## 📊 TOPLAM TEKNOLOJİ SAYISI: 25+

### Frontend: 10 teknoloji
1. Next.js
2. React
3. TypeScript
4. TailwindCSS
5. Framer Motion
6. next-intl
7. React Hook Form + Zod
8. Axios
9. Swiper.js
10. clsx + tailwind-merge

### Backend: 7 teknoloji
1. Spring Boot
2. PostgreSQL
3. Spring Data JPA + Hibernate
4. Spring Security + JWT
5. Flyway
6. JavaMail
7. Swagger/OpenAPI

### DevOps: 5 teknoloji
1. Docker
2. Docker Compose
3. GitHub Actions
4. Vercel
5. Nginx

### Diğer: 3 teknoloji
1. Git
2. npm
3. Maven

---

## 🎯 NEDEN BU TEKNOLOJİLER?

### Modern Stack
- ✅ 2024'ün en güncel teknolojileri
- ✅ Industry standard
- ✅ Geniş community desteği

### Performans
- ⚡ Çok hızlı (Next.js + Edge Network)
- 📦 Küçük bundle size
- 🖼️ Image optimization

### Developer Experience
- 🛠️ Kolay geliştirme
- 🐛 Az bug (TypeScript)
- 📚 İyi dokümantasyon

### Production Ready
- 🔐 Güvenli (JWT, BCrypt)
- 📈 Ölçeklenebilir (Docker, Kubernetes)
- 🔄 Bakımı kolay

---

**Bu teknolojilerle enterprise-level bir otel web sitesi geliştirdik! 🚀**
