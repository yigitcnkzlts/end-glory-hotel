package com.endglory.hotel.service;

import com.endglory.hotel.dto.ContactRequest;
import com.endglory.hotel.model.ContactMessage;
import com.endglory.hotel.repository.ContactMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactService {
    private final ContactMessageRepository contactMessageRepository;
    private final EmailService emailService;

    public void saveContactMessage(ContactRequest request) {
        ContactMessage message = new ContactMessage();
        message.setName(request.getName());
        message.setEmail(request.getEmail());
        message.setPhone(request.getPhone());
        message.setSubject(request.getSubject());
        message.setMessage(request.getMessage());
        
        contactMessageRepository.save(message);
        emailService.sendContactNotification(message);
    }
}
