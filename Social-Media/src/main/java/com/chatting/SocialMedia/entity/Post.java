package com.chatting.SocialMedia.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "posts")
public class Post {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer postId;
    @Column(name = "post_date")
    private String postDate;
    @Column(name = "post_content", length = 250)
    private String postContent;

    //relationship implementation
    @ManyToOne
    private User user;


}
