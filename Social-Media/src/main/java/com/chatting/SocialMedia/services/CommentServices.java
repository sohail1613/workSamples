package com.chatting.SocialMedia.services;

import com.chatting.SocialMedia.entity.Comment;
import com.chatting.SocialMedia.payloads.CommentDto;

import java.util.List;

public interface CommentServices {

    //create
    CommentDto createComment(CommentDto commentDto);

    //update comment
    CommentDto updateComment(CommentDto commentDto, Integer commentId);

    //delete
    void deleteComment(Integer commentId);

    //get all comments
    List<CommentDto> getAllComments();

    //get comment by commentId
    CommentDto getCommentById(Integer commentId);

    //get comment by userId
    List<CommentDto> getCommentByUser(Integer userId);

    //get commentList by postId
    List<CommentDto> getCommentByPost(Integer postId);
}
