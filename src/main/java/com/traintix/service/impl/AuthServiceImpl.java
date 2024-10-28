package com.traintix.service.impl;
import com.traintix.config.jwt.JwtTokenProvider;
import com.traintix.model.Role;
import com.traintix.model.User;
import com.traintix.model.dto.LoginDto;
import com.traintix.repository.UserRepository;
import com.traintix.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public String login(LoginDto loginDto) {

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDto.getUsername(),
                loginDto.getPassword()
        ));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        return jwtTokenProvider.generateToken(authentication);
    }

    @Override
    public String signUp(LoginDto loginDto) {
        User user=userRepository.save(new User(null,loginDto.getUsername(),passwordEncoder.encode(loginDto.getPassword()), List.of(Role.ROLE_ADMIN)));

        return login(new LoginDto(user.getUsername(),user.getPassword()));
    }

}