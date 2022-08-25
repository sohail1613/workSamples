package com.chatting.SocialMedia.repositories;

import com.chatting.SocialMedia.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
}
