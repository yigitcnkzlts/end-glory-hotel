# End Glory Hotel - Backend

Spring Boot 3.2 tabanlı REST API.

## Gereksinimler

- Java 17+
- Maven 3.9+
- PostgreSQL 15+

## Kurulum

1. PostgreSQL veritabanı oluşturun:
```sql
CREATE DATABASE hotel_db;
```

2. `.env` dosyası oluşturun (`.env.example` dosyasından kopyalayın)

3. Uygulamayı çalıştırın:
```bash
mvn spring-boot:run
```

## API Dokümantasyonu

Swagger UI: http://localhost:8080/swagger-ui.html

## Endpoints

- `GET /api/rooms` - Tüm odalar
- `GET /api/rooms/{id}` - Oda detayı
- `POST /api/bookings` - Rezervasyon oluştur
- `GET /api/bookings/{id}` - Rezervasyon detayı
- `POST /api/contact` - İletişim formu

## Veritabanı Migration

Flyway otomatik olarak migration'ları çalıştırır.
Migration dosyaları: `src/main/resources/db/migration/`

## Test

```bash
mvn test
```

## Build

```bash
mvn clean package
java -jar target/hotel-backend-1.0.0.jar
```
