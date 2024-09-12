import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http: HttpClient) { }

  getStations(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get(
      `http://localhost:8080/api/stations`,
      httpOptions
    );
  }

  createStation(station: { city: string; latitude: number; longitude:number}) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(
      `http://localhost:8080/api/stations`,
      station,
      httpOptions
    );
  }
}
