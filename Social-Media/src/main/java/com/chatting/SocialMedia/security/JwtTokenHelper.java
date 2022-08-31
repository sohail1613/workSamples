package com.chatting.SocialMedia.security;

import org.springframework.stereotype.Component;

@Component
public class JwtTokenHelper {
    public static final long JWT_TOKEN_VALIDITY = 5*60*60;
    private String secret = "jwtTokenKey";

    //retrieve userName from jwt token
    public String getUserNameFromToken(St)
}
