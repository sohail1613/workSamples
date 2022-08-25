package com.chatting.SocialMedia.payloads;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserDto {
    private Integer userId;
    private String userName;
    private String userEmail;
    private Integer userTelephone;
    private String userDob;
    private String userGender;
    private String userAddress;

    private PostDto post;

}
