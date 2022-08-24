package com.jawab.blog.controller;

import com.jawab.blog.payloads.ApiResponse;
import com.jawab.blog.payloads.UserDto;
import com.jawab.blog.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserServices userServices;

    //to save or create user
    @PostMapping("/save")
    public ResponseEntity<UserDto> createUser(@Valid @RequestBody UserDto userDto){
        UserDto createUserDto = this.userServices.createUser(userDto);
        return new ResponseEntity<>(createUserDto, HttpStatus.CREATED);
    }

    //to update user
    @PutMapping("/update/{userId}")
    public ResponseEntity<UserDto> updateUser(@Valid @RequestBody UserDto userDto, @PathVariable ("userId") Integer userId){
        UserDto updatedUser = this.userServices.updateUser(userDto, userId);
        return ResponseEntity.ok(updatedUser);
    }

    //to delete user
    @DeleteMapping("/delete/{userId}") //within {userid} is called path URI variable
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable ("userId") Integer userId){
        this.userServices.deleteUser(userId);
        return new ResponseEntity<ApiResponse>(new ApiResponse("User deleted successfully",true), HttpStatus.OK);
    }

    //to get user
    @GetMapping("/fetch")
    public ResponseEntity<List<UserDto>> getAllUsers(){
        return ResponseEntity.ok(this.userServices.getAllUser());
    }

    //to get single user using userId
    @GetMapping("/fetch/{userId}")
    public ResponseEntity<UserDto> getSingleUser(@PathVariable Integer userId){
        return ResponseEntity.ok(this.userServices.getUserById(userId));
    }
}
