package com.chatting.SocialMedia.repositories;

import com.chatting.SocialMedia.entity.Comment;
import com.chatting.SocialMedia.entity.Page;
import com.chatting.SocialMedia.entity.Post;
import com.chatting.SocialMedia.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
    List<Comment> findByUser(User user);
    List<Comment> findByPost(Post post);
}
