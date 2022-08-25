package com.chatting.SocialMedia.services;

import com.chatting.SocialMedia.payloads.PageLikeDto;

import java.util.List;

public interface PageLikeServices {

    //get all liked
    List<PageLikeDto> getAllLikesPages();

    //get like pages by user
    List<PageLikeDto> getPageLikeByUser(Integer userId);

    //get likes pages by pageId
    List<PageLikeDto> getPageLikeByPage(Integer pageId);


}
