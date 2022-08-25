package com.chatting.SocialMedia.serviceImplementation;

import com.chatting.SocialMedia.entity.Post;
import com.chatting.SocialMedia.entity.User;
import com.chatting.SocialMedia.exceptions.ResourceNotFoundException;
import com.chatting.SocialMedia.payloads.PostDto;
import com.chatting.SocialMedia.repositories.PostRepository;
import com.chatting.SocialMedia.repositories.UserRepository;
import com.chatting.SocialMedia.services.PostServices;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostServiceImplementation implements PostServices {

    @Autowired
    private PostRepository postRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;


    @Override
    public PostDto createPost(PostDto postDto, Integer userId) {
        User user = this.userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User", "user id", userId));
        Post post = this.modelMapper.map(postDto, Post.class);
        post.setPostDate(postDto.getPostDate());
        post.setPostContent(postDto.getPostContent());
        Post updatedPost = this.postRepository.save(post);
        return this.modelMapper.map(updatedPost, PostDto.class);
    }

    @Override
    public PostDto updatePost(PostDto postDto, Integer postId) {
        Post post = this.postRepository.findById(postId)
                .orElseThrow(()-> new ResourceNotFoundException("Post", "post id", postId));
        post.setPostDate(postDto.getPostDate());
        post.setPostContent(postDto.getPostContent());

        Post updatedPost = this.postRepository.save(post);
        return this.modelMapper.map(updatedPost, PostDto.class);
    }

    @Override
    public void deletePost(Integer postId) {
        Post post = this.postRepository.findById(postId)
                .orElseThrow(()-> new ResourceNotFoundException("Post", "post id", postId));
        this.postRepository.delete(post);
    }

    @Override
    public List<PostDto> getAllPosts() {
        List<Post> posts = this.postRepository.findAll();
        List<PostDto> postDtos = posts.stream().map(post -> this.postToDto(post)).collect(Collectors.toList());
        return postDtos;
    }

    @Override
    public PostDto getPostById(Integer postId) {
        Post post = this.postRepository.findById(postId)
                .orElseThrow(()-> new ResourceNotFoundException("Post", "post id", postId));
        return this.modelMapper.map(post, PostDto.class);
    }

    @Override
    public List<PostDto> getPostsByUser(Integer userId) {
        User user = this.userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User", "user id", userId));
        List<Post> posts = this.postRepository.findByUser(user);
        List<PostDto> postDtos = posts.stream().map(post -> this.modelMapper.map(posts, PostDto.class)).collect(Collectors.toList());
        return postDtos;
    }

    @Override
    public List<PostDto> searchPosts(String keyword) {
        return null;
    }

    //converter
    private Post dtoToPost(PostDto postDto){
        Post post = this.modelMapper.map(postDto, Post.class);
        return post;
    }

    private PostDto postToDto(Post post){
        PostDto postDto = this.modelMapper.map(post, PostDto.class);
        return postDto;
    }
}
