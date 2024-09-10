package com.traintix.model;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.List;

@Data
@Document
public class User {
    @MongoId
    private ObjectId id;
    private String username;
    private String password;
    private List<Role> roles;
}
