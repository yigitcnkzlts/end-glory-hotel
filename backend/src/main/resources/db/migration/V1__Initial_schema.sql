CREATE TABLE rooms (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    capacity INTEGER NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    size INTEGER,
    bed_type VARCHAR(100),
    available BOOLEAN DEFAULT true,
    featured BOOLEAN DEFAULT false
);

CREATE TABLE room_images (
    room_id BIGINT NOT NULL,
    image_url VARCHAR(500),
    FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE
);

CREATE TABLE room_amenities (
    room_id BIGINT NOT NULL,
    amenity VARCHAR(255),
    FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE
);

CREATE TABLE bookings (
    id BIGSERIAL PRIMARY KEY,
    room_id BIGINT NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    guests INTEGER NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    special_requests TEXT,
    total_price DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'PENDING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (room_id) REFERENCES rooms(id)
);

CREATE TABLE contact_messages (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    read BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_bookings_dates ON bookings(check_in, check_out);
CREATE INDEX idx_bookings_email ON bookings(email);
