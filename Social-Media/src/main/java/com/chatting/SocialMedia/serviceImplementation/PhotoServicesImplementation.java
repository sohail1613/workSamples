package com.chatting.SocialMedia.serviceImplementation;

import com.chatting.SocialMedia.payloads.PhotoDto;
import com.chatting.SocialMedia.repositories.PhotoRepository;
import com.chatting.SocialMedia.repositories.PostRepository;
import com.chatting.SocialMedia.services.PhotoServices;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PhotoServicesImplementation implements PhotoServices {

    @Autowired
    private PhotoRepository photoRepository;
    @Autowired
    private PostRepository postRepository;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public PhotoDto uploadPhoto(PhotoDto photoDto) {
        return null;
    }

    @Override
    public PhotoDto updatePhoto(PhotoDto photoDto, Integer photoId) {
        return null;
    }

    @Override
    public void deletePhoto(Integer photoId) {

    }

    @Override
    public List<PhotoDto> getAllPhotos() {
        return null;
    }

    @Override
    public PhotoDto getPhotoById(Integer photoId) {
        return null;
    }

    @Override
    public List<PhotoDto> getPhotosByPost(Integer postId) {
        return null;
    }
}
