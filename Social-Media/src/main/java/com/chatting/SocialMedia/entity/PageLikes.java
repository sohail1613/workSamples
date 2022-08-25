package com.chatting.SocialMedia.entity;

import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

public class PageLikes {
    //relationship implementation
    @ManyToOne
    private Page page;

    @ManyToOne
    private User user;

    //getters and setters
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Page getPage() {
        return page;
    }

    public void setPage(Page page) {
        this.page = page;
    }
}
