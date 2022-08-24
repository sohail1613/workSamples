package com.jawab.blog.services;

import com.jawab.blog.entity.User;
import com.jawab.blog.payloads.UserDto;

import java.util.List;


public interface UserServices {
    UserDto createUser(UserDto user);
    UserDto updateUser(UserDto user, Integer userId);
    UserDto getUserById(Integer UserId);
    List<UserDto> getAllUser();
    void deleteUser(Integer userId);

}
