package com.endglory.hotel.repository;

import com.endglory.hotel.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByEmail(String email);
    
    @Query("SELECT b FROM Booking b WHERE b.room.id = :roomId " +
           "AND b.status != 'CANCELLED' " +
           "AND ((b.checkIn <= :checkOut AND b.checkOut >= :checkIn))")
    List<Booking> findConflictingBookings(Long roomId, LocalDate checkIn, LocalDate checkOut);
}
