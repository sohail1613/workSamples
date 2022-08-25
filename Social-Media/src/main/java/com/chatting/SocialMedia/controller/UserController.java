package com.chatting.SocialMedia.controller;

import com.chatting.SocialMedia.payloads.ApiResponse;
import com.chatting.SocialMedia.payloads.UserDto;
import com.chatting.SocialMedia.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserServices userServices;

    //creating user to save
    @PostMapping("/save")
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto){
        UserDto createUserDto = this.userServices.createUser(userDto);
        return new ResponseEntity<UserDto>(createUserDto, HttpStatus.CREATED);
    }

    //to update user
    @PutMapping("/update/{userId}")
    public ResponseEntity<UserDto> updateUser(@RequestBody UserDto userDto, @PathVariable("userId") Integer userId){
        UserDto updatedUser = this.userServices.updateUser(userDto, userId);
        return ResponseEntity.ok(updatedUser);
    }

    //delete user
    @DeleteMapping("delete/{userId}")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable ("userId") Integer userId){
        this.userServices.deleteUser(userId);
        return new ResponseEntity<ApiResponse>(new ApiResponse("User deleted successfully", true), HttpStatus.OK);
    }

    //get all users
    @GetMapping("/fetch")
    public ResponseEntity<List<UserDto>> getAllUsers(){
        return ResponseEntity.ok(this.userServices.getAllUser());
    }

    //get user by id
    @GetMapping("/fetch/{userId}")
    public ResponseEntity<UserDto> getUserById(@PathVariable("userId") Integer userId){
        return ResponseEntity.ok(this.userServices.getUserById(userId));
    }

}
