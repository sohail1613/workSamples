package com.chatting.SocialMedia.repositories;

import com.chatting.SocialMedia.entity.Page;
import com.chatting.SocialMedia.entity.PageLikes;
import com.chatting.SocialMedia.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PageLikeRepository extends JpaRepository<PageLikes, Integer> {

    //custom finder method
    List<PageLikes> findByUser(User user);

    List<PageLikes> findByPage(Page page);

}
