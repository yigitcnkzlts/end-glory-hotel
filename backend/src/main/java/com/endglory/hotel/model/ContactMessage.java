package com.endglory.hotel.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "contact_messages")
@Data
public class ContactMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false)
    private String subject;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String message;

    private Boolean read = false;
    private LocalDateTime createdAt = LocalDateTime.now();
}
