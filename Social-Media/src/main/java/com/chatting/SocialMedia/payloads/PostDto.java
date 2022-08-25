package com.chatting.SocialMedia.payloads;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PostDto {
    private Integer postId;
    private String postDate;
    private String postContent;

    private UserDto user; //relationship

}
