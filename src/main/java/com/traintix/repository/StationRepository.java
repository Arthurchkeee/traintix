package com.traintix.repository;

import com.traintix.model.Station;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StationRepository extends MongoRepository<Station, ObjectId> {
}
