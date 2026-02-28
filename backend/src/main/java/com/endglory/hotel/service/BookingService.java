package com.endglory.hotel.service;

import com.endglory.hotel.dto.BookingRequest;
import com.endglory.hotel.model.Booking;
import com.endglory.hotel.model.Room;
import com.endglory.hotel.repository.BookingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.math.BigDecimal;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingService {
    private final BookingRepository bookingRepository;
    private final RoomService roomService;
    private final EmailService emailService;

    @Transactional
    public Booking createBooking(BookingRequest request) {
        Room room = roomService.getRoomById(request.getRoomId());
        
        List<Booking> conflicts = bookingRepository.findConflictingBookings(
                request.getRoomId(), request.getCheckIn(), request.getCheckOut());
        
        if (!conflicts.isEmpty()) {
            throw new RuntimeException("Room is not available for selected dates");
        }

        long nights = ChronoUnit.DAYS.between(request.getCheckIn(), request.getCheckOut());
        BigDecimal totalPrice = room.getPrice().multiply(BigDecimal.valueOf(nights));

        Booking booking = new Booking();
        booking.setRoom(room);
        booking.setCheckIn(request.getCheckIn());
        booking.setCheckOut(request.getCheckOut());
        booking.setGuests(request.getGuests());
        booking.setFirstName(request.getFirstName());
        booking.setLastName(request.getLastName());
        booking.setEmail(request.getEmail());
        booking.setPhone(request.getPhone());
        booking.setSpecialRequests(request.getSpecialRequests());
        booking.setTotalPrice(totalPrice);

        Booking saved = bookingRepository.save(booking);
        
        // Send confirmation email to customer
        emailService.sendBookingConfirmation(saved);
        
        // Send notification email to hotel
        emailService.sendBookingNotificationToHotel(saved);
        
        return saved;
    }

    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
    }
}
