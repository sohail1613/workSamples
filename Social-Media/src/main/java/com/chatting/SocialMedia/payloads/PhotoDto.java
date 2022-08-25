package com.chatting.SocialMedia.payloads;

import com.chatting.SocialMedia.entity.Post;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PhotoDto {
    private Integer photoId;
    private String imageContent;

    private Post post;
}
