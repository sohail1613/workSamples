package com.jawab.blog.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "posts")
@NoArgsConstructor
@Getter
@Setter
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer postId;
    @Column(name = "post_title", length = 15, nullable = false)
    private String title;
    @Column(length = 300)
    private String content;
    private String imageName;
    private Date addedDate;

    //relationship implementation
    @ManyToOne
    @JoinColumn(name = "category_id") //we can also change column name using Join annotation
    private Category category;

    @ManyToOne
    private User user;

}
