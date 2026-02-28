package com.endglory.hotel.controller;

import com.endglory.hotel.model.Room;
import com.endglory.hotel.service.RoomService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/rooms")
@RequiredArgsConstructor
@Tag(name = "Rooms", description = "Room management endpoints")
@CrossOrigin(origins = "*")
public class RoomController {
    private final RoomService roomService;

    @GetMapping
    @Operation(summary = "Get all rooms with optional filters")
    public ResponseEntity<List<Room>> getAllRooms(
            @RequestParam(required = false) BigDecimal minPrice,
            @RequestParam(required = false) BigDecimal maxPrice,
            @RequestParam(required = false) Integer capacity,
            @RequestParam(required = false) Boolean featured
    ) {
        if (featured != null && featured) {
            return ResponseEntity.ok(roomService.getFeaturedRooms());
        }
        return ResponseEntity.ok(roomService.getRoomsByFilters(minPrice, maxPrice, capacity));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get room by ID")
    public ResponseEntity<Room> getRoomById(@PathVariable Long id) {
        return ResponseEntity.ok(roomService.getRoomById(id));
    }
}
