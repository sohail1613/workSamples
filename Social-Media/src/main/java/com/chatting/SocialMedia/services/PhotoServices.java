package com.chatting.SocialMedia.services;

import com.chatting.SocialMedia.payloads.PhotoDto;

import java.util.List;

public interface PhotoServices {

    //upload
    PhotoDto uploadPhoto(PhotoDto photoDto);

    //update
    PhotoDto updatePhoto(PhotoDto photoDto, Integer photoId);

    //delete
    void deletePhoto(Integer photoId);

    //get all photos
    List<PhotoDto> getAllPhotos();

    //get photo by postId
    PhotoDto getPhotoById(Integer photoId);

    //get photos by post
    List<PhotoDto> getPhotosByPost(Integer postId);
}
