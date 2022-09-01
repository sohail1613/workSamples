package com.jawab.blog.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.*;
import java.util.stream.Collectors;

@Entity
@Table(name = "users") //we can change table name eg. (name = "users")
@NoArgsConstructor
@Getter
@Setter
public class User implements UserDetails {
    @Id //used to make primary key (i.e. id is primary key now)
    @GeneratedValue(strategy = GenerationType.AUTO) //to increase id numbers automatically
    private int id;

    //if you want to change name of any column then use @Column annotation and give value(new name)
    @Column(name = "user_name", nullable = false, length=100)
    private String name;
    @Column(name ="email ")
    @NotEmpty(message = "Email cannot be empty")
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name = "about")
    private String about;

    //relationship implementation
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Post> posts = new ArrayList<>();

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "user_role", joinColumns=@JoinColumn(name = "user", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role", referencedColumnName = "id"))
    private Set<Role> roles = new HashSet<>();


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<SimpleGrantedAuthority> authorise = this.roles.stream().map(
                (role -> new SimpleGrantedAuthority(role.getName()))).collect(Collectors.toList());
        return authorise;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
