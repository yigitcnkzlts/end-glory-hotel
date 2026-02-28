# Deployment Guide

## Docker Deployment

### 1. Ortam Değişkenlerini Ayarlayın

Backend için `.env` dosyası oluşturun:
```bash
cp backend/.env.example backend/.env
```

Frontend için `.env.local` dosyası oluşturun:
```bash
cp frontend/.env.local.example frontend/.env.local
```

### 2. Docker Compose ile Çalıştırın

```bash
docker-compose up -d
```

Servisler:
- Frontend: http://localhost:3000
- Backend: http://localhost:8080
- Swagger: http://localhost:8080/swagger-ui.html
- PostgreSQL: localhost:5432
- Nginx: http://localhost

### 3. Logları Kontrol Edin

```bash
docker-compose logs -f
```

### 4. Servisleri Durdurun

```bash
docker-compose down
```

## Production Deployment

### GitHub Actions ile CI/CD

1. GitHub repository secrets ekleyin:
   - `DOCKER_USERNAME`
   - `DOCKER_PASSWORD`
   - `SERVER_HOST`
   - `SERVER_USER`
   - `SSH_PRIVATE_KEY`

2. `main` branch'e push yapın:
```bash
git push origin main
```

3. GitHub Actions otomatik olarak:
   - Docker image'ları build eder
   - Docker Hub'a push eder
   - Production sunucuya deploy eder

### Manuel Production Deployment

1. Sunucuya bağlanın:
```bash
ssh user@your-server.com
```

2. Projeyi klonlayın:
```bash
git clone https://github.com/your-username/end-glory-hotel.git
cd end-glory-hotel
```

3. Environment dosyalarını ayarlayın

4. Docker Compose ile çalıştırın:
```bash
docker-compose -f docker-compose.prod.yml up -d
```

## SSL Sertifikası (Let's Encrypt)

```bash
# Certbot kurulumu
sudo apt-get install certbot python3-certbot-nginx

# Sertifika oluşturma
sudo certbot --nginx -d endgloryhotel.com -d www.endgloryhotel.com

# Otomatik yenileme
sudo certbot renew --dry-run
```

## Database Backup

```bash
# Backup oluşturma
docker exec hotel-db pg_dump -U postgres hotel_db > backup.sql

# Restore
docker exec -i hotel-db psql -U postgres hotel_db < backup.sql
```

## Monitoring

### Logs
```bash
# Backend logs
docker logs hotel-backend -f

# Frontend logs
docker logs hotel-frontend -f

# Nginx logs
docker logs hotel-nginx -f
```

### Health Checks
- Backend: http://localhost:8080/actuator/health
- Frontend: http://localhost:3000

## Troubleshooting

### Port çakışması
```bash
# Kullanılan portları kontrol edin
sudo lsof -i :3000
sudo lsof -i :8080
```

### Container yeniden başlatma
```bash
docker-compose restart backend
docker-compose restart frontend
```

### Database migration sorunları
```bash
# Migration'ları manuel çalıştırma
docker exec -it hotel-backend java -jar app.jar --spring.flyway.repair=true
```
