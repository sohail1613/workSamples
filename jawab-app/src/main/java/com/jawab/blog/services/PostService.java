package com.jawab.blog.services;

import com.jawab.blog.entity.Post;
import com.jawab.blog.payloads.PostDto;

import java.util.List;

public interface PostService {

    //create
    PostDto createPost(PostDto postDto, Integer postId, Integer CategoryId);

    //update
    PostDto updatePost(PostDto postDto, Integer postId);

    //delete
    void deletePost(Integer postId);

    //getALlPost
    List<PostDto> getAllPost(Integer pageNumber, Integer pageSize);

    //get particular post
    PostDto getPostById(Integer postId);

    //get post by category
    List<PostDto> getPostsByCategory(Integer categoryId);

    //get all posts by user
    List<PostDto> getPostsByUser(Integer userId);

    //search posts
    List<PostDto> searchPosts(String keyword);

}
