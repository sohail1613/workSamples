package com.jawab.blog.security;

import com.jawab.blog.entity.User;
import com.jawab.blog.exceptions.ResourceNotFoundException;
import com.jawab.blog.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;


public class CustomUserDetailService implements UserDetailsService {
    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //loading user from database by userName
        User user = this.userRepo.findByEmail(username)
                .orElseThrow(()-> new ResourceNotFoundException("User", "email"+username, 0));

        return user ;
    }
}
