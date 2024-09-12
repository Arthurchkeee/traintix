package com.traintix.model.dto;

import lombok.Data;
import org.bson.types.ObjectId;

@Data
public class StationDto {
    private ObjectId id;
    private String city;
    private Double latitude;
    private Double longitude;
}
