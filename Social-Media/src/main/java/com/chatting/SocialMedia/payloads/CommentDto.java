package com.chatting.SocialMedia.payloads;

import com.chatting.SocialMedia.entity.Post;
import com.chatting.SocialMedia.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
public class CommentDto {
    private Integer commentId;
    private Date committedDate;
    private String commentContent;

    private User user;
    private Post post;
}
