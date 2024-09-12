package com.traintix.model;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.Set;

@Data
@RequiredArgsConstructor
@Document
public class Station {
    @MongoId
    private ObjectId id;
    @NonNull
    private String city;
    @NonNull
    private Double latitude;
    @NonNull
    private Double longitude;
    @DBRef
    private Set<Station> connectedTo;
}
