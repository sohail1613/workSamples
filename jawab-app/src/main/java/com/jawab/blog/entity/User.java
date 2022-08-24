package com.jawab.blog.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users") //we can change table name eg. (name = "users")
@NoArgsConstructor
@Getter
@Setter
public class User {
    @Id //used to make primary key (i.e. id is primary key now)
    @GeneratedValue(strategy = GenerationType.AUTO) //to increase id numbers automatically
    private int id;

    //if you want to change name of any column then use @Column annotation and give value(new name)
    @Column(name = "user_name", nullable = false, length=100)
    private String name;
    @Column(name ="email ")
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name = "about")
    private String about;

    //relationship implementation
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Post> posts = new ArrayList<>();
}
