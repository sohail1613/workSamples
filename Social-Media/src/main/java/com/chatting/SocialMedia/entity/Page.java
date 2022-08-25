package com.chatting.SocialMedia.entity;

import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

public class Page {
    private Integer pageId;
    private String pageName;
    private String pageContent;


    //relationship implementation
    @OneToMany()
    private List<PageLikes> pageLikes = new ArrayList<>();

    //getters and setters
    public Integer getPageId() {
        return pageId;
    }

    public void setPageId(Integer pageId) {
        this.pageId = pageId;
    }

    public String getPageName() {
        return pageName;
    }

    public void setPageName(String pageName) {
        this.pageName = pageName;
    }

    public String getPageContent() {
        return pageContent;
    }

    public void setPageContent(String pageContent) {
        this.pageContent = pageContent;
    }
}
