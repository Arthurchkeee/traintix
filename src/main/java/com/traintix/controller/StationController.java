package com.traintix.controller;

import com.traintix.model.Station;
import com.traintix.model.dto.StationDto;
import com.traintix.service.StationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
@PreAuthorize("hasRole('ADMIN')")

public class StationController {
    @Autowired
    private StationService stationService;

    @GetMapping("/stations")
    public ResponseEntity<List<Station>> getAllStations() {
        return ResponseEntity.ok(stationService.findAll());
    }

    @PostMapping("/stations")
    public ResponseEntity<Boolean> createStation(@RequestBody StationDto stationDto) {
        Station station=new Station(stationDto.getCity(),stationDto.getLatitude(),stationDto.getLongitude());
        stationService.saveStation(station);
        return ResponseEntity.ok(true);
    }
}
