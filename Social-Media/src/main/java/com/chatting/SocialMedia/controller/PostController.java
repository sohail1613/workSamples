package com.chatting.SocialMedia.controller;

import com.chatting.SocialMedia.entity.Post;
import com.chatting.SocialMedia.payloads.ApiResponse;
import com.chatting.SocialMedia.payloads.PostDto;
import com.chatting.SocialMedia.payloads.UserDto;
import com.chatting.SocialMedia.services.PostServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PostController {

    @Autowired
    private PostServices postServices;

    //create post
    @PutMapping("/user/{userId}/posts")
    public ResponseEntity<PostDto> createPost(@RequestBody PostDto postDto, @RequestBody Integer userId){
        PostDto createPost = this.postServices.createPost(postDto, userId);
        return new ResponseEntity<>(createPost, HttpStatus.OK);
    }

    //update
    @PutMapping("/update/{postId}")
    public ResponseEntity<PostDto> updatePost(@RequestBody PostDto postDto, @RequestBody Integer postId){
        PostDto updatePost = this.postServices.updatePost(postDto, postId);
        return new ResponseEntity<PostDto>(updatePost, HttpStatus.OK);
    }

    //delete post
    @DeleteMapping("/delete/{postId}")
    public ResponseEntity<ApiResponse> deletePost(@PathVariable Integer postId){
        this.postServices.deletePost(postId);
        return new ResponseEntity<ApiResponse>(new ApiResponse("Post deleted successfully", true), HttpStatus.OK);
    }

    //get all posts
    @GetMapping("/posts")
    public ResponseEntity<List<PostDto>> getAllPosts(){
        return ResponseEntity.ok(this.postServices.getAllPosts());
    }

    //get posts by postId
    @GetMapping("/post/{postId}")
    public ResponseEntity<PostDto> getPostById(@PathVariable Integer postId){
        PostDto post = this.postServices.getPostById(postId);
        return new ResponseEntity<PostDto>(post, HttpStatus.OK);
    }

    //get post by userId
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<PostDto>> getPostByUser(@PathVariable Integer userId){
        List<PostDto> userDto = this.postServices.getPostsByUser(userId);
        return new ResponseEntity<List<PostDto>>(userDto, HttpStatus.OK);
    }
}
