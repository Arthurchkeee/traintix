package com.traintix.service.impl;

import com.traintix.model.Station;
import com.traintix.repository.StationRepository;
import com.traintix.service.StationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class StationServiceImpl implements StationService {
    @Autowired
    private StationRepository stationRepository;
    @Override
    public List<Station> findAll() {
        return stationRepository.findAll();
    }
    @Override
    public void saveStation(Station station){
        stationRepository.save(station);
    }
}
