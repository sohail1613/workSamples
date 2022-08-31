package com.chatting.SocialMedia.payloads;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
//it is used to send message, on operations
public class ApiResponse {
    private String message;
    private boolean success;


}
