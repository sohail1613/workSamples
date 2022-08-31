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
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer commentId;
    private Date committedDate;
    private String commentContent;

    @ManyToOne
    private Post post;
    @ManyToOne
    private User user;

}
