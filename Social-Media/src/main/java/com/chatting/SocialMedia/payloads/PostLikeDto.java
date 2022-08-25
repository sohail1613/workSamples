package com.chatting.SocialMedia.payloads;

import com.chatting.SocialMedia.entity.Post;
import com.chatting.SocialMedia.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PostLikeDto {
    private User user;
    private Post post;
}
