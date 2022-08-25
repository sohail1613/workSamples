package com.chatting.SocialMedia.controller;

import com.chatting.SocialMedia.services.PageLikeServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/likes")
public class PageLikeController {

    @Autowired
    private PageLikeServices pageLikeServices;
}
