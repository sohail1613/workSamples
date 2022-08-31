package com.chatting.SocialMedia.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Photo {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer photoId;
    private String imageContent;
    @ManyToOne
    private Post post;

}
