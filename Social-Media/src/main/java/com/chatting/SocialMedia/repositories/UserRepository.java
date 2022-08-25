package com.chatting.SocialMedia.repositories;

import com.chatting.SocialMedia.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
