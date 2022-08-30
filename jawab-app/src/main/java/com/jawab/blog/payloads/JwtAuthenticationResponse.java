package com.jawab.blog.payloads;

import lombok.Data;

@Data
public class JwtAuthenticationResponse {
    private String token;
}
