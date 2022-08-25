package com.chatting.SocialMedia.serviceImplementation;

import com.chatting.SocialMedia.entity.Page;
import com.chatting.SocialMedia.entity.User;
import com.chatting.SocialMedia.exceptions.ResourceNotFoundException;
import com.chatting.SocialMedia.payloads.PageDto;
import com.chatting.SocialMedia.repositories.PageRepository;
import com.chatting.SocialMedia.repositories.UserRepository;
import com.chatting.SocialMedia.services.PageServices;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PageServiceImplementation implements PageServices {

    @Autowired
    private PageRepository pageRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public PageDto createPage(PageDto pageDto) {
        Page page= this.modelMapper.map(pageDto, Page.class);
        Page addedPage = this.pageRepository.save(page);
        return this.modelMapper.map(addedPage, PageDto.class);
    }

    @Override
    public PageDto updatePage(PageDto pageDto, Integer pageId) {
        Page page = this.pageRepository.findById(pageId)
                .orElseThrow(()-> new ResourceNotFoundException("Page", "page id", pageId));
        page.setPageName(pageDto.getPageName());
        page.setPageContent(pageDto.getPageContent());

        Page updatePage = this.pageRepository.save(page);
        return this.modelMapper.map(updatePage, PageDto.class);
    }

    @Override
    public void deletePage(Integer pageId) {
        Page page = this.pageRepository.findById(pageId)
                .orElseThrow(()-> new ResourceNotFoundException("Page", "page id", pageId));
        this.pageRepository.delete(page);
    }

    @Override
    public List<PageDto> getAllPages() {
        List<Page> pages = this.pageRepository.findAll();
        List<PageDto> pageDtos = pages.stream().map(page -> this.pageToDto(page)).collect(Collectors.toList());
        return null;
    }


    @Override
    public PageDto getPageById(Integer pageId) {
        Page  page = this.pageRepository.findById(pageId)
                .orElseThrow(()-> new ResourceNotFoundException("Page", "page id", pageId));
        return this.modelMapper.map(page, PageDto.class);
    }


    //converting dto to page
    private Page dtoToPage(PageDto pageDto){
        Page page = this.modelMapper.map(pageDto, Page.class);
        return page;
    }
    //converting page to dto
    private PageDto pageToDto(Page page){
        PageDto pageDto = this.modelMapper.map(page, PageDto.class);
        return pageDto;
    }
}
