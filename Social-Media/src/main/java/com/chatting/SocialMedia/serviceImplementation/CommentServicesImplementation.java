package com.chatting.SocialMedia.serviceImplementation;

import com.chatting.SocialMedia.payloads.CommentDto;
import com.chatting.SocialMedia.services.CommentServices;

import java.util.List;

public class CommentServicesImplementation implements CommentServices {
    @Override
    public CommentDto createComment(CommentDto commentDto) {
        return null;
    }

    @Override
    public CommentDto updateComment(CommentDto commentDto, Integer commentId) {
        return null;
    }

    @Override
    public void deleteComment(Integer commentId) {

    }

    @Override
    public List<CommentDto> getAllComments() {
        return null;
    }

    @Override
    public CommentDto getCommentById(Integer commentId) {
        return null;
    }

    @Override
    public List<CommentDto> getCommentByUser(Integer userId) {
        return null;
    }

    @Override
    public List<CommentDto> getCommentByPost(Integer postId) {
        return null;
    }
}
