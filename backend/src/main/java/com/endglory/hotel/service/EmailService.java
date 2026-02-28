package com.endglory.hotel.service;

import com.endglory.hotel.model.Booking;
import com.endglory.hotel.model.ContactMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailService {
    private final JavaMailSender mailSender;

    public void sendBookingConfirmation(Booking booking) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(booking.getEmail());
            message.setSubject("Booking Confirmation - End Glory Hotel");
            message.setText(String.format(
                    "Dear %s %s,\n\nYour booking has been confirmed!\n\n" +
                    "Room: %s\nCheck-in: %s\nCheck-out: %s\nGuests: %d\nTotal: %s TRY\n\n" +
                    "Special Requests: %s\n\n" +
                    "We look forward to welcoming you to End Glory Hotel!\n\n" +
                    "Best regards,\nEnd Glory Hotel Team",
                    booking.getFirstName(), booking.getLastName(),
                    booking.getRoom().getName(), booking.getCheckIn(),
                    booking.getCheckOut(), booking.getGuests(), booking.getTotalPrice(),
                    booking.getSpecialRequests() != null ? booking.getSpecialRequests() : "None"
            ));
            mailSender.send(message);
        } catch (Exception e) {
            log.error("Failed to send booking confirmation email", e);
        }
    }

    public void sendBookingNotificationToHotel(Booking booking) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("reservations@endgloryhotel.com");
            message.setSubject("New Booking Received - #" + booking.getId());
            message.setText(String.format(
                    "NEW BOOKING ALERT\n\n" +
                    "Booking ID: %d\n" +
                    "Guest: %s %s\n" +
                    "Email: %s\n" +
                    "Phone: %s\n\n" +
                    "Room: %s\n" +
                    "Check-in: %s\n" +
                    "Check-out: %s\n" +
                    "Guests: %d\n" +
                    "Total Price: %s TRY\n\n" +
                    "Special Requests: %s\n\n" +
                    "Status: %s",
                    booking.getId(),
                    booking.getFirstName(), booking.getLastName(),
                    booking.getEmail(), booking.getPhone(),
                    booking.getRoom().getName(),
                    booking.getCheckIn(), booking.getCheckOut(),
                    booking.getGuests(), booking.getTotalPrice(),
                    booking.getSpecialRequests() != null ? booking.getSpecialRequests() : "None",
                    booking.getStatus()
            ));
            mailSender.send(message);
        } catch (Exception e) {
            log.error("Failed to send booking notification to hotel", e);
        }
    }

    public void sendContactNotification(ContactMessage contact) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("info@endgloryhotel.com");
            message.setSubject("New Contact Message: " + contact.getSubject());
            message.setText(String.format(
                    "From: %s\nEmail: %s\nPhone: %s\n\nMessage:\n%s",
                    contact.getName(), contact.getEmail(),
                    contact.getPhone(), contact.getMessage()
            ));
            mailSender.send(message);
        } catch (Exception e) {
            log.error("Failed to send contact notification", e);
        }
    }
}
