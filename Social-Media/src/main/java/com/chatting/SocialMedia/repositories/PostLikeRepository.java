package com.chatting.SocialMedia.repositories;

import com.chatting.SocialMedia.entity.PostLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface PostLikeRepository extends JpaRepository<PostLike, Integer> {
}
