import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {map, exhaustMap, catchError, tap} from 'rxjs/operators';
import {StationService} from "../../services/station.service";
import {loadStations, loadStationsFailure, loadStationsSuccess} from "../actions/api.actions";
import {of} from "rxjs";

@Injectable()
export class StationEffects {
  loadStations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStations),
      tap(() => console.log('loadStations action caught in effect')),
      exhaustMap(() =>
        this.service.getStations().pipe(
          map(stations => loadStationsSuccess({ stations })),
          catchError(error => of(loadStationsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: StationService) {}
}
