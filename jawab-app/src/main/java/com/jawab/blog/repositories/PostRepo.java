package com.jawab.blog.repositories;

import com.jawab.blog.entity.Category;
import com.jawab.blog.entity.Post;
import com.jawab.blog.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepo extends JpaRepository<Post, Integer> {

    //it is custom finder method
    List<Post> findByUser(User user);
    List<Post> findByCategory(Category category);

}
