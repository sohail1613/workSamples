package com.chatting.SocialMedia.entity;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

public class User {
    private Integer userId;
    private String userName;
    private String userAddress;
    private String userEmail;
    private Integer userTelephone;
    private String userDob;
    private String userGender;


    //relationship implementation
    @OneToMany
    private List<Post> posts = new ArrayList<>();
    @OneToMany
    private List<PageLikes> pageLikes = new ArrayList<>();

    //getters and setters
    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserAddress() {
        return userAddress;
    }

    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public int getUserTelephone() {
        return userTelephone;
    }

    public void setUserTelephone(Integer userTelephone) {
        this.userTelephone = userTelephone;
    }

    public String getUserDob() {
        return userDob;
    }

    public void setUserDob(String userDob) {
        this.userDob = userDob;
    }

    public String getUserGender() {
        return userGender;
    }

    public void setUserGender(String userGender) {
        this.userGender = userGender;
    }

}
