package com.chatting.SocialMedia.controller;

import com.chatting.SocialMedia.payloads.ApiResponse;
import com.chatting.SocialMedia.payloads.CommentDto;
import com.chatting.SocialMedia.services.CommentServices;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comment")
public class CommentController {
    @Autowired
    private CommentServices commentServices;


    //create comment
    @PostMapping("/create/post/{postId}")
    public ResponseEntity<CommentDto> createComment(@RequestBody CommentDto commentDto, @PathVariable Integer postId){
        CommentDto createdComment = this.commentServices.createComment(commentDto, postId);
        return new ResponseEntity<CommentDto>(createdComment, HttpStatus.CREATED);
    }

    //update comment
    @PutMapping("/update/{commentId}")
    public ResponseEntity<CommentDto> updateComment(@RequestBody CommentDto commentDto, @PathVariable Integer commentId){
        CommentDto updatedComment = this.commentServices.updateComment(commentDto, commentId);
        return new ResponseEntity<CommentDto>(updatedComment, HttpStatus.OK);
    }

    //delete comment
    @DeleteMapping("/delete/{commentId}")
    public ApiResponse deleteComment(@PathVariable Integer commentId){
        this.commentServices.deleteComment(commentId);
        return new ApiResponse("Comment deleted successfully", true);
    }

    //get comments by postId
    @GetMapping("/fetch/{postId}")
    public ResponseEntity<List<CommentDto>> getCommentByPost(@PathVariable Integer postId){
        List<CommentDto> comments = this.commentServices.getCommentByPost(postId);
        return new ResponseEntity<List<CommentDto>>(comments, HttpStatus.OK);
    }

    //get all comments
    @GetMapping("/fetch/all")
    public ResponseEntity<List<CommentDto>> getAllComments(){
        List<CommentDto> allComments = this.commentServices.getAllComments();
        return new ResponseEntity<List<CommentDto>>(allComments, HttpStatus.OK);
    }

}
