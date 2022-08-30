package com.chatting.SocialMedia.controller;

import com.chatting.SocialMedia.payloads.PageLikeDto;
import com.chatting.SocialMedia.services.PageLikeServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/likes")
public class PageLikeController {

    @Autowired
    private PageLikeServices pageLikeServices;

    //get all liked pages
    @GetMapping("/all/pages")
    public ResponseEntity<List<PageLikeDto>> getAllLikedPages(){
        return ResponseEntity.ok(this.pageLikeServices.getAllLikesPages());
    }

    //get all liked pages by user
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<PageLikeDto>> getPagesByUser(@PathVariable Integer userId){
        List<PageLikeDto> userLikes = this.pageLikeServices.getPageLikeByUser(userId);
        return new ResponseEntity<List<PageLikeDto>>(userLikes, HttpStatus.OK);
    }

    //get all likes by pages
    @GetMapping("/page/{pageId}")
    public ResponseEntity<List<PageLikeDto>> getPagesByPageId(@PathVariable Integer pageId){
        List<PageLikeDto> pageLikeDtos = this.pageLikeServices.getPageLikeByPage(pageId);
        return new ResponseEntity<List<PageLikeDto>>(pageLikeDtos, HttpStatus.OK);
    }
}
