package com.jawab.blog.payloads;

import lombok.Data;

@Data
public class JwtAuthenticationRequest {
    private String userName;  //consider email as userName
    private String password;
}
