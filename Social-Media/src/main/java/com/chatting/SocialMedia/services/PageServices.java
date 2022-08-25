package com.chatting.SocialMedia.services;

import com.chatting.SocialMedia.entity.Page;
import com.chatting.SocialMedia.payloads.PageDto;

import java.util.List;

public interface PageServices {

    //create page
    PageDto createPage(PageDto pageDto);

    //update page
    PageDto updatePage(PageDto pageDto, Integer pageId);

    //delete post
    void deletePage(Integer pageId);

    //get all pages
    List<PageDto> getAllPages();

    //get particular page
    PageDto getPageById(Integer pageId);
}
