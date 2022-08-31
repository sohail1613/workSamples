package com.chatting.SocialMedia.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Page {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pageId;
    private String pageName;
    private String pageContent;


    //relationship implementation
    @OneToMany()
    private List<PageLikes> pageLikes = new ArrayList<>();
}
