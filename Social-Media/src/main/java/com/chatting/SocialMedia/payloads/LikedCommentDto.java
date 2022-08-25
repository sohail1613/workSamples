package com.chatting.SocialMedia.payloads;

import com.chatting.SocialMedia.entity.Comment;
import com.chatting.SocialMedia.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class LikedCommentDto {
    private User user;
    private Comment comment;
}
