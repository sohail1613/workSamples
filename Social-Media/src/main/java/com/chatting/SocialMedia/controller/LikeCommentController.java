package com.chatting.SocialMedia.controller;

import com.chatting.SocialMedia.payloads.LikedCommentDto;
import com.chatting.SocialMedia.services.LikedCommentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/likes")
public class LikeCommentController {

    @Autowired
    private LikedCommentServices likedCommentServices;

    //get comments by user
    @GetMapping("/users/{userId}")
    public ResponseEntity<List<LikedCommentDto>> createLikes(@PathVariable Integer userId){
        List<LikedCommentDto> userLike = this.likedCommentServices.getLikeCommentByUser(userId);
        return new ResponseEntity<>(userLike, HttpStatus.OK);
    }

    //get liked comments by post
    @GetMapping("/{postId}")
    public ResponseEntity<List<LikedCommentDto>> likedByPost(@PathVariable Integer postId){
        List<LikedCommentDto> postLike = this.likedCommentServices.getLikeCommentById(postId);
        return new ResponseEntity<List<LikedCommentDto>>(postLike, HttpStatus.OK);
    }
}
