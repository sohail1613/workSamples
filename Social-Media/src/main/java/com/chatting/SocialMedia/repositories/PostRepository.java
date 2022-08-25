package com.chatting.SocialMedia.repositories;

import com.chatting.SocialMedia.entity.Post;
import com.chatting.SocialMedia.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Integer> {
    List<Post> findByUser(User user);
}
