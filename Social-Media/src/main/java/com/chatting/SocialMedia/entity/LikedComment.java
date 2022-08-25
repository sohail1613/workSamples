package com.chatting.SocialMedia.entity;

import javax.persistence.ManyToOne;

public class LikedComment {
    @ManyToOne
    private User user;
    @ManyToOne
    private Comment comment;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Comment getComment() {
        return comment;
    }

    public void setComment(Comment comment) {
        this.comment = comment;
    }
}
