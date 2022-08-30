package com.chatting.SocialMedia.serviceImplementation;

import com.chatting.SocialMedia.entity.Page;
import com.chatting.SocialMedia.entity.Post;
import com.chatting.SocialMedia.entity.PostLike;
import com.chatting.SocialMedia.entity.User;
import com.chatting.SocialMedia.exceptions.ResourceNotFoundException;
import com.chatting.SocialMedia.payloads.PostLikeDto;
import com.chatting.SocialMedia.repositories.PageRepository;
import com.chatting.SocialMedia.repositories.PostLikeRepository;
import com.chatting.SocialMedia.repositories.UserRepository;
import com.chatting.SocialMedia.services.PostLikeServices;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.stream.Collectors;

public class PostLikeServicesImplementation implements PostLikeServices {

    @Autowired
    private PostLikeRepository postLikeRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PageRepository pageRepository;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<PostLikeDto> getPostLikeByUser(Integer userId) {
        User user = this.userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User", "user id", userId));
        List<PostLike> postLikes = this.postLikeRepository.findByUser(user);
        List<PostLikeDto> updated = postLikes.stream().map(postLike -> this.modelMapper.map(postLikes, PostLikeDto.class)).collect(Collectors.toList());
        return updated;
    }

    @Override
    public List<PostLikeDto> getPostLikeByPage(Integer pageId) {
        Page page = this.pageRepository.findById(pageId)
                .orElseThrow(()-> new ResourceNotFoundException("Page", "page id", pageId));
        List<PostLike> postLikes = this.postLikeRepository.findByPage(page);
        List<PostLikeDto> updated = postLikes.stream().map(postLike -> this.modelMapper.map(postLikes, PostLikeDto.class)).collect(Collectors.toList());
        return updated;
    }
}
