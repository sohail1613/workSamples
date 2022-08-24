package com.jawab.blog.payloads;

import com.jawab.blog.entity.Category;
import com.jawab.blog.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
public class PostDto {
    private Integer postId;
    private String title;
    private String content;
    private String imageName;
    private Date addedDate;

    private CategoryDto category;
    private UserDto user;
}
