package com.traintix.service;

import com.traintix.model.dto.LoginDto;

public interface AuthService {
    String login(LoginDto loginDto);
}
