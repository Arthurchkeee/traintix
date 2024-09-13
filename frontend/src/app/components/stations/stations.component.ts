import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {StationService} from "../../services/station.service";
import {Store} from "@ngrx/store";
import {loadStations} from "../../store/actions/api.actions";

@Component({
  selector: 'app-stations',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './stations.component.html',
  styleUrl: './stations.component.scss'
})
export class StationsComponent {
  protected createStationForm: FormGroup;

  constructor(private fb: FormBuilder, private service: StationService,private store:Store) {
    this.createStationForm = this.fb.nonNullable.group({
      city: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
    });
    this.store.dispatch(loadStations());
    console.log('loadStations action dispatched');

  }
  onCreate(){
    if(this.createStationForm.valid){
      console.log('send')
      const station={city:this.createStationForm.controls['city'].value,latitude:this.createStationForm.controls['latitude'].value,longitude:this.createStationForm.controls['longitude'].value};
      this.service.createStation(station).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.error('Create station Error:', error);
        },
      });
    }
  }

}
