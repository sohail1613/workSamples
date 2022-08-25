package com.chatting.SocialMedia.controller;

import com.chatting.SocialMedia.payloads.ApiResponse;
import com.chatting.SocialMedia.payloads.PageDto;
import com.chatting.SocialMedia.services.PageServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/pages")
public class PageController {

    @Autowired
    private PageServices pageServices;

    //create
    @PostMapping("/save")
    public ResponseEntity<PageDto> createPage(@RequestBody PageDto pageDto){
        PageDto createPage = this.pageServices.createPage(pageDto);
        return new ResponseEntity<PageDto>(createPage, HttpStatus.CREATED);
    }

    //update
    @PutMapping("/update/{pageId}")
    public ResponseEntity<PageDto> updatePage(@RequestBody PageDto pageDto, @PathVariable Integer pageId){
        PageDto updatePage = this.pageServices.updatePage(pageDto, pageId);
        return new ResponseEntity<PageDto>(updatePage, OK);
    }

    //delete page
    @DeleteMapping("/delete/{pageId}")
    public ApiResponse deletePage(@PathVariable Integer pageId){
        this.pageServices.deletePage(pageId);
        return new ApiResponse("Page deleted successfully", true);
    }

    //get all pages
    @GetMapping("/pages")
    public ResponseEntity<List<PageDto>> getAllPages(){
        List<PageDto> pageDtos = this.pageServices.getAllPages();
        return new ResponseEntity<List<PageDto>>(pageDtos, OK);
    }

    //get particular page
    @GetMapping("/pages/{pageId}")
    public ResponseEntity<PageDto> getPageById(@PathVariable Integer pageId){
        PageDto pageDto = this.pageServices.getPageById(pageId);
        return new ResponseEntity<PageDto>(pageDto, HttpStatus.OK);
    }
}
