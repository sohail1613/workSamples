package com.jawab.blog.payloads;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.*;

@NoArgsConstructor
@Getter
@Setter
//used to transfer data
public class UserDto {
    private int id;
    @NotEmpty
    @Size(min = 4, message = "Name must be min 4 or more characters")
    private String name;
    @Email(message = "Enter valid e-mail id")
    private String email;
    @NotEmpty
    @Size(min = 4, max = 10, message = "Password must be in-between 4 and 10 characters")
//    @Pattern(regexp = )
    private String password;
    @NotEmpty
    private String about;
}
