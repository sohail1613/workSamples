package com.chatting.SocialMedia.services;

import com.chatting.SocialMedia.payloads.PostLikeDto;

import java.util.List;

public interface PostLikeServices {

    //get all likedPosts by user
    List<PostLikeDto> getPostLikeByUser(Integer userId);

    //get all LikePosts by post
    List<PostLikeDto> getPostLikeByPage(Integer pageId);
}
