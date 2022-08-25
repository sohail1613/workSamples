package com.chatting.SocialMedia.serviceImplementation;


import com.chatting.SocialMedia.entity.Page;
import com.chatting.SocialMedia.entity.PageLikes;
import com.chatting.SocialMedia.entity.User;
import com.chatting.SocialMedia.exceptions.ResourceNotFoundException;
import com.chatting.SocialMedia.payloads.PageLikeDto;
import com.chatting.SocialMedia.repositories.PageLikeRepository;
import com.chatting.SocialMedia.repositories.PageRepository;
import com.chatting.SocialMedia.repositories.UserRepository;
import com.chatting.SocialMedia.services.PageLikeServices;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PageLikeServiceImplementation implements PageLikeServices{

    @Autowired
    private PageLikeRepository pageLikeRepository;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PageRepository pageRepository;

    @Autowired
    private ModelMapper modelMapper;


    @Override
    public List<PageLikeDto> getAllLikesPages() {
        return null;
    }

    @Override
    public List<PageLikeDto> getPageLikeByUser(Integer userId) {
        User user = this.userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User", "user id", userId));
        List<PageLikes> pages = this.pageLikeRepository.findByUser(user);
        List<PageLikeDto> pageLikeDtos = pages.stream().map((pageLikes ->
                this.modelMapper.map(pages, PageLikeDto.class))).collect(Collectors.toList());
        return pageLikeDtos;
    }

    @Override
    public List<PageLikeDto> getPageLikeByPage(Integer pageId) {
        Page page = this.pageRepository.findById(pageId)
                .orElseThrow(()-> new ResourceNotFoundException("Page", "page id", pageId));
        List<PageLikes> pages = this.pageLikeRepository.findByPage(page);
        List<PageLikeDto> pageLikeDtos = pages.stream().map((pageLikes ->
                this.modelMapper.map(pages, PageLikeDto.class))).collect(Collectors.toList());
        return pageLikeDtos;
    }
}
