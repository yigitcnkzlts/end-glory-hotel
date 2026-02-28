package com.endglory.hotel.repository;

import com.endglory.hotel.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.math.BigDecimal;
import java.util.List;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
    List<Room> findByFeaturedTrue();
    List<Room> findByAvailableTrue();
    
    @Query("SELECT r FROM Room r WHERE r.available = true " +
           "AND (:minPrice IS NULL OR r.price >= :minPrice) " +
           "AND (:maxPrice IS NULL OR r.price <= :maxPrice) " +
           "AND (:capacity IS NULL OR r.capacity >= :capacity)")
    List<Room> findByFilters(BigDecimal minPrice, BigDecimal maxPrice, Integer capacity);
}
