package com.chatting.SocialMedia.services;

import com.chatting.SocialMedia.entity.Post;
import com.chatting.SocialMedia.payloads.PostDto;

import java.util.List;

public interface PostServices {

    //create post
    PostDto createPost(PostDto postDto, Integer userId);

    //update post
    PostDto updatePost(PostDto postDto, Integer postId);

    //delete post
    void deletePost(Integer postId);

    //get all posts
    List<PostDto> getAllPosts();

    //get particular post
    PostDto getPostById(Integer postId);

    //get post by user
    List<PostDto> getPostsByUser(Integer UserId);


}
