package com.chatting.SocialMedia.repositories;

import com.chatting.SocialMedia.entity.Comment;
import com.chatting.SocialMedia.entity.LikedComment;
import com.chatting.SocialMedia.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentLikeRepository extends JpaRepository<LikedComment, Integer> {
    List<LikedComment> findByUser(User user);
    List<LikedComment> findByComment(Comment comment);
}
