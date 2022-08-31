package com.chatting.SocialMedia.security;

import com.chatting.SocialMedia.entity.User;
import com.chatting.SocialMedia.exceptions.ResourceNotFoundException;
import com.chatting.SocialMedia.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class CustomUserDetailService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //load user from database by userName
        User user = this.userRepository.findByEmail(username)
                .orElseThrow(()-> new ResourceNotFoundException("User", "email"+username, 0));
        return user;
    }
}
