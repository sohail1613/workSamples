package com.chatting.SocialMedia.payloads;


//it is used to send message, on operations
public class ApiResponse {
    private String message;
    private boolean success;

    public ApiResponse(){

    }

    public ApiResponse(String message, boolean success){
        this.message=message;
        this.success=success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }
}
