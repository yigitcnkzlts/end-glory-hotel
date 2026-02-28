package com.endglory.hotel.controller;

import com.endglory.hotel.dto.ContactRequest;
import com.endglory.hotel.service.ContactService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
@Tag(name = "Contact", description = "Contact form endpoints")
@CrossOrigin(origins = "*")
public class ContactController {
    private final ContactService contactService;

    @PostMapping
    @Operation(summary = "Submit contact form")
    public ResponseEntity<String> submitContact(@Valid @RequestBody ContactRequest request) {
        contactService.saveContactMessage(request);
        return ResponseEntity.ok("Message received successfully");
    }
}
