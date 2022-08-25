package com.chatting.SocialMedia.services;

import com.chatting.SocialMedia.payloads.LikedCommentDto;

import java.util.List;

public interface LikedCommentServices {

    //get likedComment by userId
    List<LikedCommentDto> getLikeCommentByUser(Integer userId);

    //get LikeComment by commentId
    List<LikedCommentDto> getLikeCommentById(Integer commentId);
}
