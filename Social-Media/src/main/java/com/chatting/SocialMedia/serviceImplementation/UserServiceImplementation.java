package com.chatting.SocialMedia.serviceImplementation;

import com.chatting.SocialMedia.entity.User;
import com.chatting.SocialMedia.exceptions.ResourceNotFoundException;
import com.chatting.SocialMedia.payloads.UserDto;
import com.chatting.SocialMedia.repositories.UserRepository;
import com.chatting.SocialMedia.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImplementation implements UserServices {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDto createUser(UserDto userDto) {
        User user = this.dtoToUser(userDto);
        User userSaved = this.userRepository.save(user);
        return this.userToDto(userSaved);
    }

    @Override
    public UserDto updateUser(UserDto userDto, Integer userId) {
        User user = this.userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User","userId", userId));
        user.setUserName(userDto.getUserName());
        user.setUserAddress(userDto.getUserAddress());
        user.setUserEmail(userDto.getUserEmail());
        user.setUserTelephone(userDto.getUserTelephone());
        user.setUserDob(userDto.getUserDob());
        user.setUserGender(userDto.getUserGender());

        User updatedUser = this.userRepository.save(user);
        UserDto userDto1 = this.userToDto(updatedUser);
        return userDto1;
    }

    @Override
    public void deleteUser(Integer userId) {
        User user = this.userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User", "userId", userId));
        this.userRepository.delete(user);
    }

    @Override
    public UserDto getUserById(Integer userId) {
        User user = this.userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User", "userId", userId));
        return this.userToDto(user);
    }

    @Override
    public List<UserDto> getAllUser() {
        List<User> users = this.userRepository.findAll();
        List<UserDto> userDtos= users.stream().map(user -> this.userToDto(user)).collect(Collectors.toList());
        return userDtos;
    }

    //converting from Dto to user
    private User dtoToUser(UserDto userDto){
        User user = new User();
        user.setUserId(userDto.getUserId());
        user.setUserName(userDto.getUserName());
        user.setUserAddress(userDto.getUserAddress());
        user.setUserEmail(userDto.getUserEmail());
        user.setUserTelephone(userDto.getUserTelephone());
        user.setUserDob(userDto.getUserDob());
        user.setUserGender(userDto.getUserGender());
        return user;
    }

    //converting from user to Dto
    private UserDto userToDto(User user){
        UserDto userDto = new UserDto();
        userDto.setUserId(user.getUserId());
        userDto.setUserName(user.getUserName());
        userDto.setUserAddress(user.getUserAddress());
        userDto.setUserEmail(user.getUserEmail());
        userDto.setUserTelephone(user.getUserTelephone());
        userDto.setUserDob(user.getUserDob());
        userDto.setUserGender(user.getUserGender());
        return userDto;
    }
}
