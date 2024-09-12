package com.traintix.service;

import com.traintix.model.Station;

import java.util.List;

public interface StationService {
    List<Station> findAll();
    void saveStation(Station station);
}
