package com.chatting.SocialMedia.payloads;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PageDto {
    private Integer pageId;
    private String pageName;
    private String pageContent;
}
