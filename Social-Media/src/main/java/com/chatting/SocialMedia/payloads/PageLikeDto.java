package com.chatting.SocialMedia.payloads;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
public class PageLikeDto {
    private UserDto userDto;
    private PageDto pageDto;
}
