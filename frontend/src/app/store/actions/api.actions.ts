import {createAction, props} from "@ngrx/store";
import {Station} from "../../models/station.model";

export const loadStations = createAction(
  '[Station API] Load Stations'
);
export const loadStationsSuccess = createAction(
  '[Station API] Load Stations success',
  props<{ stations:Station[] }>()
);
export const loadStationsFailure = createAction('[Station API] Load Stations Failure', props<{ error: any }>());
