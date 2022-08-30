package com.chatting.SocialMedia.repositories;

import com.chatting.SocialMedia.entity.Page;
import com.chatting.SocialMedia.entity.PostLike;
import com.chatting.SocialMedia.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface PostLikeRepository extends JpaRepository<PostLike, Integer> {
    List<PostLike> findByUser(User user);
    List<PostLike> findByPage(Page page);
}
