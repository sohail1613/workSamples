package com.chatting.SocialMedia.controller;

import com.chatting.SocialMedia.entity.PostLike;
import com.chatting.SocialMedia.payloads.PostLikeDto;
import com.chatting.SocialMedia.services.PostLikeServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("postLikes")
public class PostLikeController {

    @Autowired
    private PostLikeServices postLikeServices;

    //get postLiked by user
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<PostLikeDto>> getPostLikeByUser(@PathVariable Integer userId){
        List<PostLikeDto> userLike = this.postLikeServices.getPostLikeByUser(userId);
        return new ResponseEntity<List<PostLikeDto>>(userLike, HttpStatus.OK);
    }

    //get post by page
    @GetMapping("/page/{pageId}")
    public ResponseEntity<List<PostLikeDto>> getPostLikeByPage(@PathVariable Integer pageId){
        List<PostLikeDto> pageLike = this.postLikeServices.getPostLikeByPage(pageId);
        return new ResponseEntity<List<PostLikeDto>>(pageLike, HttpStatus.OK);
    }
}
