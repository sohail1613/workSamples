package com.jawab.blog.repositories;

import com.jawab.blog.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer> {
}
