package com.chatting.SocialMedia.entity;

import javax.persistence.ManyToOne;

public class PostLike {
    @ManyToOne
    private User user;
    @ManyToOne
    private Post post;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }
}
