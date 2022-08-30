package com.chatting.SocialMedia.serviceImplementation;

import com.chatting.SocialMedia.entity.Comment;
import com.chatting.SocialMedia.entity.Post;
import com.chatting.SocialMedia.entity.User;
import com.chatting.SocialMedia.exceptions.ResourceNotFoundException;
import com.chatting.SocialMedia.payloads.CommentDto;
import com.chatting.SocialMedia.repositories.CommentRepository;
import com.chatting.SocialMedia.repositories.PostRepository;
import com.chatting.SocialMedia.repositories.UserRepository;
import com.chatting.SocialMedia.services.CommentServices;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.sql.Date;
import java.util.List;
import java.util.stream.Collectors;

public class CommentServicesImplementation implements CommentServices {
    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PostRepository postRepository;

    @Override
    public CommentDto createComment(CommentDto commentDto, Integer postId) {
        Post post = this.postRepository.findById(postId)
                .orElseThrow(()-> new ResourceNotFoundException("Post", "post id", postId));
        Comment comment = this.modelMapper.map(commentDto, Comment.class);
        comment.setPost(post);
        Comment savedComment = this.commentRepository.save(comment);
        return this.modelMapper.map(savedComment, CommentDto.class);
    }

    @Override
    public CommentDto updateComment(CommentDto commentDto, Integer commentId) {
        Comment comment = this.commentRepository.findById(commentId)
                .orElseThrow(()-> new ResourceNotFoundException("Comment", "comment id", commentId));
        comment.setCommentContent(comment.getCommentContent());
        comment.setCommittedDate(new Date(System.currentTimeMillis()));

        Comment updatedComment = this.commentRepository.save(comment);
        return this.modelMapper.map(updatedComment, CommentDto.class);
    }

    @Override
    public void deleteComment(Integer commentId) {
        Comment comment = this.commentRepository.findById(commentId)
                .orElseThrow(()-> new ResourceNotFoundException("Comment", "comment id", commentId));
        this.commentRepository.delete(comment);
    }

    @Override
    public List<CommentDto> getAllComments() {
        List<Comment> comments = this.commentRepository.findAll();
        List<CommentDto> commentDtos = comments.stream().map(comment -> this.commentToDto(comment)).collect(Collectors.toList());
        return commentDtos;
    }

    @Override
    public CommentDto getCommentById(Integer commentId) {
        Comment comment = this.commentRepository.findById(commentId)
                .orElseThrow(()-> new ResourceNotFoundException("Comment", "comment id", commentId));
        return this.modelMapper.map(comment, CommentDto.class);
    }

    @Override
    public List<CommentDto> getCommentByUser(Integer userId) {
        User user = this.userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User", "user id", userId));
        List<Comment> comments = this.commentRepository.findByUser(user);
        List<CommentDto> commentDtos = comments.stream().map(comment -> this.modelMapper.map(comments, CommentDto.class)).collect(Collectors.toList());
        return commentDtos;
    }

    @Override
    public List<CommentDto> getCommentByPost(Integer postId) {
        Post post = this.postRepository.findById(postId)
                .orElseThrow(()-> new ResourceNotFoundException("Post", "post id", postId));
        List<Comment> comments = this.commentRepository.findByPost(post);
        List<CommentDto> commentDtos = comments.stream().map(comment -> this.modelMapper.map(comment, CommentDto.class)).collect(Collectors.toList());
        return commentDtos;
    }

    //converting methods
    private CommentDto commentToDto(Comment comment){
        CommentDto commentDto = this.modelMapper.map(comment, CommentDto.class);
        return commentDto;
    }
    private Comment dtoToComment(CommentDto commentDto){
        Comment comment = this.modelMapper.map(commentDto, Comment.class);
        return comment;
    }
}
