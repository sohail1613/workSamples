package com.chatting.SocialMedia.entity;

import javax.persistence.ManyToOne;

public class Post {
    private Integer postId;
    private String postDate;
    private String postContent;

    //relationship implementation
    @ManyToOne
    private User user;

    //getters and setters
    public Integer getPostId() {
        return postId;
    }

    public void setPostId(Integer postId) {
        this.postId = postId;
    }

    public String getPostDate() {
        return postDate;
    }

    public void setPostDate(String postDate) {
        this.postDate = postDate;
    }

    public String getPostContent() {
        return postContent;
    }

    public void setPostContent(String postContent) {
        this.postContent = postContent;
    }

}
