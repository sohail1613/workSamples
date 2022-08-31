package com.chatting.SocialMedia.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
@Getter
@Setter
@NoArgsConstructor
public class LikedComment {
    @ManyToOne
    private User user;
    @ManyToOne
    private Comment comment;

}
