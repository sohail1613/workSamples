package com.chatting.SocialMedia.serviceImplementation;

import com.chatting.SocialMedia.entity.Comment;
import com.chatting.SocialMedia.entity.LikedComment;
import com.chatting.SocialMedia.entity.User;
import com.chatting.SocialMedia.exceptions.ResourceNotFoundException;
import com.chatting.SocialMedia.payloads.LikedCommentDto;
import com.chatting.SocialMedia.repositories.CommentLikeRepository;
import com.chatting.SocialMedia.repositories.CommentRepository;
import com.chatting.SocialMedia.repositories.UserRepository;
import com.chatting.SocialMedia.services.LikedCommentServices;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.stream.Collectors;

public class LikedCommentServicesImplementation implements LikedCommentServices {

    @Autowired
    private CommentLikeRepository commentLikeRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<LikedCommentDto> getLikeCommentByUser(Integer userId) {
        User user = this.userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User", "user id", userId));
        List<LikedComment> likedComments = this.commentLikeRepository.findByUser(user);
        List<LikedCommentDto> likedCommentDtos= likedComments.stream().map(likedComment -> this.modelMapper.map(likedComments, LikedCommentDto.class)).collect(Collectors.toList());
        return likedCommentDtos;
    }

    @Override
    public List<LikedCommentDto> getLikeCommentById(Integer commentId) {
        Comment comment = this.commentRepository.findById(commentId)
                .orElseThrow(()-> new ResourceNotFoundException("Comment", "comment id", commentId));
        List<LikedComment> likedComments = this.commentLikeRepository.findByComment(comment);
        List<LikedCommentDto>likedCommentDtos = likedComments.stream().map((likedComment -> this.modelMapper.map(likedComments, LikedCommentDto.class))).collect(Collectors.toList());
        return likedCommentDtos;
    }
}
