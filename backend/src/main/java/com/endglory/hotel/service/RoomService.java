package com.endglory.hotel.service;

import com.endglory.hotel.model.Room;
import com.endglory.hotel.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RoomService {
    private final RoomRepository roomRepository;

    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    public Room getRoomById(Long id) {
        return roomRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Room not found"));
    }

    public List<Room> getFeaturedRooms() {
        return roomRepository.findByFeaturedTrue();
    }

    public List<Room> getRoomsByFilters(BigDecimal minPrice, BigDecimal maxPrice, Integer capacity) {
        return roomRepository.findByFilters(minPrice, maxPrice, capacity);
    }
}
