package com.chatting.SocialMedia.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.ManyToOne;

@Getter
@Setter
@NoArgsConstructor
public class PostLike {
    @ManyToOne
    private User user;
    @ManyToOne
    private Post post;

}
