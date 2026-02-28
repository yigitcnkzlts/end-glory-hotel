package com.endglory.hotel.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.Contact;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("End Glory Hotel API")
                        .version("1.0")
                        .description("REST API for End Glory Hotel booking system")
                        .contact(new Contact()
                                .name("End Glory Hotel")
                                .email("info@endgloryhotel.com")));
    }
}
