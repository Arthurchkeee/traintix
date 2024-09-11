package com.traintix.model;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.Set;

@Data
@Document
public class Station {
    @MongoId
    private ObjectId id;
    private String city;
    private Double latitude;
    private Double longitude;
    @DBRef
    private Set<Station> connectedTo;
}
