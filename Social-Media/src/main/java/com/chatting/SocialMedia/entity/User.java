package com.chatting.SocialMedia.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.*;
import java.util.stream.Collectors;

import static javax.persistence.FetchType.LAZY;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    @Column(name = "user_name", nullable = false, length = 100)
    private String userName;
    @Column(name = "user_address")
    private String userAddress;
    @Column(name = "User_email")
    private String userEmail;
    @Column(name = "user_telephone")
    private Integer userTelephone;
    @Column(name = "DOB")
    private String userDob;
    @Column(name = "Gender")
    private String userGender;
    @Column(name = "password")
    private String password;


    //relationship implementation
    @OneToMany
    private List<Post> posts = new ArrayList<>();
    @OneToMany
    private List<PageLikes> pageLikes = new ArrayList<>();

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "user_role", joinColumns=@JoinColumn(name = "user", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role", referencedColumnName = "id"))
    private Set<Role> roles = new HashSet<>();



    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<SimpleGrantedAuthority> grantedAuthorities = this.roles.stream().map(
                role -> new SimpleGrantedAuthority(role.getRoleName())).collect(Collectors.toList());
        return grantedAuthorities;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.userEmail;
    }

    @Override
    public boolean isAccountNonExpired() {
        return this.isAccountNonLocked();
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
        return this.isEnabled();
    }
}
