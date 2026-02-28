INSERT INTO rooms (name, description, capacity, price, size, bed_type, available, featured) VALUES
('Deluxe Room', 'Spacious room with city view', 2, 1500.00, 35, 'King', true, true),
('Suite Room', 'Luxury suite with separate living area', 4, 2500.00, 60, 'King + Sofa', true, true),
('Standard Room', 'Comfortable room with garden view', 2, 1000.00, 25, 'Queen', true, false);

INSERT INTO room_amenities (room_id, amenity) VALUES
(1, 'WiFi'), (1, 'TV'), (1, 'Mini Bar'), (1, 'Air Conditioning'),
(2, 'WiFi'), (2, 'TV'), (2, 'Mini Bar'), (2, 'Air Conditioning'), (2, 'Jacuzzi'),
(3, 'WiFi'), (3, 'TV'), (3, 'Air Conditioning');
