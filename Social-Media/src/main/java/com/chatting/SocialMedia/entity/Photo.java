package com.chatting.SocialMedia.entity;

import javax.persistence.ManyToOne;

public class Photo {
    private Integer photoId;
    private String imageContent;
    @ManyToOne
    private Post post;

    public Integer getPhotoId() {
        return photoId;
    }

    public void setPhotoId(Integer photoId) {
        this.photoId = photoId;
    }

    public String getImageContent() {
        return imageContent;
    }

    public void setImageContent(String imageContent) {
        this.imageContent = imageContent;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }
}
