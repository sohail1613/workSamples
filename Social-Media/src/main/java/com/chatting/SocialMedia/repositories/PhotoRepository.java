package com.chatting.SocialMedia.repositories;

import com.chatting.SocialMedia.entity.Photo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhotoRepository extends JpaRepository<Photo, Integer> {
}
