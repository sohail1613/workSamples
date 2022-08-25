package com.chatting.SocialMedia.repositories;

import com.chatting.SocialMedia.entity.LikedComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentLikeRepository extends JpaRepository<LikedComment, Integer> {
}
