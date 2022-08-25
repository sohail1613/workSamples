package com.chatting.SocialMedia.services;

import com.chatting.SocialMedia.payloads.UserDto;

import java.util.List;

public interface UserServices {
    //create
    UserDto createUser(UserDto userDto);

    //update
    UserDto updateUser(UserDto userDto, Integer UserId);

    //delete
    void deleteUser(Integer userId);

    //get user by id
    UserDto getUserById(Integer userId);

    //getAll
    List<UserDto> getAllUser();

}
